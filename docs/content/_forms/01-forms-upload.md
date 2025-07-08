---
Title: Поле загрузки / custom Upload
menutitle: Поле загрузки / custom Upload
category: forms
anchor: upload
order: 1
---

### Кастомизированное поле загрузки.
Требуется подключение скрипта `CustomFileUpload` для вывода имени выбранного файла в кнопку.
Варианты оформления кнопок загрузки 

{% highlight html %}
use app\helpers\Icons;
use \yii\bootstrap\ActiveForm;
$this->registerJs('DSF.CustomFileUpload();');
<div class="js-customFileUploadItem">
  <?= $form->field($model, 'file', ['options' => ['class' => 'd-none js-customFileUploadItem']])->fileInput(['class' => 'form-control js-customFileUploadInput', id="<?= $this->getId() ?>"])->label(false); ?>
  <label class="btn-download btn-download__large w-100p" for="<?= $this->getId() ?>">
    <span class="btn-download_inner">
      <?= Icons::wrapper('bicolors-doc__24vb', ['class' => 'svg--icon svg--icon__h21']) ?>
      <span class="btn-text"><?= Yii::t('app', 'Добавить файл') ?></span>
    </span>
  </label>
    <div class="d-flex align-center gap-5 pt-5 pb-5 d-none js-fileUploadLabel">
      <?= Icons::wrapper('bicolors-doc__24vb', ['class' => 'svg--icon svg--icon__20']) ?>
    <div class="js-fileUploadLabelText"></div>
  </div>
  <div class="fz11 text-grey4 mt-10">
    <?= Yii::t('app', 'Типы файлов *.pdf, *.doc, *.docx, *.jpg, *.jpeg, *.png, *.xls, *.xlsx, *.zip, *.rar, *.odd, *.txt. Макс. размер 80 Mb') ?>
  </div>
</div>
{% endhighlight %}

<div class="bs-docs-example">
  <div class="js-customFileUploadItem">
    <input type="file" class="form-control js-customFileUploadInput d-none" id="getId">
    <label class="btn-download btn-download__large" for="getId">
      <span class="btn-download_inner">
        <span class="svg--icon svg--icon__24vb svg--icon__h21">
          <svg class="bicolors-doc__24vb" width="24" height="24"><use xlink:href="//dsf-common-ui/dist/sprite.symbol.svg#bicolors-doc__24vb"></use></svg>
        </span>
        <span class="btn-text"><?= Yii::t('app', 'Добавить файл') ?></span>
      </span>
    </label>
    <div class="d-flex align-center gap-5 pt-5 pb-5 d-none js-fileUploadLabel">
      <span class="svg--icon svg--icon__24vb svg--icon__20 ">
        <svg class="bicolors-doc__24vb" width="24" height="24"><use xlink:href="//dsf-common-ui/dist/sprite.symbol.svg#bicolors-doc__24vb"></use></svg>
      </span>
      <?= Icons::wrapper('bicolors-doc__24vb', ['class' => 'svg--icon svg--icon__20']) ?>
      <div class="js-fileUploadLabelText"></div>
    </div>
    <div class="fz11 text-grey4 mt-10">
      <?= Yii::t('app', 'Типы файлов *.pdf, *.doc, *.docx, *.jpg, *.jpeg, *.png, *.xls, *.xlsx, *.zip, *.rar, *.odd, *.txt. Макс. размер 80 Mb') ?>
    </div>
  </div>
</div>