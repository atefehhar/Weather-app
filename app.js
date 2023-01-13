let now = new Date();
let h4 = document.querySelector("h4");
let date = now.getDate();
let hours = now.getHours();
let minutes = now.getMinutes();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let day = days[now.getDay()];
let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
let month = months[now.getMonth()];

h4.innerHTML = `${day} ${date} ${month}  ${hours}:${minutes}`;

function displayWeatherCondition(response ){
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(response.data.main.temp);
} 

function search(event) {
  event.preventDefault();
  let apiKey="41db929841fad8601bdbe452d339a9da";
  
  let city=document.querySelector("#serach-text-input").value;
  let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeatherCondition)
}

let form = document.querySelector("#Seach-form");
form.addEventListener("submit", search);

