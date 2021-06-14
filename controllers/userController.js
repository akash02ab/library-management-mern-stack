const userModel = require('../models/user');
const bcrypt = require('bcrypt');
const defaultPic = "";

async function addNewUser (username, email, password, photoUrl) {
    if(!photoUrl) {
        photUrl = defaultPic;
    }

    let emailRegex = /.+@.*\..+/;

    if(!emailRegex.test(email)) {
        return {status: false, result: 'Invalid Email'};
    }

    let hash = await bcrypt.hash(password, 10);

    try {
        let user = new userModel({name: username, email: email, password: hash, avatar: photoUrl});
        let savedUser = await user.save();
        return savedUser;
    }
    catch(err) {
        return err.message;
    }
} 

module.exports = {
    addNewUser,
}