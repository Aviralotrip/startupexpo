let endDate = "15 april 2023 12:00 AM";
let end = new Date(endDate);
var x = setInterval(function countdown() {
  let date = new Date();
  let count = end - date;

  let days = Math.floor(count / 86400000);

  let hours = Math.floor((count - days * 86400000) / 3600000);

  let minutes = Math.floor((count - days * 86400000 - hours * 3600000) / 60000);

  let seconds = Math.floor(
    (count - days * 86400000 - hours * 3600000 - minutes * 60000) / 1000
  );

  document.getElementById("count").innerHTML =
    days + "d"+" : " + hours + "h"+" : " + minutes +"m"+ " : " + seconds+"s";
  if (count < 0) {
    clearInterval(x);
    document.getElementById("count").innerHTML = "EXPIRED";
  }
  //setTimeout(countdown(),1000)
}, 1000);
countdown();
