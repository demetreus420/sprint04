"use strict";

let user = {
    name: document.getElementById("name").value,
    age: document.getElementById("age").value,
    email: document.getElementById("email").value,
};
// Don"t edit above this line
let strcmp = (a, b) => (a < b ? -1 : a > b ? 1 : 0); //хз как это работает, но и на том спасибо стэкОверфлоу
let userData = user;

user = new Proxy(user, {
    set(target, prop, val) {
        if (prop == "name") {
            val = Array.from(new Set(val.toLowerCase().split(" ")))
                .filter((elem) => elem != "")
                .join(" ")
                .split("")
                .map((elem, index, arr) => {
                    if (index == 0 || index == 1 + arr.indexOf(" "))
                        return elem.toUpperCase();
                    else return elem;
                })
                .join("");
            target[prop] = val;
            console.log(val);
            return true;
        } else if (prop == "age") {
            target[prop] =
                strcmp(val.match(/\d/gi).join(""), val) ||
                Number(val) > 999 ||
                val[0] == "0"
                    ? target[prop]
                    : val;
            return true;
        } else if (prop == "email") {
            let dog = val
                .split("")
                .map((elem) => (elem == "@" ? 1 : 0))
                .reduce((a, b) => a + b);
            if (
                dog == 1 &&
                !val.startsWith("@") &&
                !val.endsWith("@") &&
                val.includes(".") &&
                (val.includes("-") || val.includes("_"))
            ) {
                target[prop] = val;
            }
            return true;
        }
    },
});

// Don"t edit below this line

function edit(btn) {
    btn.innerHTML = "save";
    btn.setAttribute("onclick", "save(this)");
    const input = document.getElementById(btn.previousElementSibling.id);
    input.removeAttribute("disabled");
}

function save(btn) {
    btn.innerHTML = "edit";
    btn.setAttribute("onclick", "edit(this)");
    const input = document.getElementById(btn.previousElementSibling.id);
    input.setAttribute("disabled", "true");
    user[input.id] = document.getElementById(input.id).value;
    document.getElementById(input.id).value = user[input.id];
}

//Array.from(new Set("aaaaa   bb".split(" "))).filter(elem=>elem!="").join(" ")
