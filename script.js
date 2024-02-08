const temperature=document.querySelector(".temperature")
const description=document.querySelector(".description")
const humidity=document.getElementById("humidity")
const wind=document.getElementById("wind")
const visibility=document.getElementById("visibility")
const location_not_found=document.querySelector(".location-not-found")
const weatherbox=document.querySelector(".weatherbox")


const Input=document.getElementById("input")
const button=document.getElementById("button")

async function checkWeather(city){
    const api_key="bac3d24975e966fdd07375831f5ae68f"
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`

    const weather_data=await fetch(`${url}`).then(response=>response.json())
    if(weather_data.cod==="404"){
        location_not_found.style.display="flex"
        weatherbox.style.display="none"
        return;
    }

    temperature.innerHTML=`${Math.round(weather_data.main.temp-273.15)}℃`
    description.innerHTML=`${weather_data.weather[0].main}`
    humidity.innerHTML=`${weather_data.main.humidity}`
    wind.innerHTML=`${weather_data.wind.speed}`
    visibility.innerHTML=`${weather_data.visibility}`

    location_not_found.style.display="none"
    console.log(weather_data);

}

button.addEventListener('click',()=>{
    checkWeather(Input.value)
})

