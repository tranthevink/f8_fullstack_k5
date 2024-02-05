var theGivenArray = [5, 8, 9, 4, 2, 100, 88, 97];
var btn = document.getElementById("btn");
var array = document.getElementById("array");
var averageOfThePrimes = document.getElementById("averageOfThePrimes");
array.textContent = `the array: ${theGivenArray.join(", ")}`;
var sumOfThePrimes = 0;
var existingPrime = false;
var primeNumList = [];
btn.addEventListener("click", () => {
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
        averageOfThePrimes.textContent = `the average of prime numbers: ${sumOfThePrimes/primeNumList.length} [${primeNumList.join(", ")}]`;
    else
        averageOfThePrimes.textContent = `The array doesn't contain any prime numbers`;
});


function isPrime(a) {
    if (a <= 0 || a === 1)
        return false;
    let ceiling = Math.sqrt(a);
    for (let i = 2; i <= ceiling; i++) {
        if (a % i === 0) {
            return false;
        }
    }
    return true;
}