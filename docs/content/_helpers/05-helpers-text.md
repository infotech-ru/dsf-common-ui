---
Title: Для изменения стилей текста
menutitle: Текст
category: helpers
anchor: helpers-text
order: 5
---

#### Классы для работы с переносом или длиной текста

`nowrap`, `whitespace-normal`, `break-word`, `overflow-ellipsis`, `overflow-hidden`, `overflowX-auto`, `overflowY-auto`

только для мобильных:
`nowrap__mobile`,  `whitespace-normal__mobile`, `break-word__mobile`, `overflow-hidden__mobile`


#### Классы для выравнивание текста в контейнере по горизонтали

`text-left`, `text-right`, `text-center`, `text-justify`

Постфикс `__mobile` дописанный к этим классам устанавливают такие значения только для мобильных устройств.

{% highlight html %}
<div class="text-left">text-left</div>
<div class="text-center text-left__mobile">text-center text-left__mobile</div>
<div class="text-right">text-right</div>
{% endhighlight html %}
<div class="bs-docs-example">
  <div class="text-left mb-10">text-left</div>
  <div class="text-center text-left__mobile mb-10">text-center text-left__mobile</div>
  <div class="text-right mb-10">text-right</div>
</div>


#### Классы для выравнивание текста в контейнере по вертикали

`va-middle`, `va-top`, `va-bottom`


#### Классы для изменения регистра текста

`text-lowercase`, `text-uppercase`, `text-capitalize`

Постфикс `__mobile` дописанный к этим классам устанавливают такие значения только для мобильных устройств.

{% highlight html %}
  <div class="text-lowercase">text-lowercase</div>
  <div class="text-capitalize">text-capitalize</div>
  <div class="text-uppercase">text-uppercase</div>
{% endhighlight html %}
<div class="bs-docs-example">
  <div class="text-lowercase mb-10">text-lowercase</div>
  <div class="text-capitalize mb-10">text-capitalize</div>
  <div class="text-uppercase mb-10">text-uppercase</div>
</div>


#### Классы для изменения толщины текста

`text-regular`, `text-bold`,

Постфикс `__mobile` дописанный к этим классам устанавливают такие значения только для мобильных устройств.


#### Классы для изменения размера текста

Следующие классы устанавливают размер шрифта в `rem` эквивалентное числу в классе, указанного `px`: fz{FZ},

где `FZ = 10, 11, 12, 13, 14, 16, 18, 20, 24, 48`

Постфикс `__mobile` дописанный к этим классам устанавливают такие значения только для мобильных устройств.


#### Классы для изменения междустрочного интервала

Следующие классы устанавливают значение в `px` равное числу в классе, указанного `px`: `lh{LH}`,

где `LH = 10, 12, 14, 16, 18, 20, 24, 48`

Постфикс `__mobile` дописанный к этим классам устанавливают такие значения только для мобильных устройств.


{% highlight html %}
<div class="fz10 lh14">fz10 = 10px lh14 = 14px</div>
<div class="fz14 lh16 lh18__mobile">fz14 = 14px lh16 = 16px, на мобильном lh18__mobile = 18px</div>
<div class="fz18 lh20">fz18 = 18px lh20 = 20px</div>
<div class="fz20 lh20 fz24__mobile lh24__mobile">fz20 = 20px lh20 = 20px, fz24__mobile = 24 на мобильных lh24 = 24px</div>
<div class="fz24 lh24">fz24, lh24 = 24px</div>
{% endhighlight html %}

<div class="bs-docs-example">
  <div class="fz10 lh14 mr-10">fz10 = 10px lh14 = 14px</div>
  <div class="fz14 lh16 lh18__mobile mr-10">fz14 = 14px lh16 = 16px, на мобильном lh18__mobile = 18px</div>
  <div class="fz18 lh20 mr-10">fz18 = 18px lh20 = 20px</div>
  <div class="fz20 lh20 fz24__mobile lh24__mobile">fz20 = 20px lh20 = 20px, fz24__mobile = 24 на мобильных lh24 = 24px</div>
  <div class="fz24 lh24 mr-10">fz24 = 24px, lh24 = 24px</div>
</div>


#### Поворот текста

`transformText__left`, `transformText__right` - устанавливает поворот текста

{% highlight html %}
  <div class="transformText__right">transformText__right</div>
  <div class="transformText__left">transformText__left</div>
{% endhighlight html %}
<div class="bs-docs-example">
  <div class="d-flex">
    <div class="transformText__right mb-10">transformText__right</div>
    <div class="transformText__left mb-10">transformText__left</div>
  </div>
</div>


#### Классы для изменения  цвета текста
Класс `text-default`, `text-primary`, `text-success`, `text-danger`, `text-warning`, `text-info`, `text-muted`, `text-dark-grey`, `text-grey`, `text-grey2`, `text-grey4`, `text-light-grey`, `text-light-grey2`, `text-white`, `text-light-blue`, `text-light-blue3`, `text-vibrant-blue`, `text-dark-red`, `text-rose`, `text-light-yellow`, добавляют соответсвующего цвета текста.


{% highlight html %}
  <div class="textHover-white text-default">textHover-white text-default</div>
  <div class="textHover-default text-primary">textHover-default text-primary</div>
  <div class="textHover-primary text-vibrant-blue">textHover-primary text-vibrant-blue</div>
  <div class="textHover-vibrant-blue text-success">textHover-vibrant-blue text-success</div>
  <div class="textHover-success text-info">textHover-success text-info</div>
  <div class="textHover-info text-light-blue">textHover-info text-light-blue</div>
  <div class="textHover-light-blue text-light-blue3">textHover-light-blue text-light-blue3</div>
  <div class="textHover-light-blue3 text-dark-red">textHover-light-blue3 text-dark-red</div>
  <div class="textHover-dark-red text-danger">textHover-dark-red text-danger</div>
  <div class="textHover-danger text-rose">textHover-danger text-rose</div>
  <div class="textHover-rose text-warning">textHover-rose text-warning</div>
  <div class="textHover-warning text-orange">textHover-warning text-orange</div>
  <div class="textHover-orange text-light-yellow">textHover-orange text-light-yellow</div>
  <div class="textHover-light-yellow text-dark-grey">textHover-light-yellow text-dark-grey</div>
  <div class="textHover-dark-grey text-muted">textHover-dark-grey text-muted</div>
  <div class="textHover-muted text-grey">textHover-muted text-grey</div>
  <div class="textHover-grey text-grey2">textHover-grey text-grey2</div>
  <div class="textHover-grey2 text-grey4">textHover-grey2 text-grey4</div>
  <div class="textHover-grey4 text-light-grey2">textHover-grey4 text-light-grey2</div>
  <div class="textHover-light-grey2 text-light-grey">textHover-light-grey2 text-light-grey</div>
  <div class="textHover-light-grey text-white bg-default">textHover-light-grey text-white bg-default</div>
white bg-default
  <div class="bg-muted text-center">text-clear with bg-mu<span class="text-clear">te</span>d and text-center</div>
{% endhighlight %}

<div class="bs-docs-example">
  <div class="textHover-white text-default mb-10">textHover-white text-default mb-10</div>
  <div class="textHover-default text-primary mb-10">textHover-default text-primary mb-10</div>
  <div class="textHover-primary text-vibrant-blue mb-10">textHover-primary text-vibrant-blue mb-10</div>
  <div class="textHover-vibrant-blue text-success mb-10">textHover-vibrant-blue text-success mb-10</div>
  <div class="textHover-success text-info mb-10">textHover-success text-info mb-10</div>
  <div class="textHover-info text-light-blue mb-10">textHover-info text-light-blue mb-10</div>
  <div class="textHover-light-blue text-light-blue3 mb-10">textHover-light-blue text-light-blue3 mb-10</div>
  <div class="textHover-light-blue3 text-dark-red mb-10">textHover-light-blue3 text-dark-red mb-10</div>
  <div class="textHover-dark-red text-danger mb-10">textHover-dark-red text-danger mb-10</div>
  <div class="textHover-danger text-rose mb-10">textHover-danger text-rose mb-10</div>
  <div class="textHover-rose text-warning mb-10">textHover-rose text-warning mb-10</div>
  <div class="textHover-warning text-orange mb-10">textHover-warning text-orange mb-10</div>
  <div class="textHover-orange text-light-yellow mb-10">textHover-orange text-light-yellow mb-10</div>
  <div class="textHover-light-yellow text-muted mb-10">textHover-light-yellow text-muted mb-10</div>
  <div class="textHover-muted text-dark-grey mb-10">textHover-muted text-dark-grey mb-10</div>
  <div class="textHover-dark-grey text-grey mb-10">textHover-dark-grey text-grey mb-10</div>
  <div class="textHover-grey text-grey2 mb-10">textHover-grey text-grey2 mb-10</div>
  <div class="textHover-grey2 text-grey4 mb-10">textHover-grey2 text-grey4 mb-10</div>
  <div class="textHover-grey4 text-light-grey2 mb-10">textHover-grey4 text-light-grey2 mb-10</div>
  <div class="textHover-grey-light2 text-light-grey mb-10">textHover-grey-light2 text-light-grey mb-10</div>
  <div class="textHover-grey-light text-white bg-default mb-10">textHover-grey-light text-white bg-default mb-10</div>
  white bg-default
  <div class="bg-muted text-center mb-10">text-clear with bg-mu<span class="text-clear">te</span>d and text-center</div>
</div>


#### Классы для изменения цвета текста при наведении
Класс `textHover-default`, `textHover-primary`, `textHover-success`, `textHover-danger`, `textHover-warning`, `textHover-info`, `textHover-muted`, `textHover-dark-grey`, `textHover-grey`, `textHover-grey2`, `textHover-grey4`, `textHover-light-grey`, `textHover-light-grey2`, `textHover-white`, `textHover-light-blue`, `textHover-light-blue3`, `textHover-vibrant-blue`, `textHover-dark-red`, `textHover-rose`, `textHover-light-yellow`, добавляют соответсвующего цвета текста при наведении.

Для активаци hover-эффекта на элементе-родителе выставить класс на родителя - `textHoverTarget`

Пример выше.



#### Классы для списков

`list-unstyled` - убирает отступ и стилизацию (type)
`list-inline` - приводит список в горизонтальную версию


#### Особое оформление заголовков и заголовков с доп. информацией

Используется `headline` для контейнера родителя, `headline_title` - для оформления заголовка и `headline__optional`

{% highlight html %}
  <div class="headline">
    <div class="headline_title">Заголовок</div>
    <div class="headline_optional">доп. инфа</div>
  </div>
{% endhighlight %}
<div class="bs-docs-example">
  <div class="headline">
    <div class="headline_title">Заголовок</div>
    <div class="headline_optional">доп. инфа</div>
  </div>
</div>