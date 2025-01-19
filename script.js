const apikey="c27c671f2491feb59feb7664f58f34e8";
const apiURL="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");
const weatherIcn=document.querySelector(".weather-icon");

async function checkWeather(city){
    const response = await fetch(apiURL + city + `&appid=${apikey}`);

    if (response.status ===404) {
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }  else {
        
        var data = await response.json();
        
        document.querySelector(".city").innerHTML=data.name;
        document.querySelector(".temp").innerHTML=data.main.temp + "°C";
        document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
        document.querySelector(".wind").innerHTML=data.wind.speed + "km/h";
        
        if (data.weather[0].main ==="Clouds") {
            weatherIcn.src="clouds.png";
        } else if (data.weather[0].main ==="Clear") {
            weatherIcn.src="clear.png";
        } else if (data.weather[0].main ==="Rain") {
            weatherIcn.src="rain.png";
        } else if (data.weather[0].main ==="Drizzle") {
            weatherIcn.src="drizzle.png";
        } else if (data.weather[0].main ==="Mist") {
            weatherIcn.src="mist.png";
        }  
        
        document.querySelector(".weather").style.display="block";
        document.querySelector(".error").style.display="none";

    }

}

    
searchBtn.addEventListener("click",() =>{
    
    checkWeather(searchBox.value);
});
