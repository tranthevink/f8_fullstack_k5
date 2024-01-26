let btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    draw();
});

function draw() {
    let cell = `display: inline-block;background-color:yellow;border: 1px solid green;margin: 10px 20px`;
    let multiplicationTable = `<div style="display: inline-block;border: 2px solid black;">\n`;
    for (let firstOperand = 1; firstOperand <= 10; firstOperand++) {
        let rowHtmlElement = `<div style="${cell}">\n`;
        for (let secondOperand = 1; secondOperand <= 10; secondOperand++) {
            rowHtmlElement += `<div>${firstOperand} x ${secondOperand} = ${firstOperand * secondOperand}</div>`;
        }
        rowHtmlElement += "</div>\n";
        multiplicationTable += rowHtmlElement;
    }
    multiplicationTable += "</div>\n";
    document.write(multiplicationTable);
    console.log(multiplicationTable);
}