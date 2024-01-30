function showNumber(i) {
    console.log(i);
    if (i > 1)
        showNumber(i - 1);
    
}

// showNumber(10);

function getTotal(n){
    if(n === 1)
        return 1;
    return n + getTotal(n - 1);
}

console.log(getTotal(3));