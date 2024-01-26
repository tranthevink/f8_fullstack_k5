let btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    draw();
});

function draw() {

    let cell = `display: inline-block;width: 50px;height: 50px;`;
    let white = `background-color: white;`;
    let black = `background-color: black;`;
    let chessBoardHtml = `<div style="display: inline-block;border: 2px solid black;">\n`;
    for (let row = 0; row < 8; row++) {
        let rowHtmlElement = `<div style="font-size:0;">\n`;
        for (let col = 0; col < 8; col++) {
            let styleList = cell;
            if ((row + col) % 2 === 0) {
                styleList += ` ${white}`;
            } else {
                styleList += ` ${black}`;
            }
            rowHtmlElement += `<div style="${styleList}"></div>\n`;
        }
        rowHtmlElement += "</div>\n";
        chessBoardHtml += rowHtmlElement;
    }
    chessBoardHtml += "</div>\n";
    document.write(chessBoardHtml);
    console.log(chessBoardHtml);
}