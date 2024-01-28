let btn = document.querySelector("#btn");
let shower = document.getElementById("shower");
shower.innerText = "Word forms: ";

let thousandUnit = "Nghìn";
let hundredUnit = "Trăm";
let tensUnit = "Mươi";
let zeroTens = "Linh";
let singleTen = "Mười";
let oneInNumber = "Mốt";
let singleZero = "Không";
let singleOne = "Một";
let singleTwo = "Hai";
let singleThree = "Ba";
let singleFour = "Bốn";
let singleFive = "Năm";
let fiveInNumber = "Lăm";
let singleSix = "Sáu";
let singleSeven = "Bảy";
let singleEight = "Tám";
let singleNine = "Chín";


btn.addEventListener("click", () => {
    let inputString = prompt("Nhập số cần chuyển thành chữ:");
    if (!inputString) {
        alert("Please type your input!");
        return;
    }
    if (isNaN(inputString)) {
        alert("Please type a number!");
        return;
    }
    let inputNumber = parseInt(inputString);
    if (inputNumber < 0 || inputNumber > 9999) {
        alert("Please type the number from 0 to 9999!");
    }
    shower.innerText = `Word forms: ${inputNumber}: ${convertToWord(inputNumber)}`;
});

function convertToWord(inputNumber) {
    let text = "";
    if (inputNumber === 0) {
        text += `${singleZero}`;
        return text;
    }
    let thousandNumber = parseInt(inputNumber / 1000);
    inputNumber = inputNumber % 1000;
    let hundredNumber = parseInt(inputNumber / 100);
    inputNumber = inputNumber % 100;
    let tensNumber = parseInt(inputNumber / 10);
    inputNumber = inputNumber % 10;
    let unitNumber = inputNumber;
    //------------dealing with thousand number----------------
    if (thousandNumber)
        text += `${convertToUnitWord(thousandNumber)} ${thousandUnit} `;
    //------------dealing with hundred number----------------
    if (hundredNumber || (thousandNumber && (tensNumber || unitNumber)))
        text += `${convertToUnitWord(hundredNumber)} ${hundredUnit} `;
    //------------dealing with tens number----------------
    if (tensNumber == 1) {
        text += `${singleTen} `;
    } else if (tensNumber > 1) {
        text += `${convertToUnitWord(tensNumber)} ${tensUnit} `;
    } else if ((thousandNumber || hundredNumber) && !tensNumber && unitNumber > 0) {
        text += `${zeroTens} `;
    }
    //------------dealing with unit number----------------
    if (tensNumber && unitNumber === 5) {
        text += `${fiveInNumber}`;
        return text;
    }
    if (tensNumber > 1 && unitNumber == 1) {
        text += `${oneInNumber}`;
    } else if (unitNumber) {
        text += `${convertToUnitWord(unitNumber)}`;
    }
    return text;
}

function convertToUnitWord(number) {
    if (isNaN(number))
        return "";
    switch (number) {
        case 0:
            return singleZero;
            break;
        case 1:
            return singleOne;
            break;
        case 2:
            return singleTwo;
            break;
        case 3:
            return singleThree;
            break;
        case 4:
            return singleFour;
            break;
        case 5:
            return singleFive;
            break;
        case 6:
            return singleSix;
            break;
        case 7:
            return singleSeven;
            break;
        case 8:
            return singleEight;
            break;
        case 9:
            return singleNine;
            break;
    }
}