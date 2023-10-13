function smoothScroll() {
  const goUpBtn = document.querySelector(".go-up");
  const header = document.querySelector(".header");

  const footer__links = document.querySelectorAll(".links__item");

  goUpBtn.addEventListener("click", () => {
    header.scrollIntoView({ behavior: "smooth" });
  });

  footer__links.forEach((link) =>
    link.addEventListener("click", (e) => {
      e.target.scrollIntoView({ behavior: "smooth" });
    })
  );
}

export default smoothScroll;
