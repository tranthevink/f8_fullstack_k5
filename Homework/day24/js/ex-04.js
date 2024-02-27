Array.prototype.reduce2 = function (callback, initialValue) {
    if (this.length === 0)
        throw new Error("The input array must not be empty!");
    if (initialValue) {
        var prev = initialValue;
        for (let index = 0; index < this.length; index++) {
            prev = callback(prev, this[index], index);
        }
        return prev;
    } else {
        prev = this[0];
        for (let index = 1; index < this.length; index++) {
            prev = callback(prev, this[index], index);
        }
        return prev;
    }
}

var array1 = [1, 2, 3];
var reducingArray1WithInitialValue = array1.reduce2((prev, current, index) => prev + current, 10);
console.log(reducingArray1WithInitialValue);
var reducingArray1WithoutInitialValue = array1.reduce2((prev, current, index) => prev + current);
console.log(reducingArray1WithoutInitialValue);
// [].reduce((prev, current, index) => prev + current);
