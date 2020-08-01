var result = localStorage.getItem('result');
if (result == null){window.location.replace("index.html")}
resultObject = JSON.parse(result)
//console.log(resultObject)
//sim
aneesh.displayObject("sim", resultObject);
aneesh.displayObject("simPrice", resultObject);
//case
aneesh.displayObject("case", resultObject);
aneesh.displayObject("casePrice", resultObject);
//charger
aneesh.displayObject("charger", resultObject.charger);
aneesh.displayObject("chargerPrice", resultObject.charger);
//phone
aneesh.displayObject("phone", resultObject.phone);
//tablet
aneesh.displayObject("tablet", resultObject.tablet);
//phone_total_price
var phone_price = resultObject.phone.phone_price
var phone_price_sum = phone_price.reduce(function(a, b){
  return a + b;
}, 0);
//console.log(phone_price_sum);
//tablet total price
var tablet_price = resultObject.tablet.tablet_price
var tablet_price_sum = tablet_price.reduce(function(a, b){
  return a + b;
}, 0);
//console.log(tablet_price_sum);
//total charger price
var total_charger_price = resultObject.charger.chargerCarPrice + resultObject.charger.chargerHomePrice
//console.log(total_charger_price)
//total case and sim price
var total_sim_case_price = resultObject.simPrice + resultObject.casePrice
//console.log(total_sim_case_price)
//total price 
var total_price = (phone_price_sum + tablet_price_sum + total_charger_price + total_sim_case_price).toFixed(2)
//console.log(total_price)
var totalPrice_output = new Vue({
  el: '#totalPrice',
  data: {
    message: total_price
  }
})

//discount code
console.log(phone_price.length + tablet_price.length)
function percentage(percent, total) {
  return ((percent/ 100) * total).toFixed(2)
}
var phoneTabSum = (phone_price.length) + (tablet_price.length)
var discount1 = phoneTabSum * 10
console.log("discount1 - 10: ", discount1 - 10)
var discount2 = discount1-10
var discount_result = percentage(discount2, 100);
console.log("discount_result: ", discount_result)
if (discount_result < 0){
  discount_result = 0
}
const saving = percentage(discount_result, total_price);
console.log("saving: ", saving)
var discountedPrice = total_price - saving
console.log("total price: ",total_price)
var discounted_price = new Vue({
  el: '#discountedPrice',
  data: {
    discount: discountedPrice.toFixed(2),
    discount_percent: discount_result,
  }
})

var saving_price = new Vue({
  el: "#discountSaving",
  data: {
    saving: saving,
  }
})