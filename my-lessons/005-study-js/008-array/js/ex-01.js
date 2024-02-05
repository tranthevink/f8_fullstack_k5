/*
- Mảng trong JS là kiểu dữ liệu tham chiếu
- Là tập hợp của nhiều kiểu dữ liệu trong 1 biến
- Mảng bản chất là 1 object (1 dạng của object)
-  Mảng gồm 2 phần: 
    +) ELement: giá trị của phần tử trong mảng
    +) Index: Chỉ số để truy cập vào phần tử trong mảng (bắt đầu từ 0)

Có 2 loại mảng:
    - Mảng 1 chiều
    - Mảng đa chiều

Hàm tạo của mảng là Array
*/

var users = [1, 2, 3, 4, 5, 6, 7];
// var customers = new Array();
// console.log(typeof users);
// console.log(Array.isArray(users));
// console.log(Array.prototype);
// console.log(users); //[1, 2, 3, 4, 5, 6, 7]
// console.log(users["0"]);

// users[users.length] = 8;
// console.log(users);
// console.log(users.length);
//Duyệt mảng

// for (let index = 0; index < users.length; index++) {
//     console.log(users[index]);
// }

// for (const key in users) {
//    console.log(key);
//    console.log(typeof key);
// }
//
// for (const key of users) {
//     console.log(key);
//     console.log(typeof key);
//  }

//Lưu ý vòng lặp forin sẽ lấy được cả index và key
//forof chỉ lấy được giá trị là index

// var users = [1, 2, 3, null, 5, 6, 7];
// users.pop();
// console.log(users);

//Bài tập: Chèn 1 phần tử vào đầu mảng.

var users = [1, 2, 3, 4, 5, 6, 7];
var newValue = 'hello';
var newUsers = [newValue];
var count = 0;
for (const key in users) {
    newUsers[newUsers.length] = users[key];
}
console.log(newUsers);








