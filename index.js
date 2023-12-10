require('dotenv').config()
console.log("code");
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twitter',(req,res) => {
    res.send('sohanlal1111')
})
app.get('/login',(req,res) => {
  res.send('<h1>Please login at code:</h1>')
})
app.get('/youtube',(req,res)=> {
  res.send("<h2>code<h2>")
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})