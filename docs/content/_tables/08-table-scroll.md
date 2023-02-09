---
Title: Duplicate Scroll
menutitle: Верхний Скролл
category: tables
anchor: table-scroll
order: 8
---

<p>
<div class="alert alert-warning alert__attention">
<h4>Устраревший скрипт. Вместо него использовать DuplicateScroll()</h4>
  Для вывода верхнего скрола:
  - Добавлем контейнер:  {% highlight html %}<div id="topscrl"><div id="topfake"></div></div>{% endhighlight %}
  
  - Добавляем селектор контейнеру, где находится таблица, например #js-tableScroll.
  
  - Инициализируем скрипт с этим селектором - TopScroll("#js-tableScroll", "#topscrl", "#topfake"); 
  При необхоимости делаем import {TopScroll} from "../TopScroll";
  </div>
</p>

<p>
- Инициализируем скрипт - `DuplicateScroll();` (если надо делаем import {DuplicateScroll} from "../DuplicateScroll")

- Для обертки таблицы, которой нужен верхний скролл по умолчанию используется класс `js-tableScroll`. (Переопределить можно - DuplicateScroll(false, ".js-другой_класс");)

- Добавлять контейнер со скроллом не нужно.

Для вывода в консоль тестировачных данных использовать true первым значением -  `DuplicateScroll(true);`

</p>