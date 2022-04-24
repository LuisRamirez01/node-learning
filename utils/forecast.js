const axios = require('axios')

const forecast = ({latitude,longitude},callback) => {
  const weatherURL = `http://api.weatherstack.com/current?access_key=c9cbb99ae307355e05d7a465ca191b7e&query=${latitude},${longitude}&units=m`
  // console.log(weatherURL)
  axios.get(weatherURL)
    .then((response)=>{
      const data = response.data.current
      const weather_descriptions = data.weather_descriptions[0]
      const temperature = data.temperature
      const feelslike = data.feelslike
      callback(undefined,{
        weather_descriptions,
        temperature,
        feelslike,
      })
    })
    .catch((err) => {
      callback(err)
    })
}

module.exports = forecast