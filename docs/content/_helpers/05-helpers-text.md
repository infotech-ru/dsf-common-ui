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

{% highlight html %}
  <div class="text-default">text-default</div>
  <div class="text-primary">text-primary</div>
  <div class="text-vibrant-blue">text-vibrant-blue</div>
  <div class="text-success">text-success</div>
  <div class="text-info">text-info</div>
  <div class="text-light-blue">text-light-blue</div>
  <div class="text-light-blue3">text-light-blue3</div>
  <div class="text-dark-red">text-dark-red</div>
  <div class="text-danger">text-danger</div>
  <div class="text-rose">text-rose</div>
  <div class="text-warning">text-warning</div>
  <div class="text-orange">text-orange</div>
  <div class="text-light-yellow">text-light-yellow</div>
  <div class="text-dark-grey">text-dark-grey</div>
  <div class="text-muted">text-muted</div>
  <div class="text-grey">text-grey</div>
  <div class="text-grey2">text-grey2</div>
  <div class="text-grey4">text-grey4</div>
  <div class="text-light-grey2">text-light-grey2</div>
  <div class="text-light-grey">text-light-grey</div>
  <div class="text-white bg-default">text-white bg-default</div>
  <div class="bg-muted text-center">text-clear with bg-mu<span class="text-clear">te</span>d and text-center</div>
{% endhighlight %}

<div class="bs-docs-example">
  <div class="text-default mb-10">text-default</div>
  <div class="text-primary mb-10">text-primary</div>
  <div class="text-vibrant-blue mb-10">text-vibrant-blue</div>
  <div class="text-success mb-10">text-success</div>
  <div class="text-info mb-10">text-info</div>
  <div class="text-light-blue mb-10">text-light-blue</div>
  <div class="text-light-blue3 mb-10">text-light-blue3</div>
  <div class="text-dark-red mb-10">text-dark-red</div>
  <div class="text-danger mb-10">text-danger</div>
  <div class="text-rose mb-10">text-rose</div>
  <div class="text-warning mb-10">text-warning</div>
  <div class="text-orange mb-10">text-orange</div>
  <div class="text-light-yellow mb-10">text-light-yellow</div>
  <div class="text-muted mb-10">text-muted</div>
  <div class="text-dark-grey mb-10">text-dark-grey</div>
  <div class="text-grey mb-10">text-grey</div>
  <div class="text-grey2 mb-10">text-grey2</div>
  <div class="text-grey4 mb-10">text-grey4</div>
  <div class="text-light-grey2 mb-10">text-grey-light2</div>
  <div class="text-light-grey mb-10">text-grey-light</div>
  <div class="text-white bg-default mb-10">text-white bg-default</div>
  <div class="bg-muted text-center mb-10">text-clear with bg-mu<span class="text-clear">te</span>d and text-center</div>
</div>

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