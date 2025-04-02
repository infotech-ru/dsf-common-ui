---
Title: Модификации кнопок
menutitle: Модификации
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

  <button class="btn-default ml-10">Обычная кнопка для сравнения</button>
  </div>
</div>

#### Кнопка-иконка

Размер кнопки равен размеру иконки.

_Использование:_ `btn-icon`

По умолчанию, размер иконок для кнопок = 16px.

В кнопке используются <a href="https://infotech-ru.github.io/dsf-common-ui/icons">иконки</a> с родительским контейнером оберткой - тег SPAN с классом "svg--icon" (<span class="svg--icon">):

{% highlight html %}
  <button class="btn-icon"><span class="svg--icon"><svg class="bicolors-plus" width="24" height="24"><use xlink:href="sprite.symbol.svg#bicolors-plus"></use></svg></span></button>
  <button class="btn-icon"><span class="svg--icon"><svg class="bicolors-arrows_reload" width="24" height="24"><use xlink:href="sprite.symbol.svg#bicolors-arrows_reload"></use></svg></span></button>
  <button class="btn-icon"><span class="svg--icon svg-danger"><svg class="bicolors-delete" width="24" height="24"><use xlink:href="sprite.symbol.svg#bicolors-delete"></use></svg></span></button>
  <button class="btn-icon btn-icon_h20"><span class="svg--icon"><svg class="bicolors-plus__24vb" width="24" height="24"><use xlink:href="sprite.symbol.svg#bicolors-plus__24vb"></use></svg></span></button>
{% endhighlight %}
<div class="bs-docs-example">
  <div class="">
  <button class="btn-icon"><span class="svg--icon"><svg class="bicolors-plus" width="24" height="24"><use xlink:href="/dsf-common-ui/dist/sprite.symbol.svg#bicolors-plus"></use></svg></span></button>
  <button class="btn-icon ml-10"><span class="svg--icon"><svg class="bicolors-arrows_reload" width="24" height="24"><use xlink:href="/dsf-common-ui/dist/sprite.symbol.svg#bicolors-arrows_reload"></use></svg></span></button>
  <button class="btn-icon ml-10"><span class="svg--icon svg-danger"><svg class="bicolors-delete" width="24" height="24"><use xlink:href="/dsf-common-ui/dist/sprite.symbol.svg#bicolors-delete"></use></svg></span></button>
  <button class="btn-icon btn-icon_h20 ml-10"><span class="svg--icon"><svg class="bicolors-plus__24vb" width="24" height="24"><use xlink:href="/dsf-common-ui/dist/sprite.symbol.svg#bicolors-plus__24vb"></use></svg></span></button>
  <button class="btn-default btn-small ml-10">Кнопка btn-small для сравнения</button>
  </div>
</div>

#### Обычная кнопка c иконкой, с иконкой и текстом

Размер обычной кнопки.

{% highlight html %}
  <button class="btn-link"><span class="svg--icon"><svg class="bicolors-plus" width="24" height="24"><use xlink:href="sprite.symbol.svg#bicolors-plus"></use></svg></span><span class="btn-text">Добавить</span></button>
  
  <button class="btn-success__outline"><span class="svg--icon"><svg class="bicolors-filter" width="24" height="24"><use xlink:href="sprite.symbol.svg#bicolors-filter"></use></svg></span></button>

  <button class="btn-danger__outline"><span class="svg--icon"><svg class="bicolors-delete" width="24" height="24"><use xlink:href="sprite.symbol.svg#bicolors-delete"></use></svg></span><span class="btn-text">Удалить</span></button>

  <button class="btn-primary"><span class="svg--icon"><svg class="bicolors-plus" width="24" height="24"><use xlink:href="sprite.symbol.svg#bicolors-plus"></use></svg></span><span class="btn-text">Добавить</span></button>

  <button class="btn-primary__outline"><span class="btn-text">Скачать</span><span class="svg--icon"><svg class="bicolors-export" width="24" height="24"><use xlink:href="sprite.symbol.svg#bicolors-export"></use></svg></span></button>
{% endhighlight %}

<div class="bs-docs-example">
  <button class="btn-link"><span class="svg--icon"><svg  class="bicolors-plus" width="24" height="24"><use xlink:href="/dsf-common-ui/dist/sprite.symbol.svg#bicolors-plus"></use></svg></span><span class="btn-text">Добавить</span></button>
  <button class="btn-success__outline ml-10"><span class="svg--icon"><svg  class="bicolors-filter" width="24" height="24"><use xlink:href="/dsf-common-ui/dist/sprite.symbol.svg#bicolors-filter"></use></svg></span></button>
  <button class="btn-danger__outline ml-10"><span class="svg--icon"><svg class="bicolors-delete" width="24" height="24"><use xlink:href="/dsf-common-ui/dist/sprite.symbol.svg#bicolors-delete"></use></svg></span><span class="btn-text">Удалить</span></button>
  <button class="btn-primary ml-10"><span class="svg--icon"><svg class="bicolors-plus" width="24" height="24"><use xlink:href="/dsf-common-ui/dist/sprite.symbol.svg#bicolors-plus"></use></svg></span><span class="btn-text">Добавить</span></button>
  <button class="btn-primary__outline ml-10"><span class="btn-text">Скачать</span><span class="svg--icon"><svg class="bicolors-export" width="24" height="24"><use xlink:href="/dsf-common-ui/dist/sprite.symbol.svg#bicolors-export"></use></svg></span></button>
</div>



#### Особые кнопки

{% highlight html %}
<button class="btn-download"><span class="btn-download_inner"><?= Icons::withText('bicolors-photo', Yii::t('app', 'Добавить фото')) ?></span></button>

<button class="btn-download btn-download__large"><span class="btn-download_inner"><?= Icons::withText('bicolors-photo__24vb', Yii::t('app', 'Добавить фото')) ?></span></button>

<button class="btn-download btn-download__square"><span class="btn-download_inner"><?= Icons::withText('bicolors-photo__24vb', Yii::t('app', 'Добавить фото')) ?></span></button>

<button class="btn-download btn-download__circle"><span class="btn-download_inner"><?= Icons::withText('bicolors-photo__24vb', Yii::t('app', 'Добавить фото')) ?></span></button>
>
<div class="blockBusinessCardLeft">
    <div class="blockBusinessCardLeft_image blockBusinessCardLeft_image__personal">
      <button class="btn-download btn-download__circle btn-download__onHover p-absolute top-0"><span class="btn-download_inner"><?= Icons::withText('bicolors-photo__24vb', Yii::t('app', 'Добавить фото')) ?></span></button>
    </div>
</div>

{% endhighlight %}
<div class="bs-docs-example">
  <div class="row">
    <div class="col-3">
      <p>Кнопка для закачивания файлов</p>
      <button class="btn-download">
          <span class="btn-download_inner">
              <span class="svg--icon"><svg width="24" height="24"><use xlink:href="/dsf-common-ui/dist/sprite.symbol.svg#bicolors-photo"></use></svg></span>
              <span class="btn-text">Добавить фото</span>
          </span>
      </button>
    </div>
    <div class="col-3">
      <p>Кнопка для закачивания файлов большая</p>
      <button class="btn-download btn-download__large">
          <span class="btn-download_inner">
              <span class="svg--icon"><svg width="24" height="24"><use xlink:href="/dsf-common-ui/dist/sprite.symbol.svg#bicolors-photo__24vb"></use></svg></span>
              <span class="btn-text">Добавить фото</span>
          </span>
      </button>
    </div>
    <div class="col-3">
      <p>Кнопка для закачивания файлов квадратная большая</p>
      <button class="btn-download btn-download__square">
          <span class="btn-download_inner">
              <span class="svg--icon"><svg width="24" height="24"><use xlink:href="/dsf-common-ui/dist/sprite.symbol.svg#bicolors-photo__24vb"></use></svg></span>
              <span class="btn-text">Добавить фото</span>
          </span>
      </button>
    </div>
    <div class="col-3">
    <p>Кнопка без изменения при наведении</p>
      <button class="btn-download btn-download__circle">
          <span class="btn-download_inner">
              <span class="svg--icon"><svg width="24" height="24"><use xlink:href="/dsf-common-ui/dist/sprite.symbol.svg#bicolors-photo__24vb"></use></svg></span>
              <span class="btn-text">Добавить фото</span>
          </span>
      </button>
    </div>
  <div class="col-3">
      <p>Кнопка с изменением при наведении</p>
    <div class="blockBusinessCardLeft">
        <div class="blockBusinessCardLeft_image blockBusinessCardLeft_image__personal">
          <button class="btn-download btn-download__circle btn-download__onHover">
              <span class="btn-download_inner">
                  <span class="svg--icon"><svg width="24" height="24"><use xlink:href="/dsf-common-ui/dist/sprite.symbol.svg#bicolors-photo__24vb"></use></svg></span>
                  <span class="btn-text">Добавить фото</span>
              </span>
          </button>
        </div>
    </div>
  </div>
</div>