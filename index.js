let days = 14;
let hours = 0;
let minutes = 0;
let seconds = 0;

setInterval(function () {
  decrementTime();
  updateDom();
}, 1000)

const decrementTime = () => {
  if (hours === 0 && days > 0) {
    days--;
    hours = 24;
  }
  if (minutes === 0 && hours > 0) {
    hours--;
    minutes = 60;
  }
  if (seconds === 0 && minutes > 0) {
    minutes--;
    seconds = 59;
  } else if (seconds === 0 && minutes === 0 && hours === 0 && days === 0) {
    //purposely left blank
  } else {
    seconds--;
  }
}

const updateDom = () => {
  document.querySelector('#days').textContent = days;
  document.querySelector('#hours').textContent = hours;
  document.querySelector('#minutes').textContent = minutes;
  document.querySelector('#seconds').textContent = seconds;
}