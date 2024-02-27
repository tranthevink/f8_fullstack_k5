var errors = {
    name: {
        required: "Vui lòng nhập họ tên",
        min: "Họ tên phải từ 5 ký tự"
    },
    email: {
        email: "Định dạng email không hợp lệ",
        unique: "Email đã có người sử dụng",
        required: "Vui lòng nhập địa chỉ email"
    },
    password: {
        required: "Vui lòng nhập mật khẩu",
        same: "Mật khẩu phải khớp với mật khẩu nhập lại"
    }
}
console.log(errors);
console.log(`name: ${getError("name")}`);
console.log(`name.min: ${getError("name.min")}`);
console.log(`email: ${getError("email")}`);
console.log(`email.unique: ${getError("email.unique")}`);

function getError(field){
    if(!field)
        throw new Error("please input the field");
    let fieldList = field.split(".");
    if(fieldList.length === 1){
        return errors[fieldList[0]]["required"];
    }else if(fieldList.length === 2){
        return errors[fieldList[0]][fieldList[1]];
    }
}