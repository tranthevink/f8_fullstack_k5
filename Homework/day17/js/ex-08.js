let btn = document.getElementById("btn");
let show = document.getElementById("showBtn");
let text = "";
btn.addEventListener("click", () => {
    text = "";
    let n = parseInt(prompt("Nhập số n:"));
    let finalValue = recursiveExpression(n);
    show.innerText = `S = ${text} = ${finalValue}`;
});


function recursiveExpression(n) {
    let elementValue = 1 / n;
    if (isNaN(n)) {
        text = `0`;
        return 0;
    }
    if (n === 1) {
        text = `1` + text;
        return 1;
    } else {
        text = ` + 1/${n}` + text;
        return elementValue + recursiveExpression(n - 1);
    }
}