let btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    let n = parseInt(prompt("Nhập số n:"));
    document.getElementById("show").innerText = "";
    draw(n);
});

function draw(numberOfLines) {
    let currentValue = 1;
    for (let lineCounter = 1; lineCounter <= numberOfLines; lineCounter++) {
        let tempValue = lineCounter;
        let tempString = "";
        while (tempValue > 0) {
            tempString += `${currentValue} `;
            currentValue++;
            tempValue--;
        }
        let li = document.createElement("li");
        li.innerText = `${tempString.trim()}`;
        document.getElementById("show").appendChild(li);
    }
}