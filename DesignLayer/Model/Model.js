
const moment = require('../../utils/moment');

module.exports = class Model {
    constructor(model) {
        this.model = model
        this.moment = moment;
    }

    async findAll() {
        return await this.model.findAll();
    }

    async create(data) {
        data.createdAt = this.moment().format();
        data.updatedAt = this.moment().format();
        return await this.model.create(data);

    }

    async findById(id) {
        return await this.model.findById(id)
    }

    async updateById(id, data) {
        data.updatedAt = this.moment().format();
    
        const options = {
            where: {
                id
            }
        }

        let modelUpdated = await this.model.update(data, options);
        return await modelUpdated.findById(id);
    }

    async deleteById(id) {
        const options = {
            where: {
                id
            }
        }
    
        return await this.model.destroy(options);
    }
}


