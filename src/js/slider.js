const labels = document.querySelectorAll(".slider__label");
const sliderBoxes = document.querySelectorAll(".slider__box");
const btn__buy = document.createElement("a");
const container = document.querySelector(".buy");
btn__buy.innerHTML = "Buy now";
btn__buy.href = "order.html";

export default function slider() {
  const syncClicks = (itemsArray, index, className) => {
    itemsArray.forEach((element) => {
      element.classList.remove(`${className}`);
    });
    itemsArray[index].classList.add(`${className}`);
    sliderBoxes[index].appendChild(btn__buy).classList.add("buy__btn");
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
      getProductInfo(btn__buy.parentNode);
    });
  });

  const getProductInfo = (element) => {
    let imgSrc = element.childNodes[1].src;
    let imgAlt = element.childNodes[1].alt;
    let orderName = element.childNodes[3].childNodes[1].textContent;
    let price = element.childNodes[3].childNodes[3].textContent;
    let arr = [];
    arr.push(imgSrc, imgAlt, orderName, price);

    localStorage.setItem("item", JSON.stringify(arr));
  };
}
