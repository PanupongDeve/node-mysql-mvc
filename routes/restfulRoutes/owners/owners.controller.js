const ownersServices = require('./owners.services');

const findAll = async (req, res) => {
        try {   
            const data = {
                owners: await ownersServices.findAll()
            }
            res.send(data);
        } catch (error) {
            console.log(error);
            await res.status(400).send({ error })
        }      
}

const findById = async (req, res) => {
    try { 
        const data = {
            owner: await ownersServices.findById(req.params.id)
        }
        res.send(data);
    } catch (error) {
        console.log(error);
        await res.status(400).send({ error })
    }  
}

const updateById = async (req, res) => {
    try { 
        const data = {
            owner: await ownersServices.updateById(req.params.id, req.body)
        }
        res.send(data);
    } catch (error) {
        console.log(error);
        await res.status(400).send({ error })
    }  
}

const create = async (req, res) => {
    try { 
        await ownersServices.create(req.body);
        await res.send({ status: 'create owner success'});
    } catch (error) {
        console.log(error);
        await res.status(400).send({ error })
    }  
}

const deleteById = async (req, res) => {
    try { 
        const deletedCat = await ownersServices.deleteById(req.params.id);
        if(!deletedCat) {
            throw `Can not find id: ${req.params.id} for delete owner`
        } else {
            const data = {
                owner: `owner id: ${req.params.id}  deleted success!`
            }

            res.send(data);
        }
        
    } catch (error) {
        console.log(error);
        await res.status(400).send({ error })
    }      
}






module.exports = {
    findAll,
    create,
    findById,
    updateById,
    deleteById
}

