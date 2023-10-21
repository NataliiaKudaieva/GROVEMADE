function emailValidation() {
  const input = document.querySelector(".form__input");
  const submitBtn = document.querySelector(".form__btn");
  const form = document.querySelector(".form");
  const approvedSvg = document.querySelector(".form__icon");

  let value;
  let validationResult;
  const regExp =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  input.addEventListener("input", (e) => {
    value = e.target.value;
    if (!value) {
      approvedSvg.classList.remove("shown");
    }
  });

  form.addEventListener("submit", (e) => e.preventDefault());

  submitBtn.addEventListener("click", (e) => {
    validationResult = regExp.test(value);

    if (validationResult) {
      form.replaceChild(approvedSvg, submitBtn);
      approvedSvg.classList.add("shown");

      input.value = "Email was confirmed!";
    }
  });
}

export default emailValidation;
