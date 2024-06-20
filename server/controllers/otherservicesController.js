const {OtherServices} = require('../models/models')
const uuid = require('uuid')
const path = require('path')
const ApiError = require('../error/ApiError');

class otherservicesController {
    async create(req, res) {
        const {name, text, fulltext} = req.body
        const {image} = req.files
        let fileName = uuid.v4() + ".jpg"
        image.mv(path.resolve(__dirname, '../', 'static', fileName))

        const services = await OtherServices.create({name, text, fulltext, image: fileName})
        return res.json(services)
    }

    async getAll(req, res) {
        let {limit, page} = req.query
        page = page || 1
        limit = limit || 8
        let offset = page * limit - limit

        let othr = await OtherServices.findAndCountAll({
            limit: parseInt(limit),
            offset: parseInt(offset),
        });
        return res.json(othr);
    }

    async getOne(req, res) {
        const {id} = req.params
        const services = await OtherServices.findOne(
            {
                where: {id},
                include: [{model: OtherServices, as: 'info'}]
            },
        )
        return res.json(services)
    }


}


module.exports = new otherservicesController()