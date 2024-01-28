let btn = document.querySelector("#btn");
let shower = document.getElementById("shower");
shower.innerText = "Reverted number: ";
btn.addEventListener("click", () => {
    let input = prompt("Nhập số cần đảo ngược:");
    if (!input) {
        alert("Please type your input!");
        return;
    }
    if (isNaN(input)) {
        alert("Please type a number!");
        return;
    }
    let isNegativeNumber = false;
    let inputNumber = parseInt(input);
    if (inputNumber < 0) {
        isNegativeNumber = true;
        inputNumber = -inputNumber;
    }
    let revertedString = inputNumber.toString().split("").reverse().join("");
    let revertedNumber = isNegativeNumber ? -parseInt(revertedString) : parseInt(revertedString);
    shower.innerText = `Reverted number: ${revertedNumber}`;
});