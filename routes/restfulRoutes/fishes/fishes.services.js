const Fish = require('./fishes.model');
const moment = require('../../../utils/moment');

const findAll = async () => {
    fishes = await Fish.findAll();
    return fishes;
}

const create = async (data) => {
    data.createdAt = moment().format();
    data.updatedAt = moment().format();

    const fish = await Fish.create(data);
    return fish;
}

const findById = async (id) => {
    const fish = await Fish.findById(id);
    return fish;
}

const updateById = async (id, data) => {
  
    data.updatedAt = moment().format();
    
    const options = {
        where: {
            id
        }
    }

    let fishes = await Fish.update(data, options);
    fishes = await Fish.findById(id);
    return fishes;   
}

const deleteById = async (id) => {
    const options = {
        where: {
            id
        }
    }

    const fishes = await Fish.destroy(options);
    return fishes;
} 

module.exports = {
    findAll,
    create,
    findById,
    updateById,
    deleteById
}