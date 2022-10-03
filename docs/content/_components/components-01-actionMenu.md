---
Title: Меню и подменю (dropdown)
menutitle: Меню actionMenu и dropdown
category: components
anchor: components-menu
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

### Многоуровневое меню dropdown. 
Для многоуровневого меню используется класс `multilevelMenu`. 
Раскрытие меню может отрабатывать по клику через `data-toggle="dropdown"`
Или при наведении, для чего используется класс модифиатор
{% highlight html %}
 <ul class="multilevelMenu">
    <li class="dropdown">
      <a class="dropdown dropdown-toggle" href="#" data-toggle="dropdown">
        Первый уровень
      </a>
      <ul class="dropdown-menu">
        <li class="dropdown__items dropdown dropdown-submenu">
          <a class="dropdown__link dropdown-toggle" href="#" data-toggle="dropdown">
            Второй уровень пункт 1
          </a>
          <ul class="dropdown-menu">
            <li class="dropdown__items dropdown dropdown-submenu">
              <a class="dropdown__link dropdown-toggle" href="#" data-toggle="dropdown">
                Третий уровень
              </a>
              <ul class="dropdown-menu">
                <li class="dropdown__items">
                  <a class="dropdown__link" href="#">Вложенный пункт 1</a>
                </li>
                <li class="dropdown__items">
                  <a class="dropdown__link" href="#">Вложенный пункт 2</a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li class="dropdown__items dropdown dropdown-submenu dropdown-submenu_actionHover">
          <a class="dropdown__link dropdown-toggle" href="#" data-toggle="dropdown">
            Второй уровень пункт 2 - (наведеине)
          </a>
          <ul class="dropdown-menu">
            <li class="dropdown__items dropdown dropdown-submenu dropdown-submenu_actionHover">
              <a class="dropdown__link dropdown-toggle" href="#" data-toggle="dropdown">
                Третий уровень  - (наведеине)
              </a>
              <ul class="dropdown-menu">
                <li class="dropdown__items">
                  <a class="dropdown__link" href="#">Вложенный пункт 1</a>
                </li>
                <li class="dropdown__items">
                  <a class="dropdown__link" href="#">Вложенный пункт 2</a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </li>
  </ul>
{% endhighlight %}

<div class="bs-docs-example">
  <ul class="multilevelMenu">
    <li class="dropdown">
      <a class="dropdown dropdown-toggle" href="#" data-toggle="dropdown">
        Первый уровень
      </a>
      <ul class="dropdown-menu">
        <li class="dropdown__items dropdown dropdown-submenu">
          <a class="dropdown__link dropdown-toggle" href="#" data-toggle="dropdown">
            Второй уровень пункт 1
          </a>
          <ul class="dropdown-menu">
            <li class="dropdown__items dropdown dropdown-submenu">
              <a class="dropdown__link dropdown-toggle" href="#" data-toggle="dropdown">
                Третий уровень
              </a>
              <ul class="dropdown-menu">
                <li class="dropdown__items">
                  <a class="dropdown__link" href="#">Вложенный пункт 1</a>
                </li>
                <li class="dropdown__items">
                  <a class="dropdown__link" href="#">Вложенный пункт 2</a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li class="dropdown__items dropdown dropdown-submenu dropdown-submenu_actionHover">
          <a class="dropdown__link dropdown-toggle" href="#" data-toggle="dropdown">
            Второй уровень пункт 2 - (наведеине)
          </a>
          <ul class="dropdown-menu">
            <li class="dropdown__items dropdown dropdown-submenu dropdown-submenu_actionHover">
              <a class="dropdown__link dropdown-toggle" href="#" data-toggle="dropdown">
                Третий уровень - (наведеине)
              </a>
              <ul class="dropdown-menu">
                <li class="dropdown__items">
                  <a class="dropdown__link" href="#">Вложенный пункт 1</a>
                </li>
                <li class="dropdown__items">
                  <a class="dropdown__link" href="#">Вложенный пункт 2</a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </li>
  </ul>
</div>