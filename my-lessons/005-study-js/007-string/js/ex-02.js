/*
Hàm có giá trị trả về (Hàm return)
--> để trả về giá trị trong 1 hàm, dùng từ khóa return
--> khi dùng return, hàm sẽ thoát, các đoạn chương trình phía dưới sẽ không được chạy
Hàm không có giá trị trả về (Hàm void)

- Biến toàn cục (Global variable): 
    +) được khai báo ở phạm vi ngoài hàm
    +) 
- Biến cục bộ  (Local variable): được khai báo ở bên trong hàm
    +) Chỉ được sử dụng trong hàm đã được khai báo hoặc các hàm con.
Lưu ý: trong JS không có khái niệm THAM TRỊ và THAM CHIẾU
*/

function sum(a, b) {
    let total = a + b;
    console.log("The Vi NK");
    return total;
    console.log("Hello F8");
}

function divide(a, b) {
    if (b === 0) {
        return "Not be able to calculate!";
    }
    return a / b;
}





// var result = sum(3, 8) + 30;
// console.log(result);

// var result = divide(8, 4);
// console.log(result);

function setMessage(value) {
    message = value;
}

function getMessage() {
    return message;
}



setMessage("Hello there");

console.log(getMessage());

window.console.log(window);
// var message = "Study Js easily";
var name = "Hello Hello";
console.log(name);