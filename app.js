const geocoding = require('./utils/geocode')
const forecast = require('./utils/forecast')
const location = require('./utils/commandline-parse')

if(location){
  geocoding(location, (err,{latitude,longitude,place_name}={}) => {
    if(err){
      console.log(err.message)
    }else{
      forecast({latitude,longitude}, (error, {weather_descriptions,temperature,feelslike}) => {
        if(error){
          console.log(error.message)
        }else{
          console.log(place_name)
          console.log(`${weather_descriptions}. The current temperature is ${temperature}. It feels like ${feelslike}.`)
        }
      })
    }
  })
}else{
  console.log('No location was provided.')
}

