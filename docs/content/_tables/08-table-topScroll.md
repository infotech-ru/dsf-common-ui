---
Title: TopScroll
menutitle: Верхний Скролл
category: tables
anchor: table-topScroll
order: 8
---

<p>
  Для вывода верхнего скрола:
  - Добавлем контейнер:  {% highlight html %}<div id="topscrl"><div id="topfake"></div></div>{% endhighlight %}
  
  - Добавляем селектор контейнеру, где находится таблица, например #js-tableScroll.
  
  - Инициализируем скрипт с этим селектором - TopScroll("#js-tableScroll", "#topscrl", "#topfake"); 
  При необхоимости делаем import {TopScroll} from "../TopScroll";
</p>