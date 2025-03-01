const jwt = require("jsonwebtoken");

const authmw = (role)=>{
    return (req,res,next)=>{
        let token = req.headers?.authorization?.split[" "][1];
        try{
            if(token){
                var decoded = jwt.verify(token,process.env.SECRET_KEY);
                if(decoded){
                    if(role.includes(decoded.role)){
                        req.userId = decoded.userId;
                        req.role = decoded.role;
                        next();
                    }else{
                        (res.status(400).json({message:"UnAuthorized token"}));
                    }
                }else{
                    res.status(402).json({message:"Token failed,Please login"});
                }
            }else{
                res.status(403).json({message:"token Not Found,please login"});
            }
        
        }catch(err){
            res.status(500).json({message:"error in authorization"})
        }
    }
}

module.exports = authmw;