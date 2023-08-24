---
Title: Для изменения стилей текста
menutitle: Текст
category: helpers
anchor: helpers-text
order: 4
---

#### Классы для работы с переносом или длиной текста

`nowrap`
`break-word`
`overflow-ellipsis`

#### Классы для выравнивание текста в контейнере по горизонтали.

`text-left`
`text-right`
`text-center`
`text-justify`
{% highlight html %}
<div class="text-left">text-left</div>
<div class="text-right">text-right</div>
<div class="text-center">text-center</div>
{% endhighlight html %}
<div class="bs-docs-example">
  <div class="text-left mb-10">text-left</div>
  <div class="text-right mb-10">text-right</div>
  <div class="text-center mb-10">text-center</div>
</div>
#### Классы для выравнивание текста в контейнере по вертикали.

`va-middle`
`va-top`
`va-bottom`

#### Классы для изменения регистра текста.

`text-lowercase`
`text-uppercase`
`text-capitalize`
{% highlight html %}
  <div class="text-capitalize">text-capitalize</div>
  <div class="text-uppercase">text-uppercase</div>
  <div class="text-lowercase">text-lowercase</div>
{% endhighlight html %}
<div class="bs-docs-example">
  <div class="text-capitalize mb-10">text-capitalize</div>
  <div class="text-uppercase mb-10">text-uppercase</div>
  <div class="text-lowercase mb-10">text-lowercase</div>
</div>

#### Классы для изменения толщины текста.

`text-regular`, `text-bold`

#### Классы для изменения размера текста.
`fz10`, `fz11`, `fz12`, `fz13`, `fz14`, `fz16`, `fz18`, `fz20`, `fz24`

Устанавливает размер шрифта в `rem` эквивалентное числу в классе, указанного `px`

`fz10__mobile`, `fz11__mobile`, `fz12__mobile`, `fz13__mobile`, `fz14__mobile`, `fz16__mobile`, `fz18__mobile`, `fz20__mobile`, `fz24__mobile`
Устанавливает размер шрифта в `rem` только для мобильный устройств эквивалентное числу в классе, указанного `px`

{% highlight html %}
<div class="fz10">fz10</div>
<div class="fz14">fz14</div>
<div class="fz18">fz18</div>
<div class="fz24__mobile fz20">fz24__mobile fz20</div>
<div class="fz24">fz24</div>
{% endhighlight html %}

<div class="bs-docs-example">
  <div class="fz10 mr-10">fz10 = 10px</div>
  <div class="fz14 mr-10">fz14 = 14px</div>
  <div class="fz18 mr-10">fz18 = 18px</div>
  <div class="fz24__mobile fz20">fz24__mobile = 24 на мобильных fz20 = 20px</div>
  <div class="fz24 mr-10">fz24 = 24px</div>
</div>

#### Классы для изменения междустрочного интервала.

Устанавливает значение в `px` равное числу в классе, указанного `px`
`lh12`, `lh14`, `lh16`, `lh18`

#### Поворот текста

`transformText__left`, `transformText__right` - устанавливает поворот текста

{% highlight html %}
  <div class="transformText__right">transformText__right</div>
  <div class="transformText__left">transformText__left</div>
{% endhighlight html %}
<div class="bs-docs-example">
  <div class="transformText__right mb-10">transformText__right</div>
  <div class="transformText__left mb-10">transformText__left</div>
</div>
#### Классы для изменения  цвета текста.

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
