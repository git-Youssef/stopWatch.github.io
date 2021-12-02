let secHtml = document.querySelector("#seconds")
let tensHtml = document.querySelector("#tens")
let btnStart = document.querySelector("#button-start")
let btnStop = document.querySelector("#button-stop")
let btnReset = document.querySelector("#button-reset")
let buttonPrint = document.querySelector("#button-print")

let _tens, _secs, startWatch;

btnStart.onclick = function () {

    clearInterval(startWatch)

    _tens = Number(tensHtml.innerHTML);
    _secs = Number(secHtml.innerHTML);

    startWatch = setInterval(() => {

        tensHtml.innerHTML = ++_tens;

        if (_tens >= 99) {

            _tens = -1;

            secHtml.innerHTML = ++_secs;
        }

    }, 10);

}


btnStop.onclick = function () {


    clearInterval(startWatch)
}


btnReset.onclick = function () {
    tensHtml.innerHTML = "00";
    secHtml.innerHTML = "00";

    clearInterval(startWatch)
}

buttonPrint.onclick = function () {

    let colors = ["red", "green", "violet"];

    let random = Math.floor(Math.random() * colors.length);


    console.log(document.querySelector("p").textContent)
}