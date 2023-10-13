////prevent scroll

import popUp from "./popup.js";
import accordion from "./accordion.js";
import scrolls from "./scrolls.js";
import slider from "./slider.js";
import teamAccordion from "./team-accordion.js";
import menu from "./menu.js";
import stickyNav from "./sticky.js";
import smoothScroll from "./smoothScroll.js";
import emailValidation from "./emailValidation.js";

export function preventScroll(e) {
  e.preventDefault();
  e.stopPropagation();
}

popUp();
accordion();
scrolls();
slider();
teamAccordion();
menu();
stickyNav();
smoothScroll();
emailValidation();
