function updateTime() {
  // London
  let londonElement = document.querySelector("#london");

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

  let sydneyElement = document.querySelector("#sydney");
  if (sydneyElement) {
    let sydneyDateElement = sydneyElement.querySelector(".date");
    let sydneyTimeElement = sydneyElement.querySelector(".time");
    let sydneyTime = moment().tz("Australia/Sydney");

    sydneyDateElement.innerHTML = sydneyTime.format("MMMM        Do YYYY");
    sydneyTimeElement.innerHTML = sydneyTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  //Paris

  let parisElement = document.querySelector("#paris");
  if (parisElement) {
    let parisDateElement = parisElement.querySelector(".date");
    let parisTimeElement = parisElement.querySelector(".time");
    let parisTime = moment().tz("Europe/Paris");

    parisDateElement.innerHTML = parisTime.format("MMMM        Do YYYY");
    parisTimeElement.innerHTML = parisTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  // Stockholm

  let stockholmElement = document.querySelector("#stockholm");
  if (stockholmElement) {
    let stockholmDateElement = stockholmElement.querySelector(".date");
    let stockholmTimeElement = stockholmElement.querySelector(".time");
    let stockholmTime = moment().tz("Europe/Stockholm");

    stockholmDateElement.innerHTML = stockholmTime.format(
      "MMMM        Do YYYY"
    );
    stockholmTimeElement.innerHTML = stockholmTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
    <div class="city">
    <div>
        <h2>${cityName}</h2>
        <div class="date>${cityTime.format(
          "h:mm:ss:"
        )} <small>${cityTime.format("A")}</small></div>
    </div>
    `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#citySelect");
citiesSelectElement.addEventListener("change", updateCity);
