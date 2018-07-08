

const getDB = async (Model) => {
    const response = await Model.find({});
    return response;
}

const getDBByElement = async (Model,data) => {
    const response = await Model.find(data);
    return response;
}

const getDBById = async (Model,_id) => {
    const response = await Model.findOne({ _id });
    return response;
}

const postDB = async (Model,data) => {
    const response = await Model.create(data);
    return response;
}

const removeDB = async (Model,data) => {
    const response = await Model.remove(data);
    return true;
}

const updateDBById = async (Model,_id, data) => {
    let response = await getDBById(Model, _id);
    response = Object.assign(response, data);
    response.save();
    return response;
}

const hashMany  = async (Model, _id, collection) => {
    const opts = [
        {path: collection}
    ]
    
    const user = await Model.findOne({ _id });  
    const Collect  = await Model.populate(user, opts);
    return Collect[collection];

}


module.exports = {
    getDB,
    getDBByElement,
    getDBById,
    postDB,
    removeDB,
    updateDBById,
    hashMany
}