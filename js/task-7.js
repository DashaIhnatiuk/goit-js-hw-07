const input = document.querySelector("input#font-size-control");
const span = document.querySelector("span#text");

if (input != null) {
  setTextFont();
  input.addEventListener("input", setTextFont);
}

function setTextFont() {
  span.style.fontSize = input.value + "px";
}
