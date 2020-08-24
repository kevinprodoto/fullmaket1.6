let burgerMobile = document.querySelector(".burger-mobile");
let burgerLaptop = document.querySelector(".burger-laptop");
let close =document.querySelector(".close");
let modalMenu = document.querySelector(".modal-menu");
let callback = document.querySelector(".callback");
let feedback = document.querySelector(".feedback");
let callbackButton = document.querySelector(".callback-button");
let feedbackButton = document.querySelector(".feedback-button");
let callbackHeaderButton = document.querySelector(".header__callback");
let feedbackHeaderButton = document.querySelector(".header__feedback");
let callbackClose = document.querySelector(".callback__close");
let feedbackClose = document.querySelector(".feedback__close");
let headerMobileInactive = document.querySelector(".header--mobile");
let headerLaptopInactive = document.querySelector(".header--laptop");
let mainInactive = document.querySelector(".main");
let html = document.querySelector("html");
burgerMobile.addEventListener("click", function () {
    modalMenu.classList.add("modal-active");
    headerMobileInactive.classList.add("inactive");
    headerLaptopInactive.classList.add("inactive");
    mainInactive.classList.add("inactive");
    html.classList.add("body-overflow-hidden");
});
burgerLaptop.addEventListener("click", function () {
    modalMenu.classList.add("modal-active");
    headerMobileInactive.classList.add("inactive");
    headerLaptopInactive.classList.add("inactive");
    mainInactive.classList.add("inactive");
    html.classList.add("body-overflow-hidden");
});
close.addEventListener("click", function () {
    modalMenu.classList.remove("modal-active");
    headerMobileInactive.classList.remove("inactive");
    headerLaptopInactive.classList.remove("inactive");
    mainInactive.classList.remove("inactive");
    html.classList.remove("body-overflow-hidden");
});
callbackButton.addEventListener("click", function () {
    modalMenu.classList.remove("modal-active");
    callback.classList.add("callback--active");
    headerMobileInactive.classList.add("inactive");
    headerLaptopInactive.classList.add("inactive");
    mainInactive.classList.add("inactive");
    html.classList.add("body-overflow-hidden");
});
feedbackButton.addEventListener("click", function () {
    modalMenu.classList.remove("modal-active");
    feedback.classList.add("feedback--active");
    headerMobileInactive.classList.add("inactive");
    headerLaptopInactive.classList.add("inactive");
    mainInactive.classList.add("inactive");
    html.classList.add("body-overflow-hidden");
});
callbackHeaderButton.addEventListener("click", function () {
    modalMenu.classList.remove("modal-active");
    callback.classList.add("callback--active");
    headerMobileInactive.classList.add("inactive");
    headerLaptopInactive.classList.add("inactive");
    mainInactive.classList.add("inactive");
    html.classList.add("body-overflow-hidden");
});
feedbackHeaderButton.addEventListener("click", function () {
    modalMenu.classList.remove("modal-active");
    feedback.classList.add("feedback--active");
    headerMobileInactive.classList.add("inactive");
    headerLaptopInactive.classList.add("inactive");
    mainInactive.classList.add("inactive");
    html.classList.add("body-overflow-hidden");
});
callbackClose.addEventListener("click", function () {
    headerMobileInactive.classList.remove("inactive");
    headerLaptopInactive.classList.remove("inactive");
    mainInactive.classList.remove("inactive");
    html.classList.remove("body-overflow-hidden");
    callback.classList.remove("callback--active");
});
feedbackClose.addEventListener("click", function () {
    headerMobileInactive.classList.remove("inactive");
    headerLaptopInactive.classList.remove("inactive");
    mainInactive.classList.remove("inactive");
    html.classList.remove("body-overflow-hidden");
    feedback.classList.remove("feedback--active");
});
