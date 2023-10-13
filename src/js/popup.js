const popup = document.querySelector(".popup");
const closeBtn = document.querySelector(".popup--close_btn");
const productLink = document.querySelectorAll(".product__link");

function preventScroll(e) {
  e.preventDefault();
  e.stopPropagation();
}

export default function popUp() {
  productLink.forEach((el) =>
    el.addEventListener("click", () => {
      popup.classList.add("shown");
    })
  );

  popup.addEventListener("wheel", preventScroll);

  closeBtn.addEventListener("click", () => {
    popup.classList.remove("shown");
  });
}
