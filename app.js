var txtButton = document.querySelector("#txt-button");
var txtArea = document.querySelector(".textarea");
var txtOutput = document.querySelector("#output-area");



function clickHandler() {
    txtOutput.innerText = "allaallalla" + txtArea.value;
}


txtButton.addEventListener("click", clickHandler)

