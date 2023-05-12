---
Title: Графики & диаграммы
menutitle: Графики & диаграммы
category: components
anchor: components-charts
order: 6
---

Оформления график: в шапку помещается название и по необходимости подзаголовок. В тело `chartsBlock_body` помещаем сам график с рекомнедуемыми предустановками:
использовать пустые значения для класса и для заголовка `title`, а также обязательные стили для графика - см. пример. 
В качестве цвета `color` использовать переменные из списка:
<div class="row">
<div class="col-sm-6"><div class="mb-10"><div class="d-inline-block chartsBlock"><span style="width:20px; height:20px;display:inline-block; background-color: var(--chart-orange)"></span></div> - `var(--chart-orange)`</div></div>
<div class="col-sm-6"><div class="mb-10"><div class="d-inline-block chartsBlock"><span style="width:20px; height:20px;display:inline-block; background-color: var(--chart-dark-orange)"></span></div> - `var(--chart-dark-orange)`</div></div>
<div class="col-sm-6"><div class="mb-10"><div class="d-inline-block chartsBlock"><span style="width:20px; height:20px;display:inline-block; background-color: var(--chart-dark-red)"></span></div> - `var(--chart-dark-red)`</div></div>
<div class="col-sm-6"><div class="mb-10"><div class="d-inline-block chartsBlock"><span style="width:20px; height:20px;display:inline-block; background-color: var(--chart-red)"></span></div> - `var(--chart-red)`</div></div>
<div class="col-sm-6"><div class="mb-10"><div class="d-inline-block chartsBlock"><span style="width:20px; height:20px;display:inline-block; background-color: var(--chart-rose)"></span></div> - `var(--chart-rose)`</div></div>
<div class="col-sm-6"><div class="mb-10"><div class="d-inline-block chartsBlock"><span style="width:20px; height:20px;display:inline-block; background-color: var(--chart-dark-green)"></span></div> - `var(--chart-dark-green)`</div></div>
<div class="col-sm-6"><div class="mb-10"><div class="d-inline-block chartsBlock"><span style="width:20px; height:20px;display:inline-block; background-color: var(--chart-green)"></span></div> - `var(--chart-green)`</div></div>
<div class="col-sm-6"><div class="mb-10"><div class="d-inline-block chartsBlock"><span style="width:20px; height:20px;display:inline-block; background-color: var(--chart-light-green)"></span></div> - `var(--chart-light-green)`</div></div>
<div class="col-sm-6"><div class="mb-10"><div class="d-inline-block chartsBlock"><span style="width:20px; height:20px;display:inline-block; background-color: var(--chart-light-blue)"></span></div> - `var(--chart-light-blue)`</div></div>
<div class="col-sm-6"><div class="mb-10"><div class="d-inline-block chartsBlock"><span style="width:20px; height:20px;display:inline-block; background-color: var(--chart-blue)"></span></div> - `var(--chart-blue)`</div></div>
<div class="col-sm-6"><div class="mb-10"><div class="d-inline-block chartsBlock"><span style="width:20px; height:20px;display:inline-block; background-color: var(--chart-light-yellow2)"></span></div> - `var(--chart-light-yellow2)`</div></div>
<div class="col-sm-6"><div class="mb-10"><div class="d-inline-block chartsBlock"><span style="width:20px; height:20px;display:inline-block; background-color: var(--chart-yellow2)"></span></div> - `var(--chart-yellow2)`</div></div>
<div class="col-sm-6"><div class="mb-10"><div class="d-inline-block chartsBlock"><span style="width:20px; height:20px;display:inline-block; background-color: var(--chart-black)"></span></div> - `var(--chart-black)`</div></div>
<div class="col-sm-6"><div class="mb-10"><div class="d-inline-block chartsBlock"><span style="width:20px; height:20px;display:inline-block; background-color: var(--chart-grey)"></span></div> - `var(--chart-grey)`</div></div>
<div class="col-sm-6"><div class="mb-10"><div class="d-inline-block chartsBlock"><span style="width:20px; height:20px;display:inline-block; background-color: var(--chart-dark-grey)"></span></div> - `var(--chart-dark-grey)`</div></div>
</div>
{% highlight html %}
<div class="chartsBlock mb-10">
  <div class="chartsBlock_header">
      <div class="chartsBlock_headerItem">
          <h3>Название графика</h3>
      </div>
      <div class="chartsBlock_headerItem">
          <?= Html::tag('span', Icons::icon("bicolors-car_model__24vb"), ['class' => 'svg--icon']) ?>
      </div>
  </div>
  <div class="chartsBlock_headerSubtitles">Подзаголовок</div>
  <div class="chartsBlock_body">
    <?= Highcharts::widget([
        'htmlOptions' => [
            'class' => '',
        ],
        'options' => array_merge(
            [
                'chart' => [
                    'height' => 220,
                    'spacingTop' => 20,
                    'width' => null,
                    'style' => [
                        'fontFamily' => 'inherit',
                    ],
                ],
                'title' => [
                    'text' => '',
                ],
                'exporting' => [
                    'enabled' => true,
                    'buttons' => [ // если нужно вывести меню экспорта
                        'contextButton' => [
                            'buttonSpacing' => 0,
                            'height' => 20,
                            'menuItems' => ['viewFullscreen', 'printChart', 'separator', 'downloadPNG', 'downloadJPG','downloadPDF'],
                            'symbolStrokeWidth' =>  1,
                            'symbolFill' =>  'var(--chart-label-color)',
                            'symbolStroke' =>  'var(--chart-label-color)',
                            'symbolSize' => 16,
                            'symbolX' => 11,
                            'x' => 6,
                            'y' => -24,
                            'width' => 20,
                        ],
                    ],
                ],
                'credits'=> [
                    'enabled' => false
                ],
                'colors' => [
                        'var(--chart-blue)',
                        'var(--chart-green)',
                        'var(--chart-red)',
                        'var(--chart-light-blue)',
                        'var(--chart-orange)',
                        'var(--chart-rose)',
                        'var(--chart-light-yellow2)',
                        'var(--chart-dark-green)',
                        'var(--chart-grey)',
                        'var(--chart-light-green)',
                        'var(--chart-dark-grey)',
                        'var(--chart-black)',
                        'var(--chart-dark-red)',
                        'var(--chart-dark-orange)',
                        'var(--chart-yellow2)',
                ],
                'plotOptions' => [
                    'series' => [
                        'lineWidth' => 2, // для 'chart' => ['type' => 'spline']
                        'dataLabels' => [
                            'enabled' => true,
                            'style' => [
                                'color' => 'var(--chart-label-color)',
                                'fontSize' => '11px',
                                'fontWeight' => 'normal',
                                'textOutline' => false,
                            ],
                        ],
                    ],
                ],
                'legend' => [
                    'align' => 'right', // для ['chart' => 'type' => 'pie']
                    'verticalAlign' => 'middle', // для ['chart' => 'type' => 'pie']
                    'layout' => 'vertical', // для ['chart' => 'type' => 'pie']
                    'itemStyle' => [
                        'fontWeight' => 'normal',
                    ],
                    'padding' => 0, // для ['chart' => 'type' => 'pie']
                    'itemWidth' => null, // для ['chart' => 'type' => 'pie']
                    'width' => "60%", // для ['chart' => 'type' => 'pie']
                ],
                'tooltip' => [
                    'backgroundColor' => "#ffffff",
                ],
  </div>
</div>
{% endhighlight %}

<div class="bs-docs-example">
  <div class="chartsBlock">
    <div class="chartsBlock_header">
        <div class="chartsBlock_headerItem">
            <h3>Название графика</h3>
        </div>
        <div class="chartsBlock_headerItem">
            <span class="svg--icon"><svg width="24" height="24"><use xlink:href="dist/sprite.symbol.svg#bicolors-car_model__24vb"></use></svg></span>
        </div>
    </div>
    <div class="chartsBlock_headerSubtitles">Подзаголовок</div>
    <div class="chartsBlock_body">
        <img src="https://195004.selcdn.ru/ref/cad34c4ed697465ddeb196d06416fcc8864ea2be.jpg"> 
    </div>
  </div>
</div>