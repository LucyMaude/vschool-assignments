var money = 12345678910;
//123,456,789.10
var cash = 10010010010;
//100,100,100.10
var plata = 10000;
//100.00

function formatMoney(val) {
    var valStr = val.toString();
    console.log(valStr.length);
    var newVal = ["$", ];
    for (var i = 0; i < valStr.length; i++) {
        if (valStr.length === i + 2) {
            newVal.push("." + valStr[i]);
        } else if ((i + 1) % 3 === 0) {
            if (valStr.length === i + 3) {
                newVal.push(valStr[i]);
            } else {
                newVal.push(valStr[i] + ",");
            }
        } else {
            newVal.push(valStr[i]);
        }
    }
    console.log(newVal.join(""));
}


formatMoney(money);
formatMoney(cash);
formatMoney(plata);
