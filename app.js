const express = require('express')
const app = express()
const port = 3000



app.use((req, res, next) => {

  const reqDate = new Date()


  const tolocalstring = reqDate.toISOString()
  const totimeString = reqDate.toTimeString()
  const Methods = req.method
  const urlbase = req.originalUrl

  let splitTime = totimeString.split(' ')
  let splitDate = tolocalstring.split('T')


  console.log(`${splitDate[0]}  ${splitTime[0]} |  ${Methods} from ${urlbase}`)

  const resDate = new Date()

  console.log(`${splitDate[0]}  ${splitTime[0]} |  ${Methods} from ${urlbase}` + 'total time: ' + `${resDate - reqDate}ms`)

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

