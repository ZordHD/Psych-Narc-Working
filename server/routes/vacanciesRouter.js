const Router = require('express')
const router = new Router()
const vacanciesController = require('../controllers/vacanciesController')


router.post('/', vacanciesController.create)
router.get('/', vacanciesController.getAll)
router.get('/:id', vacanciesController.getOne)
router.delete('/:id', vacanciesController.delete)
router.put('/:id', vacanciesController.update);


module.exports = router