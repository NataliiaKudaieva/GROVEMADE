const stickyNav = () => {
  const goUpBtn = document.querySelector(".go-up");
  const intro = document.querySelector(".intro");
  const nav = document.querySelector(".nav");

  const stickyTo = function (entries) {
    const [entry] = entries;

    if (!entry.isIntersecting) {
      nav.classList.add("sticky");
      goUpBtn.classList.add("sticky");
    } else {
      nav.classList.remove("sticky");
      goUpBtn.classList.remove("sticky");
    }
  };

  const observer = new IntersectionObserver(stickyTo, {
    root: null,
    threshold: 0,
    rootMargin: "0px",
  });

  observer.observe(intro);
};

export default stickyNav;
