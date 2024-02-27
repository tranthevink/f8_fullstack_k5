function sum(...theArgs) {
    let total = 0;
    for (const arg of theArgs) {
        if (isNaN(arg))
            throw new Error("The input must contain numbers");
        total += arg;
    }
    return total;
}


console.log(sum(3, 4, 7));
// console.log(sum(3, 4, 7, "a"));