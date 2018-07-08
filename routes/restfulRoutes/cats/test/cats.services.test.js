
const sequelize_test = require('../../../../database/sequelize_test');
const connection = require('../../../../database/connection');
const catServices = require('../cats.services');
const Cat = require('../cats.model');
const moment = require('../../../../utils/moment');


jest.setTimeout(30000);

describe('connectDB Testing', () => {
    beforeAll(async () => {
        await connection(sequelize_test);
      });
      
    afterAll(async () => {    
        await Cat.drop();
   
    });

    it('cat can create', async () => {

        let cat = await catServices.create({
            firstName: 'John',
            lastName: 'Hancock',
            createdAt: moment().format(),
            updatedAt: moment().format()
          });
        
        cat = JSON.parse(JSON.stringify(cat))
        console.log(cat);
        expect(cat.firstName).toBe('John');
    });
    
    it('cats findAll is Working', async () => {
        let cats = await catServices.findAll();
        
        cats = JSON.parse(JSON.stringify(cats))
        console.log(cats);
        expect(cats.length).toBe(1);
        expect(cats[0].firstName).toBe('John');
    });  

    it('cat findById is Working', async () => {
        let cat = await catServices.findById(1);
        
        cat = JSON.parse(JSON.stringify(cat))
        console.log(cat);
        expect(cat.firstName).toBe('John');
    }); 

    it('cat updateByid  is Working', async () => {
        let cat = await catServices.findById(1);
        cat = JSON.parse(JSON.stringify(cat))
        cat.firstName = "Panupong";
        cat.lastName = "Chamsomboon"

        const cat_edit = {
            firstName: cat.firstName,
            lastName: cat.lastName,
            updatedAt: moment().format()
        }
        console.log(moment().format());
        cat = await catServices.updateById(1, cat_edit);
        cat = await catServices.findById(1);
        cat = JSON.parse(JSON.stringify(cat))
        console.log(cat);
        expect(cat.firstName).toBe('Panupong');
    }); 
})
