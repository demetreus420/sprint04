"use strict";

function setMenu(arg) {
    let main = getElemID(".menu");

    for (let title of arg.keys()) {
        let section = createElemClass("div", "section");
        let sectionHeader = createElemClass("div", "section-title", title);

        section.append(sectionHeader);
        for (let [dish, price] of arg.get(title)) {
            let position = createElemClass("div", "position");

            position.append(createElemClass("div", "name", dish));
            position.append(
                createElemClass(
                    "div",
                    "price",
                    "<span>$</span>" + `<span>${price}</span>`
                )
            );
            section.append(position);
        }
        main.append(section);
    }
}

function getElemID(id) {
    return document.body.querySelector(id);
}

function createElemClass(tag, clas, text) {
    let div = document.createElement(tag);

    div.classList.add(clas);
    if (text) {
        div.innerHTML = text;
    }
    return div;
}

let dishes = new Map([
    ["Tacos", 8.35],
    ["Tomato soupSeafood paella", 11.99],
    ["Chicken rice", 6.65],
    ["Poutine", 7.25],
    ["Chili crab", 8.99],
]);
let salats = new Map([
    ["Summer Asian Slaw", 6.39],
    ["Shredded Brussels Sprout Salad", 4.99],
    ["Fruit Salad", 3.99],
    ["Rainbow Orzo Salad", 4.88],
    ["Creamy Vegan Pasta Salad", 4.49],
]);

let drinks = new Map([
    ["Pepsi", 3.2],
    ["Coca Cola", 1.99],
    ["Jegermester(one shot)", 1.99],
    ["Glass washer liquid(one BIG SHOT)", 0.75],
    ["Moonshine(one BIG SHOT)", 0.89],
]);
let desserts = new Map([
    ["Apfelstrudel", 4.45],
    ["Baklava", 3.2],
    ["Brownies", 4.99],
    ["Cinnamon Buns", 1.5],
]);

let menu = new Map([
    ["Main dishes", dishes],
    ["Salats", salats],
    ["Drinks", drinks],
    ["Desserts", desserts],
]);
setMenu(menu);
