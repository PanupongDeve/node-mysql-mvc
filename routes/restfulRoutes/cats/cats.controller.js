const catsServices = require('./cats.services');

const findAll = async (req, res) => {
        try { 
         
            const data = {
                cats: await catsServices.findAll()
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
            cat: await catsServices.findById(req.params.id)
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
            cat: await catsServices.updateById(req.params.id, req.body)
        }
        res.send(data);
    } catch (error) {
        console.log(error);
        await res.status(400).send({ error })
    }  
}

const create = async (req, res) => {
    try { 
        await catsServices.create(req.body);
        await res.send({ status: 'create cat success'});
    } catch (error) {
        console.log(error);
        await res.status(400).send({ error })
    }  
}

const deleteById = async (req, res) => {
    try { 
        const deletedCat = await catsServices.deleteById(req.params.id);
        if(!deletedCat) {
            throw `Can not find id: ${req.params.id} for delete cat`
        } else {
            const data = {
                cat: `cat id: ${req.params.id}  deleted success!`
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

