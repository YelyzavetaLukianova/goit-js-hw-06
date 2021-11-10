const form = document.querySelector("form");

form.addEventListener("submit", onSubmitBtn);

function onSubmitBtn(event) {
  event.preventDefault();
  const { email, password } = event.currentTarget.elements;

  if (email.value === "" || password.value === "") {
    return alert("Form wasn`t finished");
  }
  const object = { email: email.value, passwors: password.value };
  console.log(object);
  form.reset();
}
