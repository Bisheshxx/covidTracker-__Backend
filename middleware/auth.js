const jwt = require('jsonwebtoken');
const User = require('../models/registration_model');

module.exports.verifyUser = function(req,res,next){

    try{
        const token = req.headers.authorization.split('')[1];
        const userData = jwt.verify(token,'secretkey');

        User.findOne({_id: userData.userId}).then(function(alldata){

            req.user = alldata;
            next();
        })
        .catch(function(e){
            res.status(500).json({error:e})
        })
    }

    catch(e){
        res.status(401).json({message:'auth failed'});
    }
}

//checking admin

module.exports.verifyAdmin = function(req, res, next){

    if(!req.user){
        return res.status(200).json({message:'auth failed'});
    }else if(req.user.userType  !== Admin){
        return res.status(401).json({message:'Access denied!!'});
    }

    next();
}

//checking event_manager

module.exports.verifyEventManager = function(req, res , next){

    if(!req.user){

        return res.status(200).json({message:'auth failed'});
    
    }else if (req.user.userType !== Event_Manager){

        return res.status(401).json({message:'Access denied!!'});
    }

    next();
}

//checking the visitor

module.exports.verifyVisitor = function( req, res, next){

    if(!req.user){

        return res.status(200).json({message:'auth failed'});

    }else if (req.user.userType !== Visitor){

        return res.status(401).json({message:'Access denied!!'});
    }

    next();
}