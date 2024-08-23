---
Title: Основной класс
menutitle: Основное
category: buttons
anchor: general
rank: 1
---

Внешний вид класса `btn` - соответствует `btn-default`. Используется, если это требует скрипт bootstrap.

#### Изменение текста в кнопке
Для изменения с помощью класса `.active` текста в кнопке используем класс-модификатор `.btn__activable`. Для текста использем классы `btn-text_isDefaultOn` и `btn-text_isActiveOn`, которые изменяют display:inline-block на display:none при `.active`

{% highlight html %}
  <button class="btn">Кнопка btn</button>
  <button class="btn-default btn__activable">
    <span class="btn-text">
      <span class="btn-text_isDefaultOn">Кнопка без active</span>
      <span class="btn-text_isActiveOn">Кнопка с active</span>
    </span>
  </button>
  <button class="btn-default btn__activable active">
    <span class="btn-text">
      <span class="btn-text_isDefaultOn">Кнопка без active</span>
      <span class="btn-text_isActiveOn">Кнопка с active</span>
    </span>
  </button>
{% endhighlight %}
<div class="bs-docs-example">
  <button class="btn">Кнопка btn</button>
  <button class="btn-default btn__activable">
    <span class="btn-text">
      <span class="btn-text_isDefaultOn">Кнопка без active</span>
      <span class="btn-text_isActiveOn">Кнопка с active</span>
    </span>
  </button>
  <button class="btn-default btn__activable active">
    <span class="btn-text">
      <span class="btn-text_isDefaultOn">Кнопка без active</span>
      <span class="btn-text_isActiveOn">Кнопка с active</span>
    </span>
  </button>
</div>
