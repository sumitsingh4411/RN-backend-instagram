const router = require('express').Router()
const userCtrl = require('../controllers/postFileCtrl')



router.post('/homepageimage', userCtrl.homepageimage)

router.get('/homepageimage', userCtrl.homepageimage)

module.exports = router