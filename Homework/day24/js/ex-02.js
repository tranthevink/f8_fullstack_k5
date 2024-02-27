
Object.prototype.getCurrency = function (unit) {
        var input = Number(this);
        if (isNaN(input))
                throw new Error("The input must be a number!");

        var splitter = input.toString().split(".");
        var reverse = Array.from(splitter[0]).reverse();
        var counter = 0;
        for (let index = 0; index < reverse.length; index++) {
                if (counter && counter % 3 === 0) {
                        reverse.splice(index, 0, ",");
                        index++;
                        counter = 0;
                }
                counter++;
        }
        reverse = reverse.reverse().join("");
        var finalResult = `${reverse}` + (splitter[1] ? `.${splitter[1]}` : "");
        return `${finalResult} ${unit}`
};
//Case 1
var price = 12000;
console.log(price.getCurrency('đ')) //Hiển thị: 12,000 đ

//Case 2
var price = "12000000";
console.log(price.getCurrency('đ')) //Hiển thị: 12,000,000 đ