const jwt = require("jsonwebtoken");
const User = require("../models/user.model");
const config = require("../configs/auth.config");

class authJwt {
    static verifyToken(req,res,next){
        let token = req.headers["access_token"];
        if (!token){
            throw ({ name : 'MISSING ACCESS TOKEN'});
        }
        jwt.verify(token, config.secret, (err,decoded)=>{
            if(err){
                throw ({ name : 'UNAUTHORIZED'});
            }
            req.userId = decoded.id;
            next();

        });
    }
    static isModerator (req,res,next) {
        User.findById(req.userId)
        .then(user=>{
            if (user.roles === 'moderator'){
                next();
                return;
            } else {
                res.status(403).send({ message: "Hanya bisa diakses oleh moderator"});
                return;
            }
            
        }).catch(next);
    };
    
    static isAdmin (req,res,next) {
        User.findById(req.userId)
        .then(user=>{
            if (user.roles === 'admin'){
                next();
                return;
            } else {
                res.status(403).send({ message: "Hanya bisa diakses oleh admin"});
                return;
            }
        }).catch(next);
    };
}

module.exports = authJwt;