const refs = {
  counterRef: document.querySelector("#value"),
  btnDecrement: document.querySelector(`[data-action="decrement"]`),
  btnIncrement: document.querySelector(`[data-action="increment"]`),
};

let counterValue = 0;

refs.btnDecrement.addEventListener("click", () => {
  counterValue -= 1;
  apdateValue();
});

refs.btnIncrement.addEventListener("click", () => {
  counterValue += 1;
  apdateValue();
});

function apdateValue() {
  refs.counterRef.textContent = counterValue;
}
