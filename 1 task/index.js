const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

let time, seconds, minutes, hour;

inputEl.value = '00:00:00'
// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = (timer) => {
    time = setInterval(function () {
      seconds = timer%60
      minutes = timer/60%60
      hour = timer/60/60%60

      if (timer <= 0) {
        clearInterval(time);
        timerEl.innerHTML = 'hh:mm:ss';
        alert("Время закончилось");
      } else {
        timerEl.innerHTML = `${Math.trunc(hour)}:${Math.trunc(minutes)}:${seconds}`;
      }
      --timer;
    }, 1000)
};

buttonEl.addEventListener('click', () => {
  const time = inputEl.value.split(':');
  const timer = +time[0]*60*60 + +time[1]*60 + +time[2];
  createTimerAnimator(timer);

  inputEl.value = '00:00:00';
});
