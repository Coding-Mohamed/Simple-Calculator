const numbersElement = document.querySelectorAll(".numbers button");

const inputElement = document.getElementById("input");

for (let i = 0; i < numbersElement.length; i++) {
  numbersElement[i].addEventListener("click", function () {
    const buttonValue = numbersElement[i].textContent;
    if (buttonValue === "C") {
      clearInput();
    } else if (buttonValue === "=") {
      calculateResult();
    } else {
      appendValue(buttonValue);
    }
  });
}

function clearInput() {
  inputElement.value = "";
}

function calculateResult() {
  if (inputElement.value !== "") {
    inputElement.value = eval(inputElement.value);
  }
}

function appendValue(buttonValue) {
  if (buttonValue === "x") {
    inputElement.value += "*";
  } else if (buttonValue === "÷") {
    inputElement.value += "/";
  } else {
    inputElement.value += buttonValue;
  }
}
