---
Title: Текстовые
menutitle: Текст
category: helpers
anchor: helpers-text
order: 3
---

#### Классы для работы с текстом

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
  <div class="text-info text-center">text-info text-center</div>
  <div class="text-muted text-right">text-muted text-right</div>
  <div class="text-grey text-right">text-grey text-right</div>
  <div class="mb-10 text-white text-center">text-white text-center</div>
  <div class="text-dark-red text-left">text-dark-red text-left</div>
  <div class="text-dark-red transformText__left">text-dark-red transformText__left</div>
  <div class="text-orange transformText__right">text-dark-red transformText__right</div>
  <div class="text-uppercase">text-<span class="text-clear">clear text</span>-uppercase</div>
{% endhighlight %}

<div class="bs-docs-example">
  <div class="mb-10 text-default">text-default</div>
  <div class="mb-10 text-primary fz10">text-primary fz10</div>
  <div class="mb-10 text-success text-capitalize">text-success text-capitalize</div>
  <div class="mb-10 text-danger text-uppercase">text-danger text-uppercase</div>
  <div class="mb-10 text-warning text-lowercase">text-warning text-lowercase</div>
  <div class="mb-10 text-info text-center">text-info text-center</div>
  <div class="mb-10 text-muted text-right">text-muted text-right</div>
  <div class="mb-10 text-grey text-right">text-grey text-right</div>
  <div class="mb-10 text-white text-center">text-white text-center</div>
  <div class="text-dark-red transformText__left">text-dark-red transformText__left</div>
  <div class="text-orange transformText__right">text-dark-red transformText__right</div>
  <div class="text-uppercase">text-<span class="text-clear">clear text</span>-uppercase</div>
</div>
