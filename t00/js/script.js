"use strict";

const magician = {
    _hat: "./assets/images/hat.png",
    _getPortrait() {
        if (this._portrait) return this._portrait;
        else return "./assets/images/magician.png";
    },
    "do magic"() {
        console.log(`ABRACADABRA
        The prototype of ${this.name} is `);
        console.log(Object.getPrototypeOf(this));
    },
};

function Creature(Name, Age, Species, Portrait) {
    this.name = Name;
    this.age = Age;
    this.species = Species;
    this._portrait = Portrait;
}

Creature.prototype["say hello"] = function () {
    console.log(`Hello, my name is ${this.name}`);
};

function Human(Name, Age, Species, Portrait, Job) {
    Creature.apply(this, [Name, Age, Species, Portrait]);
    this.job = Job;
    this.__proto__.constructor = Human;
}

function Dog(Name, Age, Species, Portrait, Color) {
    Creature.apply(this, [Name, Age, Species, Portrait]);
    this.color = Color;
    this.__proto__.constructor = Dog;
}

function Vampire(Name, Age, Species, Portrait, Job, Title) {
    Human.apply(this, [Name, Age, Species, Portrait, Job]);
    this.title = Title;
    this.__proto__.constructor = Vampire;
}

//I've got this code from some guy cause idfk how to do like in EXAMPLE without this
Human.prototype = Object.create(Creature.prototype);
Dog.prototype = Object.create(Creature.prototype);
Vampire.prototype = Object.create(Human.prototype);

let human = new Human(
    "Linda",
    "22",
    "human",
    "./assets/images/human.png",
    "doctor"
);

let dog = new Dog(
    "Fluffy",
    "3",
    "dog",
    "./assets/images/dog.png",
    "brown"
);

let vampire = new Vampire(
    "Vlad",
    "915",
    "vampire",
    "./assets/images/vampire.png",
    "unemployed",
    "count"
);

let applyProperties = (object, btn) => {
    let properties = document.querySelector("#properties");
    let head;

    Object.setPrototypeOf(magician, object);
    if (btn) {
        document.querySelector(".active").classList.remove("active");
        btn.classList.add("active");
    }
    head = document
        .querySelector("#head")
        .setAttribute("src", `${magician._getPortrait()}`);
    properties.innerHTML =
        `<button id="do-magic" onclick="magician` +
        `['do magic']()">DO MAGIC</button>`;
    if (btn && btn.innerHTML != "no prototype") {
        properties.innerHTML +=
            `<button id="say-hello"` +
            `onclick="magician['say hello']()">SAY HELLO</button>`;
    }
    for (let [key, value] of Object.entries(object)) {
        if (key.charAt(0) !== "_") {
            properties.innerHTML +=
                `<p class="property">${key}:` +
                `<span class="propValue"> ${value}</span></p>`;
        }
    }
    document
        .querySelectorAll(".property")
        .forEach((elem) => (elem.style = "margin:0;"));
};

let changeStatus = (btn) => {
    if (btn) {
        if (btn.innerHTML == "human prototype") {
            applyProperties(human, btn);
        } else if (btn.innerHTML == "dog prototype") {
            applyProperties(dog, btn);
        } else if (btn.innerHTML == "vampire prototype") {
            applyProperties(vampire, btn);
        } else if (btn.innerHTML == "no prototype") {
            applyProperties(Object.prototype, btn);
        }
    } else {
        applyProperties(Object.prototype, btn);
    }
};

changeStatus();
