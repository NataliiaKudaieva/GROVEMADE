export default function order() {
  const container = document.querySelector(".buy");

  const result = JSON.parse(localStorage.getItem("item"));

  let [imgSrc, imgAlt, orderName, price] = result;

  const orderMarkup = `<div class="buy">
    <div class="buy__container">
      <img
        src=${imgSrc}
        alt=${imgAlt}
        class="buy__pic"
      />
      <div class="buy__item">
        <p class="buy__item--name">${orderName}</p>
        <p class="buy__item--desc">

        </p>
        <input
          type="number"
          id="buy__input"
          name="buy__input"
          min="1"
          placeholder="1"
        />
        <p class="buy__item--price">Price: <span>${price}</span></p>
        <p class="buy__item--total">Total: <span>${price}</span></p>
        <button class="buy__btn buy__item--btn">Buy now</button>
      </div>
    </div>
    </div>`;

  container.insertAdjacentHTML("afterbegin", orderMarkup);
}

order();
