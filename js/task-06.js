const inputRef = document.querySelector("#validation-input");

inputRef.addEventListener("blur", () => {
  if (inputRef.value.length === +inputRef.dataset.length) {
    update("valid", "invalid");
  } else {
    update("invalid", "valid");
  }
});

function update(add, rem) {
  inputRef.classList.add(add);
  inputRef.classList.remove(rem);
}
