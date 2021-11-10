const refs = {
  inputRef: document.querySelector("#name-input"),
  spanRef: document.querySelector("#name-output"),
};

console.log(refs);

refs.inputRef.addEventListener("input", () => {
  if (refs.inputRef.value) {
    refs.spanRef.textContent = refs.inputRef.value.trim();
  } else {
    refs.spanRef.textContent = "Anonymous";
  }
});
