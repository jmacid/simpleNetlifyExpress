const express = require('express')
const serverless = require('serverless-http') 
const cors = require('cors')

const app = express()
const router = express.Router()

app.use(cors())

router.get('/', (req, res) => {
  res.json({
    "path": "Home",
    "message": "You are at home"
  })
})

router.get('/json', (req, res) => {
  res.json({
    "path": "json",
    "message": "You are at json"
  })
})

app.use('/.netlify/functions/api', router)

module.exports.handler = serverless(app)