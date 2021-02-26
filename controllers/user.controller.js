class userController{
    static publicAccess(req,res){
        res.status(200).json({message:"Public Content"});
    }
    static userAccess(req,res){
        res.status(200).json({message:"User Content"});
    }
    static adminAccess(req,res){
        res.status(200).json({message:"Admin Content"});
    }
    static moderatorAccess(req,res){
        res.status(200).json({message:"Moderator Content"});
    }
}

module.exports = userController;