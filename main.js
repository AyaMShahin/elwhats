const price = document.querySelector(".price");
const secondPrice = document.querySelector(".price1");
const thirdPrice = document.querySelector(".price2");
const per = document.querySelectorAll(".mnth");
const monthlySwitcher = document.getElementById("switchMonthly");
const yearlySwitcher = document.getElementById("switchYearly");

window.onload = function () {
  /* Add your logic here */
  monthlySwitcher.addEventListener("click", function () {
    price.innerHTML = "$5.5";
    secondPrice.innerHTML = "$9.5";
    thirdPrice.innerHTML = "$19";
    per.forEach((element) => (element.innerHTML = "PER MONTH"));
  });
  yearlySwitcher.addEventListener("click", function () {
    price.innerHTML = "$60";
    secondPrice.innerHTML = "$104";
    thirdPrice.innerHTML = "$209";
    // per.innerHTML = "PER YEAR";
    per.forEach((element) => (element.innerHTML = "PER YEAR"));
  });
};
