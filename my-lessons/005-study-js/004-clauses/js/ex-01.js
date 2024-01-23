/*
Câu lệnh rẽ nhánh if else
1. Dạng thiếu
if(condition){
        //code here
}

2. Dạng đầy đủ
if(condition){
    //code here
}else{
    //code here
}

3. Dạng nhiều nhánh

if(condition1){
    //code here
}else if(condition2){
    //code here
}else{
    //code here
}

4. Dạng lồng nhau
if(condition1){
    if(condition2){
        //code here
    }else{
        //code here
    }
}else{
    //code here
}
*/





/*
Tính lương thực nhận sau khi trừ thuế
Ví dụ: Cho trước tổng lương --> tính lương sau trừ thuế

<= 5tr --> 0%
> 5tr và <= 15tr --> 3%
trên 15tr --> 5%


*/
var million = 1000000;
var salary = prompt(`Nhập lương (triệu):`) * million;
var rate;
if (salary <= 5 * million) {
    rate = 0;
} else if (salary > 5000000 && salary <= 15 * million) {
    rate = 0.03;
} else {
    rate = 0.05;
}
salary = salary * (1 - rate);
document.write(`<h1>${"Thực nhận:" + salary}</h1>`)



// if (number) {
//     document.write(`<h1>${"Giá trị đúng"}</h1>`)
// } else {
//     document.write(`<h1>${"Giá trị sai"}</h1>`)
// }
var email = "",
    password = "";

if (!email || !password) {
    if (!email)
        document.write(`<h1>${"Vui lòng nhập email"}</h1>`);
    if (!password)
        document.write(`<h1>${"Vui lòng nhập password"}</h1>`);
}