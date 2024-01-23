let btn = document.getElementById("btn");
let list = document.getElementById("list");
let isSameSign = document.getElementById("is-same-sign");
let a = 24;
let b = -12;
list.innerText = `list:
                  a = ${a}
                  b = ${b}
                  `
btn.addEventListener("click", () => {
    if (a === 0 && b === 0)
        isSameSign.innerText = `Same sign`;
    else if (a > 0 && b > 0)
        isSameSign.innerText = `Same sign`;
    else if (a < 0 && b < 0)
        isSameSign.innerText = `Same sign`;
    else
        isSameSign.innerText = `Not Same sign`;

});