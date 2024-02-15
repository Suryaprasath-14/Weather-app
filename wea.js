const temperatureField = document.querySelector(".temp");
const cityField = document.querySelector(".temp_location p");
const dateField = document.querySelector(".temp_location span");
const emojiField = document.querySelector(".weather_condition img");
const weatherField = document.querySelector(".weather_condition span");
const searchField = document.querySelector(".searchField");
const form = document.querySelector("form");


form.addEventListener('submit',event =>{
   event.preventDefault()
   const cityName= searchField.value
   getWeather(cityName)
})


async function getWeather(cityName)
{
   try {
      const response= await fetch (`https://api.weatherapi.com/v1/current.json?key=b2996c2c3b184ae3ab292517240702&q=${cityName}&aqi=no`)
   
   const weatherInfo= await response.json()
   console.log(weatherInfo)

   let temp= weatherInfo.current.temp_c
   let locName= weatherInfo.location.name
   let condition = weatherInfo.current.condition.text
   let url = weatherInfo.current.condition.icon
   let date = weatherInfo.current.last_updated

   console.log(temp, locName, condition, url, date)

   let splitTime= date.split(" ")

   let exactDate= splitTime[0]
   let exactTime= splitTime[1]

   const d = new Date(exactDate);
   
   

   const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
   let day = weekday[d.getDay()] 

   //console.log(day)

   temperatureField.innerText = temp;
   cityField.innerText = locName
   dateField.innerText = `${exactDate} ${day} ${exactTime}`
   emojiField.src = url
   weatherField.innerText = condition
   console.log("commit-4")
   } 
   
   catch (error) {
      
      console.log('Im catching my error: ', error)
      console.log('some logic to handle error')
      
   }


   
}




let cityName = 'Chennai'
getWeather(cityName)