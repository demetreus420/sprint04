"use strict";

let spanCounter = document.querySelector("#counter"),
    imageElem = document.querySelector("#imageElem"),
    counter = 0,
    images = [
        "./assets/images/pic00.jpg",
        "./assets/images/pic01.jpg",
        "./assets/images/pic02.jpg",
        "./assets/images/pic03.jpg",
        "./assets/images/pic04.jpg",
        "./assets/images/pic05.jpg",
    ];

function addCounter() {
    ++counter;
    spanCounter.innerHTML = counter;
    if (counter == images.length) {
        let div = document.querySelector(".counter");
        div.style.background = "seagreen";
        setTimeout(()=>div.style.display = "none", 3000);
    }
}

(() => {
    images.map((img) => {
        imageElem.insertAdjacentHTML(
            "beforeend",
            `<img class="image lazy" src="./assets/images/defpic.jpg" data-src="${img}" alt="${img}">`
        );
    });
})();

(() => {
    let everyImages = document.querySelectorAll(".lazy");

    if ("IntersectionObserver" in window) {
        let imgObserver = new IntersectionObserver((entries, observer) => {
            entries.map((entry) => {
                if (entry.isIntersecting) {
                    let imageLazy = entry.target;

                    imageLazy.src = imageLazy.dataset.src;
                    imageLazy.style.height = "400px";
                    imageLazy.style.width = "600px";
                    imageLazy.classList.remove("lazy");
                    imgObserver.unobserve(imageLazy);
                    addCounter();
                }
            });
        });
        everyImages.forEach((lazyImage) => imgObserver.observe(lazyImage));
    }
})();
