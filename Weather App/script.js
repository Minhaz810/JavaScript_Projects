

const getWeatherData=(city)=>{
return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a8e71c9932b20c4ceb0aed183e6a83bb&units=imperial`)
.then(response=>response.json())
.then(data=>{
  showWeatherData(data)
})


}

const searchCity=()=>{
  const input=document.getElementById("city-input")
  getWeatherData(input.value)
}
const showWeatherData=(value)=>{
  if(document.getElementById('button2').innerText=='Show in Celsius'){
    document.getElementById("city-name").innerText=value.name
    document.getElementById("temp").innerHTML=`Temp: <span>${(value.main.temp)}</span>°F`
    document.getElementById("min-temp").innerHTML=`Min-Temp: <span>${(value.main.temp_min)}</span>°F`
    document.getElementById("max-temp").innerHTML=`Max-Temp: <span>${(value.main.temp_max)}</span>°F`
    document.getElementById("weather-type").innerText=value.weather[0].main
  }else{
    document.getElementById("city-name").innerText=value.name
    document.getElementById("temp").innerHTML=`Temp: <span>${(5*(value.main.temp-32)/9).toFixed(2)}</span>°C` 
    document.getElementById("min-temp").innerHTML=`Min-Temp: <span>${(5*(value.main.temp_min-32)/9).toFixed(2)}</span>°C`
    document.getElementById("max-temp").innerHTML=`Max-Temp: <span>${(5*(value.main.temp_max-32)/9).toFixed(2)}</span>°C`
    document.getElementById("weather-type").innerText=value.weather[0].main
  }

}
const changeUnit=()=>{
  if(document.getElementById('button2').innerText=='Show in Celsius'){
  document.getElementById('button2').innerText='Show in Farenhite'
  }else{
  document.getElementById('button2').innerText='Show in Celsius'}
  searchCity()
  
}