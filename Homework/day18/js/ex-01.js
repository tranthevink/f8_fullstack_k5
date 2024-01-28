let btn = document.querySelector("#btn");
let shower = document.getElementById("shower");
let text = "Fibonacci numbers list: ";
shower.innerText = text;
let theFirstFibonacci = 1;
let theSecondFibonacci = 1;
let count = 3;
let numberOfFibos = 0;
btn.addEventListener("click", () => {
    resetAll();
    numberOfFibos = parseInt(prompt("Nhập số n:"));
    recursiveFibonacci();
    shower.innerText = `Fibonacci numbers list: ${text}`;
});

function resetAll() {
    count = 3;
    text = "1, 1";
    theFirstFibonacci = 1;
    theSecondFibonacci = 1;
    numberOfFibos = 0;
}

function recursiveFibonacci() {
    if (!numberOfFibos || numberOfFibos < 0) {
        alert("n must be a positive number");
        return;
    }
    if (numberOfFibos === 1) {
        text = `${theFirstFibonacci}`;
        return;
    }
    if (numberOfFibos === 2) {
        text = `${theFirstFibonacci}, ${theSecondFibonacci}`;
        return
    }
    text += `, ${theFirstFibonacci + theSecondFibonacci}`;
    // console.log(text); //just for testing
    let temp = theFirstFibonacci + theSecondFibonacci;
    theFirstFibonacci = theSecondFibonacci;
    theSecondFibonacci = temp;
    count++;
    if (count > numberOfFibos)
        return;
    recursiveFibonacci();
}