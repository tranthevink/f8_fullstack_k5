var theGivenArray = [5, 8, 9, 4, 2, 100, 88, 97];
var btn = document.getElementById("btn");
var array = document.getElementById("array");
var averageOfThePrimes = document.getElementById("averageOfThePrimes");
array.textContent = theGivenArray ? `the array: ${theGivenArray.join(", ")}` : `the array: Empty`;
var sumOfThePrimes = 0;
var existingPrime = false;
var primeNumList = [];
btn.addEventListener("click", () => {
    
    if (!theGivenArray || theGivenArray.length === 0) {
        averageOfThePrimes.textContent = `The input array must not be empty .`;
        return;
    }
    if (!containsOnlyIntegers(theGivenArray)) {
        averageOfThePrimes.textContent = `The input array must contain integer numbers only`;
        return;
    }
    primeNumList = [];
    sumOfThePrimes = 0;
    for (const element of theGivenArray) {
        var isPrimeChecker = isPrime(element);
        if (isPrimeChecker) {
            existingPrime = true;
            sumOfThePrimes += element;
            primeNumList[primeNumList.length] = element;
        }
    }
    if (existingPrime)
        averageOfThePrimes.textContent = `the average of prime numbers: ${sumOfThePrimes / primeNumList.length} [${primeNumList.join(", ")}]`;
    else
        averageOfThePrimes.textContent = `The array doesn't contain any prime numbers`;
});


function isPrime(a) {
    if (a <= 0 || a === 1)
        return false;
    if (a <= 3)
        return true;
    if (a % 2 === 0 || a % 3 === 0)
        return false;

    let ceiling = Math.sqrt(a);
    for (let i = 5; i <= ceiling; i+=6) {
        if (a % i === 0 || a % (i + 2) === 0) {
            return false;
        }
    }
    return true;
}
function containsOnlyIntegers(inputArray) {
    for (const index in inputArray) {
        if (inputArray[index] % 1 != 0) {
            return false;
        }
    }
    return true;
}