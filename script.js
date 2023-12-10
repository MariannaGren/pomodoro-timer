//### Требования:
//* при клике на кнопку **start** текст на ней меняется на **stop**
//* при клике на **stop** таймер останавливается, но **не сбрасывается**, текст на кнопке снова меняется на **start**
//* если снова кликнуть на кнопку, то отсчет возобновится со значения, на котором остановились
//* когда таймер дойдет до нуля, он должен сброситься в начальное состояние: **25:00** и текст на кнопке снова **start**

const buttonStartStop = document.querySelector("#start");
let minutes = document
  .querySelector("#pomodoro-time")
  .textContent.split(":")[0];
let seconds = document
  .querySelector("#pomodoro-time")
  .textContent.split(":")[1];
let timerId;

buttonStartStop.addEventListener("click", function () {
  if (buttonStartStop.textContent === "stop") {
    buttonStartStop.textContent = "start";
    clearInterval(timerId);
  } else {
    buttonStartStop.textContent = "stop";
    timerId = setInterval(() => {
      if (seconds > 0) {
        seconds--;
      } else if (seconds == 0 && minutes > 0) {
        minutes--;
        seconds = 59;
      } else if (seconds == 0 && minutes == 0) {
        clearInterval(timerId);
        minutes = "25";
        seconds = "0";
        buttonStartStop.textContent = "start";
      }

      function format(value) {
        if (value < 10) {
          return `0${value}`;
        }
        return value;
      }
      document.querySelector("#pomodoro-time").textContent = `${format(
        minutes
      )}:${format(seconds)}`;
    }, 1000);
  }
});
