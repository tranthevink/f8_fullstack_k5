/*
string: Kiểu dữ liệu nguyên thủy
Trong JS kiểu dữ liệu nguyên thủy hoạt động giống Object (kiểu dữ liệu tham chiếu)

*/


// var a = "F8";
// if(typeof a === "string"){
//     console.log(typeof a);
// }


//Các cách khai báo chuỗi

var a = "Tran The Vi";
var b = String("F8");
var c = new String("F9");

// console.log(a.length);
// console.log(b.length);
// console.log(c, typeof c, c.length);

//Hàm tạo của kiểu chuỗi(Hàm bọc kiểu dữ liệu nguyên thủy) --> Định nghĩa các phương thức, thuộc tính
//Hàm tạo của kiểu chuỗi là String
//Trong JS: Mỗi kiểu dữ liệu sẽ có 1 hàm tạo (Function constructor): String, Number, Array, Object, Boolean, ...



//1. length --> Lấy độ dài của chuỗi
//2. 
var fullName = "Tran The Vi";
// console.log(fullName.length);//11
// console.log(fullName.at(0));//T
// console.log(fullName.charAt(0));//T
// console.log(fullName.charCodeAt(0));//84
// console.log(fullName.concat("NK", "2"));//Tran The ViNK2
// console.log(fullName.includes("e V"));//true
// console.log(fullName.indexOf("K"));//-1
// console.log(fullName.lastIndexOf("T"));//5
// console.log(fullName.slice(0, 4));//Tran
// console.log(fullName.substring(0, 4));//Tran
// console.log(fullName.slice(3));//n The Vi
// console.log(fullName.slice(-2));//Vi
// console.log(fullName.replace("T", "K"));//Kran The Vi
// console.log(fullName.replaceAll("T", "K"));//Kran Khe Vi

/*
Hàm replace có hỗ trợ replace bằng biểu thức chính quy (Regular Expression)
*/


//Bài tập 1: Cho trước email --> lấy username của email đó

var email = `tranthevink@gmail.com`;
// console.log(getUsername(email));
function getUsername(email){
    let atCharIndex = email.indexOf("@");
    if(atCharIndex < 0)
        throw "email is invalid";
    return email.slice(0, atCharIndex);
}

//Bài tập 2: Kiểm tra 1 chuỗi xem có phải tất cả các chữ đó đều VIẾT HOA không

function allAreCapital(inputString){
    // return inputString === inputString.toUpperCase();
    // return inputString.includes(inputString.toUpperCase());
    return inputString.indexOf(inputString.toUpperCase()) >= 0;
}
// console.log(allAreCapital("a"));

//Bài tập 3: Đảo chữ đầu về cuối, chữ cuối về đầu
var str = "Tôi tên là Trần Thế Vĩ";
var str1 = "Tôi tên";
var str2 = "Tôi";
//Output: Vĩ tên là Trần Thế Tôi"

function revertFirstWordEndWord(inputString){
    let firstSpaceIndex = inputString.indexOf(" ");
    let endSpaceIndex = inputString.lastIndexOf(" ");
    if(firstSpaceIndex < 0 || endSpaceIndex < 0)
        return inputString;
    let theFirstWord = inputString.slice(0, firstSpaceIndex);
    let theSecondWord = inputString.slice(endSpaceIndex+1);
    let middlePart = inputString.slice(firstSpaceIndex, endSpaceIndex+1);
    let aNewSentence = `${theSecondWord}${middlePart}${theFirstWord}`;
    return aNewSentence;
}

// console.log(revertFirstWordEndWord(str1));


