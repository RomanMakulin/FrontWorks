const bucketContainer = document.querySelector(".user-bucket");
const bucketTitle = document.createElement("h2");

bucketTitle.classList.add("user-bucket_title");
bucketTitle.innerHTML = "Card items";
bucketTitle.classList.add('items_title_name');

bucketContainer.classList.add("basket_left");
bucketContainer.appendChild(bucketTitle);

function addElementBasket(element, addCartEl) {
    addCartEl.addEventListener("click", () => {

        const divCart = document.createElement("div");
        const imgCart = document.createElement("img");
        const nullDiv = document.createElement("div");
        const titleCart = document.createElement("h4");
        const priceCart = document.createElement("p");
        const colorCart = document.createElement("p");
        const sizeCart = document.createElement("p");
        const countCart = document.createElement("div");
        const countTextCart = document.createElement("p");
        const countInputCart = document.createElement("input");
        const closeCart = document.createElement("a");

        imgCart.src = element.img;
        titleCart.innerHTML = element.title;
        priceCart.innerHTML = `Price: <span class="basket_item_text_price">` + element.price + `</span>`;
        colorCart.innerText = "Color: " + element.color;
        sizeCart.innerText = "Size: " + element.size;
        countTextCart.innerText = "Quantity: ";
        closeCart.innerHTML = closeCardSvg;

        divCart.classList.add("basket_item");
        imgCart.classList.add("basket_item_img");
        imgCart.style.width = "262px";
        titleCart.classList.add("basket_item_title");
        priceCart.classList.add("basket_item_text");
        colorCart.classList.add("basket_item_text");
        sizeCart.classList.add("basket_item_text");
        countCart.classList.add("basket_item_count");
        countTextCart.classList.add("basket_item_text");
        countInputCart.classList.add("basket_item_text_count");
        countInputCart.name = "count";
        countInputCart.type = "number";
        countInputCart.min = 2;
        closeCart.classList.add("basket_item_close");

        countCart.appendChild(countTextCart);
        countCart.appendChild(countInputCart);

        divCart.appendChild(imgCart);

        nullDiv.appendChild(titleCart);
        nullDiv.appendChild(priceCart);
        nullDiv.appendChild(colorCart);
        nullDiv.appendChild(sizeCart);
        nullDiv.appendChild(countCart);

        divCart.appendChild(nullDiv);
        divCart.appendChild(closeCart);

        bucketContainer.appendChild(divCart);

        bucketContainer.style = "display: flex;";

        closeCart.addEventListener("click", () => {
            divCart.remove();
            const basketSize = document.querySelectorAll(".basket_item").length;
            if (basketSize === 0) bucketContainer.style = "display: none;";
        });

        bucketContainer.style = "margin-bottom: 50px;";

    });
}