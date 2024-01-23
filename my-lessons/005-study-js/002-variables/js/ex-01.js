//Biến trong Javascript
/*

- Lưu trữ dữ liệu tạm thời
- Biến có thể đặt tên
- Biến không cần khai báo kiểu dữ liệu (trong JS)
- Các quy tắc đặt tên trong lập trình (biến, hàm, lớp, ...):
    1) camelCase: customerId, customerAddressShipping (tên biến, tên hàm)
    2) PascalCase: UserInvoice, UserCourse, CustomerController, ... (tên class, tên component trong các framework)
    3) _underscore: customer_id, user_id, customer_shipping_address, ... (tên database, api response)
- Kiểu dữ liệu:
 1) number
 2) null
 3) undefined
 4) string: 
 5) boolean: true, false
- Kiểu dữ liệu tham chiếu
 1) object
 2) function

*/
var age = 31; //number
var lastName = null; //null
var address = undefined; //undefined
var name = "The Vi"; //string
var isEmpty = true; //boolean

//Kiểm tra kiểu dữ liệu của 1 biến
console.log(typeof age);
console.log(lastName === null);
console.log(typeof address);
console.log(typeof name);
console.log(typeof isEmpty);

var userId = 1;
var $username = "tran the vi";
var age$ = 27;
var undefinedVariable;
var fullName,
  //   age = 31,
  address;

console.log(userId);
console.log($username);
console.log(age$);
console.log(undefinedVariable);

// Nối chuỗi
// var courseName = "Fullstack Offline ";
// var welcome = "Chào mừng bạn đến với khóa " + courseName + " tại F8";

var courseName = "Fullstack Offline\n";
courseName = courseName + "The Vi";
var welcome = `Chào mừng bạn đến với khóa  
                ${courseName} 
                tại F8`; //template string using Backtick
console.log(welcome);

var a = "1";
var b = 2;
var c = +a + +b;
console.log(c);
