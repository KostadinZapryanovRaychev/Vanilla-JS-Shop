const h2 = document.getElementById("h2");
h2.addEventListener("click", changeH2);

function changeBackgroundColor() {
    h2.style.backgroundColor = "red";
}

function changeInnerText() {
    h2.innerText = "Hi";
}

function changeH2() {
    changeBackgroundColor();
    changeInnerText();
}