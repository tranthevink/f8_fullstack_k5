function Customer(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
}


function createCustomersArray() {
        var customers = Array.from(arguments);
        for (const key in customers) {
                var nameSplitter = customers[key].name.split(" ");
                customers[key].shortName = `${nameSplitter[0]} ${nameSplitter.slice(-1)}`;
        }
        return customers.sort((behind, front) => behind.age - front.age);;
}
const result = createCustomersArray(new Customer("Nguyễn Văn A", 11, "Ha Noi")
        , new Customer("Nguyễn Văn C", 12, "TP.HCM")
        , new Customer("Nguyễn Văn B", 2, "Hai Phong")
);
console.log(result);





