const scrolls = () => {
  ScrollReveal().reveal(".intro__heading ", {
    delay: 1700,
    duration: 1200,
    reset: true,
  });

  ScrollReveal().reveal(".slider__box", { interval: 300 });
  ScrollReveal().reveal(".intro__subheading", {
    duration: 2500,
  });
  ScrollReveal().reveal(".team__member", { interval: 300 });
};
export default scrolls;
