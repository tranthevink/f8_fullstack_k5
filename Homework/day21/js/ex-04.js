var theGivenArray = [5, 8, 97, 9, 4, 2, 9, 100, 88, 8, 97, 9];
var insertedValue = Math.floor(Math.random() * 100);
var sortingBtn = document.getElementById("sorting-btn");
var insertingBtn = document.getElementById("inserting-btn");
var btn = document.getElementById("sorting-btn");
var originalArrayElement = document.getElementById("original-array");
var insertedElement = document.getElementById("inserted-element");
var sortedArrayElement = document.getElementById("sorted-array");
var insertedArrayElement = document.getElementById("inserted-array");


var tempArray = [];
originalArrayElement.textContent = theGivenArray ? `the original array: ${theGivenArray.join(", ")}` : `the original array: Empty`;
insertedElement.textContent = `the inserted element: ${insertedValue}`;
insertingBtn.disabled = true;

sortingBtn.addEventListener("click", () => {
    if (!isValidArray()) {
        return;
    }
    sort(theGivenArray);
    sortedArrayElement.textContent = `the sorted array: ${theGivenArray.join(", ")}`;
    insertingBtn.disabled = false;
});


insertingBtn.addEventListener("click", () => {
    if (!isValidArray()) {
        return;
    }
    if(isNaN(insertedValue)){
        insertedElement.textContent = `the inserted value must be a number`;
    }
    var insertedIndex = findInsertedIndex(insertedValue, theGivenArray);

    theGivenArray = insertAt(insertedValue, insertedIndex, theGivenArray);
    insertedArrayElement.textContent = `the inserted array: ${theGivenArray.join(", ")}`;
    //random another number
    insertedValue = Math.floor(Math.random() * 100);
    insertedElement.textContent = `the inserted element: ${insertedValue}`;
});

function isValidArray() {
    if (!theGivenArray || theGivenArray.length === 0) {
        sortedArrayElement.textContent = `The input array must not be empty .`;
        return;
    }
    if (!containsOnlyIntegers(theGivenArray)) {
        sortedArrayElement.textContent = `The input array must contain integer numbers only`;
        return false;
    }
    return true;
}

//selection sort
function sort(array) {
    for (const index in array) {
        for (var referenceIndex = parseInt(index) + 1; referenceIndex < array.length; referenceIndex++) {
            if (array[referenceIndex] < array[index]) {
                var temp = array[referenceIndex];
                array[referenceIndex] = array[index];
                array[index] = temp;
            }
        }
    }
}
function findInsertedIndex(insertedValue, sortedArray) {
    if (isNaN(insertedValue) || !sortedArray) {
        throw "Input is invalid";
    }
    var insertedIndex = sortedArray.length;
    for (const index in sortedArray) {
        if (sortedArray[index] <= insertedValue) {
            insertedIndex = parseInt(index) + 1;
        } else {
            return parseInt(index);
        }
    }
    return insertedIndex;
}
function insertAt(insertedValue, insertedIndex, sortedArray) {
    if (!sortedArray || insertedIndex > sortedArray.length) {
        debugger;
        throw "Input is invalid";
    }
    var tempArray = [];
    var inserted = false;
    for (const index in sortedArray) {
        if (parseInt(index) === insertedIndex) {
            tempArray[tempArray.length] = insertedValue;
            tempArray[tempArray.length] = sortedArray[index];
            inserted = true;
        } else {
            tempArray[tempArray.length] = sortedArray[index];
        }
    }
    if (!inserted)
        tempArray[tempArray.length] = insertedValue;
    return tempArray;
}
function containsOnlyIntegers(inputArray) {
    for (const index in inputArray) {
        if (inputArray[index] % 1 !== 0) {
            return false;
        }
    }
    return true;
}








