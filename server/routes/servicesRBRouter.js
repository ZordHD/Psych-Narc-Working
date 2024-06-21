const Router = require('express')
const router = new Router()
const servicesRBController = require('../controllers/servicesRBController')


router.post('/', servicesRBController.create)
router.get('/', servicesRBController.getAll)
router.get('/:id', servicesRBController.getOne)
router.delete('/:id', servicesRBController.delete)
router.put('/:id', servicesRBController.update);


module.exports = router