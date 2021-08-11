const router = require('express').Router()
const userCtrl = require('../controllers/postFileCtrl')



router.post('/homepageimage', userCtrl.homepageimage)

router.get('/gethomepageimage', userCtrl.gethomepageimage)

module.exports = router