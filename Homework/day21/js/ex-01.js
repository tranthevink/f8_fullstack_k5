var theGivenArray = [0, 5, 8, 9, 4, 2, 100, 88, 97, 0];
var btn = document.getElementById("btn");
var array = document.getElementById("array");
var minElement = document.getElementById("min");
var maxElement = document.getElementById("max");
var minValue;
var minIndex;
var maxValue;
var maxIndex;
array.textContent = `the array: ${theGivenArray.join(", ")}`;
btn.addEventListener("click", () => {
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



