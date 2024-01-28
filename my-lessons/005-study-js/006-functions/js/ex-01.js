/*
Hàm  (functions)
- Cú pháp trong lập trình
- Gom các đoạn chương trình để tái sử dụng
Cú pháp:
function nameOfFunction(){
    //code here
}

function nameOfFunction(parameter1, parameter2, ...){
    //code here
}

--> Declaration Function

Quy tắc đặt tên:
- Dùng quy tắc camelCase
- Dùng động từ (Bắt đầu: get, set, create, make, build,  ...)

*/

let a = 10;
let b = 20;

function showMessage(msg, type = "success") {
    // console.log("Hello ae F8");
    console.log(msg);
    console.log(type);
}
// showMessage(); //lời gọi hàm chủ động
// showMessage("Học Js không khó");
showMessage("Học Js không khó", "myType");