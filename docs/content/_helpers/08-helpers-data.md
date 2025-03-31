---
Title: Особое оформление данных
menutitle: Особое оформление данных
category: helpers
anchor: helpers-data
order: 8
---

Установлено оформление для отдельных полей:

### Телефона

`phoneField__orange` - оранжевый

`phoneField__blue`  -синий

### Комментарий

`commentField`

### Вывод или выбор цвета

`colorField` - родитель 

`colorField__formControl` - модификатор с измененной высотой, для встраивание в формы

`colorField_formControl` - цветной кружок - заполненый бекграундом переданным через style="background:..."

Для вывода hex значения рядом с кругом передаем его через дата-атрибут `data-colorfield`

{% highlight html %}
  <div class="phoneField__orange">+7(910)000-00-00</div>
  <div class="phoneField__blue">+7(910)000-00-00</div>
  <div class="commentField">комментарий</div>
  <div class="form-group"> 
      <label class="control-label bg-clear active">&nbsp;</label>
      <?= $form->field($model, 'color', ['options' => ['class' => 'colorField colorField__form-control', 'data-colorField' => $model->color ? $model->color : '#000000']])->input('color', ['class' => 'colorField_formControl'])->label(false) ?>
  </div>
{% endhighlight %}
<div class="bs-docs-example">
  <div class="phoneField__orange mb-10">+7(910)000-00-00</div>
  <div class="phoneField__blue mb-10">+7(910)000-00-00</div>
  <div class="commentField">комментарий</div>
  <div class="form-group">
    <label class="control-label bg-clear active">&nbsp;</label>
    <div class="colorField colorField__form-control" data-colorfield="#BABABA">
      <input type="color" id="" class="colorField_formControl" name="" value="#BABABA">
    </div>
  </div>
</div>
### Оформление картинок
Размеры - 64px и 128px(`.thumbnail__bigSize`). 
.thumbnailActions - блок с кнопками действия. Иконки с размером 20.
.thumbnailActionsBtn - класс кнопок. .thumbnailActionsBtn__shadow - вариант оформления с тенью
.thumbnailCaption - блок с текстом, например имя картинки
.thumbnailImgWrapper - блок обретка картинки `<div>` или `<a>`
{% highlight html %}
<div class="thumbnail thumbnail__bigSize">
    <div class="thumbnailInner">
        <div class="thumbnailActions">
            <a class="thumbnailActionsBtn thumbnailActionsBtn__shadow" href="#">
                <span class="svg--icon svg--icon__20 svg-primary">
                    <svg class="bicolors-photo__24vb" width="24" height="24"><use xlink:href="/dsf-common-ui/dist/sprite.symbol.svg#bicolors-photo__24vb"></use></svg>
                </span>
            <a class="thumbnailActionsBtn thumbnailActionsBtn__shadow" href="#">
                <span class="svg--icon svg--icon__20 svg-primary">
                    <svg class="bicolors-delete__24vb" width="24" height="24"><use xlink:href="/dsf-common-ui/dist/sprite.symbol.svg#bicolors-delete__24vb"></use></svg>
                </span>
            </a>
        </div>
        <div class="thumbnailCaption">Имя картинки</div>
        <div class="thumbnailImgWrapper"><img src="https://placehold.co/200x200/69C26A/FFFFFF/jpg?text=Infotech+UI%5CnImage+1" alt=""></div>
    </div>
</div>
{% endhighlight %}
<div class="bs-docs-example">
    <div class="d-flex gap-10">
        <div class="thumbnail thumbnail__bigSize">
            <div class="thumbnailInner">
                <div class="thumbnailActions">
                    <a class="thumbnailActionsBtn thumbnailActionsBtn__shadow" href="#">
                        <span class="svg--icon svg--icon__20 svg-primary">
                            <svg class="bicolors-photo__24vb" width="24" height="24"><use xlink:href="/dsf-common-ui/dist/sprite.symbol.svg#bicolors-photo__24vb"></use></svg>
                        </span>
                    <a class="thumbnailActionsBtn thumbnailActionsBtn__shadow" href="#">
                        <span class="svg--icon svg--icon__20 svg-primary">
                            <svg class="bicolors-delete__24vb" width="24" height="24"><use xlink:href="/dsf-common-ui/dist/sprite.symbol.svg#bicolors-delete__24vb"></use></svg>
                        </span>
                    </a>
                </div>
                <div class="thumbnailCaption">Имя картинки 1</div>
                <div class="thumbnailImgWrapper"><img src="https://placehold.co/200x200/69C26A/FFFFFF/jpg?text=Infotech+UI%5CnImage+1" alt=""></div>
            </div>
        </div>
        <div class="thumbnail">
            <div class="thumbnailInner">
                <div class="thumbnailActions">
                    <a class="thumbnailActionsBtn" href="#">
                        <span class="svg--icon svg--icon__20 svg-primary">
                            <svg class="bicolors-photo__24vb" width="24" height="24"><use xlink:href="/dsf-common-ui/dist/sprite.symbol.svg#bicolors-photo__24vb"></use></svg>
                        </span>
                    <a class="thumbnailActionsBtn thumbnailActionsBtn__shadow" href="#">
                        <span class="svg--icon svg--icon__20 svg-primary">
                            <svg class="bicolors-delete__24vb" width="24" height="24"><use xlink:href="/dsf-common-ui/dist/sprite.symbol.svg#bicolors-delete__24vb"></use></svg>
                        </span>
                    </a>
                </div>
                <div class="thumbnailCaption">Имя картинки 2</div>
                <div class="thumbnailImgWrapper"><img src="https://placehold.co/200x200/69C26A/FFFFFF/jpg?text=Infotech+UI%5CnImage+1" alt=""></div>
            </div>
        </div>
    </div>
</div>
### Блок-визитка
Используется для вывода информации о клиенте или обе его контакте или об автомобиле.
{% highlight html %}
  <div class="d-flex">
    <div class="blockBusinessCardLeft">
        <div class="blockBusinessCardLeft_image blockBusinessCardLeft_image__personal">
          <img src="" />
        </div>
    </div>
    <div class="blockBusinessCardRight">
    </div>
  </div>
{% endhighlight %}
<div class="bs-docs-example">
    <div class="d-flex mb-10">
        <div class="blockBusinessCardLeft">
            <div class="blockBusinessCardLeft_image blockBusinessCardLeft_image__personal"></div>
        </div>
        <div class="blockBusinessCardRight">
            <div class="row">
                <div class="col-sm-3">
                    <label class="control-label">Заголовок информации</label>
                    <div>Информация</div>
                </div> 
                <div class="col-sm-3">
                    <label class="control-label">Заголовок информации</label>
                    <div>Информация</div>
                </div> 
                <div class="col-sm-3">
                    <label class="control-label">Заголовок информации</label>
                    <div>Информация</div>
                </div> 
            </div> 
        </div>
    </div>
    <div class="d-flex mb-10">
        <div class="blockBusinessCardLeft">
            <div class="blockBusinessCardLeft_image blockBusinessCardLeft_image__auto"></div>
        </div>
        <div class="blockBusinessCardRight">
            <div class="row">
                <div class="col-sm-3">
                    <label class="control-label">Заголовок информации</label>
                    <div>Информация</div>
                </div> 
                <div class="col-sm-3">
                    <label class="control-label">Заголовок информации</label>
                    <div>Информация</div>
                </div> 
                <div class="col-sm-3">
                    <label class="control-label">Заголовок информации</label>
                    <div>Информация</div>
                </div> 
            </div> 
        </div>
    </div>
    <div class="padding-10 border border-grey4 border__dotted mb-20">
        <div class="unityBlock_header">
            <div class="unityBlock_headerItem overflow-ellipsis">
                <div class="d-inline-flex align-center fz13 text-grey4 mr-20">Контактное лицо</div>
            </div>
            <div class="unityBlock_headerItem">
            </div>
        </div>
        <div class="unityBlock_body">
            <div class="d-flex">
                <div class="blockBusinessCardLeft pl-0">
                    <div class="blockBusinessCardLeft_image blockBusinessCardLeft_image__contact"></div>
                </div>
                <div class="blockBusinessCardRight pr-0">
                    <div class="row">
                        <div class="col-sm-3">
                            <label class="control-label">Заголовок информации</label>
                            <div>Информация</div>
                        </div> 
                        <div class="col-sm-3">
                            <label class="control-label">Заголовок информации</label>
                            <div>Информация</div>
                        </div> 
                        <div class="col-sm-3">
                            <label class="control-label">Заголовок информации</label>
                            <div>Информация</div>
                        </div> 
                    </div> 
                </div>
            </div>
        </div>
    </div>
</div>

### Блоки с изменением фона при наведении

`square` - базовый класс оформления блоков

`square__shadowOnHover` - тень при наведении

`square__borderThick` - бордер толщиной 2px

Следующие модификации `square` возможно использовать отдельно: 
При наличии в блоке класса `isHover`, `active` или при наведение по псевдоклассу будет изменяться фон, бордер и цвет шрифта.

<div class="bs-docs-example">
  <div class="row">
    {% for item in site.data.jekyll.brandHover %}
      <div class="col-2 mb-10"><div class="square square{{ item.name }}" style="height:40px"><span class="fz14">square{{ item.name }}</span></div></div>
    {% endfor %}
  </div>
</div>
