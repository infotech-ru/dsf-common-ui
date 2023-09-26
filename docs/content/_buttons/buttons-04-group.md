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
<div class="btn-group btn-group__equal w-100p">
  <button class="btn">btn</button>
  <button class="btn-default">btn-default</button>
  <button class="btn-primary">btn-primary</button>
</div>
{% endhighlight %}
<div class="bs-docs-example">
  <div class="btn-group btn-group__equal w-100p">
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
    <label class="btn active">
      <input type="radio" name="options1" id="option1" checked>
      btn active
    </label>
    <label class="btn">
      <input type="radio" name="options1" id="option2">
      btn
    </label>
  </div>

  <div class="btn-group" data-toggle="buttons">
    <label class="btn btn-primary active">
      btn-primary active
      <input type="radio" name="options2" id="option1" checked>
    </label>
    <label class="btn btn-primary">
      btn-primary
      <input type="radio" name="options2" id="option2">
    </label>
  </div>

  <div class="btn-group" data-toggle="buttons">
    <label class="btn active">
      btn active
      <input type="radio" name="options3" id="option1" checked>
    </label>
    <label class="btn btn-success">
      btn-success
      <input type="radio" name="options3" id="option2">
    </label>
  </div>
{% endhighlight %}
<div class="bs-docs-example">
  <div class="btn-group mr-20" data-toggle="buttons">
    <label class="btn active">
      <input type="radio" name="options1" id="option11" checked>
      btn active
    </label>
    <label class="btn">
      <input type="radio" name="options1" id="option12">
      btn
    </label>
  </div>
  
  <div class="btn-group mr-20" data-toggle="buttons">
    <label class="btn btn-primary active">
      btn-primary active
      <input type="radio" name="options2" id="option21" checked>
    </label>
    <label class="btn btn-primary">
      btn-primary
      <input type="radio" name="options2" id="option22">
    </label>
  </div>

  <div class="btn-group" data-toggle="buttons">
    <label class="btn active">
      btn active
      <input type="radio" name="options3" id="option31" checked>
    </label>
    <label class="btn btn-success">
      btn-success
      <input type="radio" name="options3" id="option32">
    </label>
  </div>
</div>

#### Модификация группы кнопок в стиле default-primary(active)
Когда состояние нажатой, то принимает цвет .btn-primary вне зависимости от применненой модификации
Когда состояние ненажатой кнопки, то принимает цвет .btn-default вне зависимости от применненой модификации к кнопке

На контейнере родителя используется класс `btn-group__theme` вместе с `btn-group`

{% highlight html %}
  <div class="btn-group btn-group__theme" data-toggle="buttons">
    <label class="btn btn-primary">
      <input type="radio" name="options4" id="option41" checked>
      btn-primary
    </label>
    <label class="btn btn-primary">
        <input type="radio" name="options4" id="option42">
        btn-primary
    </label>
  </div>
  <div class="btn-group btn-group__theme" data-toggle="buttons">
    <label class="btn btn-success">
        <input type="radio" name="options5" id="option51" checked>
        btn-success
    </label>
    <label class="btn btn-primary">
        <input type="radio" name="options5" id="option52">
        btn-primary
    </label>
  </div>
{% endhighlight %}
<div class="bs-docs-example">
  <div class="btn-group btn-group__theme mr-20" data-toggle="buttons">
    <label class="btn btn-primary">
      <input type="radio" name="options4" id="option41" checked>
      btn-primary
    </label>
    <label class="btn btn-primary">
        <input type="radio" name="options4" id="option42">
        btn-primary
    </label>
  </div>
  <div class="btn-group btn-group__theme" data-toggle="buttons">
    <label class="btn btn-success">
        <input type="radio" name="options5" id="option51" checked>
        btn-success
    </label>
    <label class="btn btn-primary">
        <input type="radio" name="options5" id="option52">
        btn-primary
    </label>
  </div>
</div>

#### Модификация группы кнопок в стиле прозрачности (прозрачность для неактивных кнопкок)

На контейнере родителя используется класс `btn-group__opacity` вместе с `btn-group`

{% highlight html %}
<div class="btn-group btn-group__opacity" data-toggle="buttons">
  <label class="btn btn-primary active">
    <input type="radio" name="options6" id="option62" checked>
    btn-primary active
  </label>
  <label class="btn btn-primary"> 
    <input type="radio" name="options6" id="option62">
    btn-primary
  </label>
  <label class="btn btn-success">
    <input type="radio" name="options6" id="option63">
    btn-success
  </label>
</div>
{% endhighlight %}
<div class="bs-docs-example">
  <div class="btn-group btn-group__opacity" data-toggle="buttons">
    <label class="btn btn-primary active">
      <input type="radio" name="options6" id="option62" checked>
      btn-primary active
    </label>
    <label class="btn btn-primary"> 
      <input type="radio" name="options6" id="option62">
      btn-primary
    </label>
    <label class="btn btn-success">
      <input type="radio" name="options6" id="option63">
      btn-success
    </label>
  </div>
</div>


#### Кнопки переключатели
См. в разделе <a href="/forms.html#radiobtn-item">элементы формы#Кнопки-переключатели</a>