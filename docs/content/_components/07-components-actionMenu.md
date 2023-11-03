---
Title: Меню для кнопок (actionMenu с dropdown)
menutitle: Меню для кнопок (actionMenu с dropdown)
category: components
anchor: components-menu
order: 7
---

### Инициализация

Используется для объединения кнопок действия под одной кнопкой. В качестве скрипта используется popover.js

Кнопки вносятся в data-content. Инициализация js по классу `js-actionMenu`

В системе реализовано через widgets DropDownActionColumn
{% highlight html %}
  use app\widgets\DropDownActionColumn;
 
    'class' => DropDownActionColumn::class,
{% endhighlight %}


Popover изначально не попадает в DOM, скрипт по типу `$(".js-action").click` внутри него не будет работать.

Использовать надо:
`$("body").on("click", ".js-action", function () {}`

### Визуализация кнопки вызова

В таблицах кнопку вызова визуализируем с помощью `.btn-icon`

В фильтрах кнопку вызова визуализируем по типу `.btn-deafult`

Для использования рядом с другими кнопками возможно использовать `.btn-link`

### Отображения пунктов меню
Пункты меню в виде кнопок должны находятся в структуре
`<div class="popover-body"><ul class="popoverActionMenu__ul"><li> Пункт меню </li>`

Способы отображения пунктов:
- Придания пунктам вида кнопок. Например, `btn-default`.
- Исопользование класса `dropdown__link`

{% highlight html %}
  <button class="btn-icon js-actionMenu"
          type="button"
          data-content="
            <button class='dropdown__link'>
              <span class='svg--icon'>
                <svg class='bicolors-edit' width='24' height='24'>
                  <use xlink:href='/dsf-common-ui/dist/sprite.symbol.svg#bicolors-edit__24vb'></use>
                </svg>
              </span>
              <span class='btn-text'>Редактировать</span>
            </button>
            <button class='dropdown__link'>
              <span class='svg--icon'>
                <svg class='bicolors-edit' width='24' height='24'>
                  <use xlink:href='/dsf-common-ui/dist/sprite.symbol.svg#bicolors-delete__24vb'></use>
                </svg>
              </span>
              <span class='btn-text'>Удалить</span>
            </button>
          ">
          <span class="svg--icon">
            <svg class="bicolors-menu" width="24" height="24"><use xlink:href="/dsf-common-ui/dist/sprite.symbol.svg#bicolors-menu"></use></svg>
          </span>
  </button>
  <button class="btn-default js-actionMenu"
          type="button"
          data-content="
            <button class='btn-default btn-block'>
              <span class='svg--icon'>
                <svg class='bicolors-doc_add' width='24' height='24'>
                  <use xlink:href='/dsf-common-ui/dist/sprite.symbol.svg#bicolors-doc_add'></use>
                </svg>
              </span>
              <span class='btn-text'>Редактировать</span>
            </button>
          ">
          <span class="svg--icon">
            <svg class="bicolors-filter" width="24" height="24"><use xlink:href="/dsf-common-ui/dist/sprite.symbol.svg#bicolors-filter"></use></svg>
          </span>
  </button>
  <button class="btn-link js-actionMenu"
          type="button"
          data-content="
            <button class='dropdown__link'>
              <span class='svg--icon'>
                <svg class='bicolors-edit' width='16' height='16'>
                  <use xlink:href='/dsf-common-ui/dist/sprite.symbol.svg#bicolors-edit'></use>
                </svg>
              </span>
              <span class='btn-text'>Редактировать</span>
            </button>
              <span class='svg--icon'>
                <svg class='bicolors-plus' width='24' height='24'>
                  <use xlink:href='/dsf-common-ui/dist/sprite.symbol.svg#bicolors-plus__24vb'></use>
                </svg>
              </span>
              <span class='btn-text'>Добавить</span>
            </button>
          ">
          <span class="svg--icon">
            <svg class="bicolors-menu" width="24" height="24"><use xlink:href="/dsf-common-ui/dist/sprite.symbol.svg#bicolors-menu"></use></svg>
          </span>
  </button>
{% endhighlight %}

<div class="bs-docs-example">
  <button class="btn-icon mr-10 js-actionMenu" type="button" data-content="<button class='dropdown__link'><span class='svg--icon'><svg class='bicolors-edit' width='24' height='24'><use xlink:href='/dsf-common-ui/dist/sprite.symbol.svg#bicolors-edit__24vb'></use></svg></span><span class='btn-text'>Редактировать</span></button><button class='dropdown__link'><span class='svg--icon'><svg class='bicolors-edit' width='24' height='24'><use xlink:href='/dsf-common-ui/dist/sprite.symbol.svg#bicolors-delete__24vb'></use></svg></span><span class='btn-text'>Удалить</span></button> "><span class="svg--icon"><svg class="bicolors-menu" width="24" height="24"><use xlink:href="/dsf-common-ui/dist/sprite.symbol.svg#bicolors-menu"></use></svg></span></button>

  <button class="btn-default js-actionMenu ml-10" type="button" data-content="<button class='btn-default btn-block'><span class='svg--icon'><svg class='bicolors-doc_add' width='24' height='24'><use xlink:href='/dsf-common-ui/dist/sprite.symbol.svg#bicolors-doc_add'></use></svg></span><span class='btn-text'>Редактировать</span></button> "><span class="svg--icon"><svg class="bicolors-filter" width="24" height="24"><use xlink:href="/dsf-common-ui/dist/sprite.symbol.svg#bicolors-filter"></use></svg></span></button>

  <button class="btn-link js-actionMenu ml-10" type="button" data-content="<button class='dropdown__link'><span class='svg--icon'><svg class='bicolors-plus' width='24' height='24'><use xlink:href='/dsf-common-ui/dist/sprite.symbol.svg#bicolors-plus__24vb'></use></svg></span><span class='btn-text'>Добавить</span></button> "><span class="svg--icon"><svg class="bicolors-menu" width="24" height="24"><use xlink:href="/dsf-common-ui/dist/sprite.symbol.svg#bicolors-menu"></use></svg></span></button>
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