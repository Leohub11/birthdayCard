countDown = new Date("Dec 10, 2024").getTime();

function runClock() {
  now = new Date().getTime();
  distance = countDown - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hrs = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var secs = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days;
  document.getElementById("hrs").innerHTML = hrs;
  document.getElementById("mins").innerHTML = mins;
  document.getElementById("secs").innerHTML = secs;

  if (distance < 0) {
    clearInterval(runClock);
    alert("Happy birthday!");
    document.getElementById("countdown").style.display = "none";
  }
}

setInterval(runClock, 1000);
