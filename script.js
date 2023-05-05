const sortBtn = document.querySelector(".sort-button");
const inputArea = document.querySelector("#input-area");
const outputArea = document.querySelector("#output-area");
const infoIcon = document.querySelector(".information-icon");
const infoWindow = document.querySelector(".info-window");

window.addEventListener("DOMContentLoaded", () => {
  clearContent(inputArea, outputArea);
});

sortBtn.addEventListener("click", () => {
  sortText(inputArea, outputArea);
});

["mouseover", "mouseout"].forEach((element) => {
  infoIcon.addEventListener(element, () => {
    showInfo(infoWindow);
  });
});

function sortText(inputElement, outputElement) {
  const text = inputElement.value;
  const array = text.trim().split("\n");
  let sorted = [...array].sort((a, b) => {
    return a.localeCompare(b, undefined, { sensitivity: "base" });
  });
  sorted = sorted.join("\n");
  console.log(sorted);
  outputElement.value = sorted;
}

function clearContent(inputElement, outputElement) {
  inputArea.value = "";
  outputArea.value = "";
}

function showInfo(element) {
  element.classList.toggle("show-info");
  element.classList.toggle("info-window");
}
