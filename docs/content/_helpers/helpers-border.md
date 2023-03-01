---
Title: Бордеры (border)
menutitle: Бордеры (border)
category: helpers
anchor: helpers-border
order: 2
---

#### Расположение бордера
Классы `border-top`, `border-bottom`, `border-left`, `border-right` добавляют черту  толщиной в 1px сверху, снизу, слева или справа блока. `border` - добавляет обрамление чертой в 1px всего блока.

#### Цвет бордера
Класс `border-default`, `border-primary`, `border-success`, `border-danger`, `border-warning`, `border-info`, `border-muted`, `border-grey`, `border-white`, `border-light-blue3` добавляют соответсвующего цвета. 
`border-clear` - класс делает прозрачным цвет бордера
Классы `border__none`, `border-top__none`, `border-bottom__none`, `border-left__none`, `border-right__none` - классы отключают бордер

{% highlight html %}
  <div class="border-top border-default mb-10">border-top border-default</div>
  <div class="border-bottom border-primary mb-10">border-bottom border-primary</div>
  <div class="border-left border-success mb-10">border-left border-success</div>
  <div class="border-right border-danger mb-10">border-right border-danger</div>
  <div class="border border-warning mb-10">border border-warning</div>
  <div class="border border-info mb-10">border border-info</div>
  <div class="border border-muted mb-10">border border-muted</div>
  <div class="border-bottom border-grey mb-10">border-bottom border-grey</div>
  <div class="border-bottom border-light-blue3 mb-10">border-bottom border-light-blue3</div>
  <div class="border-bottom border-white mb-10">border-bottom border-white</div>
  <div class="border border-bottom__none border-grey mb-10">border border-bottom__none border-grey</div>
{% endhighlight %}
<div class="bs-docs-example">
  <div class="border-top border-default mb-10">border-top border-default</div>
  <div class="border-bottom border-primary mb-10">border-bottom border-primary</div>
  <div class="border-left border-success mb-10">border-left border-success</div>
  <div class="border-right border-danger mb-10">border-right border-danger</div>
  <div class="border border-warning mb-10">border border-warning</div>
  <div class="border border-info mb-10">border border-info</div>
  <div class="border border-muted mb-10">border border-muted</div>
  <div class="border-bottom border-grey mb-10">border-bottom border-grey</div>
  <div class="border-bottom border-light-blue3 mb-10">border-bottom border-light-blue3</div>
  <div class="border-bottom border-white mb-10">border-bottom border-white</div>
  <div class="border border-bottom__none border-grey mb-10">border border-bottom__none border-grey</div>
</div>
