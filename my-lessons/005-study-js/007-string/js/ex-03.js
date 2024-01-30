//Closure

/*
Lưu ý: các hàm trong JS đều là hàm Closure (hàm được gói trong 1 cái gì đó)

*/
var tranthevi = 10;
function init() {
    console.log("Hello Init");
    this.show = function show() {
        console.log("Hello show");

    }
}
// var test = new init();
// test.show();

function test(){
    console.log("Hello");
}

function test(){
    console.log("Hello2");
}


//IIFE

(function (msg){
    console.log(msg);
})("Tran The Vi");