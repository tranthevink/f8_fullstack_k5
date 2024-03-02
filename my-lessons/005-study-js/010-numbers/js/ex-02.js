Object.prototype.combineValues = function() {
    return Object.values(this);
};

var test = {
    name: "The Vi",
    email: "tranthevink@gmail.com",
    age: 27
}

console.log(test.combineValues());

