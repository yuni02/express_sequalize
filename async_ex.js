const models = require('./models');
async function getProducts(){

    try{
        const product1 = await models.Products.findByPk(4);
        const product2 =  await models.Products.findByPk(5);
        
        console.log(product1.dataValues.id)
        console.log(product2.dataValues.price)
    }catch(err){
        console.log(err)
    }

}

getProducts()