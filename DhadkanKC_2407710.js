/**
* Student Name: Dhadkan K.C.
* Student ID: 2407710
*/
const apiKey = "ee197d5374741bafce5243401fa92b5d";

// Select the necessary elements from the HTML
const searchBox = document.querySelector(".search-box");
console.log(searchBox)
const searchBtn = document.querySelector(".search-button");
const weatherIcon = document.querySelector(".weather-icon");
const cityElement = document.querySelector(".city");
const tempElement = document.querySelector(".temp");
const humidityElement = document.querySelector(".humidity");
const windElement = document.querySelector(".wind");
const errorElement = document.querySelector(".error");
const weatherElement = document.querySelector(".weather");
const currentTempElement = document.querySelector(".temp");
const fahrenheitBtn = document.querySelector(".fahrenheit-btn");
const celsiusBtn = document.querySelector(".celsius-btn");
const weatherphoto =document.querySelector(".icons")
const showPressure =document.querySelector(".pressure")
const showtime= document.querySelector(".display-time")
const showdiscription=document.querySelector(".weather-discription")


// Function to handle the weather search
async function checkWeather(city) {
  try{
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);

  if (response.status == 404) {
    // Show error message if city not found
    errorElement.style.display = "block";
    weatherElement.style.display = "none";
    showdiscription.style.display="none";
  } else {
    // Hide error message and display weather if city found
    errorElement.style.display = "none";
    weatherElement.style.display = "block";
    const data = await response.json();
    console.log(data);
    
  
     
    // Update the UI with the fetched weather data
    cityElement.innerHTML = data.name;
    currentTempElement.innerHTML = Math.round(data.main.temp) + "&deg;c";
    tempElement.innerHTML = Math.round(data.main.temp) + "&deg;c";
    humidityElement.innerHTML = data.main.humidity + "%";
    windElement.innerHTML = data.wind.speed + "km/h";
    showPressure.innerHTML=data.main.pressure +"hpa";
    showdiscription.innerHTML=data.weather[0].description;
    
    
    weatherphoto.innerHTML=`<img src=https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png>`///revieve icons
   let date=data.dt;
   const newDate = new Date(date * 1000).toLocaleDateString("en-US", {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  });

  ///For Weather Info
  showtime.innerHTML = `${newDate}`;``

  }
  }  catch(nocity){
    alert('Please Enter a City');``
  }
 

}

// Set Hoshiarpur as the default city
checkWeather('Hoshiarpur');

//search
function showWeather(){
  const city=searchBox.value;
  if(city){
  checkWeather(city)
  console.log(city)
  }
  else if(city == '')
  {
    console.log('no city');
  }
} 

//
