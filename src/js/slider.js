const labels = document.querySelectorAll(".slider__label");
const sliderBoxes = document.querySelectorAll(".slider__box");
const btn__buy = document.createElement("button");
btn__buy.innerHTML = "Buy now";

export default function slider() {
  const syncClicks = (itemsArray, index, className) => {
    itemsArray.forEach((element) => {
      element.classList.remove(`${className}`);
    });
    itemsArray[index].classList.add(`${className}`);
    sliderBoxes[index].appendChild(btn__buy).classList.add("slider__btn");
  };

  labels.forEach((label, index) => {
    label.addEventListener("click", (e) => {
      /*change bgColor of active label */

      e.target.classList.add("slider__label--active");
      label.classList.remove("slider__label--active");
      /*sync clicks on tabs and labels */
      syncClicks(sliderBoxes, index, "zoom");
    });
  });

  sliderBoxes.forEach((slide, index) => {
    slide.addEventListener("click", (e) => {
      /* remove zoom from all tabs onClick and add on active tab */
      sliderBoxes.forEach((slide) => {
        slide.classList.remove("zoom");
      });
      slide.classList.add("zoom");

      syncClicks(labels, index, "slider__label--active");
    });
  });
}
