
var targetTextElement = document.getElementById("target-text");
var targetText = targetTextElement.textContent.trim();
//standardize the text
while (targetText.includes("  ")) {
    targetText = targetText.replaceAll("  ", " ");
}
var textLength = targetText.length;
//initialize the first word as the formatted word
var theFirstSpaceIndex = -1;
var theSecondSpaceIndex = targetText.indexOf(" ");
if (theSecondSpaceIndex < 0) {
    theSecondSpaceIndex = textLength;
}
if (textLength <= 0)
        throw new Error('The target text cannot be empty!');
setInterval(() => {
    // debugger;
    
    if (theFirstSpaceIndex < 0) {
        var stringAfterFormat = `<span style="color:red">${targetText.substring(0, theSecondSpaceIndex)}</span>${theSecondSpaceIndex === textLength ? "" : targetText.substring(theSecondSpaceIndex, textLength)}`;
        targetTextElement.innerHTML = stringAfterFormat;
        //initialize the next word as the formatted word
        theFirstSpaceIndex = theSecondSpaceIndex;
        theSecondSpaceIndex = targetText.indexOf(" ", theSecondSpaceIndex + 1);
    } else if (theSecondSpaceIndex === textLength) {
        var stringAfterFormat = `${theFirstSpaceIndex === -1 ? "" : targetText.substring(0, theFirstSpaceIndex + 1)}<span style="color:red">${targetText.substring(theFirstSpaceIndex+1, theSecondSpaceIndex)}</span>`;
        targetTextElement.innerHTML = stringAfterFormat;
        //initialize the first word as the formatted word
        theFirstSpaceIndex = -1;
        theSecondSpaceIndex = targetText.indexOf(" ");
    } else if (theFirstSpaceIndex > 0 && theSecondSpaceIndex < textLength) {
        var stringAfterFormat = `${targetText.substring(0, theFirstSpaceIndex + 1)}<span style="color:red">${targetText.substring(theFirstSpaceIndex + 1, theSecondSpaceIndex)}</span>${targetText.substring(theSecondSpaceIndex, textLength)}`;
        targetTextElement.innerHTML = stringAfterFormat;
        //initialize the next word as the formatted word
        theFirstSpaceIndex = theSecondSpaceIndex;
        theSecondSpaceIndex = targetText.indexOf(" ", theSecondSpaceIndex + 1);
    }
    //reach the end of the text, reset to initialize the first word as the formatted word 
    if (theSecondSpaceIndex < 0) {
        theSecondSpaceIndex = textLength;
    }
    if (theFirstSpaceIndex === textLength)
        theFirstSpaceIndex = -1;
}, 300);


