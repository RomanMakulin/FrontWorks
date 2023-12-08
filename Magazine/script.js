"use strict";

const itemsArr = JSON.parse(itemsData);
const containerEl = document.querySelector(".items");
const containerTitleEl = document.createElement('h2');
const containerSubTitleEl = document.createElement('p');
const titleEl = document.createElement('div');

containerTitleEl.innerHTML = "Fetured Items";
containerSubTitleEl.innerHTML = "Shop for items based on what we featured in this week";

titleEl.classList.add("items_title");
containerTitleEl.classList.add('items_title_name');
containerSubTitleEl.classList.add('items_title_subname');

titleEl.appendChild(containerTitleEl);
titleEl.appendChild(containerSubTitleEl);

containerEl.appendChild(titleEl);

// 

const bucketContainer = document.querySelector(".user-bucket");
const bucketTitle = document.createElement("h2");

bucketTitle.innerHTML = "Card items";
bucketTitle.classList.add('items_title_name');

bucketContainer.classList.add("basket_left");
bucketContainer.appendChild(bucketTitle);

// 

itemsArr.forEach(element => {
    const imgEl = document.createElement("img");
    const titleEl = document.createElement("h4");
    const textEl = document.createElement("p");
    const priceEl = document.createElement("p");
    const addCartEl = document.createElement("a");
    const elementDiv = document.createElement("div");

    imgEl.src = element.img;
    titleEl.innerHTML = element.title;
    textEl.innerHTML = element.text;
    priceEl.innerHTML = element.price;
    addCartEl.innerHTML = addCardSvg;

    elementDiv.classList.add('items_cart');
    imgEl.classList.add('items_cart_img');
    titleEl.classList.add('items_cart_title');
    textEl.classList.add('items_cart_subtitle');
    priceEl.classList.add('items_cart_price');
    addCartEl.classList.add('items_cart_add');

    elementDiv.appendChild(imgEl);
    elementDiv.appendChild(titleEl);
    elementDiv.appendChild(textEl);
    elementDiv.appendChild(priceEl);
    elementDiv.appendChild(addCartEl);

    containerEl.appendChild(elementDiv);

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
        priceCart.innerText = element.price;
        colorCart.innerText = element.color;
        sizeCart.innerText = element.size;
        countTextCart.innerText = "Quantity: ";
        closeCart.innerHTML = closeCardSvg;

        // classes
        divCart.classList.add("basket_item");
        imgCart.classList.add("basket_item_img");
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

        // append DIV
        countCart.appendChild(countTextCart);
        countCart.appendChild(countInputCart);

        // append DIV
        divCart.appendChild(imgCart);

        nullDiv.appendChild(titleCart);
        nullDiv.appendChild(priceCart);
        nullDiv.appendChild(colorCart);
        nullDiv.appendChild(sizeCart);
        nullDiv.appendChild(countCart);

        divCart.appendChild(nullDiv);
        divCart.appendChild(closeCart);

        bucketContainer.appendChild(divCart);

        closeCart.addEventListener("click", () => {
            divCart.remove();
        });

    });
});

const browseEl = document.createElement("a");
browseEl.innerHTML = "Browse All Product";
browseEl.classList.add("items_browse");
containerEl.appendChild(browseEl);