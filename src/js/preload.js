export function PreloadAnimation() {
  // Находим все триггеры

  const triggers = document.querySelectorAll('.js-preload-trigger');

  triggers.forEach(function(trigger) {
    trigger.addEventListener('click', function() {
      // 1. Находим контейнер по id из data-target
      const targetId = this.dataset.target;
      if (!targetId) {
        console.warn('Триггер не имеет data-target');
        return;
      }
      const container = document.getElementById(targetId);
      if (!container) {
        console.warn('Контейнер с id="' + targetId + '" не найден');
        return;
      }

      // 2. Определяем класс для добавления (data-class или 'd-block')
      const className = this.dataset.class || 'd-block';

      // 3. Сбрасываем предыдущий таймер, если он ещё активен
      if (container._timeoutId) {
        clearTimeout(container._timeoutId);
        delete container._timeoutId;
      }

      // 4. Удаляем предыдущий добавленный класс, если он отличается от нового
      if (container._preloadingClass && container._preloadingClass !== className) {
        container.classList.remove(container._preloadingClass);
      }

      // 5. Добавляем новый класс и запоминаем его
      container.classList.add(className);
      container._preloadingClass = className;

      // 6. Через 3 секунды удаляем этот класс
      container._timeoutId = setTimeout(function() {
        container.classList.remove(className);
        delete container._timeoutId;
        delete container._preloadingClass;
      }, 3000);
    });
  });

};