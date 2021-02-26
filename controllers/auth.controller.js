const config = require("../configs/auth.config");
const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

class authController{
    static register(req,res,next){
        const user = new User({
            username: req.body.username,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 8),
            gender: req.body.gender,
            roles: req.body.roles
        });
        user.save()
        .then(user=>{
           res.status(201).json({message:`Anda behasil mendaftar sebagai ${req.body.roles}`, user});
        }).catch(next);
    }

    static login(req,res,next){
        User.findOne({username: req.body.username})
        .then(user=>{
            if (!user) {
                return next({name:'LOGIN FAILED'});
            }
            var passwordIsValid = bcrypt.compareSync(
                req.body.password,
                user.password
            );  
            if (!passwordIsValid) {
                return next({name:'LOGIN FAILED'});
            }
            var token = jwt.sign({ id: user.id }, config.secret, {expiresIn: 86400}); //24 jam
            res.status(200).json({
                id: user._id,
                username: user.username,
                email: user.email,
                gender: user.gender,
                roles: user.roles,
                accessToken: token
            });
        }).catch(next);
    }
}

module.exports = authController;