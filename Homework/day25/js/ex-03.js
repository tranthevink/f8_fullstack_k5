Array.prototype.push2 = function(newItem){
    this[this.length] = newItem;
}

var myArray = [1,2,3,4];

myArray.push2(5);
myArray.push2(null);
myArray.push2(undefined);
myArray.push2({name: "Tran The Vi"});
console.log(myArray);

