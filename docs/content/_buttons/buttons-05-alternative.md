---
Title: Альтернативные кнопки
menutitle: Альтернативные кнопки
category: buttons
anchor: buttons-alternative
rank: 5
---

#### Кнопка-ссылка

Внешний вид ссылки, а размеры кнопки.

_Использование:_ `btn-link`

{% highlight html %}
  <button class="btn-link">btn-link</button>
{% endhighlight %}

<div class="bs-docs-example">
  <div class="">
  <button class="btn-link">btn-link</button>

  <button class="btn-default ml-10">Кнопка для сравнения</button>
  </div>
</div>

#### Кнопка-иконка

Размер кнопки равен размеру иконки.

По умолчанию, размер иконок для кнопок = 16px.

В кнопке могут использоваться иконки:

- через спрайты. _SVG-иконки используют родительский контейнер - тег SPAN с классом "svg--icon" `<span class="svg--icon">`_

- svg-иконки как напрямую в коде `<span class="svg--icon"><svg...`,
так и 

- из набора glyphicon `<span class="glyphicon glyphicon-имя_иконки"></span>`


{% highlight html %}
  <button class="btn-icon"><span class="svg--icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24.5 24.5"><path d="M12.3 0C5.5 0 0 5.5 0 12.3s5.5 12.3 12.3 12.3S24.5 19 24.5 12.3 19 0 12.3 0zm7 13.8c0 .3-.2.5-.5.5h-4.6v4.6c0 .3-.2.5-.5.5h-3c-.3 0-.5-.2-.5-.5v-4.6H5.7c-.3 0-.5-.2-.5-.5v-3c0-.3.2-.5.5-.5h4.6V5.7c0-.3.2-.5.5-.5h3c.3 0 .5.2.5.5v4.6h4.6c.3 0 .5.2.5.5l-.1 3z" class="fill nostroke"></path></svg></span></button>

  <button class="btn-icon"><span class="glyphicon glyphicon-refresh"></span></button>
{% endhighlight %}
<div class="bs-docs-example">
  <div class="">
  <button class="btn-icon"><span class="svg--icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24.5 24.5"><path d="M12.3 0C5.5 0 0 5.5 0 12.3s5.5 12.3 12.3 12.3S24.5 19 24.5 12.3 19 0 12.3 0zm7 13.8c0 .3-.2.5-.5.5h-4.6v4.6c0 .3-.2.5-.5.5h-3c-.3 0-.5-.2-.5-.5v-4.6H5.7c-.3 0-.5-.2-.5-.5v-3c0-.3.2-.5.5-.5h4.6V5.7c0-.3.2-.5.5-.5h3c.3 0 .5.2.5.5v4.6h4.6c.3 0 .5.2.5.5l-.1 3z" class="fill nostroke"></path></svg></span></button>

  <button class="btn-icon ml-10"><span class="glyphicon glyphicon-refresh"></span></button>

  <button class="btn-default btn-small ml-10">Кнопка btn-small</button>
  </div>
</div>

#### Обычная кнопка c иконкой, с иконкой и текстом

Размер обычной кнопки.

{% highlight html %}
  <button class="btn-link"><span class="svg--icon"><svg width="24" height="24"><use xlink:href="sprite.symbol.svg#glyphicons-triangle-alert"></use></svg></span></button>

  <button class="btn-link"><span class="svg--icon"><svg width="24" height="24"><use xlink:href="sprite.symbol.svg#glyphicons-filter"></use></svg></span> Фильтр</button>

  <button class="btn-success"><span class="svg--icon"><svg width="24" height="24"><use xlink:href="sprite.symbol.svg#glyphicons-cloud-download"></use></svg></span><span class="btn-text">Скачать</span></button>

  <button class="btn-primary"><span class="btn-text">Скачать</span><span class="svg--icon"><svg width="24" height="24"><use xlink:href="sprite.symbol.svg#glyphicons-cloud-download"></use></svg></span></button>
{% endhighlight %}

<div class="bs-docs-example">
  <button class="btn-link"><span class="svg--icon"><svg width="24" height="24"><use xlink:href="dist/sprite.symbol.svg#glyphicons-triangle-alert"></use></svg></span></button>
  <button class="btn-link ml-10"><span class="svg--icon"><svg width="24" height="24"><use xlink:href="dist/sprite.symbol.svg#glyphicons-filter"></use></svg></span><span class="btn-text">Фильтр</span></button>
  <button class="btn-success ml-10"><span class="svg--icon"><svg width="24" height="24"><use xlink:href="dist/sprite.symbol.svg#glyphicons-filter"></use></svg></span></button>
  <button class="btn-primary ml-10"><span class="svg--icon"><svg width="24" height="24"><use xlink:href="dist/sprite.symbol.svg#glyphicons-cloud-download"></use></svg></span><span class="btn-text">Скачать</span></button>
  <button class="btn-primary ml-10"><span class="btn-text">Скачать</span><span class="svg--icon"><svg width="24" height="24"><use xlink:href="dist/sprite.symbol.svg#glyphicons-cloud-download"></use></svg></span></button>
</div>


#### Кнопки с прозрачным фоном (outline)

{% highlight html %}
  <button class="btn-default__outline"><span class="svg--icon"><svg width="24" height="24"><use xlink:href="sprite.symbol.svg#glyphicons-triangle-alert"></use></svg></span></button>

  <button class="btn-primary__outline"><span class="svg--icon"><svg width="24" height="24"><use xlink:href="sprite.symbol.svg#glyphicons-filter"></use></svg></span> Текст кнопки</button>

  <button class="btn-success__outline"><span class="svg--icon"><svg width="24" height="24"><use xlink:href="sprite.symbol.svg#glyphicons-cloud-download"></use></svg></span><span class="btn-text">Скачать</span></button>

  <button class="btn-danger__outline"><span class="btn-text">Текст кнопки</span><span class="svg--icon"><svg width="24" height="24"><use xlink:href="sprite.symbol.svg#glyphicons-cloud-download"></use></svg></span></button>
  
  <button class="btn-warning__outline"><span class="btn-text">Текст кнопки</span><span class="svg--icon"><svg width="24" height="24"><use xlink:href="sprite.symbol.svg#glyphicons-cloud-download"></use></svg></span></button>
  
  <button class="btn-grey__outline"><span class="btn-text">Текст кнопки</span><span class="svg--icon"><svg width="24" height="24"><use xlink:href="sprite.symbol.svg#glyphicons-cloud-download"></use></svg></span></button>


{% endhighlight %}

<div class="bs-docs-example">
  <button class="btn-default__outline"><span class="svg--icon"><svg width="24" height="24"><use xlink:href="dist/sprite.symbol.svg#glyphicons-triangle-alert"></use></svg></span></button>

  <button class="btn-primary__outline"><span class="svg--icon"><svg width="24" height="24"><use xlink:href="dist/sprite.symbol.svg#glyphicons-filter"></use></svg></span> Текст кнопки</button>

  <button class="btn-success__outline"><span class="svg--icon"><svg width="24" height="24"><use xlink:href="dist/sprite.symbol.svg#glyphicons-cloud-download"></use></svg></span><span class="btn-text">Скачать</span></button>

  <button class="btn-danger__outline"><span class="btn-text">Текст кнопки</span><span class="svg--icon"><svg width="24" height="24"><use xlink:href="dist/sprite.symbol.svg#glyphicons-cloud-download"></use></svg></span></button>
  
  <button class="btn-warning__outline"><span class="btn-text">Текст кнопки</span><span class="svg--icon"><svg width="24" height="24"><use xlink:href="dist/sprite.symbol.svg#glyphicons-cloud-download"></use></svg></span></button>
  
  <button class="btn-grey__outline"><span class="btn-text">Текст кнопки</span><span class="svg--icon"><svg width="24" height="24"><use xlink:href="dist/sprite.symbol.svg#glyphicons-cloud-download"></use></svg></span></button>

</div>

#### Особые кнопки

Кнопка закачивания

<btn class="btn-download">
    <span class="btn-download_inner">
        <span class="svg--icon svg--icon__21"><svg width="24" height="24"><use xlink:href="dist/sprite.symbol.svg#bicolors-photo__24vb"></use></svg></span>
        <span class="btn-text">Добавить фото</span>
    </span>
</btn>

{% highlight html %}
<btn class="btn-download">
    <span class="btn-download_inner">
        <span class="svg--icon svg--icon__21"><svg width="24" height="24"><use xlink:href="dist/sprite.symbol.svg#bicolors-photo__24vb"></use></svg></span>
        <span class="btn-text">Добавить фото</span>
    </span>
</btn>
{% endhighlight %}
