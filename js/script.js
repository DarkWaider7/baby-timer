let timerNumber = document.querySelector(".timer__number");

const buttonStart = document.querySelector(".buttonStart");
const buttonStop = document.querySelector(".buttonStop");

buttonStart.addEventListener("click", start);
buttonStop.addEventListener("click", stop);

let timerId = undefined;

function start() {
  timerId = setInterval(decreaseNumber, 1000);
}

function stop() {
  clearInterval(timerId);
}

let decreaseNumber = function () {
  if (+timerNumber.innerHTML === 0) {
    clearInterval(timerId);
  } else {
    --timerNumber.innerHTML;
  }
};
