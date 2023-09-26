---
Title: Группирование кнопок
menutitle: Группирование кнопок
category: buttons
anchor: buttons-group
rank: 4
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


#### Вертикальное группирование кнопок.
_Использование:_ класс `btn-group__vertical` вместе с `btn-group`

{% highlight html %}
<div class="btn-group btn-group__vertical">
  <button class="btn">btn</button>
  <button class="btn-default">btn-default</button>
  <button class="btn-primary">btn-primary</button>
</div>
{% endhighlight %}
<div class="bs-docs-example">
  <div class="btn-group btn-group__vertical">
    <button class="btn">btn</button>
    <button class="btn-default">btn-default</button>
    <button class="btn-primary">btn-primary</button>
  </div>
</div>

#### Одинаковая ширина кнопок при горизонтальном группирование кнопок.
_Использование:_ класс `btn-group__equal` вместе с `btn-group`

{% highlight html %}
<div class="btn-group btn-group__equal">
  <button class="btn">btn</button>
  <button class="btn-default">btn-default</button>
  <button class="btn-primary">btn-primary</button>
</div>
{% endhighlight %}
<div class="bs-docs-example">
  <div class="btn-group btn-group__equal">
    <button class="btn">btn</button>
    <button class="btn-default">btn-default</button>
    <button class="btn-primary">btn-primary</button>
  </div>
</div>

#### Отображения состояния нажатой / активной кнопки
_Использование:_ класс `active` на кнопке. 
Инициализация скрипта bootstap.buttons - `data-toggle="button"` (для одной кнопки),
`data-toggle="buttons"` - для нескольких кнопок.
Для работы скрипта обязательно должен быть класс у кнопок `.btn`

{% highlight html %}
<div class="btn-group" data-toggle="buttons">
  <button class="btn active">btn active</button>
  <button class="btn">btn</button>
</div>
<div class="btn-group" data-toggle="buttons">
    <button class="btn btn-primary active">btn-primary active</button>
    <button class="btn btn-primary">btn-primary</button>
  </div>

  <div class="btn-group" data-toggle="buttons">
    <button class="btn active">btn active</button>
    <button class="btn btn-success">btn-success</button>
  </div>
{% endhighlight %}
<div class="bs-docs-example">
  <div class="btn-group mr-20" data-toggle="buttons">
    <button class="btn active">btn active</button>
    <button class="btn">btn</button>
  </div>

  <div class="btn-group mr-20" data-toggle="buttons">
    <button class="btn btn-primary active">btn-primary active</button>
    <button class="btn btn-primary">btn-primary</button>
  </div>

  <div class="btn-group" data-toggle="buttons">
    <button class="btn active">btn active</button>
    <button class="btn btn-success">btn-success</button>
  </div>
</div>

#### Модификация группы кнопок в стиле default-primary(active)
Когда состояние нажатой, то принимает цвет .btn-primary вне зависимости от применненой модификации
Когда состояние ненажатой кнопки, то принимает цвет .btn-default вне зависимости от применненой модификации к кнопке

На контейнере родителя вместо `btn-group` используется класс `btn-group_theme`

{% highlight html %}
<div class="btn-group_theme">
  <button class="btn-primary active">btn-primary active</button>
  <button class="btn-primary">btn-primary</button>
</div>
<div class="btn-group_theme">
    <button class="btn-success active">btn-success active</button>
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

#### Модификация группы кнопок в стиле прозрачности (прозрачность для неактивных кнопкок)

На контейнере родителя используется класс `btn-group__opacity` вместе с `btn-group`

{% highlight html %}
<div class="btn-group__opacity" data-toggle="buttons">
  <button class="btn-primary active">btn-primary active</button>
  <button class="btn-primary">btn-primary</button>
</div>
{% endhighlight %}
<div class="bs-docs-example">
  <div class="btn-group__opacity mr-20" data-toggle="buttons">
    <button class="btn-primary active">btn-primary active</button>
    <button class="btn-primary">btn-primary</button>
  </div>
</div>

