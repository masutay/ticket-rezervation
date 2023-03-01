let btnCountPlus = document.querySelectorAll(".count-plus");
let btnCountMinus = document.querySelectorAll(".count-minus");
let inputTicket = document.querySelectorAll(".count-result");
let goSelectSeat = document.querySelector(".btn-continue");
let bookingBody = document.querySelector(".booking-body");
let info = document.querySelector(".info");

let ticketPrice;

const countPlus = [];
const inputResult = [];

inputTicket.forEach(function (input) {
  inputResult.push(input);
});

btnCountPlus.forEach(function (btnCountPlus) {
  countPlus.push(btnCountPlus);
});

for (let index in countPlus) {
  countPlus[index].addEventListener("click", function (e) {
    if (inputResult[index].value >= 10) {
      console.log("10 biletten fazla rezervasyon yapılamaz!!");
    } else {
      inputResult[index].value++;

      if (inputResult[index].value > 0) {
        goSelectSeat.classList.remove("disabled");
        goSelectSeat.classList.remove("btn-light");
        goSelectSeat.classList.add("btn-primary");
      }
    }

    e.preventDefault();
  });
}

goSelectSeat.addEventListener("click", function () {
  bookingBody.style.visibility = "visible";
  info.style.visibility = "visible";
});

