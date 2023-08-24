---
Title: Контейнеры
menutitle: Контейнеры
category: helpers
anchor: helpers-container
order: 1
---

#### Классы для работы с контейнерами

`d-none__mobile` - устанавливает display: none для мобильных устройств
`d-block__mobile` - устанавливает display: block для мобильных устройств
`d-inline-block__mobile` - устанавливает display: inline-block для мобильных устройств
`d-flex__mobile` - устанавливает display: flex для мобильных устройств
`d-inline-flex__mobile` - устанавливает display: inline-flex для мобильных устройств
`d-grid__mobile` - устанавливает display: grid для мобильных устройств

`d-none` - устанавливает display: none
`d-flex` - устанавливает display: flex
`d-block` - устанавливает display: block
`d-inline-block` - устанавливает display: inline-block
`d-inline-flex` - устанавливает display: inline-flex
`d-grid` - устанавливает display: grid

`justify-flex-start` устанавливает justify-content: flex-end;
`justify-space-between` устанавливает justify-content: space-between;
`justify-flex-end` устанавливает justify-content: flex-end;
`justify-center` устанавливает justify-content: center;

`align-start` устанавливает align-items: flex-start;
`align-center` устанавливает align-items: center;
`align-end` устанавливает align-items: flex-end;

`flex-wrap` устанавливает flex-wrap: wrap;
`flex-nowrap` устанавливает flex-wrap: nowrap;
`flex-column` устанавливает flex-direction: column
`flex-column-reverse` устанавливает flex-direction: column-reverse
`flex-row` устанавливает flex-direction: row
`flex-row-reverse` устанавливает flex-direction: row-reverse
`flex-grow-null` устанавливает flex-grow: 0
`flex-shrink-1` устанавливает flex-shrink: 1
`flex-basis-100p` устанавливает flex-basis: 100%

`order-1`, `order-2`, `order-3`, `order-4`, `order-5`, `order-6`, `order-7`, `order-8`, `order-9`, `order-10` -
Устанавливает соответствующие значение order.
`order-1__mobile`, `order-2__mobile`, `order-3__mobile`, `order-4__mobile`, `order-5__mobile`, `order-6__mobile`, `order-7__mobile`, `order-8__mobile`, `order-9__mobile`, `order-10__mobile` -
Устанавливает соответствующие значение order только при мобильном просмотре.
#### Высота контейнера
`h-auto` - устанавливает автоматическую высоту
`h-100p` - устанавливает значение в 100% для высоты контейнера
`maxh-none` - устанавливает значение `max-height` в значение `none`
`minh-auto` - устанавливает значение `min-height` в значение `auto`

#### Ширина контейнера
`w-auto` - устанавливает автоматическую ширину
`w-100p` - устанавливает значение в 100% для ширины контейнера

#### Поворот контейнера
`rotate90`,`rotate180`, `rotate270` - устанавливает поворот

#### оформление данных

Установлено оформление для отдельных полей телефона, комментария
{% highlight html %}
  <div class="phoneFieldOrange">+7(910)000-00-00</div>
  <div class="phoneFieldBlue">+7(910)000-00-00</div>
  <div class="commentField">комментарий</div>
{% endhighlight %}
<div class="bs-docs-example">
  <div class="phoneFieldOrange mb-10">+7(910)000-00-00</div>
  <div class="phoneFieldBlue mb-10 ml-10">+7(910)000-00-00</div>
  <div class="commentField ml-10">комментарий</div>
</div>