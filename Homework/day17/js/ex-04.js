let btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    let n = parseInt(prompt("Nhập số n:"));
    if (isPrime(n)) {
        alert("Is Prime");
    } else {
        alert("Is not Prime");
    }
});

function isPrime(a) {
    if (isNaN(a) || a <= 0 || a === 1)
        return false;
    let ceiling = Math.sqrt(a);
    for (let i = 2; i <= ceiling; i++) {
        if (a % i === 0) {
            return false;
        }
    }
    return true;
}