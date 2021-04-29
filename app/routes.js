const express = require('express')
const router = express.Router()
const services =  require('./data/services.json');
const working_services =  require('./data/working_services.json');

// Add your routes here - above the module.exports line

router.get('/list', (req, res) => {
  res.render('list',
    {
      data: {
        services: services,
        workingServices: working_services.sort(),
      }
    }
  )
})

module.exports = router
