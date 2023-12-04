import Doctor from "../models/DoctorSchema.js";

export const updateDoctor = async(req, res)=>{
    const {id} = req.params

    try {
        
        const updatedDoctor = await Doctor.findByIdAndUpdate(id, {$set:req.body}, {new:true});
        res.status(200).json({success: true, message: "Successfully updated", data:updatedDoctor});

    } catch (error) {
        res.status(500).json({success: false, message: "Failed to update", data:null});
    }
}

export const deleteDoctor = async(req, res)=>{
    const {id} = req.params

    try {
        
        const deletedDoctor = await Doctor.findByIdAndDelete(id, {$set:req.body}, {new:true});
        res.status(200).json({success: true, message: "Successfully deleted", data:deletedDoctor});

    } catch (error) {
        res.status(500).json({success: false, message: "Failed to delete", data:null});
    }
}

export const getSingleDoctor = async(req, res)=>{
    const {id} = req.params

    try {
        
        const doctor = await Doctor.findById(id).select("-password");
        res.status(200).json({success: true, message: "Doctor found", data:doctor});

    } catch (error) {
        res.status(404).json({success: false, message: "Doctor does not exist", data:null});
    }
}

export const getAllDoctor = async(req, res)=>{
    const {id} = req.params

    try {
        
        const doctors = await Doctor.find({}).select("-password");
        res.status(200).json({success: true, message: "Doctors found", data:doctors});

    } catch (error) {
        res.status(404).json({success: false, message: "Doctors do not exist", data:null});
    }
}