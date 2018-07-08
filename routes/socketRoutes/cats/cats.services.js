const Cat = require('./cats.model');
const connectDb = require('../../../utils/connectDB');

let cats = false;

const findAll = async () => {
    cats = (!cats) ? await connectDb.getDB(Cat) : cats;
    return cats;
}

const create = async (data) => {
    cats = (!cats) ? await connectDb.getDB(Cat) : cats;
    const cat = await connectDb.postDB(Cat, data);
    cats.push(cat);
}

const findById = async (id) => {
    cats = (!cats) ? await connectDb.getDB(Cat) : cats;
    const cat = cats.filter((catStore) => id === String(catStore._id));
    return cat[0];
}

const updateById = async (id, data) => {
    let cat = "Not Found";
    cats = (!cats) ? await connectDb.getDB(Cat) : cats;
    cats = cats.map((catStore) => {
        if(id === String(catStore._id)) {
            Object.assign(catStore, data);
        }
        return catStore;
    });
    connectDb.updateDBById(Cat,id,data);
    cat = cats.filter((catStore) => id === String(catStore._id));
    return cat[0];

    // filter((catStore) => id === String(catStore._id));
}

const deleteById = async (id) => {
    cats = (!cats) ? await connectDb.getDB(Cat) : cats;

    const cat = cats.filter((catStore) => id === String(catStore._id))[0];
    cats = cats.filter((catStore) => id !== String(catStore._id));
    
    console.log(cat);
    const data = { _id: String(cat._id) }

    connectDb.removeDB(Cat, data);
    return cats
} 

module.exports = {
    findAll,
    create,
    findById,
    updateById,
    deleteById
}