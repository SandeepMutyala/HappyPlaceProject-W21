const router = require('express').Router()

const feedController = require('../controllers/feedController')

router.get('/:user', feedController.getAllFeed)
router.post('/', feedController.addFeed)
router.put('/:feedid', feedController.updateBadges)

module.exports = router