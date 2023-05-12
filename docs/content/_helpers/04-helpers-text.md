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

#### Классы для выравнивание текста в контейнере по вертикали.

`va-middle`
`va-top`
`va-bottom`

#### Классы для изменения регистра текста.

`text-lowercase`
`text-uppercase`
`text-capitalize`

#### Классы для изменения толщины текста.

`text-bold`

#### Классы для изменения размера текста.

`fz10` - устанавливает размер шрифта в 10px

`fz11` - устанавливает размер шрифта в 11px

`fz12` - устанавливает размер шрифта в 12px

#### Классы для изменения междустрочного интервала.

`lh12` - устанавливает размер шрифта в 12px

`lh14` - устанавливает размер шрифта в 14px

`lh18` - устанавливает размер шрифта в 18px

#### Поворот текста
`transformText__left`, `transformText__right` - устанавливает поворот текста

#### Классы для изменения  цвета текста.

{% highlight html %}
  <div class="text-default">text-default</div>
  <div class="text-primary fz10">text-primary fz10</div>
  <div class="text-success text-capitalize">text-success text-capitalize</div>
  <div class="text-danger text-uppercase">text-danger text-uppercase</div>
  <div class="text-warning text-lowercase">text-warning text-lowercase</div>
  <div class="text-info">text-info</div>
  <div class="text-muted">text-muted</div>
  <div class="text-white text-center bg-default">text-white text-center bg-default</div>
  <div class="text-orange text-right">text-orange text-right</div>
  <div class="text-grey">text-grey</div>
  <div class="text-grey2">text-grey2</div>
  <div class="text-light-grey2">text-light-grey2</div>
  <div class="text-dark-red transformText__right">text-dark-red transformText__right</div>
  <div class="bg-muted text-center">text-clear with bg-<span class="text-clear">muted</span> and text-center</div>
  <div class="text-light-blue3">text-light-blue3</div>
  <div class="text-rose transformText__left">text-rose transformText__left</div>
  <div class="text-vibrant-blue">text-vibrant-blue</div>
{% endhighlight %}

<div class="bs-docs-example">
  <div class="text-default mb-10">text-default</div>
  <div class="text-primary fz10 mb-10">text-primary fz10</div>
  <div class="text-success text-capitalize mb-10">text-success text-capitalize</div>
  <div class="text-danger text-uppercase mb-10">text-danger text-uppercase</div>
  <div class="text-warning text-lowercase mb-10">text-warning text-lowercase</div>
  <div class="text-info mb-10">text-info</div>
  <div class="text-muted mb-10">text-muted</div>
  <div class="text-white text-center bg-default mb-10">text-white text-center bg-default</div>
  <div class="text-orange text-right mb-10">text-orange text-right</div>
  <div class="text-grey mb-10">text-grey</div>
  <div class="text-grey2 mb-10">text-grey2</div>
  <div class="text-light-grey2 mb-10">text-grey-light2</div>
  <div class="bg-muted text-center mb-10">text-clear with bg-<span class="text-clear">muted</span> and text-center</div>
  <div class="text-dark-red transformText__right mb-10">text-dark-red transformText__right</div>
  <div class="text-light-blue3 mb-10">text-light-blue3</div>
  <div class="text-rose transformText__left mb-10">text-rose transformText__left</div>
  <div class="text-vibrant-blue mb-10">text-vibrant-blue</div>
</div>
