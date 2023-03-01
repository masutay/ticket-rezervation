let btnCountPlus = document.querySelectorAll(".count-plus");
let btnCountMinus = document.querySelectorAll(".count-minus");
let inputTicket = document.querySelectorAll(".count-result");

let goSelectSeat = document.querySelector(".btn-continue");
let bookingBody = document.querySelector(".booking-body");
let info = document.querySelector(".info");

let seats = document.querySelectorAll(".seat:not(.reserved)");

let ticketPrice;
//let totalTicketNum;

const countPlus = [];
const inputResult = [];

const seatArr = [];
const selectedSeatArr = [1, 2];

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

seats.forEach(function (seat) {
  seatArr.push(seat);
});

for (let key in seatArr) {
  seatArr[key].addEventListener("click", function () {
    // for (let i = 0; i < key; i++) {
    //   if (totalTicketNum < selectedSeatArr.length) {
    //     console.log(`max ${selectedSeatArr.length} koltuk seçebilirsiniz`);
    //   } else {
        seatArr[key].classList.add("seat-selected");

        console.log(selectedSeatArr.length);
      
    
  });
}
