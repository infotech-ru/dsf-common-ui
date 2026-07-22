/**
 * Система логирования и вывода ошибок
 */
class CollapseLogger {
    constructor(debug = false) {
        this.debug = debug;
        this.prefix = '[TableCollapse]';
    }

    log(...args) {
        if (this.debug) console.log(this.prefix, ...args);
    }

    warn(...args) {
        if (this.debug) console.warn(this.prefix, ...args);
    }

    error(...args) {
        console.error(this.prefix, ...args);
    }
}

/**
 * Основной класс управления сворачиванием и colspan
 */
class TableCollapseManager {
    constructor(options, logger) {
        this.logger = logger;
        
        this.settings = {
            triggerClass: options.triggerClass || 'js-collapse-trigger',
            addClass: options.addClass || 'd-none',
            removeClass: options.removeClass || '',
            targetGetAttr: 'data-collapse-target-get',
            targetSetAttr: 'data-collapse-target-set',
            colspanSetAttr: 'data-collapse-colspan-set',
            colspanValueAttr: 'data-collapse-colspan-value',
            colspanCalcAttr: 'data-collapse-colspan-calc',
            origColspanAttr: 'data-orig-colspan'
        };

        this.init();
    }

    init() {
        this.logger.log('Инициализация скрипта с настройками:', this.settings);
        
        document.addEventListener('click', (e) => {
            const trigger = e.target.closest(`.${this.settings.triggerClass}`);
            if (trigger) {
                e.preventDefault();
                this.handleClick(trigger);
            }
        });

        this.storeOriginalColspans();
        this.logger.log('Инициализация завершена.');
    }

    storeOriginalColspans() {
        let count = 0;
        const selectors = [
            `.${this.settings.triggerClass}`,
            `[${this.settings.colspanSetAttr}]`
        ];

        selectors.forEach(selector => {
            document.querySelectorAll(selector).forEach(el => {
                const cell = el.closest('td, th') || (el.tagName === 'TD' || el.tagName === 'TH' ? el : null);
                if (cell && !cell.hasAttribute(this.settings.origColspanAttr)) {
                    const orig = cell.colSpan || 1;
                    cell.setAttribute(this.settings.origColspanAttr, orig);
                    count++;
                }
            });
        });

        this.logger.log(`Сохранено исходных значений colspan: ${count}`);
    }

    handleClick(trigger) {
        try {
            const group = trigger.getAttribute(this.settings.targetGetAttr);
            if (!group) {
                this.logger.warn('Клик по триггеру без data-collapse-target-get', trigger);
                return;
            }

            this.logger.log(`Клик по триггеру. Группа: "${group}"`);

            const isCollapsed = this.toggleVisibility(group);
            this.recalculateAllColspans(group);

        } catch (error) {
            this.logger.error('Ошибка при обработке клика:', error);
        }
    }

    toggleVisibility(group) {
        const targets = document.querySelectorAll(`[${this.settings.targetSetAttr}]`);
        let isCollapsed = false;

        targets.forEach(target => {
            const targetGroups = this.parseGroups(target.getAttribute(this.settings.targetSetAttr));
            if (targetGroups.includes(group)) {
                if (target.classList.contains(this.settings.addClass)) {
                    target.classList.remove(this.settings.addClass);
                    if (this.settings.removeClass) target.classList.add(this.settings.removeClass);
                    isCollapsed = false;
                } else {
                    target.classList.add(this.settings.addClass);
                    if (this.settings.removeClass) target.classList.remove(this.settings.removeClass);
                    isCollapsed = true;
                }
            }
        });

        return isCollapsed;
    }

    recalculateAllColspans(changedGroup) {
        const affectedCells = new Set();

        // 1. Родители всех триггеров этой группы
        document.querySelectorAll(`[${this.settings.targetGetAttr}="${changedGroup}"]`).forEach(trg => {
            const parentCell = trg.closest('td, th');
            if (parentCell) affectedCells.add(parentCell);
        });

        // 2. Все ячейки с data-collapse-colspan-set, слушающие эту группу
        document.querySelectorAll(`[${this.settings.colspanSetAttr}]`).forEach(cell => {
            const cellGroups = this.parseGroups(cell.getAttribute(this.settings.colspanSetAttr));
            if (cellGroups.includes(changedGroup)) {
                affectedCells.add(cell);
            }
        });

        this.logger.log(`Пересчет colspan для ${affectedCells.size} ячеек`);

        affectedCells.forEach(cell => {
            try {
                this.recalculateCellColspan(cell);
            } catch (error) {
                this.logger.error(`Ошибка пересчета colspan для ячейки:`, cell, error);
            }
        });
    }

    recalculateCellColspan(cell) {
        const origColspan = parseInt(cell.getAttribute(this.settings.origColspanAttr)) || 1;
        const cellGroups = this.parseGroups(cell.getAttribute(this.settings.colspanSetAttr) || '');
        
        // Добавляем группу, если это родитель триггера
        const triggerInside = cell.querySelector(`.${this.settings.triggerClass}`);
        if (triggerInside) {
            const triggerGroup = triggerInside.getAttribute(this.settings.targetGetAttr);
            if (triggerGroup && !cellGroups.includes(triggerGroup)) {
                cellGroups.push(triggerGroup);
            }
        }

        let totalDelta = 0;

        for (const group of cellGroups) {
            if (!this.isGroupCollapsed(group)) continue;

            const delta = this.calculateDeltaForGroup(cell, group);
            totalDelta += delta;
        }

        const newColspan = Math.max(1, origColspan + totalDelta);
        if (newColspan !== cell.colSpan) {
            this.logger.log(`colspan изменён: ${cell.colSpan} → ${newColspan} (дельта: ${totalDelta})`, cell);
        }
        cell.colSpan = newColspan;
    }

    calculateDeltaForGroup(cell, group) {
        const triggers = Array.from(document.querySelectorAll(`[${this.settings.targetGetAttr}="${group}"]`));
        if (triggers.length === 0) {
            this.logger.warn(`Не найден триггер для группы "${group}"`);
            return 0;
        }

        const isDirectParent = triggers.some(trg => cell.contains(trg));
        const position = this.getCellPositionRelativeToTriggers(cell, triggers);

        // --- Ручной режим (приоритет для любой позиции) ---
        if (cell.hasAttribute(this.settings.colspanValueAttr)) {
            const rawValue = cell.getAttribute(this.settings.colspanValueAttr);
            const value = parseInt(rawValue);
            if (isNaN(value)) {
                this.logger.error(`Некорректное число в ${this.settings.colspanValueAttr}: "${rawValue}"`, cell);
                return 0;
            }
            this.logger.log(`[Ручной] Позиция: ${position}, дельта: ${value}`);
            return value;
        }

        // --- Ячейка ниже триггера: без ручного режима — игнорируем ---
        if (position === 'below') {
            this.logger.log(`[Авто] Ячейка ниже триггера — дельта 0`);
            return 0;
        }

        // --- Автоматический режим (родитель и ячейки выше) ---
        const calcMode = (cell.getAttribute(this.settings.colspanCalcAttr) || '').toLowerCase();
        const isAddition = (calcMode === 'plus' || calcMode === 'add');

        // Считаем скрытые ячейки в СЛЕДУЮЩЕЙ строке после строки ТРИГГЕРА
        // Если ячейка выше — берём все триггеры группы и суммируем
        // Если родитель — берём только свой триггер
        let autoCount = 0;
        if (isDirectParent) {
            const myTrigger = triggers.find(trg => cell.contains(trg));
            autoCount = this.getAutoHiddenCountInNextRow(group, myTrigger);
        } else {
            // Для ячейки выше — суммируем по всем триггерам группы
            for (const trg of triggers) {
                autoCount += this.getAutoHiddenCountInNextRow(group, trg);
            }
        }

        // Для родителя по умолчанию — вычитание
        if (isDirectParent && !isAddition) {
            this.logger.log(`[Авто] Родитель (вычитание). Скрыто в след. строке: ${autoCount}`);
            return -autoCount;
        }

        // Для ячеек выше / родителя с plus — режим из атрибута
        if (isAddition) {
            this.logger.log(`[Авто] Позиция: ${position} (сложение). Скрыто: ${autoCount}`);
            return autoCount;
        } else {
            this.logger.log(`[Авто] Позиция: ${position} (вычитание). Скрыто: ${autoCount}`);
            return -autoCount;
        }
    }

    /**
     * Считает сумму colspan ячеек с нужной группой ТОЛЬКО в следующей строке после строки триггера
     */
    getAutoHiddenCountInNextRow(group, trigger) {
        if (!trigger) return 0;

        const triggerRow = trigger.closest('tr');
        if (!triggerRow) {
            this.logger.warn('Не удалось найти строку триггера', trigger);
            return 0;
        }

        // Ищем следующую строку (tr)
        let nextRow = triggerRow.nextElementSibling;
        while (nextRow && nextRow.tagName !== 'TR') {
            nextRow = nextRow.nextElementSibling;
        }

        if (!nextRow) {
            this.logger.warn('Не найдена следующая строка после триггера', triggerRow);
            return 0;
        }

        let hiddenCount = 0;
        nextRow.querySelectorAll('td, th').forEach(nextCell => {
            const nextCellGroups = this.parseGroups(nextCell.getAttribute(this.settings.targetSetAttr));
            if (nextCellGroups.includes(group)) {
                hiddenCount += (nextCell.colSpan || 1);
            }
        });

        return hiddenCount;
    }

    getCellPositionRelativeToTriggers(cell, triggers) {
        const cellRow = cell.closest('tr');
        if (!cellRow) return 'unknown';

        let hasAbove = false;
        let hasBelow = false;
        let hasSame = false;

        for (const trigger of triggers) {
            const triggerRow = trigger.closest('tr');
            if (!triggerRow) continue;

            if (triggerRow === cellRow) {
                hasSame = true;
            } else {
                const pos = triggerRow.compareDocumentPosition(cellRow);
                if (pos & Node.DOCUMENT_POSITION_FOLLOWING) {
                    hasBelow = true; // Ячейка ниже триггера
                } else if (pos & Node.DOCUMENT_POSITION_PRECEDING) {
                    hasAbove = true; // Ячейка выше триггера
                }
            }
        }

        if (hasSame) return 'same';
        if (hasAbove && !hasBelow) return 'above';
        if (hasBelow && !hasAbove) return 'below';
        return 'mixed';
    }

    isGroupCollapsed(group) {
        const targets = document.querySelectorAll(`[${this.settings.targetSetAttr}]`);
        for (let target of targets) {
            const targetGroups = this.parseGroups(target.getAttribute(this.settings.targetSetAttr));
            if (targetGroups.includes(group)) {
                return target.classList.contains(this.settings.addClass);
            }
        }
        return false;
    }

    parseGroups(str) {
        if (!str) return [];
        return str.split(/[\s,]+/).map(s => s.trim()).filter(Boolean);
    }
}

export function initCollapseTableTd(options = {}) {
    const logger = new CollapseLogger(options.debug || false);
    logger.log('Запуск инициализации TableCollapse...');

    try {
        const instance = new TableCollapseManager(options, logger);
        logger.log('TableCollapse успешно инициализирован.');
        return instance;
    } catch (error) {
        logger.error('Критическая ошибка при инициализации:', error);
        return null;
    }
}