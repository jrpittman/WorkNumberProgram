
function parseGrosspay(grossPay) {
    //finds the first dollar amount in an element and converts it to a number
    let grossPay = rawInput.match(/\$\d+\.\d{2}/);
    grossPay = grossPay.replace(/\$/,'');
    grossPay=parseFloat(grossPay);
    console.log(payDate, grossPay);
}