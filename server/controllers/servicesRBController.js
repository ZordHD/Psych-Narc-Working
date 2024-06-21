const {ServicesRB} = require('../models/models')
const uuid = require('uuid')
const path = require('path')
const ApiError = require('../error/ApiError');

class servicesRBController {
    async create(req, res) {
        const {name, text, fulltext} = req.body
        const {image} = req.files
        let fileName = uuid.v4() + ".jpg"
        image.mv(path.resolve(__dirname, '../', 'static', fileName))

        const services = await ServicesRB.create({name, text, fulltext, image: fileName})
        return res.json(services)
    }

    async getAll(req, res) {
        let {limit, page} = req.query
        page = page || 1
        limit = limit || 8
        let offset = page * limit - limit

        let servRB = await ServicesRB.findAndCountAll({
            limit: parseInt(limit),
            offset: parseInt(offset),
        });
        return res.json(servRB);
    }

    async getOne(req, res) {
        const {id} = req.params
        const services = await ServicesRB.findOne(
            {
                where: {id},
                include: [{model: ServicesRB, as: 'fulltext'}]
            },
        )
        return res.json(services)
    }

    async delete(req, res) {
        const {id} = req.params;
        const servs = await ServicesRB.destroy({where: {id}});
        return res.json(servs);
    }

    async update(req, res) {
        const { id } = req.params;
        const { name, text, fulltext } = req.body;
        const { image } = req.files;
        let fileName = uuid.v4() + ".jpg";
        image.mv(path.resolve(__dirname, '../', 'static', fileName));
      
        const servs = await ServicesRB.update({ image: fileName, name, text, fulltext }, { where: { id } });
        return res.json(servs);
    }
}


module.exports = new servicesRBController()