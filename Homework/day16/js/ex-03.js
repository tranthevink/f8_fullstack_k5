let btn = document.getElementById("btn");
let list = document.getElementById("list");
let maxValue = document.getElementById("max-value");
let a = 24;
let b = 12;
let c = 5;
list.innerText = `list:
                  a = ${a}
                  b = ${b}
                  c = ${c}`
btn.addEventListener("click", () => {
    let max = a;
    if (b > max)
        max = b;
    if (c > max)
        max = c;
    maxValue.innerText = `Max value: ${max}`;
});