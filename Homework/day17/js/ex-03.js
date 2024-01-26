let btn = document.getElementById("btn");
let show = document.getElementById("showBtn");
let text = "";
btn.addEventListener("click", () => {
    text = "";
    let s = 0;
    let n = parseInt(prompt("Nhập số n:"));
    // let check = n * (n + 1) * (n + 2) / 3;
    // console.log(typeof check);

    for (let i = 1; i <= n; i++) {
        s += i * (i + 1);
        if (i === n) {
            text += `${i}*${i+1}`;
        } else {
            text += `${i}*${i+1} + `;
        }
    }
    // if (s === check)
    //     alert("true");
    // else
    //     alert("false");
    show.innerText = `S = ${text} = ${s}`;
});