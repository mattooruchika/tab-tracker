console.log('sc')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())
// specify start of page
app.post('/register', (req, res) => {
  res.send({
   message: `hello ${req.body.email}`
   } )
})
app.listen(process.env.PORT || 8081)
