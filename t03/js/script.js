"use strict";

let checkClass = (elem, attr) => elem.classList.contains(attr);
let main = document.querySelector(".main");
let indexCount = 0;

main.addEventListener("dblclick", (event) => {
    let div = event.target;

    if (div.classList.contains("main__block")) div.classList.toggle("isActive");
});

main.onmousedown = (event) => {
    let div = event.target;

    if (checkClass(div, "isActive")) {
        let cursorX = event.clientX - div.getBoundingClientRect().left;
        let cursorY = event.clientY - div.getBoundingClientRect().top;
        let moveTo = (pageX, pageY) => {
            div.style.left = pageX - cursorX + "px";
            div.style.top = pageY - cursorY + "px";
        };
        let moveDiv = (event) => moveTo(event.pageX, event.pageY);

        div.style.opacity = ".4";
        div.style.position = "absolute";
        div.style.zIndex = indexCount;
        indexCount += 1;
        moveTo(event.pageX, event.pageY);
        document.addEventListener("mousemove", moveDiv);
        div.onmouseup = () => {
            div.style.opacity = "1";
            document.removeEventListener("mousemove", moveDiv);
            div.onmouseup = null;
        };
    }
};

document.ondragstart = () => false;
