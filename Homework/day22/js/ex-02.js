var theGivenArray = [0, 1, [2, 3], [4, 5, [6, 7]], [8, [9, 10, [11, 12]]]];
var btn = document.getElementById("btn");
var arrayElement = document.getElementById("array");
var flattenArrayElement = document.getElementById("flatten-array");

arrayElement.textContent = theGivenArray ? `the array: ${theGivenArray}` : `the array: Empty`;
console.log(theGivenArray);
btn.addEventListener("click", () => {
    if (!theGivenArray || theGivenArray.length === 0) {
        flattenArrayElement.textContent = `the flatten array: []`;
        return;
    }
    var flattenArray = [];
    flattenArray = flatArray(theGivenArray);
    flattenArrayElement.textContent = `the flatten array: [${flattenArray.join(", ")}]`;
    console.log(flattenArray);

});

function flatArray(input) {
    if (Array.isArray(input)) {
        let tempArray = [];
        input.forEach((element) => {
            tempArray = tempArray.concat(flatArray(element));
        });
        return tempArray;
    } else {
        return input;
    }
}