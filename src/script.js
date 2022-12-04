function clock() {
  let today = new Date();
  let hours = today.getHours();
  let minutes = today.getMinutes();
  let seconds = today.getSeconds();

  if (hours >= 12) {
    meridiem = " PM";
  } else {
    meridiem = " AM";
  }

  if (hours > 12) {
    hours = hours - 12;
  } else if (hours === 0) {
  }

  if (minutes < 10) {
    minutes = "0" + minutes;
  } else {
    minutes = minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  } else {
    seconds = seconds;
  }
  document.getElementById("clock").innerHTML = hours + ":" + minutes + meridiem;
}

setInterval("clock()", 1000);
