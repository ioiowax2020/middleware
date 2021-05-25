const express = require('express')
const app = express()
const port = 3000



app.use((req, res, next) => {

  const reqTime = new Date()


  const toLocalstring = reqTime.toISOString()
  const toTimeString = reqTime.toTimeString()
  const methods = req.method
  const urlBase = req.originalUrl

  let splitTime = toTimeString.split(' ')
  let splitDate = toLocalstring.split('T')


  console.log(`${splitDate[0]}  ${splitTime[0]} |  ${methods} from ${urlBase}`)

  res.on('finish', (req, res) => {
    const resTime = new Date()
    console.log(`${splitDate[0]}  ${splitTime[0]} |  ${methods} from ${urlBase}` + 'total time: ' + `${resTime - reqTime}ms`)
  })
  res.on('close', (req, res) => {
    console.log('Respone is close.')
  })

  next()

})

app.get('/', (req, res, next) => {

  res.send('列出全部 Todo')

})

app.get('/new', (req, res) => {
  res.send('新增 Todo 頁面')

})

app.get('/:id', (req, res) => {

  res.send('顯示一筆 Todo')

})


app.listen(port, () => {
  console.log(`App running on port ${port}`)
})