const router = require('express').Router()

const expertsListController = require('../controllers/experts')
router.get('/', expertsListController.getAllExperts)


module.exports = router