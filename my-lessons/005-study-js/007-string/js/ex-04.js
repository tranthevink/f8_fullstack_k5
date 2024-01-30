//Callback Function

var showStudent = () => {
    console.log("I am a student");
}


function runFunction(inputFunc) {
    console.log(typeof inputFunc);
    inputFunc();
}

// runFunction(showStudent);


var print = (number) => {
    console.log(number);
}

// setTimeout(print, 2000, 10);
// setTimeout(() => {
//     print(10);
// }, 3000);



function getA(func) {
    setTimeout(function () {
        console.log("getA");
        console.log(func);
        if (typeof func === "function") {
            func();
        }
    }, 2000);
}

function getB(func) {
    setTimeout(function () {
        console.log("getB");
        if (typeof func === "function") {
            func();
        }
    }, 1000);
}

function getC(func) {
    setTimeout(function () {
        console.log("getC");
        if (typeof func === "function") {
            func();
        }
    }, 500);
}

// getA(function(){
//     getB(getC);
// })
// getB(() =>{
//     getC(getA);
// })





function max() {
    console.log(arguments);
}

/*
Không hỗ trợ trong arrow function (ES6) --> Cần sử dụng Rest Parameter
*/


// max(1, 2, 3, 4, 5);



