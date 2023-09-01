---
Title: Изменения состояний
menutitle: Изменения состояний
category: helpers
anchor: helpers-states
order: 7
---

### Появлление элемента по наведению (hover)

<span class="alert alert-warning d-block" role="alert">
! Важно помнить, что такое поведение не будет воспроизводиться на сенсорных экранах, так как там не состояния `hover`</span>

При наведении на родителя с классом `.hoverTarget_parent` будет отображаться ребенок с классом `hoverTarget_item__block`, `hoverTarget_item__inlineFlex` и `hoverTarget_item__flex` изменением `display: none` на `display: block`, `display:inline-block`, `display: inline-flex`, `display: flex` и `display:grid`

### Модификации иконок при изменении состояния

Описание для иконок смотреть в разделе Иконок [Модификации иконок при изменении состояния]
