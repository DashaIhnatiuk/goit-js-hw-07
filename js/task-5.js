const input = document.querySelector("input#name-input");
const nameSpan = document.querySelector("span#name-output");

setName();

if (input != null) {
  input.addEventListener("input", setName);
}

function setName() {
  if (nameSpan != null) {
    nameSpan.textContent = input.value;
  }
  if (input.value.length === 0) {
    nameSpan.textContent = "незнакомец";
  }
}
