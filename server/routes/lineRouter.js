const Router = require('express')
const router = new Router()
const lineController = require('../controllers/lineController')


router.post('/', lineController.create)
router.get('/', lineController.getAll)
router.get('/:id', lineController.getOne)
router.delete('/:id', lineController.delete)
router.put('/:id', lineController.update);


module.exports = router