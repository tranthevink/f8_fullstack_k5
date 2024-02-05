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
originalArrayElement.textContent = `the original array: ${theGivenArray.join(", ")}`;
insertedElement.textContent = `the inserted element: ${insertedValue}`;
insertingBtn.disabled = true;

sortingBtn.addEventListener("click", () => {
    sort(theGivenArray);
    sortedArrayElement.textContent = `the sorted array: ${theGivenArray.join(", ")}`;
    insertingBtn.disabled = false;
});


insertingBtn.addEventListener("click", () => {
    var insertedIndex = findInsertedIndex(insertedValue, theGivenArray);

    theGivenArray = insertAt(insertedValue, insertedIndex, theGivenArray);
    insertedArrayElement.textContent = `the inserted array: ${theGivenArray.join(", ")}`;
    //random another number
    insertedValue = Math.floor(Math.random() * 100);
    insertedElement.textContent = `the inserted element: ${insertedValue}`;
});


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








