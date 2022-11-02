---
Title: Поле загрузки / custom Upload
menutitle: Поле загрузки / custom Upload
category: forms
anchor: upload
order: 1
---

### Кастомизированное поле загрузки.
Требуется подключение скрипта `CustomFileUpload` для вывода имени выбранного файла в кнопку

{% highlight html %}
use app\helpers\Icons;
use \yii\bootstrap\ActiveForm;
$this->registerJs('DSF.CustomFileUpload();');

<?= $form->field($model, 'file', ['options' => ['class' => 'fileUpload_item js-customFileUploadItem'], 'template' => '<label class="control-label">{labelTitle}</label>{input}{beginLabel}<span class="svg--icon">' . Icons::icon('glyphicons-cloud-download') . '</span><span class="btn-text"><span class="js-fileUploadLabelText fileUpload_labelText">' . Yii::t('app', 'Выбрать файл') . '</span></span>{endLabel}{error}'])->fileInput(['class' => 'form-control fileUpload_input js-customFileUploadInput'])->label(null, ['class' => 'fileUpload_label btn-default']); ?>
{% endhighlight %}

{% highlight html %}
<div class="fileUpload_item js-customFileUploadItem">
  <label class="control-label">Файл</label>
  <input type="file" class="form-control fileUpload_input js-customFileUploadInput">
  <label class="fileUpload_label btn-default" for="clientimportform-file">
    <span class="svg--icon">
      <svg class="glyphicons-cloud-download" width="24" height="24"><use xlink:href="/dist/sprite.symbol.svg#glyphicons-cloud-download"></use></svg>
    </span>
    <span class="btn-text">
      <span class="js-fileUploadLabelText fileUpload_labelText">Выбрать файл</span>
    </span>
  </label>
    <p class="help-block help-block-error"></p>
</div>
{% endhighlight %}

<div class="bs-docs-example">
  <div class="fileUpload_item js-customFileUploadItem">
    <label class="control-label">Файл</label>
    <input type="file" class="form-control fileUpload_input js-customFileUploadInput">
    <label class="fileUpload_label btn-default" for="clientimportform-file">
      <span class="svg--icon">
        <svg class="glyphicons-cloud-download" width="24" height="24"><use xlink:href="dist/sprite.symbol.svg#glyphicons-cloud-download"></use></svg>
      </span>
      <span class="btn-text">
        <span class="js-fileUploadLabelText fileUpload_labelText">Выбрать файл</span>
      </span>
    </label>
    <p class="help-block help-block-error"></p>
  </div>
</div>