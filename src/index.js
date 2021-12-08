const generalOfPage = {
  pageTitle: "利用済みクーポン一覧",
  history: "#",
  txtDate: "利用日",
  txtSelected: "選択済み",
  txtExpiration: "利用期間",
  txtConcat: "~",
  txtUntil: "まで",
}
const listUsedCoupon = [
  {
    date: "20XX年X月X日",
    coupons: [
      {
        productImage: "./assets/img/img-product.png",
        productName: "外国産バナナ10円引き",
        conditionLimit: "1家族1点限り",
        couponStatus: "利用済み",
        mfgDate: "2021年12月1日",
        expDate: "2022年1月◯日",
        combineStatus: "併用可",
      },
      {
        productImage: "./assets/img/img-product.png",
        productName: "外国産バナナ10円引き",
        conditionLimit: "1家族1点限り",
        couponStatus: "利用済み",
        mfgDate: "2021年12月1日",
        expDate: "2022年1月◯日",
        combineStatus: "併用可",
      },
    ]
  },
  {
    date: "20XX年X月X日",
    coupons: [
      {
        productImage: "./assets/img/img-product.png",
        productName: "外国産バナナ10円引き",
        conditionLimit: "1家族1点限り",
        couponStatus: "利用済み",
        mfgDate: "2021年12月1日",
        expDate: "2022年1月◯日",
        combineStatus: "併用可",
      },
    ]
  }
]

function htmlCoupon(value, index, array) {
  htmlUsedCoupon +='<div class="coupon-detail">';
    htmlUsedCoupon +='<header class="selected"><i class="fa fa-check-circle"></i>' + generalOfPage.txtSelected + '</header>';

    htmlUsedCoupon +='<div class="pay-for">';
      htmlUsedCoupon +='<div class="col-left">';
        htmlUsedCoupon +='<div class="product-image">';
          htmlUsedCoupon +='<img src="' + value.productImage + '" alt="image product"/>';
        htmlUsedCoupon +='</div>';
        htmlUsedCoupon +='<h4 class="product-name">' + value.productName + '</h4>';
        htmlUsedCoupon +='<span class="condition-limit">' + value.conditionLimit + '</span>';
      htmlUsedCoupon +='</div>';

      htmlUsedCoupon +='<div class="col-right">';
        htmlUsedCoupon +='<div class="coupon-status">' + value.couponStatus + '</div>';
      htmlUsedCoupon +='</div>';
    htmlUsedCoupon +='</div>';

    htmlUsedCoupon +='<footer class="info-extra">';
      htmlUsedCoupon +='<div class="expiration-date">';
        htmlUsedCoupon +='<span class="txt-expiration">' + generalOfPage.txtExpiration + '</span>';
        htmlUsedCoupon +='<span class="mfg-date">' + value.mfgDate + '</span>';
        htmlUsedCoupon +='<span class="txt-concat">' + generalOfPage.txtConcat + '</span>';
        htmlUsedCoupon +='<span class="exp-date">' + value.expDate + '</span>';
        htmlUsedCoupon +='<span class="txt-until">' + generalOfPage.txtUntil + '</span>';
      htmlUsedCoupon +='</div>';
      htmlUsedCoupon +='<div class="combine-status">' + value.combineStatus + '</div>';
    htmlUsedCoupon +='</footer>';
    htmlUsedCoupon +='</div>';
}

function htmlListCoupons(value, index, array) {
    htmlUsedCoupon += '<div class="coupons by-date">';

      htmlUsedCoupon += '<header class="used-on">';
        htmlUsedCoupon +='<span>';
          htmlUsedCoupon +='<span class="txt-date">' + generalOfPage.txtDate + '</span>' + value.date;
        htmlUsedCoupon +='</span>';
      htmlUsedCoupon +='</header>';

      value.coupons.forEach(htmlCoupon);

    htmlUsedCoupon +='</div>';
}

let htmlUsedCoupon = '';
htmlUsedCoupon += '<div class="list-used-coupons">';
listUsedCoupon.forEach(htmlListCoupons);
htmlUsedCoupon +='</div>';

document.querySelector(".page-title > h1").innerHTML = generalOfPage.pageTitle;
document.querySelector(".btn-back").setAttribute("href", generalOfPage.history);
document.querySelector(".main-content").innerHTML = htmlUsedCoupon;