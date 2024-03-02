var numbers = [
    [3], 5, "10", null, 2, undefined, [], NaN, Infinity, 8, -Infinity, {}, 7, true, 12, false
]

var total = 0;
numbers.forEach(x => {

    var tempValue = Array.isArray(x) ? NaN : parseInt(x);
    if (!Number.isNaN(tempValue) && tempValue % 2 !== 0) {
        total += tempValue;
    }
});
console.log(total);