"use strict";

const itemsArr = JSON.parse(itemsData); // get data items
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

    addElementBasket(element, addCartEl);

});

const browseEl = document.createElement("a");
browseEl.innerHTML = "Browse All Product";
browseEl.classList.add("items_browse");
containerEl.appendChild(browseEl);