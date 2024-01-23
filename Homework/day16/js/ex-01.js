let btn = document.getElementById("btn");
let aElement = document.getElementById("a");
let bElement = document.getElementById("b");
let a = 5;
let b = 8;
aElement.innerText = a;
bElement.innerText = b;

btn.addEventListener("click", () => {
    a = a + b;
    b = a - b;
    a = a - b;
    aElement.innerText = a;
    bElement.innerText = b;
});