const express = require('express')
const router = express.Router()

// Home
router.get('/', (req, res) => {
  res.render('students/index', {layout: 'layouts/studentLayout'})
})

module.exports = router