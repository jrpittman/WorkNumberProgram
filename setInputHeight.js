 //Adjusts the number of rows in the text window to accommodate pasted text
 textarea = document.querySelector("#txtWindow"); 
 textarea.addEventListener('input', autoResize, false);
 
      
function autoResize() { 
    this.style.height = 'auto'; 
    this.style.height = this.scrollHeight + 'px';
}

document.getElementById("start").addEventListener("click",postData);
function postData() {
    let rawInput = document.getElementById("txtWindow").value;
    rawInput = rawInput.split("\n");
    console.log(rawInput);
    console.log(rawInput);

    console.log(typeof rawInput);
}