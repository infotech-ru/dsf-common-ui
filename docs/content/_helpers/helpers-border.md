---
Title: Бордеры (border)
menutitle: Бордеры (border)
category: helpers
anchor: helpers-border
order: 2
---

#### Расположение бордера
Классы `border-top`, `border-bottom`, `border-left`, `border-right` добавляют черту  толщиной в 1px сверху, снизу, слева или справа блока. 

Классы `border-top__dotted`, `border-bottom__dotted`, `border-left__dotted`, `border-right__dotted` модифициурет линию в точки. 

`border` - добавляет обрамление чертой в 1px всего блока. `border__dotted` - модифициурет линию в точки

#### Цвет бордера
Класс `border-default`, `border-primary`, `border-success`, `border-danger`, `border-warning`, `border-info`, `border-muted`, `border-grey`, `border-grey2`,`border-light-grey2`, `border-white`, `border-light-blue3`, `border-vibrant-blue` добавляют соответсвующего цвета. 
`border-clear` - класс делает прозрачным цвет бордера
Классы `border__none`, `border-top__none`, `border-bottom__none`, `border-left__none`, `border-right__none` - классы отключают бордер

{% highlight html %}
  <div class="border-top border-default">border-top border-default</div>
  <div class="border-right border-primary">border-right border-primary</div>
  <div class="border-bottom border-success">border-bottom border-success</div>
  <div class="border-left border-danger">border-left border-danger</div>
  <div class="border border-warning">border border-warning</div>
  <div class="border border-info">border border-info</div>
  <div class="border border-muted">border border-muted</div>
  <div class="border-grey border__dotted ">border-grey border__dotted </div>
  <div class="border-grey2">border-grey2</div>
  <div class="border-light-grey2 border-bottom__dotted">border-light-grey2 border-bottom__dotted</div>
  <div class="border-light-blue3">border-light-blue3</div>
  <div class="border-white">border-white</div>
  <div class="border-orange">border-orange</div>
  <div class="border-dark-red border-top__none">border-dark-red border-top__none</div>
  <div class="border border-right__none border-grey">border border-right__none border-grey</div>
  <div class="border border-bottom__none border-rose">border border-bottom__none border-rose</div>
  <div class="border border-left__none border-vibrant-blue">border border-left__none border-vibrant-blue</div>
{% endhighlight %}
<div class="bs-docs-example">
  <div class="border-top border-default mb-10">border-top border-default</div>
  <div class="border-right border-primary mb-10">border-right border-primary</div>
  <div class="border-bottom border-success mb-10">border-bottom border-success</div>
  <div class="border-left border-danger mb-10">border-left border-danger</div>
  <div class="border border-warning mb-10">border border-warning</div>
  <div class="border border-info mb-10">border border-info</div>
  <div class="border border-muted mb-10">border border-muted</div>
  <div class="border-grey border__dotted mb-10">border-grey border__dotted</div>
  <div class="border-grey2 mb-10">border-grey2</div>
  <div class="border-light-grey2 border-bottom__dotted mb-10">border-light-grey2 border-bottom__dotted</div>
  <div class="border-light-blue3 mb-10">border-light-blue3</div>
  <div class="border-white mb-10">border-white</div>
  <div class="border-orange mb-10">border-orange</div>
  <div class="border-dark-red border-top__none mb-10">border-dark-red border-top__none</div>
  <div class="border border-right__none border-grey mb-10">border border-right__none border-grey</div>
  <div class="border border-bottom__none border-rose mb-10">border border-bottom__none border-rose</div>
  <div class="border border-left__none border-vibrant-blue mb-10">border border-left__none border-vibrant-blue</div>
</div>
