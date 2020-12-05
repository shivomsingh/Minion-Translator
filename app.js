var txtButton = document.querySelector("#txt-button");
var txtArea = document.querySelector(".textarea");
var txtOutput = document.querySelector("#output-area");

var serverUrl = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

function colUrl(text){
    return serverUrl + "?text=" + text
}

function clickHandler() {
    fetch(colUrl(txtArea.value)) //input
    .then(respone => respone.json()) //processing
    .then(json => {

    var translatedText = json.contents.translated

    txtOutput.innerText= translatedText  //ouptut
    })
}


txtButton.addEventListener("click", clickHandler)

