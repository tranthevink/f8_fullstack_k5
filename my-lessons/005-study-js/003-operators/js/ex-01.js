/*
Expression = Operator + Operand

for example: total = a + b * c;

1. Toán tử số học
  +, -, *, /, %, ++, --, **
  
2. Toán tử gán
Lưu ý: Không gán, giá trị mặc định là undefined.

=
+=
-=
*=
/=
%=

3. Toán tử so sánh (trả về true hoặc false)
>
<
<=
>=
!=
==
===
!==
4. Toán tử logic
&& : chỉ đúng khi tất cả biểu thức con đúng
|| : chỉ sai khi tất cả biểu thức con sai
! : lật ngược true thành false, false thành true

Lưu ý: khi sử dụng toán tử kết hợp, cần sử dụng thêm cặp ngoặc tròn để nhóm các biểu thức

Nếu tồn tại cả 3 toán tử logic trong 1 biểu thức, thứ tự ưu tiên sẽ như sau
! > && > ||

5. Toán tử điều kiện

var a = 10;
var b = a >= 10 ? "Lớn hơn hoặc bằng 10" : "nhỏ hơn 10"; 
Lưu ý: chỉ đưa toán tử ba ngôi vào biểu thức

6. Toán tử nullish (??)
// ketqua = variable ?? defaultValue
Cách hoạt động: kiểm tra variable có khác null và undefined hay không?
- Nếu có: lấy giá trị trước ??
- Nếu không: lấy giá trị sau ??

7. Truthy, Falsy
- Truthy: Khi đưa giá trí của các biến vào biểu thức logic --> Tự động ép kiểu về true
 các trường hợp không phải falsy thì là truthy
- Falsy: Khi đưa giá trị của các biến vào biểu thức logic --> Tự động ép kiểu về false
  Ví dụ về False: false, null, undefined, "", NaN, 0 

8. Toán tử &&
Nếu giá trị trước && là truthy > lấy giá trị sau &&
ngược lại thì lấy giá trị trước
var  a = 10;
var b = a && "Hello F8";//"Hello F8"

9. Toán tử ||
Nếu giá trị trước || là truthy > lấy giá trị trước ||
ngược lại thì lấy giá trị trước

var  a = 10;
var b = a || "Hello F8";//10

  */

// var a = 10;
// a++;
// ++a;
// console.log(a);

// var count = 1;
// var total = 10 + count++; //11
// var total = 10 + ++count; //12
// console.log(total);
// console.log(count);

// var count = 0;
// var total = count++ + ++count; //2
// console.log(total);

// var count = 0;
// var total = ++count + ++count; //3
// console.log(total);

// var count = 0;
// var total = ++count + ++count + ++count ; //6
// console.log(total);

// var count = 0;
// var total = ++count + ++count + count++; //5
//1 2 2
var a = " ";
var b = a ? "Hello F8" : "KHông xác định";
console.log(b);

// var count = 0;
// var total = count++ + ++count + ++count; //5
// //0 + 2 + 3
// console.log(total);