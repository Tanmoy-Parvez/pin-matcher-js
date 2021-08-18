
// generating pin
function generatePin() {
    const pin = Math.round(Math.random() * 10000);
    const stringPin = pin + "";
    if (stringPin.length == 4) {
        return pin;
    }
    else {
        return generatePin();
    }
}
// displaying pin
function getPin() {
    const displayPin = document.getElementById('display-pin')
    displayPin.value = generatePin();
}

// ---------------------------------------------------
// handle typing keys and values
document.getElementById("key-pad").addEventListener("click", function (e) {
    const key = e.target.innerText;
    const displayKey = document.getElementById('display-key');
    if (isNaN(key)) {
        if (key == "C") {
            displayKey.value = "";
        }
    }
    else {
        const previousKey = displayKey.value;
        const newKey = previousKey + key;
        displayKey.value = newKey;
    }
})

// ---------------------------------------------------

function verify() {
    // handle matching pins
    const displayPin = document.getElementById('display-pin').value;
    const displayKey = document.getElementById('display-key').value;
    // handling error message
    const successMsg = document.getElementById('notify-success')
    const failMsg = document.getElementById('notify-fail')
    if (displayPin == displayKey) {
        successMsg.style.display = "block";
        failMsg.style.display = "none";
    }
    else {
        successMsg.style.display = "none";
        failMsg.style.display = "block";
    }
}