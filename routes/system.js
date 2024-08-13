const express = require('express')
const router = express.Router()

// Start 
router.get('/start', (req, res) => {
  res.render('system/start', {layout: 'layouts/layout'})
})

// Lisson1 
router.get('/lesson1', (req, res) => {
  res.render('system/lesson1', {layout: 'layouts/layout'})
})

// Quiz1
router.get('/quiz1', (req, res) => {
    res.render('system/quiz1', {layout: 'layouts/layout'})
 })

// Quiz2
router.get('/quiz2', (req, res) => {
  res.render('system/quiz2', {layout: 'layouts/layout'})
})

// Quiz3
router.get('/quiz3', (req, res) => {
  res.render('system/quiz3', {layout: 'layouts/layout'})
})


// Lisson2 
router.get('/lesson2', (req, res) => {
    res.render('system/lesson2', {layout: 'layouts/layout'})
})

// Quiz4
router.get('/quiz4', (req, res) => {
  res.render('system/quiz4', {layout: 'layouts/layout'})
})

// Quiz5
router.get('/quiz5', (req, res) => {
  res.render('system/quiz5', {layout: 'layouts/layout'})
})

// Quiz6
router.get('/quiz6', (req, res) => {
  res.render('system/quiz6', {layout: 'layouts/layout'})
})

// Lesson3 
router.get('/lesson3', (req, res) => {
  res.render('system/lesson3', {layout: 'layouts/layout'})
})

// Quiz7
router.get('/quiz7', (req, res) => {
  res.render('system/quiz7', {layout: 'layouts/layout'})
})

// Quiz8
router.get('/quiz8', (req, res) => {
  res.render('system/quiz8', {layout: 'layouts/layout'})
})

// Quiz9
router.get('/quiz9', (req, res) => {
  res.render('system/quiz9', {layout: 'layouts/layout'})
})

// Quiz10
router.get('/quiz10', (req, res) => {
  res.render('system/quiz10', {layout: 'layouts/layout'})
})

// Quiz11
router.get('/quiz11', (req, res) => {
  res.render('system/quiz11', {layout: 'layouts/layout'})
})

// Lesson4 
router.get('/lesson4', (req, res) => {
  res.render('system/lesson4', {layout: 'layouts/layout'})
})

// Quiz12
router.get('/quiz12', (req, res) => {
  res.render('system/quiz12', {layout: 'layouts/layout'})
})

// Quiz13
router.get('/quiz13', (req, res) => {
  res.render('system/quiz13', {layout: 'layouts/layout'})
})

// End 
router.get('/end', (req, res) => {
  res.render('system/end', {layout: 'layouts/layout'})
})

module.exports = router