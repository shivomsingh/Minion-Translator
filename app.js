var txtButton = document.querySelector("#txt-button");
var txtArea = document.querySelector(".textarea");
var txtOutput = document.querySelector("#output-area");

txtOutput.innerText = "i am ironman"

function clickHandler() {
    console.log("clicked")
    console.log("input", txtArea.value)
   
}


txtButton.addEventListener("click", clickHandler)

