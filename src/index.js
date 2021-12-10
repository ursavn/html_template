const apiUrl = "https://ebpjaflws4.execute-api.ap-southeast-1.amazonaws.com/dev";

const generalOfPage = {
  pageTitle: "利用済みクーポン一覧",
  history: "#",
  txtDate: "利用日",
  txtSelected: "選択済み",
  txtExpiration: "利用期間",
  txtConcat: "~",
  txtUntil: "まで",
  txtDiscount: "引き",
  errorMessage: "ネットワークに接続されていません。接続環境をご確認ください。"
}

function init() {
  document.querySelector(".page-title > h1").innerHTML = generalOfPage.pageTitle;
  document.querySelector(".btn-back").setAttribute("href", generalOfPage.history);

  loadData();
}

/**
 * Get data from API
 */
function loadData() {
  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      if(xhttp.responseText) {
        display(JSON.parse(xhttp.responseText));
      }
    }
  }
  xhttp.onerror = function(e) {
    document.querySelector(".main-content").innerHTML = `
      <h3 class="center">${generalOfPage.errorMessage}</h3>
    `;
  }
  xhttp.open("GET", apiUrl, true);
  xhttp.send();
}

/**
 * Display data
 */
function display(list) {  
  let htmlUsedCoupon = '';
  for(const item of list) {
    htmlUsedCoupon += htmlListCoupons(item);
  }

  document.querySelector(".main-content").innerHTML = `
    <div class="list-used-coupons">
       ${htmlUsedCoupon}
    </div>
  `;
}

/**
 * Return html coupon list
 */
function htmlListCoupons(value) {
  let html = '';
  for(const coupon of value.coupons) {
    html += htmlCoupon(coupon);
  }

  return `
    <div class="coupons by-date">
      <header class="used-on">
        <span>
          <span class="txt-date">${generalOfPage.txtDate}</span>${value.date}
        </span>
      </header>
      ${html}
    </div>`;
}

/**
 * Return html of coupon detail
 */
function htmlCoupon(value) {
  return `
    <div class="coupon-detail">
      <header class="selected"><i class="fa fa-check-circle"></i>${generalOfPage.txtSelected}</header>

      <div class="pay-for">
        <div class="col-left">
          <div class="product-image">
            <img src="${value.productImage}" alt="image product"/>
          </div>
          <h4 class="product-name">${value.productName}</h4>
          <h4 class="discount">${value.discount + generalOfPage.txtDiscount}</h4>
          <span class="condition-limit">${value.conditionLimit}</span>
        </div>

        <div class="col-right">
          <div class="coupon-status">${value.couponStatus}</div>
        </div>
      </div>

      <footer class="info-extra">
        <div class="expiration-date">
          <span class="txt-expiration">${generalOfPage.txtExpiration}</span>
          <span class="mfg-date">${value.mfgDate}</span>
          <span class="txt-concat">${generalOfPage.txtConcat}</span>
          <span class="exp-date">${value.expDate}</span>
          <span class="txt-until">${generalOfPage.txtUntil}</span>
        </div>
        <div class="combine-status">${value.combineStatus}</div>
      </footer>
    </div>`;
}

init();