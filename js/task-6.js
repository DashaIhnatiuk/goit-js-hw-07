const input = document.querySelector("input#validation-input");

if (input != null) {
  input.addEventListener("focus", () => {
    input.classList = "";
  });

  input.addEventListener("blur", setInputValidation);
}

function setInputValidation() {
  if (input.value.length === Number(input.dataset.length)) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
}
