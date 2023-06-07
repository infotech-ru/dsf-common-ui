---
Title: Граница контейнера (border)
menutitle: Граница (border)
category: helpers
anchor: helpers-border
order: 4
---

#### Расположение границы
`border` - добавляет границу-черту в 1px вокруг контейнера(блока). 

Классы `border-top`, `border-bottom`, `border-left`, `border-right` добавляют границу-черту толщиной в 1px сверху, снизу, слева или справа блока.

{% highlight html %}
  <div class="border">border</div>
  <div class="border-top">border-top</div>
  <div class="border-right">border-right</div>
  <div class="border-bottom">border-bottom</div>
  <div class="border-left">border-left</div>
{% endhighlight html %}
<div class="bs-docs-example">
  <div class="mb-10 border">border</div>
  <div class="mb-10 border-top">border-top</div>
  <div class="mb-10 border-right">border-right</div>
  <div class="mb-10 border-bottom">border-bottom</div>
  <div class="mb-10 border-left">border-left</div>
</div>

Классы `border__none`, `border-top__none`, `border-bottom__none`, `border-left__none`, `border-right__none` - классы отключают границу в с соответствующей стороны контейнера или со всех сторон.

{% highlight html %}
  <div class="border border-top__none">border border-top__none</div>
  <div class="border border-right__none">border border-right__none</div>
  <div class="border border-bottom__none">border border-bottom__none</div>
  <div class="border border-left__none">border border-left__none</div>
{% endhighlight %}
<div class="bs-docs-example">
  <div class="mb-10 border border-top__none">border border-top__none</div>
  <div class="mb-10 border border-right__none">border border-right__none</div>
  <div class="mb-10 border border-bottom__none">border border-bottom__none</div>
  <div class="mb-10 border border-left__none">border border-left__none</div>
</div>

`border__dotted` - модифициурет границу-линию в границу-точку.

Классы `border-top__dotted`, `border-bottom__dotted`, `border-left__dotted`, `border-right__dotted` модифициурет границу-линию в границу-точку. 
{% highlight html %}
  <div class="border border__dotted">border border__dotted</div>
  <div class="border-top border-top__dotted">border-top border-top__dotted</div>
  <div class="border-right border-right__dotted">border-right border-right__dotted</div>
  <div class="border-bottom border-bottom__dotted">border-bottom border-bottom__dotted</div>
  <div class="border-left border-left__dotted">border-left border-left__dotted</div>
{% endhighlight html %}
<div class="bs-docs-example">
    <div class="mb-10 border border__dotted">border border__dotted</div>
    <div class="mb-10 border-top border-top__dotted">border-top border-top__dotted</div>
    <div class="mb-10 border-right border-right__dotted">border-right border-right__dotted</div>
    <div class="mb-10 border-bottom border-bottom__dotted">border-bottom border-bottom__dotted</div>
    <div class="mb-10 border-left border-left__dotted">border-left border-left__dotted</div>
</div>

#### Цвет границы
Класс `border-default`, `border-primary`, `border-success`, `border-danger`, `border-warning`, `border-info`, `border-muted`, `border-grey`, `border-grey2`, `border-grey4`, `border-light-grey`, `border-light-grey2`, `border-white`, `border-light-blue3`, `border-vibrant-blue`, `border-dark-red`, `border-rose`, `border-light-yellow`,   добавляют соответсвующего цвета для границ. 

`border-clear` - класс делает прозрачным цвет границы

{% highlight html %}
  <div class="border border-default">border border-default</div>
  <div class="border border-primary">border border-primary</div>
  <div class="border border-vibrant-blue">border border-vibrant-blue</div>
  <div class="border border-success">border border-success</div>
  <div class="border border-info">border border-info</div>
  <div class="border border-light-blue3">border border-light-blue3</div>
  <div class="border border-dark-red">border border-dark-red</div>
  <div class="border border-danger">border border-danger</div>
  <div class="border border-rose">border border-rose</div>
  <div class="border border-warning">border border-warning</div>
  <div class="border border-orange">border border-orange</div>
  <div class="border border-light-yellow">border border-light-yellow</div>
  <div class="border border-muted">border border-muted</div>
  <div class="border border-grey">border border-grey</div>
  <div class="border border-grey2">border border-grey2</div>
  <div class="border border-grey4">border border-grey4</div>
  <div class="border border-light-grey2">border border-light-grey2</div>
  <div class="border border-light-grey">border border-light-grey</div>
  <div class="padding-5 bg-grey4"><div class="border border-white">border border-white</div></div>
  <div class="padding-5 bg-grey4"><div class="border border-clear">border border-clear</div></div>
{% endhighlight html %}
<div class="bs-docs-example">
  <div class="mb-10 border border-default">border border-default</div>
  <div class="mb-10 border border-primary">border border-primary</div>
  <div class="mb-10 border border-vibrant-blue">border border-vibrant-blue</div>
  <div class="mb-10 border border-success">border border-success</div>
  <div class="mb-10 border border-info">border border-info</div>
  <div class="mb-10 border border-light-blue3">border border-light-blue3</div>
  <div class="mb-10 border border-dark-red">border border-dark-red</div>
  <div class="mb-10 border border-danger">border border-danger</div>
  <div class="mb-10 border border-rose">border border-rose</div>
  <div class="mb-10 border border-warning">border border-warning</div>
  <div class="mb-10 border border-orange">border border-orange</div>
  <div class="mb-10 border border-light-yellow">border border-light-yellow</div>
  <div class="mb-10 border border-muted">border border-muted</div>
  <div class="mb-10 border border-grey">border border-grey</div>
  <div class="mb-10 border border-grey2">border border-grey2</div>
  <div class="mb-10 border border-grey4">border border-grey4</div>
  <div class="mb-10 border border-light-grey2">border border-light-grey2</div>
  <div class="mb-10 border border-light-grey">border border-light-grey</div>
  <div class="mb-10 padding-5 bg-grey4"><div class="border border-white">border border-white</div></div>
  <div class="mb-10 padding-5 bg-grey4"><div class="border border-clear">border border-clear</div></div>
</div>
