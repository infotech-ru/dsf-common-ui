---
Title: Группирование кнопок
menutitle: Группирование кнопок
category: buttons
anchor: buttons-group
order: 4
---


#### Для группировки используется родитель с классом btn-group

_Использование:_ класс `btn-group`

{% highlight html %}
<div class="btn-group">
  <button class="btn">btn</button>
  <button class="btn-default">btn-default</button>
</div>
{% endhighlight %}
<div class="bs-docs-example">
  <div class="btn-group mr-20">
    <button class="btn">btn</button>
    <button class="btn-default">btn-default</button>
  </div>

  <div class="btn-group mr-20">
    <button class="btn-primary">btn-primary</button>
    <button class="btn">btn</button>
  </div>

  <div class="btn-group mr-20">
    <button class="btn-primary">btn-primary</button>
    <button class="btn-primary">btn-primary</button>
  </div>

  <div class="btn-group">
    <button class="btn-primary btn-small">btn-primary btn-small</button>
    <button class="btn-primary btn-small">btn-primary btn-small</button>
  </div>
</div>

#### Отображения состояния нажатой / активной кнопки

_Использование:_ класс `active` на кнопке

{% highlight html %}
<div class="btn-group">
  <button class="btn active">btn active</button>
  <button class="btn">btn</button>
</div>
{% endhighlight %}
<div class="bs-docs-example">
  <div class="btn-group mr-20">
    <button class="btn active">btn active</button>
    <button class="btn">btn</button>
  </div>

  <div class="btn-group mr-20">
    <button class="btn-primary active">btn-primary active</button>
    <button class="btn-primary">btn-primary</button>
  </div>

  <div class="btn-group">
    <button class="btn active">btn active</button>
    <button class="btn-success">btn-success</button>
  </div>
</div>

#### Модификация группы кнопок в одном стиле: только состояние нажатой / ненажатой кнопки

На контейнере родителя вместо `btn-group` используется класс `btn-group_theme`

{% highlight html %}
<div class="btn-group_theme">
  <button class="btn-primary active">btn-primary active</button>
  <button class="btn-primary">btn-primary</button>
</div>
{% endhighlight %}
<div class="bs-docs-example">
  <div class="btn-group_theme mr-20">
    <button class="btn-primary active">btn-primary active</button>
    <button class="btn-primary">btn-primary</button>
  </div>

  <div class="btn-group_theme mr-20">
    <button class="btn-success active">btn-success active</button>
    <button class="btn-primary">btn-primary</button>
  </div>
</div>
