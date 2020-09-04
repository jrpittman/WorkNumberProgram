
function autoResize() { 
    this.style.height = 'auto'; 
    this.style.height = this.scrollHeight + 'px';
}

function parseWages(payDate) {
    //checks for the second date in an element, if not present, gets the first date
    //then converts it from a string to a date value
 //   console.log("PayDate = " + payDate);
 //   console.log("Type = " + payDate.type);
    payDate = payDate.match(/\d{2}\/\d{2}\/\d{4}/g);
    payDate = payDate[1] ? payDate[1] : payDate[0]; 
    payDate = payDate.replace(/\//g,'-');
    payDate = new Date(payDate);
 
    return payDate;
}

function pullData() {
    let rawInput = document.getElementById("txtWindow").value;
    rawInput = rawInput.split("\n");
    rawInput = rawInput.reverse();
    rawInput = rawInput.map(parseWages);
    console.log(rawInput);
    let n=new Date(rawInput);
    console.log(n);
 //   let payMonth = rawInput.getMonth();
 //   let payYear = rawInput.getFullYear();
 //   console.log(payMonth,"/",payDay,"/",payYear);

 }
 
 
 //Adjusts the number of rows in the text window to accommodate pasted text
 textarea = document.querySelector("#txtWindow"); 
 textarea.addEventListener('input', autoResize, false);

document.getElementById("start").addEventListener("click",pullData);
   
/*
function pullData() {
    let rawInput = document.getElementById("txtWindow").value;
    rawInput = rawInput.split("\n");
    rawInput = rawInput.reverse();
    console.log(rawInput.map(parseWages));
*/