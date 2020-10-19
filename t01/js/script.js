let allMovies = new Set();
let favMovies = new Set();

class Movie {
    constructor(title, posterImage, theDate, info, actors) {
        this.title = title;
        this.posterImage = posterImage;
        this.theDate = theDate;
        this.info = info;
        this.actors = actors;
    }

    addToFavorite() {
        favMovies.add(this);
    }

    removeFromFavorite() {
        favMovies.forEach((film) => {
            if (film.title == this.title) favMovies.delete(film);
        });
    }
}

function setOnclickEventNav() {
    let allNavs = document.querySelectorAll(".sidebar-nav__li");
    allNavs.forEach((elem) => {
        elem.addEventListener("click", function () {
            allMovies.forEach((film) => {
                if (film.title == elem.textContent) {
                    document.querySelector(
                        ".block-content__image"
                    ).innerHTML = `<img class="film-photo" src="${film.posterImage}"></img>`;
                    document.querySelector(".title__text").textContent =
                        film.title;
                    document.querySelector(
                        ".description__about p"
                    ).textContent = film.info;
                    document.querySelector(".dateOfProd").textContent =
                        film.theDate;
                    let counter = 0;
                    document.querySelectorAll(".actor-item").forEach((item) => {
                        if (counter < 4) {
                            item.textContent = film.actors[counter];
                            counter++;
                        }
                    });
                }
            });
        });
    });
}

function setNavItems() {
    allMovies.forEach((elem) => {
        document
            .querySelector('.sidebar-nav')
            .innerHTML += `<li class="sidebar-nav__li">${elem.title}</li>`;
    });
}

let film1 = new Movie("Scream", "photo", "10.11.1988", "Description", [
    "shit",
    "bob",
    "crab",
    "pit",
]);
let film2 = new Movie("Dogma", "photo", "10.11.1988", "Description", [
    "shit",
    "bob",
    "crab",
    "pit",
]);
// let film = new Movie("Scream", "photo","10.11.1988", "Description", ['shit', 'bob', 'crab', 'pit']);

allMovies.add(film1);
allMovies.add(film2);

setNavItems();
setOnclickEventNav();
