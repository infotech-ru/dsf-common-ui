---
Title: Селекты / bootstrap-select
menutitle: Селекты / selects
category: forms
anchor: select
order: 2
---

Используется скрипт <a href="https://developer.snapappointments.com/bootstrap-select/">bootstap-select</a>

### Смещение выпадающего списка влево.

1. Используется класс `dropdown-menu-left`
2. 'data-dropdown-align-right' => 'auto', - автоматическое смещение

{% highlight html %}
  widget(Select::class,[
    'options' => [
      'class' => 'dropdown-menu-left',
или
      'data-dropdown-align-right' => 'auto',
{% endhighlight %}

<div class="bs-docs-example">
  <p>Make this:</p>

  <select>
    <option>Mustard</option>
    <option>Ketchup</option>
    <option>Relish</option>
  </select>

  <p>Become this:</p>

  <div class="d-flex justify-flex-end">
    <select class="selectpicker dropdown-menu-left" data-dropdown-align-right="auto">
      <option>Mustard</option>
      <option>KetchupKetchupKetchupKetchupKetchupKetchup</option>
      <option>Relish</option>
    </select>
  </div>
</div>

```html
<select class="selectpicker dropdown-menu-left">
  <option>Mustard</option>
  <option>Ketchup</option>
  <option>Relish</option>
</select>
```

---

### Dropup menu - Открытие выпадающего списка вверх

`dropupAuto` is set to true by default, which automatically determines whether or not the menu should display above or below the select box. If `dropupAuto` is set to false, manually make the select a dropup menu by adding the `.dropup` class to the select.

<div class="bs-docs-example">
  <select class="selectpicker dropup" data-dropup-auto="false">
    <option>Mustard</option>
    <option>Ketchup</option>
    <option>Relish</option>
  </select>
</div>

```html
<select class="selectpicker dropup" data-dropup-auto="false">
  ...
</select>
```

---

### Максимальное количество выбираемых пунктов при мультивыборе `multiple`

Limit the number of options that can be selected via the `data-max-options` attribute. It also works for option groups. Customize the message displayed when the limit is reached with `maxOptionsText`.

<div class="bs-docs-example">
  <select class="selectpicker" multiple data-max-options="2">
    <option>Mustard</option>
    <option>Ketchup</option>
    <option>Relish</option>
  </select>

  <select class="selectpicker" multiple>
    <optgroup label="Condiments" data-max-options="2">
      <option>Mustard</option>
      <option>Ketchup</option>
      <option>Relish</option>
    </optgroup>
    <optgroup label="Breads" data-max-options="2">
      <option>Plain</option>
      <option>Steamed</option>
      <option>Toasted</option>
    </optgroup>
  </select>
</div>

```html
<select class="selectpicker" multiple data-max-options="2">
  <option>Mustard</option>
  <option>Ketchup</option>
  <option>Relish</option>
</select>

<select class="selectpicker" multiple>
  <optgroup label="Condiments" data-max-options="2">
    <option>Mustard</option>
    <option>Ketchup</option>
    <option>Relish</option>
  </optgroup>
  <optgroup label="Breads" data-max-options="2">
    <option>Plain</option>
    <option>Steamed</option>
    <option>Toasted</option>
  </optgroup>
</select>
```

---

### Кастомизация текста по умолчанию - Placeholder

<p id="titleMultiples"></p>
Using the `title` attribute will set the default placeholder text when nothing is selected. This works for both multiple and standard select boxes:

<div class="bs-docs-example">
  <div class="form-group">
    <label>Multiple</label>
    <select class="selectpicker" multiple title="Choose one of the following..." data-width="fit">
      <option>Mustard</option>
      <option>Ketchup</option>
      <option>Relish</option>
    </select>
  </div>

  <div class="form-group">
    <label>Standard</label>
    <select class="selectpicker" title="Choose one of the following..." data-width="fit">
      <option>Mustard</option>
      <option>Ketchup</option>
      <option>Relish</option>
    </select>
  </div>
</div>

```html
<select class="selectpicker" multiple title="Choose one of the following...">
  <option>Mustard</option>
  <option>Ketchup</option>
  <option>Relish</option>
</select>
```

---

### Форматирование текста выбранного пункта

The supported values are:

* `values`: A comma delimited list of selected values (default)
* `count`: If one item is selected, then the option value is shown. If more than one is selected then the number of selected items is displayed, e.g. `2 of 6 selected`
* `count > x`: Where `x` is the number of items selected when the display format changes from `values` to `count`
* `static`: Always show the select title (placeholder), regardless of selection

<div class="bs-docs-example">
  <select class="selectpicker" multiple data-selected-text-format="count">
    <option>Mustard</option>
    <option>Ketchup</option>
    <option>Relish</option>
  </select>
</div>

```html
<select class="selectpicker" multiple data-selected-text-format="count">
  <option>Mustard</option>
  <option>Ketchup</option>
  <option>Relish</option>
</select>
```

<div class="bs-docs-example">
  <select class="selectpicker" multiple data-selected-text-format="count > 3">
    <option>Mustard</option>
    <option>Ketchup</option>
    <option>Relish</option>
    <option>Onions</option>
  </select>
</div>

```html
<select class="selectpicker" multiple data-selected-text-format="count > 3">
  <option>Mustard</option>
  <option>Ketchup</option>
  <option>Relish</option>
  <option>Onions</option>
</select>
```

---

### Стилизация отдельных пунктов в выпадающем меню

<p id="classes"></p>
Classes and styles added to options are transferred to the select box:

<div class="bs-docs-example">
  <select class="selectpicker">
    <option>Mustard</option>
    <option class="special">Ketchup</option>
    <option style="background: #5cb85c; color: #fff;">Relish</option>
  </select>
</div>

```html
<select class="selectpicker">
  <option>Mustard</option>
  <option class="text-danger">Ketchup</option>
  <option style="background: #5cb85c; color: #fff;">Relish</option>
</select>
```

---

### Ширина селекта

1. Используя элементы сетки

<div class="bs-docs-example">
  <div class="row">
    <div class="col-sm-3">
      <div class="form-group">
        <select class="selectpicker form-control">
          <option>Mustard</option>
          <option>Ketchup</option>
          <option>Relish</option>
        </select>
      </div>
    </div>
    <div class="col-sm-9">
      <div class="form-group">
        <select class="selectpicker form-control">
          <option>Mustard</option>
          <option>Ketchup</option>
          <option>Relish</option>
        </select>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-sm-4">
       <div class="form-group">
        <select class="selectpicker form-control">
          <option>Mustard</option>
          <option>Ketchup</option>
          <option>Relish</option>
        </select>
      </div>
    </div>
    <div class="col-sm-8">
       <div class="form-group">
        <select class="selectpicker form-control">
          <option>Mustard</option>
          <option>Ketchup</option>
          <option>Relish</option>
        </select>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-sm-5">
      <div class="form-group">
        <select class="selectpicker form-control">
          <option>Mustard</option>
          <option>Ketchup</option>
          <option>Relish</option>
        </select>
      </div>
    </div>
    <div class="col-sm-7">
      <div class="form-group">
        <select class="selectpicker form-control">
          <option>Mustard</option>
          <option>Ketchup</option>
          <option>Relish</option>
        </select>
      </div>
    </div>
  </div>
</div>

```html

<div class="row">
  <div class="col-sm-3">
    <div class="form-group">
      <select class="selectpicker form-control">
        <option>Mustard</option>
        <option>Ketchup</option>
        <option>Relish</option>
      </select>
    </div>
  </div>
</div>
```

<div id="data-width"></div>

2. Используя атрибут  `data-width`
- `data-width` => `'auto'` to automatically adjust the width of the select to its widest option.
- `'fit'` automatically adjusts the width of the select to the width of its currently selected option.
- Значение в процентах или px `300px` or `50%`.

<div class="bs-docs-example">
  <div class="row">
    <div class="col-sm-12">
      <div class="form-group">
        <label><code>width: 'auto'</code></label>
        <select class="selectpicker form-control" data-width="auto">
          <option>Mustard</option>
          <option>Ketchup</option>
          <option>Relish</option>
          <option>All of the above (and much, much more!)</option>
        </select>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-sm-12">
      <div class="form-group">
        <label><code>width: 'fit'</code></label>
        <select class="selectpicker form-control" data-width="fit">
          <option>Mustard</option>
          <option>Ketchup</option>
          <option>Relish</option>
          <option>All of the above (and much, much more!)</option>
        </select>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-sm-12">
      <div class="form-group">
        <label><code>width: '150px'</code></label>
        <select class="selectpicker form-control" data-width="150px">
          <option>Mustard</option>
          <option>Ketchup</option>
          <option>Relish</option>
          <option>All of the above (and much, much more!)</option>
        </select>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-sm-12">
      <div class="form-group">
        <label><code>width: '75%'</code></label>
        <select class="selectpicker form-control" data-width="75%">
          <option>Mustard</option>
          <option>Ketchup</option>
          <option>Relish</option>
          <option>All of the above (and much, much more!)</option>
        </select>
      </div>
    </div>
  </div>
</div>

```html
<select class="selectpicker" data-width="auto">
  ...
</select>
<select class="selectpicker" data-width="fit">
  ...
</select>
<select class="selectpicker" data-width="100px">
  ...
</select>
<select class="selectpicker" data-width="75%">
  ...
</select>
```

---

### Дополнительные контент в пунктах выпадающего меню

Insert custom HTML into the option with the `data-content` attribute:

<span class="alert alert-warning d-block" role="alert">
  <strong>Note:</strong> This feature inserts HTML into the DOM. By default, it is sanitized using our built-in [sanitizer](options.md#sanitizer).
</span>

<div class="bs-docs-example">
  <select class="selectpicker">
    <option data-content="<span class='badge badge-warning'>Mustard</span>">Mustard</option>
    <option data-content="<span class='badge badge-danger label-important'>Ketchup</span>">Ketchup</option>
    <option data-content="<span class='badge badge-success'>Relish</span>">Relish</option>
    <option data-content="<span class='badge badge-info'>Mayonnaise</span>">Mayonnaise</option>
  </select>
</div>

```html
<select class="selectpicker">
  <option data-content="<span class='badge badge-success'>Relish</span>">Relish</option>
</select>
```

<select class="selectpicker" data-size="5">
  <option data-subtext="Relish">Relish</option>
</select>

---

### Размер по высоте выпадющего меню.

The `size` option is set to `'auto'` by default. When `size` is set to `'auto'`, the menu always opens up to show as many items as the window will allow without being cut off. Set `size` to `false` to always show all items. The size of the menu can also be specifed using the `data-size` attribute.

<div class="bs-docs-example">
  <select class="selectpicker">
    <option>Mustard</option>
    <option>Ketchup</option>
    <option>Relish</option>
    <option>Mayonnaise</option>
    <option>Barbecue Sauce</option>
    <option>Salad Dressing</option>
    <option>Tabasco</option>
    <option>Salsa</option>
    <option>Mustard</option>
    <option>Ketchup</option>
    <option>Relish</option>
    <option>Mayonnaise</option>
    <option>Barbecue Sauce</option>
    <option>Salad Dressing</option>
    <option>Tabasco</option>
    <option>Salsa</option>
    <option>Mustard</option>
    <option>Ketchup</option>
    <option>Relish</option>
    <option>Mayonnaise</option>
    <option>Barbecue Sauce</option>
    <option>Salad Dressing</option>
    <option>Tabasco</option>
    <option>Salsa</option>
  </select>
</div>

Specify a number for `data-size` to choose the maximum number of items to show in the menu.

<div class="bs-docs-example">
  <select class="selectpicker" data-size="5">
    <option>Mustard</option>
    <option>Ketchup</option>
    <option>Relish</option>
    <option>Mayonnaise</option>
    <option>Barbecue Sauce</option>
    <option>Salad Dressing</option>
    <option>Tabasco</option>
    <option>Salsa</option>
  </select>
</div>

```html
<select class="selectpicker" data-size="5">
  ...
</select>
```
---

### Кнопки выбрать и отменить выбор

Adds two buttons to the top of the menu - **Select All** & **Deselect All** with `data-actions-box="true"`.

<div class="bs-docs-example">
  <select class="selectpicker" multiple data-actions-box="true">
    <option>Mustard</option>
    <option>Ketchup</option>
    <option>Relish</option>
  </select>
</div>

```html
<select class="selectpicker" multiple data-actions-box="true">
  <option>Mustard</option>
  <option>Ketchup</option>
  <option>Relish</option>
</select>
```

---

### Разделитель между пунктами выпадающего меню

Add `data-divider="true"` to an option to turn it into a divider.

<div class="bs-docs-example">
  <select class="selectpicker">
    <option>Mustard</option>
    <option>Ketchup</option>
    <option>Relish</option>
    <option>Mayonnaise</option>
    <option data-divider="true"></option>
    <option>Barbecue Sauce</option>
    <option>Salad Dressing</option>
    <option>Tabasco</option>
    <option>Salsa</option>
  </select>
</div>

```html
<select class="selectpicker" data-size="5">
  <option data-divider="true"></option>
</select>
```

---

### Вывод выпадающего меню вне контейнера

Append the select menu to a specific element, e.g. `container: 'body'` or `data-container=".main-content"`. This is useful if the select element is inside an element with `overflow: hidden`.

<div class="bs-docs-example" style="overflow: hidden;">
  <div class="row">
    <div class="col-md-3">
      <label><code>container: false</code></label>
      <select class="selectpicker form-control">
        <option data-subtext="French's">Mustard</option>
        <option data-subtext="Heinz">Ketchup</option>
        <option data-subtext="Sweet">Relish</option>
        <option data-subtext="Miracle Whip">Mayonnaise</option>
        <option data-divider="true"></option>
        <option data-subtext="Honey">Barbecue Sauce</option>
        <option data-subtext="Ranch">Salad Dressing</option>
        <option data-subtext="Sweet & Spicy">Tabasco</option>
        <option data-subtext="Chunky">Salsa</option>
      </select>
    </div>
    <div class="col-md-3">
    <label><code>container: 'body'</code></label>
      <select class="selectpicker form-control" data-container="body">
        <option data-subtext="French's">Mustard</option>
        <option data-subtext="Heinz">Ketchup</option>
        <option data-subtext="Sweet">Relish</option>
        <option data-subtext="Miracle Whip">Mayonnaise</option>
        <option data-divider="true"></option>
        <option data-subtext="Honey">Barbecue Sauce</option>
        <option data-subtext="Ranch">Salad Dressing</option>
        <option data-subtext="Sweet & Spicy">Tabasco</option>
        <option data-subtext="Chunky">Salsa</option>
      </select>
    </div>
  </div>
</div>

```html
<div style="overflow:hidden;">
  <select class="selectpicker">
    ...
  </select>
  <select class="selectpicker" data-container="body">
    ...
  </select>
</div>
```
