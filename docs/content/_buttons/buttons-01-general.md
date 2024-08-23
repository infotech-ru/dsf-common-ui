---
Title: Основной класс
menutitle: Основной класс
category: buttons
anchor: general
rank: 1
---

`btn` - Соответствует `btn-default`
#### Изменение текста в кнопке
При добавлении класса `.active` на кнопку, классы `btn-text_isDefaultOn`и `btn-text_isActiveOn` изменяют display:inline-block на display:none

{% highlight html %}
  <button class="btn">Кнопка btn</button>
  <button class="btn-default">
    <span class="btn-text">
      <span class="btn-text_isDefaultOn">Кнопка без active</span>
      <span class="btn-text_isActiveOn">Кнопка с active</span>
    </span>
  </button>
  <button class="btn-default active">
    <span class="btn-text">
      <span class="btn-text_isDefaultOn">Кнопка без active</span>
      <span class="btn-text_isActiveOn">Кнопка с active</span>
    </span>
  </button>
{% endhighlight %}
<div class="bs-docs-example">
  <button class="btn">Кнопка btn</button>
  <button class="btn-default">
    <span class="btn-text">
      <span class="btn-text_isDefaultOn">Кнопка без active</span>
      <span class="btn-text_isActiveOn">Кнопка с active</span>
    </span>
  </button>
  <button class="btn-default active">
    <span class="btn-text">
      <span class="btn-text_isDefaultOn">Кнопка без active</span>
      <span class="btn-text_isActiveOn">Кнопка с active</span>
    </span>
  </button>
</div>
