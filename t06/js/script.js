"use strict";

let messageBox = document.querySelector(".main-box__message-box");
let btn = document.querySelector(".input__send");
let genMessage = generator();

function* generator() {
    yield "Hello, I am J.A.R.V.I.S.";
    yield "I believe I've already said it, but, sure, hello again!";
    yield "You are malfunctioning";
    yield "I believe your intentions to be hostile.";

    while (true) yield "I will not respond to that.";
}

function newElemClass(tagName, addClass, content) {
    let elem = document.createElement(tagName);

    elem.classList.add(addClass);
    if (content) elem.textContent = content;
    return elem;
}

function newBotRepl (userMessage) {
    let mess;

    userMessage.match(/^Greetings|^hello|^hi|^howdy|^hola|^heil og sael/gi)
        ? (mess = newElemClass(
              "p",
              "message-box__bot",
              genMessage.next().value
          ))
        : (mess = newElemClass(
              "p",
              "message-box__bot",
              "I don't understand you"
          ));

    setTimeout(() => {
        messageBox.append(mess);
        messageBox.scrollTop = 99999;
    }, 1000);
};

function addUserMsg() {
    let mess = newElemClass("div", "message-box__user", message.value.trim());

    btn.style.opacity = 0.3;
    setTimeout(() => (btn.style.opacity = 1), 100);
    if (mess.textContent) {
        messageBox.append(mess);
        messageBox.scrollTop = 99999;
        newBotRepl(message.value);
        message.value = "";
    }
}

(() => {
    btn.addEventListener("click", addUserMsg);
    document.addEventListener("keypress", (key) => {
        if (key.key === "Enter") addUserMsg();
    });
})();
