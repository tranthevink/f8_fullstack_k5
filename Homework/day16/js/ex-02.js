let btn = document.getElementById("btn");
let show = document.getElementById("showBtn");

btn.addEventListener("click", () => {
    let s = 10 + 20 + 5 ** 10 / 2;
    show.innerText = `S = ${s}`;
});