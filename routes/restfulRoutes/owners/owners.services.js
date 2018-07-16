const Owner = require('./owners.model');
const Cat = require('../cats/cats.model');
const moment = require('../../../utils/moment');

const findAll = async () => {
    owners = await Owner.findAll({
        include: [{
            model: Cat
        }]
    });
    return owners;
}

const create = async (data) => {
    data.createdAt = moment().format();
    data.updatedAt = moment().format();

    const owner = await Owner.create(data);
    return owner;
}

const findById = async (id) => {
    const owner = await Owner.findById(id);
    return owner;
}

const updateById = async (id, data) => {
  
    data.updatedAt = moment().format();
    
    const options = {
        where: {
            id
        }
    }

    let owners = await Owner.update(data, options);
    owners = await Owner.findById(id);
    return owners;   
}

const deleteById = async (id) => {
    const options = {
        where: {
            id
        }
    }

    const owners = await Owner.destroy(options);
    return owners;
} 

module.exports = {
    findAll,
    create,
    findById,
    updateById,
    deleteById
}