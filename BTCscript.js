let btc = 0;
let vipNumber = 100;
let dollar;
var cardN;
var cardD;
var cardS;

function a() {
    btc++
    dollar = (btc * 0.1);
    document.getElementById("balance").innerHTML = `Balance - BTC: ${btc} = ${dollar}$`

};

// function b() {
//     balance = (`BTC: ${btc} = ${dollar}$`);
//     alert(balance);
// }

function VIP() {
    window.location.href = 'BTCvip.html';
    alert("-100$")
}
function aVip() {
    btc = btc + vipNumber;
    dollar = (btc * 0.1)
    document.getElementById("VipBalance").innerHTML = `Balance - BTC: ${btc + vipNumber} = ${dollar}$`
};

function Withdraw() {
    alert("Error");
    alert("Error!");
    alert("Error!!");
    alert("Error!!!");
    alert("Thanks for your card!");
}
   