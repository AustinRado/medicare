import User from "../models/UserSchema.js";

export const updateUser = async(req, res)=>{
    const {id} = req.params;

    try {
        
        const updatedUser = await User.findByIdAndUpdate(id, {$set:req.body}, {new:true});
        res.status(200).json({success: true, message: "Successfully updated", data:updatedUser});

    } catch (error) {
        res.status(500).json({success: false, message: "Failed to update", data:null});
    }
}

export const deleteUser = async(req, res)=>{
    const {id} = req.params

    try {
        
        const deletedUser = await User.findByIdAndDelete(id, {$set:req.body}, {new:true});
        res.status(200).json({success: true, message: "Successfully deleted", data:deletedUser});

    } catch (error) {
        res.status(500).json({success: false, message: "Failed to delete", data:null});
    }
}

export const getSingleUser = async(req, res)=>{
    const {id} = req.params

    try {
        
        const user = await User.findById(id).select("-password");
        res.status(200).json({success: true, message: "User found", data:user});

    } catch (error) {
        res.status(404).json({success: false, message: "User does not exist", data:null});
    }
}

export const getAllUser = async(req, res)=>{
    const {id} = req.params

    try {
        
        const users = await User.find({}).select("-password");
        res.status(200).json({success: true, message: "Users found", data:users});

    } catch (error) {
        res.status(404).json({success: false, message: "Users do not exist", data:null});
    }
}