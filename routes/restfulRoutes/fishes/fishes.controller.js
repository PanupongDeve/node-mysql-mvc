const fishesServices = require('./fishes.services');

const findAll = async (req, res) => {
        try {   
            const data = {
                fishes: await fishesServices.findAll()
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
            fish: await fishesServices.findById(req.params.id)
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
            fish: await fishesServices.updateById(req.params.id, req.body)
        }
        res.send(data);
    } catch (error) {
        console.log(error);
        await res.status(400).send({ error })
    }  
}

const create = async (req, res) => {
    try { 
        await fishesServices.create(req.body);
        await res.send({ status: 'create fish success'});
    } catch (error) {
        console.log(error);
        await res.status(400).send({ error })
    }  
}

const deleteById = async (req, res) => {
    try { 
        const deletedCat = await fishesServices.deleteById(req.params.id);
        if(!deletedCat) {
            throw `Can not find id: ${req.params.id} for delete fish`
        } else {
            const data = {
                fish: `fish id: ${req.params.id}  deleted success!`
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

