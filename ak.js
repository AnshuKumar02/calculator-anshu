const button = document.querySelectorAll("button");
const result = document.getElementById("result");

for (let i = 0; i < button.length; i++) {
    button[i].addEventListener("click", () => {
        const buttonValue = button[i].textContent;
        if (buttonValue === "C") {
            clearResult();
        } else if (buttonValue === "Cut") {
            cutResult();
        } else if (buttonValue === "=") {
            calculateResult();
        } else {
            appendValue(buttonValue);
        }
    });
}

function clearResult() {
    result.value = "";
}

function cutResult() {
    result.value = result.value.slice(0, -1);
}

function calculateResult() {
    result.value = eval(result.value);
}

function appendValue(buttonValue) {
    result.value = result.value + buttonValue;
}
