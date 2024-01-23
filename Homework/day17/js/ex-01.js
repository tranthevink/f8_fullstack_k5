let btn = document.getElementById("btn");
let show = document.getElementById("showBtn");
btn.addEventListener("click", () => {
  let numbersOfKm = prompt("Nhập số km:");

  let taxiFee = 0;
  if (numbersOfKm <= 1) {
    taxiFee = 15000;
  } else if (numbersOfKm > 1 && numbersOfKm <= 5) {
    taxiFee = 13500 * numbersOfKm;
  } else if (numbersOfKm > 5 && numbersOfKm <= 120) {
    taxiFee = 11000 * numbersOfKm;
  } else {
    taxiFee = 11000 * numbersOfKm * 0.9;
  }
  show.innerText = taxiFee;
});
