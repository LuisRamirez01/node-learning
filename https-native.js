const https = require('https')

https.get('https://jsonplaceholder.typicode.com/users', response => {
  let data = []
  const headersDate = response.headers && response.headers.date ? response.headers.date : 'There response date'
  console.log('Status Code:', response.statusCode)
  console.log('Date in Response Header:', headersDate)

  response.on('data', chunk =>{
    data.push(chunk)
  })
  
  response.on('end', () => {
    console.log('Response ended:  ')
    const users = JSON.parse(Buffer.concat(data).toString())
    
    for (const user of users) {
      console.log(`ID: ${user.id} User: ${user.name}`)
    }
  })
}).on('error',(err) => {
  console.log('Error:',err.message)
})