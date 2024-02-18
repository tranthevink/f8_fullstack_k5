var theGivenArray = [5, 8, 9, 4, 2, 100, 0, 88, 97, 0];
var btn = document.getElementById("btn");
var array = document.getElementById("array");
var minElement = document.getElementById("min");
var maxElement = document.getElementById("max");
var minValue;
var minIndex;
var maxValue;
var maxIndex;
array.textContent = theGivenArray ?  `the array: ${theGivenArray.join(", ")}` : `the array: Empty`;
btn.addEventListener("click", () => {
    if(!theGivenArray || theGivenArray.length === 0){
        minElement.textContent = `The input array must not be empty .`;
        return;
    }
    if(!containsOnlyIntegers(theGivenArray)){
        minElement.textContent = `The input array must contain integer numbers only`;
        return;
    }
    for (const index in theGivenArray) {
        if (isNaN(minValue) || theGivenArray[index] < minValue) {
            minValue = theGivenArray[index];
            minIndex = index;
        }
        if (!maxValue || theGivenArray[index] > maxValue) {
            maxValue = theGivenArray[index];
            maxIndex = index;
        }
    }
    minElement.textContent = `Min: ${minValue} at index ${minIndex}`;
    maxElement.textContent = `Max: ${maxValue} at index ${maxIndex}`;

});

function containsOnlyIntegers(inputArray) {
    for (const index in inputArray) {
        if (inputArray[index] % 1 !== 0) {
            return false;
        }
    }
    return true;
}


