var a = {
    name: "Vi",
    age: 27
};

var b = {
    name: "Vi2",
    age: 28
};


var c = Object.assign(Object.assign({}, a), b);
console.log(c);
console.log(a === c);

