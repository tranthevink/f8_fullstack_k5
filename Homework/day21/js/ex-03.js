var theGivenArray = [5, 8, 97, 9, 4, 2, 9, 100, 88, 8, 97, 9];
var btn = document.getElementById("btn");
var originalArrayElement = document.getElementById("original-array");
var removedDuplicateArrayElement = document.getElementById("removed-duplicate-array");
originalArrayElement.textContent = `the original array: ${theGivenArray.join(", ")}`;

btn.addEventListener("click", () => {
    var removedDuplicateArray = [];
    for (const element of theGivenArray) {
        if (!isExisting(element, removedDuplicateArray))
            removedDuplicateArray[removedDuplicateArray.length] = element;
    }
    theGivenArray = removedDuplicateArray;
    removedDuplicateArrayElement.textContent = `the removed duplicate array: ${theGivenArray.join(", ")}`;
});



function isExisting(searchElement, array) {
    for (const element of array) {
        if (searchElement === element)
            return true;
    }
    return false;
}


