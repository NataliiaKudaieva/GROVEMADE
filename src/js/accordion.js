const getStarted = document.querySelector(".get-started");
const accordionContainer = document.querySelector(".accordion");
const closeBtn = document.querySelector(".accordion__close");

export default function accordion() {
  getStarted.addEventListener("click", () => {
    accordionContainer.classList.toggle("shown-acc");
  });

  closeBtn.addEventListener("click", () => {
    accordionContainer.classList.remove("shown-acc");
  });
}
