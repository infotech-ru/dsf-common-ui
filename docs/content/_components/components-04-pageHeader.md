---
Title: Шапка страницы
menutitle: Шапка страницы
category: components
anchor: components-pageHeader
order: 4
---

Шапка страницы имеет следующую структуру:

{% highlight html %}
<div class="pageHeader">
  <div class="pageHeader__left">
    <h2 class="pageHeader__title">
      Заголовок страницы
    </h2>
    <span class="label label-success ml-10">Доп. элемент</span>
  </div>
  <div class="pageHeader__right">
    <button class="btn-default">Кнопка действия</button>
  </div>
</div>
{% endhighlight %}


<div class="pageHeader pageHeader_sticky">
  <div class="pageHeader__left">
    <h2 class="pageHeader__title">
      Заголовок страницы
    </h2>
    <span class="label label-success ml-10">Доп. элемент</span>
  </div>
  <div class="pageHeader__right">
    <button class="btn-default">Кнопка действия</button>
  </div>
</div>

Для прилипания шапки страницы при пркручивания используется класс `pageHeader_sticky`

{% highlight html %}
  <div class="pageHeader pageHeader_sticky">
{% endhighlight %}