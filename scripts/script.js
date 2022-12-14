var burgerBtn = document.querySelector("header nav button");
var andereBody = document.querySelector("body")

burgerBtn.addEventListener("click", burgerBtnClick);

function burgerBtnClick() {
    burgerBtn.classList.toggle("showMenu");
    andereBody.classList.toggle("hamburgerMenu")
}

