var click = document.querySelector("button")
var full = document.querySelector("body")
var isPink = false;


function hi() {
    full.classList.toggle("purple");
}



click.addEventListener("click", hi)