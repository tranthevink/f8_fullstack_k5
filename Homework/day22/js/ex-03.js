var theGivenArray = [["a", 1, true], ["b", 2, false]];
var btn = document.getElementById("btn");
var originalArrayElement = document.getElementById("original-array");
var splittingArrayElement = document.getElementById("splitting-array");
originalArrayElement.textContent = `the original array: ${theGivenArray.join(", ")}`;

btn.addEventListener("click", () => {
    if (!theGivenArray || theGivenArray.length === 0) {
        splittingArrayElement.textContent = `the splitting array: []`;
        return;
    }
    var flattenArray = [];
    var splittingArray = [];
    var dataTypeArray = [];
    flattenArray = flatArray(theGivenArray);
    flattenArray.forEach(element => {
        let currentDataType = typeof element;
        if(!dataTypeArray.includes(currentDataType))
            dataTypeArray.push(currentDataType);
    });
    dataTypeArray.forEach(dataType =>{
        let theSameDataTypeElements = flattenArray.filter(x => typeof x === dataType);
        splittingArray.push(theSameDataTypeElements);
    });
    console.log(splittingArray);
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

