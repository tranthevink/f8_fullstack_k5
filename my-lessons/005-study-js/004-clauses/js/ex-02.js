/*
Câu lệnh rẽ nhánh switch case


*/
// var action = "inser1t";
// switch (action) {
//     case "insert":
//     case "add":
//     case "create":
//         document.write(`<h1>${"Bạn đã create"}</h1>`);
//         break;
//     case "read":
//         document.write(`<h1>${"Bạn đã read"}</h1>`);
//         break;
//     case "update":
//         document.write(`<h1>${"Bạn đã update"}</h1>`);
//         break;
//     case "delete":
//         document.write(`<h1>${"Bạn đã delete"}</h1>`);
//         break;
//     default:
//         document.write(`<h1>${"Dữ liệu không hợp lệ"}</h1>`);
//         break;
// }

// if (action === "create" || action === "insert" || action === "add") {
//     document.write(`<h1>${"Bạn đã create"}</h1>`);
// } else if (action === "read") {
//     document.write(`<h1>${"Bạn đã read"}</h1>`);
// } else if (action === "update") {
//     document.write(`<h1>${"Bạn đã update"}</h1>`);
// } else if (action === "delete") {
//     document.write(`<h1>${"Bạn đã delete"}</h1>`);
// } else {
//     document.write(`<h1>${"Dữ liệu không hợp lệ"}</h1>`);
// }



/*Hiển thị số ngày trong tháng
Tháng 31 ngày: 1,3,5,6,7,8, 10, 12
Tháng 30 ngày: 4, 6, 9, 11
Tháng 29 hoặc 28 ngày: 2

Yêu cầu: Kiểm tra tháng hợp lệ và hiển thị số ngày trong tháng đó
- Số nguyên --> Không được dùng hàm
- Từ 1 đến 12 
*/

var month = "2";

// if (month % 1 !== 0) {
//     document.write(`<h1>${"Dữ liệu không hợp lệ. Tháng trong năm không thể là số thực"}</h1>`);
// } else if (month <= 0 || month > 12) {
//     document.write(`<h1>${"Dữ liệu không hợp lệ. Tháng trong năm chỉ trong phạm vi từ 1 tới 12"}</h1>`);
// } else if (typeof month !== "number") {
//     document.write(`<h1>${"Dữ liệu không hợp lệ. Tháng trong năm cần phải là số"}</h1>`);
// } else {
//     switch (month) {
//         case 4:
//         case 6:
//         case 9:
//         case 11:
//             document.write(`<h1>Tháng ${month} có ${30} ngày</h1>`);
//             break;
//         case 2:
//             document.write(`<h1>Tháng ${month} có 28 hoặc 29 ngày</h1>`);
//             break;
//         default:
//             document.write(`<h1>Tháng ${month} có ${31} ngày</h1>`);
//             break;
//     }

// }

switch (true) {
    case 1:
        document.write(`<h1>1</h1>`);
        break;
    case "":
        document.write(`<h1>empty</h1>`);
        break;
    case undefined:
        document.write(`<h1>undefined</h1>`);
        break;
    default:
        document.write(`<h1>default</h1>`);
        break;
}