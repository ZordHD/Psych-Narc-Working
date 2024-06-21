const Router = require('express')
const router = new Router()
const massmediaController = require('../controllers/massmediaController')


router.post('/', massmediaController.create)
router.get('/', massmediaController.getAll)
router.get('/:id', massmediaController.getOne)
router.delete('/:id', massmediaController.delete)
router.put('/:id', massmediaController.update);


module.exports = router