const { Router }= require('express');
const routerDetails = Router();
const getDetails = require('../controllers/getDetails');

routerDetails.get('/dogs/:id', async (req, res) =>{
    const {id} = req.params;
    try{
        const doggys = await getDetails(id);
        res.send(doggys);
    }catch (error){
     res.status(404).send('No existe');
}
});

module.exports = routerDetails;



