Array.prototype.filter2 = function(callback){
    var tempArray = [];
    this.forEach(x => {
        if(callback(x))
            tempArray.push(x);
    });
    return tempArray;
}


var myArray = [1,2,3,4,5,6,7,8,9];

console.log(myArray.filter2(x => x % 2 === 0));