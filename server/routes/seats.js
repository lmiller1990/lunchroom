const router = require('express').Router()

router.post('/create', (req, res) => {
  console.log('Received create request')
  res.send('Ok')
})

module.exports = router
