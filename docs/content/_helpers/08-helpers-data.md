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
