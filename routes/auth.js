const express = require('express');

const router = express.Router();
const userController = require('../controllers/userController');

router.post('/signup', async (res, req)  => {
    console.log(req.body);
    let response = await userController.addNewUser(req.body);
    
    if(response.status) {
        res.send(response.result);
    }
    else {
        res.status(401).send(reponse.result);
    }
    res.sendStatus(500); 
});

module.exports = router;