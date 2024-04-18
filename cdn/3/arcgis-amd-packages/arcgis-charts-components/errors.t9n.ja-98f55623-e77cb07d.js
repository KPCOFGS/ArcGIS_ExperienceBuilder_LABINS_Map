/*! For license information please see errors.t9n.ja-98f55623-e77cb07d.js.LICENSE.txt */
define(["exports"],(function(e){"use strict";const t="チャートの読み込み中にエラーが発生しました。",i="このチャートには、合計 ${ elementCount } 個のバーがあります。 系列が 1 つのバー チャートは、${ totalLimit } バーに制限されます。 個別値の数が少ないカテゴリ フィールドを選択するか、データにフィルターを適用してください。",a="系列が 2 つのバー チャートは、${ totalLimit } バー、または系列あたり ${ seriesLimit } バーに制限されます。 個別値の数が少ないカテゴリ フィールドを選択するか、データにフィルターを適用してください。",n="系列が 3 つ以上のバー チャートは、${ totalLimit } バー、または系列あたり ${ seriesLimit } バーに制限されます。 個別値の数が少ないカテゴリ フィールドを選択するか、データにフィルターを適用してください。",o="バー チャートの最大系列数は ${ seriesLimit } に制限されています。 個別値が少ない分割フィールドを選択してください",r="チャートの作成中にエラーが発生しました。",s="対数変換は負またはゼロの値に適用できません。",m="平方根変換は負の値に適用できません。",u="レイヤーの読み込み中にエラーが発生しました。 URL = ${ url } ポータル アイテム ID = ${ portalItemId }",d="${ dataPath } は一意である必要があります。 ${ seriesName } という系列の ID (${ seriesID }) は、別の系列ですでに使用されています。",l="${ dataPath } は、数値以外のフィールドで、個数以外の集約を実行することはできません。",C="${ dataPath } に ${ missingProperty } というプロパティがありません。",L="${ dataPath } は ${ limit } 文字以上である必要があります。",$="${ dataPath } のアイテムは ${ limit } 以上にする必要があります。",c="${ dataPath } のアイテムは ${ limit } 以下にする必要があります。",x="${ dataPath } には空白以外の文字が 1 つ以上含まれている必要があります。",E="${ dataPath } が ${ additionalProperty } を持つことはできません。",S="${ dataPath } は、次のいずれかの許可された値と等しい必要があります: ${ allowedValues }",h="${ dataPath } は、次のいずれかのスキーマと一致する必要があります: ${ schemaOptions }",P="比例シンボルを使用した散布図はサポートされていません。 デフォルトのシンボル サイズが適用されています。",g="入力データを読み取れません。",p="ヒストグラムには、少なくとも 2 つの数値が必要です。",y="インデックス ${ seriesIndex } で必要な系列タイプは ${ expectedType } ですが、代わりに ${ receivedType } が指定されました",I="選択された数値フィールドの合計値から返される値がすべて正の値であるか、すべて負の値であることを確認します。",v="このチャートには合計 ${ sliceCount } 個のスライスがあります。 パイ チャートのスライス数は ${ totalLimit } に制限されています。 個別値の数が少ないカテゴリ フィールドを選択するか、追加する数値フィールドの数を減らすか、データにフィルターを適用してください。",f="フィーチャ ベースのゲージは ${ totalLimit } 個のフィーチャに制限されています。 データをフィルター処理してください。",b="このチャートには、合計 ${ elementCount } 個のマーカーがあります。 系列が 1 つのライン チャートは、${ totalLimit } マーカーに制限されています。 個別値の数が少ないカテゴリ フィールドを選択するか、データにフィルターを適用してください。",q="系列が 2 つのライン チャートは、${ totalLimit } マーカー、または系列あたり ${ seriesLimit } マーカーに制限されています。 個別値の数が少ないカテゴリ フィールドを選択するか、データにフィルターを適用してください。",B="系列が 3 つ以上のライン チャートは、${ totalLimit } マーカー、または系列あたり ${ seriesLimit } マーカーに制限されています。 個別値の数が少ないカテゴリ フィールドを選択するか、データにフィルターを適用してください。",V="ライン チャートの最大系列数は ${ seriesLimit } に制限されています。 個別値が少ない分割フィールドを選択してください",w="このチャートには、合計 ${ elementCount } 個のボックスがあります。 系列が 1 つの箱ひげ図は、${ totalLimit } ボックスに制限されます。 個別値の数が少ないカテゴリ フィールドを選択するか、データにフィルターを適用してください。",D="系列が 2 つの箱ひげ図は、${ totalLimit } ボックス、または系列あたり ${ seriesLimit } ボックスに制限されます。 個別値の数が少ないカテゴリ フィールドを選択するか、データにフィルターを適用してください。",F="系列が 3 つ以上の箱ひげ図は、${ totalLimit } ボックス、または系列あたり ${ seriesLimit } ボックスに制限されます。 個別値の数が少ないカテゴリ フィールドを選択するか、データにフィルターを適用してください。",T="箱ひげ図の最大系列数は ${ seriesLimit } に制限されています。 個別値が少ない分割フィールドを選択してください",O="箱ひげ図が表示できる範囲外ポイントの最大数は ${ totalLimit } 個です。 データをフィルター処理してください。";var N={defaultError:t,uniqueSeriesBarCountCannotExceedLimit:i,twoSeriesBarCountCannotExceedLimit:a,threePlusSeriesBarCountCannotExceedLimit:n,barSeriesCountCannotExceedLimit:o,defaultInvalidChart:r,negativeValueInDataForLogTransformation:s,negativeValueInDataForSqrtTransformation:m,layerLoadFailure:u,duplicateSeriesID:d,nonNumericAggregation:l,requiredProperty:C,minLength:L,minItems:$,maxItems:c,whiteSpacePattern:x,additionalProperty:E,enumValues:S,anyOfValues:h,bubbleChartValidateMsg:P,queryError:g,histogramEmptyField:p,invalidSeriesType:y,or:"または",pieChartCannotHaveMixtureOfPositiveAndNegativeSlices:I,pieChartSlicesCannotExceedLimit:v,gaugeCannotExceedLimit:f,uniqueSeriesLineCountCannotExceedLimit:b,twoSeriesLineCountCannotExceedLimit:q,threePlusSeriesLineCountCannotExceedLimit:B,lineSeriesCountCannotExceedLimit:V,uniqueSeriesBoxCountCannotExceedLimit:w,twoSeriesBoxCountCannotExceedLimit:D,threePlusBoxLineCountCannotExceedLimit:F,boxSeriesCountCannotExceedLimit:T,boxSeriesOutlierCannotExceedLimit:O};e.additionalProperty=E,e.anyOfValues=h,e.barSeriesCountCannotExceedLimit=o,e.boxSeriesCountCannotExceedLimit=T,e.boxSeriesOutlierCannotExceedLimit=O,e.bubbleChartValidateMsg=P,e.default=N,e.defaultError=t,e.defaultInvalidChart=r,e.duplicateSeriesID=d,e.enumValues=S,e.gaugeCannotExceedLimit=f,e.histogramEmptyField=p,e.invalidSeriesType=y,e.layerLoadFailure=u,e.lineSeriesCountCannotExceedLimit=V,e.maxItems=c,e.minItems=$,e.minLength=L,e.negativeValueInDataForLogTransformation=s,e.negativeValueInDataForSqrtTransformation=m,e.nonNumericAggregation=l,e.or="または",e.pieChartCannotHaveMixtureOfPositiveAndNegativeSlices=I,e.pieChartSlicesCannotExceedLimit=v,e.queryError=g,e.requiredProperty=C,e.threePlusBoxLineCountCannotExceedLimit=F,e.threePlusSeriesBarCountCannotExceedLimit=n,e.threePlusSeriesLineCountCannotExceedLimit=B,e.twoSeriesBarCountCannotExceedLimit=a,e.twoSeriesBoxCountCannotExceedLimit=D,e.twoSeriesLineCountCannotExceedLimit=q,e.uniqueSeriesBarCountCannotExceedLimit=i,e.uniqueSeriesBoxCountCannotExceedLimit=w,e.uniqueSeriesLineCountCannotExceedLimit=b,e.whiteSpacePattern=x}));