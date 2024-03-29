# dsf-common-ui

## Правила именования классов:

- Дефис в именах классов используем для префикса. `crm-` или в правилах переопределения стилей bootstrap `btn-default`.

- Стиль написания имён классов - camelCase  `className`.

- Полный состав имён классов - `blockName_elemName_modName__modVal`.

- `blockName` - Имя функционально независимого компонента, который может быть повторно использован.

- `elemName` - Имя составной части блока, которая НЕ может использоваться в отрыве от него. Отделяется одним нижним подчеркиванием `_`.

- `modName` - Имя определяющие внешний вид, состояние или поведение блока либо элемента. Отделяется двумя нижними подчеркиваниями `__`.

- `modVal` - Имя определяющее значение, например цвет. Отделяется двумя нижними подчеркиваниями `__`.

## Не используем

Cтараемся не использовать, так как усложняет переопределение:

- Не использовать id-селектор. `#idName`.

- Не использовать в именах классов селектор тегов. Например, `className_div`, `className_span`.

- Не использовать совмещение тегов и классов в селекторе. `div.className`.

- Не использовать одиночные селекторы тегов вместо классов и вместе с классами. `span`, `p`, `span.className`.

- Стараться исключить и не использовать `!important`.

## Правила написания стилей

- Чем меньше уровней вложенностей - тем лучше. В идеале без вложенностей.

- Выносим в модификаторы CSS-свойства блока, изменение которых кажется вероятным. `.blockName_elemName__modName {}`, `.blockName__modName {}`.

- Внешняя геометрия и позиционирование может задаваться через родительский блок.
