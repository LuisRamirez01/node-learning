const axios = require('axios')

axios.get('https://jsonplaceholder.typicode.com/users')
  .then(response => {
    const responseDate = response.headers && response.headers.date ? response.headers.date : 'no response date'
    
    console.log('Status Code:', response.status)
    console.log('Response Date:', responseDate)

    const users = response.data
    // console.log(users)

    for (const user of users) {
      console.log(`ID: ${user.id} Name: ${user.name}`)
    }
  })
  .catch(err => {
    console.log('Error:',err.message)
  })