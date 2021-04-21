const express = require('express')
const router = express.Router()
const services =  require('./data/services.json');

// Add your routes here - above the module.exports line

router.get('/list', (req, res) => {
  res.render('list',
    {
      data: {
        services: services,
      }
    }
  )
})

module.exports = router
