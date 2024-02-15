import jwt from "jsonwebtoken";
import User from "../models/UserSchema.js";
import Doctor from "../models/DoctorSchema.js";

export const authenticate = async (req, res, next) =>{
    //get token from headers
    const authToken = req.headers.authorization;

    //check if token exists
    if (!authToken || !authToken.startsWith('Bearer')){
        return res.status(401).json({success:false, message:'no token, authorization denied'});
    }
    try {
       
        //extract token
        const token = authToken.split(' ')[1];
       

        ///verify the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        //if token successfully verified, extract payload that contains user ID and role
        //then add to req obj so subsequent middleware or route handlers can access the information
        req.userId = decoded.id;
        req.role = decoded.role;
        next();
    } catch (error) {
        if (error.name === 'TokenExpiredError'){
        return res.status(401).json({message:'token expired'});
    }
    return res.status(401).json({success:false, message:'token invalid'});
    }
    
}

export const restrict = roles => async (req, res, next) => {
    const userId = req.userId;
    let user;

    const patient = await User.findById(userId);
    const doctor = await Doctor.findById(userId);

    if (patient) {
        user = patient;
    }
    if (doctor) {
        user = doctor;
    }

    if (!roles.includes(user.role)) {
        return res.status(401).json({success: false, message:'Not authorized'});
}
next();
};