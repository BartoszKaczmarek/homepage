console.log("Cześć!");

let przycisk = document.querySelector(".przycisk");
let body = document.querySelector("body");
let backgroundColorLight = document.querySelector(".backgroundColorLight");
let backgroundColorDark = document.querySelector(".backgroundColorDark");

przycisk.addEventListener("click", () => {
    if (przycisk.innerText === "Ciemny kolor tła") {
        przycisk.innerText = "Jasny kolor tła"
        body.classList = "backgroundColorDark"
    } else {
        przycisk.innerText = "Ciemny kolor tła"
        body.classList = "backgroundColorLight"
    }
});


console.log(przycisk);
