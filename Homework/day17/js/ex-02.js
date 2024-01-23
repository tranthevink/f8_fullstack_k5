let btn = document.getElementById("btn");
let show = document.getElementById("showBtn");
let level1 = 1678;
let level2 = 1734;
let level3 = 2014;
let level4 = 2536;
let level5 = 2834;
let level6 = 2927;
btn.addEventListener("click", () => {
    let electricFee = 0;
    let numbersOfKWh = prompt("Nhập số kWh sử dụng:");
    while (numbersOfKWh > 0) {
        if (numbersOfKWh >= 401) {
            let appliedKwhForCurrentLevel = numbersOfKWh - 400;
            electricFee += level6 * appliedKwhForCurrentLevel;
            numbersOfKWh = numbersOfKWh - appliedKwhForCurrentLevel;
        } else if (numbersOfKWh >= 301 && numbersOfKWh <= 400) {
            let appliedKwhForCurrentLevel = numbersOfKWh - 300;
            electricFee += level5 * appliedKwhForCurrentLevel;
            numbersOfKWh = numbersOfKWh - appliedKwhForCurrentLevel;

        } else if (numbersOfKWh >= 201 && numbersOfKWh <= 300) {
            let appliedKwhForCurrentLevel = numbersOfKWh - 200;
            electricFee += level4 * appliedKwhForCurrentLevel;
            numbersOfKWh = numbersOfKWh - appliedKwhForCurrentLevel;

        } else if (numbersOfKWh >= 101 && numbersOfKWh <= 200) {
            let appliedKwhForCurrentLevel = numbersOfKWh - 100;
            electricFee += level3 * appliedKwhForCurrentLevel;
            numbersOfKWh = numbersOfKWh - appliedKwhForCurrentLevel;

        } else if (numbersOfKWh >= 51 && numbersOfKWh <= 100) {
            let appliedKwhForCurrentLevel = numbersOfKWh - 50;
            electricFee += level2 * appliedKwhForCurrentLevel;
            numbersOfKWh = numbersOfKWh - appliedKwhForCurrentLevel;

        } else if (numbersOfKWh > 0 && numbersOfKWh <= 50) {
            let appliedKwhForCurrentLevel = numbersOfKWh;
            electricFee += level1 * appliedKwhForCurrentLevel;
            numbersOfKWh = numbersOfKWh - appliedKwhForCurrentLevel;
        }
    }
    show.innerText = electricFee;
});