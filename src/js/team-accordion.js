const toggleHeading = document.querySelector(".team__accordion--heading");
const teamContainer = document.querySelector(".team__members");
const arrowDownSvg = document.getElementById("arrow__down");
const arrowUpSvg = document.getElementById("arrow__up");

const closeContContent = "That's all!🙂 Hide the members";
const openContContent = "Show more our members...";

////change content and icons dynamically
const changeContent = (content, removedIcon, addedIcon) => {
  toggleHeading.innerHTML = content;
  removedIcon.classList.add("hide");
  addedIcon.classList.remove("hide");
};

export default function teamAccordion() {
  arrowDownSvg.addEventListener("click", () => {
    teamContainer.classList.add("open-acc");

    if (teamContainer.classList.contains("open-acc"))
      changeContent(closeContContent, arrowDownSvg, arrowUpSvg);
  });

  arrowUpSvg.addEventListener("click", () => {
    teamContainer.classList.remove("open-acc");
    changeContent(openContContent, arrowUpSvg, arrowDownSvg);
  });
}
