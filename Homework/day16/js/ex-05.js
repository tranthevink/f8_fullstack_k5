let btn = document.getElementById("btn");
let unsortedList = document.getElementById("unsorted-list");
let sortedList = document.getElementById("sorted-list");
let a = 5;
let b = 6;
let c = 5;
unsortedList.innerText = `unsorted list:
                  a = ${a}
                  b = ${b}
                  c = ${c}`
btn.addEventListener("click", () => {
    let sortedListTemp = `sorted list:`
    if (a <= b && a <= c) {
        sortedListTemp += `\na = ${a}`;
        if (b <= c) {
            sortedListTemp += `\nb = ${b}`;
            sortedListTemp += `\nc = ${c}`;
        } else {
            sortedListTemp += `\nc = ${c}`;
            sortedListTemp += `\nb = ${b}`;
        }
    } else if (b <= a && b <= c) {
        sortedListTemp += `\nb = ${b}`;
        if (a <= c) {
            sortedListTemp += `\na = ${a}`;
            sortedListTemp += `\nc = ${c}`;
        } else {
            sortedListTemp += `\nc = ${c}`;
            sortedListTemp += `\na = ${a}`;

        }
    } else {
        sortedListTemp += `\nc = ${c}`;
        if (a <= b) {
            sortedListTemp += `\na = ${a}`;
            sortedListTemp += `\nb = ${b}`;
        } else {
            sortedListTemp += `\nb = ${b}`;
            sortedListTemp += `\na = ${a}`;
        }
    }
    sortedList.innerText = sortedListTemp;
});