const counterValue = document.querySelector("#counter-value");
const incrementButton = document.querySelector("#counter-increment");
const resetButton = document.querySelector("#counter-reset");
const storageKey = "terra-counter-demo";

function readCount() {
  const savedCount = Number(localStorage.getItem(storageKey));
  return Number.isSafeInteger(savedCount) && savedCount >= 0 ? savedCount : 0;
}

let count = readCount();

function renderCount() {
  counterValue.textContent = count.toLocaleString("zh-CN");
  incrementButton.disabled = count === Number.MAX_SAFE_INTEGER;
}

incrementButton.addEventListener("click", () => {
  if (count < Number.MAX_SAFE_INTEGER) {
    count += 1;
    localStorage.setItem(storageKey, String(count));
    renderCount();
  }
});

resetButton.addEventListener("click", () => {
  count = 0;
  localStorage.removeItem(storageKey);
  renderCount();
});

renderCount();