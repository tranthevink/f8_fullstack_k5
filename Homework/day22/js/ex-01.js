var array1 = [1, 4, 3, 2];
var array2 = [5, 2, 6, 7, 1];
var btn = document.getElementById("btn");
var array1Element = document.getElementById("array1");
var array2Element = document.getElementById("array2");
var collapsingArrayElement = document.getElementById("collapsing-array");

array1Element.textContent = array1 ?  `the array1: ${array1.join(", ")}` : `the array1: Empty`;
array2Element.textContent = array2 ?  `the array2: ${array2.join(", ")}` : `the array2: Empty`;
btn.addEventListener("click", () => {
    if(!array1 || !array2 || array1.length === 0 || array2.length === 0 ){
        collapsingArrayElement.textContent = `the collapsing array: []`;
        return;
    }
    let collapsingArray = array1.filter((item) => {
        return array2.includes(item);
    });
    collapsingArrayElement.textContent = `the collapsing array: [${collapsingArray.join(", ")}]`;
});



