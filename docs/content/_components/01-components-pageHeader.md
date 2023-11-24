---
Title: Шапка страницы
menutitle: Шапка страницы
category: components
anchor: components-pageHeader
order: 1
---

Шапка страницы имеет следующую структуру:

Для прилипания шапки страницы при пркручивания используется класс `pageHeader_sticky`

{% highlight html %}
<div class="pageHeader">
    <div class="pageHeader__left">
        <h2 class="pageHeader__title">
            <?= $this->title ?>
        </h2>
        <span class="label label-success ml-10">Доп. элемент</span>
    </div>
    <div class="pageHeader__right">
        <button class="btn-info">Кнопка действия</button>
    </div>
</div>
{% endhighlight %}

<div class="bs-docs-example">
    <div class="pageHeader mb-0">
        <div class="pageHeader__left">
            <h2 class="pageHeader__title">
                Заголовок страницы
            </h2>
            <span class="label label-success ml-10">Доп. элемент</span>
        </div>
        <div class="pageHeader__right">
            <button class="btn-info">Кнопка действия</button>
        </div>
    </div>
</div>
