function User(name, password, email) {
    this.name = name;
    this.password = password;
    this.email = email;
    this.role = "user";
}

var systemUsers = [];
function handleRegister(name, password, email) {
    if (!name || !password || !email) {
        throw new Error(`The name, password email must not be empty! name: ${name} password: ${password} email: ${email}`);
    };
    systemUsers.push(new User(name, password, email));
}

function handleLogin(email, password) {
    var matchingUsers = systemUsers.filter(user => {
        if (user.email === email && user.password === password)
            return true;
    });
    return matchingUsers.length ?  matchingUsers : "Thông tin đăng nhập không hợp lệ";
}

handleRegister(
    "Nguyen Van A",
    "123456",
    "nguyenvana@email.com"
);

handleRegister(
    "Nguyen Van B",
    "1234567",
    "nguyenvanb@email.com"
);
handleRegister(
    "Nguyen Van B clone",
    "1234567",
    "nguyenvanb@email.com"
);
console.log(systemUsers);
const dataLogin = handleLogin("nguyenvanb@email.com", "1234567");
console.log(dataLogin);
const dataLogin2 = handleLogin("nguyenvanb@email.com", "1234568");
console.log(dataLogin2);