---
Title: Меню для кнопок действий
menutitle: Меню для кнопок действий
category: components
anchor: components-actionMenu
order: 1
---

### Меню для кнопок действий.

Используется для объединения кнопок действия под одной кнопкой. В качестве js используется popover.js

Кнопки вносятся в data-content. Инициализация js по классу `js-actionMenu`

`В системе реализовано через widgets::DropDownActionColumn`

Для использования в таблицах .btn-icon

Так как popover изначально не попадает в DOM, то скрипт по типу
`$(".js-action").click` внутри него не будет работать.
Использовать надо:
`$("body").on("click", ".js-action", function () {}`

{% highlight html %}
  <button class="btn-icon js-actionMenu"
          type="button"
          data-content="
            <button class='btn-default btn-block'>
              <span class='svg--icon'>
                <svg class='glyphicons-basic-pencil' width='24' height='24'>
                  <use xlink:href='dist/sprite.symbol.svg#glyphicons-pencil'></use>
                </svg>
              </span>
              <span class='btn-text'>Редактировать</span>
            </button>
          ">
          <span class="svg--icon">
            <svg class="glyphicons-more-vertical" width="24" height="24"><use xlink:href="dist/sprite.symbol.svg#glyphicons-more-vertical"></use></svg>
          </span>
  </button>
{% endhighlight %}

<div class="bs-docs-example">
<button class="btn-icon js-actionMenu" type="button" data-content="<button class='btn-default btn-block'><span class='svg--icon'><svg class='glyphicons-basic-pencil' width='24' height='24'><use xlink:href='dist/sprite.symbol.svg#glyphicons-pencil'></use></svg></span><span class='btn-text'>Редактировать</span></button> "><span class="svg--icon"><svg class="glyphicons-more-vertical" width="24" height="24"><use xlink:href="dist/sprite.symbol.svg#glyphicons-more-vertical"></use></svg></span></button>
</div>

Для использования в фильтрах .btn-deafult .btn-deafult

{% highlight html %}
  <button class="btn-default js-actionMenu"
          type="button"
          data-content="
            <button class='btn-default btn-block'>
              <span class='svg--icon'>
                <svg class='glyphicons-basic-pencil' width='24' height='24'>
                  <use xlink:href='dist/sprite.symbol.svg#glyphicons-pencil'></use>
                </svg>
              </span>
              <span class='btn-text'>Редактировать</span>
            </button>
          ">
          <span class="svg--icon">
            <svg class="glyphicons-more-vertical" width="24" height="24"><use xlink:href="dist/sprite.symbol.svg#glyphicons-more-vertical"></use></svg>
          </span>
  </button>
{% endhighlight %}

<div class="bs-docs-example">
<button class="btn-default js-actionMenu ml-10" type="button" data-content="<button class='btn-default btn-block'><span class='svg--icon'><svg class='glyphicons-basic-pencil' width='24' height='24'><use xlink:href='dist/sprite.symbol.svg#glyphicons-pencil'></use></svg></span><span class='btn-text'>Редактировать</span></button> "><span class="svg--icon"><svg class="glyphicons-more-vertical" width="24" height="24"><use xlink:href="dist/sprite.symbol.svg#glyphicons-more-vertical"></use></svg></span></button>
</div>

Для использования рядом с кноками .btn-link

{% highlight html %}
  <button class="btn-link js-actionMenu"
          type="button"
          data-content="
            <button class='btn-default btn-block'>
              <span class='svg--icon'>
                <svg class='glyphicons-basic-pencil' width='24' height='24'>
                  <use xlink:href='dist/sprite.symbol.svg#glyphicons-pencil'></use>
                </svg>
              </span>
              <span class='btn-text'>Редактировать</span>
            </button>
          ">
          <span class="svg--icon">
            <svg class="glyphicons-more-vertical" width="24" height="24"><use xlink:href="dist/sprite.symbol.svg#glyphicons-more-vertical"></use></svg>
          </span>
  </button>
  {% endhighlight %}

<div class="bs-docs-example">
<button class="btn-link js-actionMenu ml-10" type="button" data-content="<button class='btn-default btn-block'><span class='svg--icon'><svg class='glyphicons-basic-pencil' width='24' height='24'><use xlink:href='dist/sprite.symbol.svg#glyphicons-pencil'></use></svg></span><span class='btn-text'>Редактировать</span></button> "><span class="svg--icon"><svg class="glyphicons-more-vertical" width="24" height="24"><use xlink:href="dist/sprite.symbol.svg#glyphicons-more-vertical"></use></svg></span></button>
</div>
