function updateTime() {
  // London
  let londonElement = document.querySelector(".date");
  if (londonElement) {
    let londonDateElement = londonElement.querySelector(".date");
    let londonTimeElement = londonElement.querySelector(".time");
    let londonTime = moment().tz("America/Los_Angeles");

    londonDateElement.innerHTML = londonTime.format("MMMM        Do YYYY");
    londonTimeElement.innerHTML = londonTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  // Sydney

  let sydneyElement = document.querySelector(".date");
  if (sydneyElement) {
    let sydneyDateElement = sydneyElement.querySelector(".date");
    let sydneyTimeElement = sydneyElement.querySelector(".time");
    let sydneyTime = moment().tz("Austrailia/Sydney");

    sydneyDateElement.innerHTML = sydneyTime.format("MMMM        Do YYYY");
    sydneyTimeElement.innerHTML = sydneyTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}
