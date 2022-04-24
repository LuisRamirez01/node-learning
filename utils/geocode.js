const axios = require('axios')
const geocoding = (placeName,callback) => {
  const URL = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(placeName)}.json?access_token=pk.eyJ1Ijoid2lmbyIsImEiOiJjbDI2eXJ2N2cwamVmM2lvOGZ5NGNhNXJiIn0.Sk-AooeANth79rZ7Z8lIaw&limit=1`
  // console.log(URL)
  axios.get(URL)
    .then((response)=>{
      const coordinatesData = response.data.features[0].geometry.coordinates
      const place_name = response.data.features[0].place_name
      const latitude = coordinatesData[1]
      const longitude = coordinatesData[0]
      callback(undefined,{
        place_name,
        latitude,
        longitude,
      })
    })
    .catch((err) => {
      callback(err)
    })
}

module.exports = geocoding