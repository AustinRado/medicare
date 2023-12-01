import bycrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/UserSchema.js";
import Doctor from "../models/DoctorSchema.js";

const generateToken = (user) => {   
    return jwt.sign({id: user._id, role:user.role}, process.env.JWT_SECRET, {expiresIn: "15d"});
};

export const register = async (req, res) => {
    
      //destructure data from req.body
      const { name, email, password, role, photo, gender } = req.body;

    try {
        let user = null;

        //check if user exists already in the database if reg as a patient or doctor
        if(role === "patient") {
            user = await User.findOne({email});
        } else {
            user = await Doctor.findOne({email});
        }

        if(user) {
            return res.status(400).json({
                message: "User already exists",
            });
        }
        //hash password
        const salt = await bycrypt.genSalt(10);
        const hashedPassword = await bycrypt.hash(password, salt);
    

        if (role === "patient") {
            user = await User.create({
                name,
                email,
                password: hashedPassword,
                role,
                photo,
                gender,
            });
        } else {
            user = await Doctor.create({
                name,
                email,
                password: hashedPassword,
                role,
                photo,
                gender,
            });
        }
      await user.save();

      res.status(200).json({
        success:true,
        message: "User registered successfully",
      });
      
    } catch (error) {
        res.status(200).json({
            success:false,
            message: "Internal server error, Try again",
          });
    }
};

export const login = async (req, res) => {
    //unpack details
    const {email} = req.body;
    try {
        let user = null;
        const patient = await User.findOne({email});
        const doctor = await User.findOne({email});

        if (patient){
            user = patient;
        }
        if (doctor){
            user = doctor;
        }

        //check if user exists or not
        if(!user){
            return res.status(404).json({
                message: "User does not exist",
            });
        }

        //if user exist compare passwords
        const isMatch = await bycrypt.compare(req.body.password, user.password);
        if(!isMatch){
            return res.status(400).json({
                status: false,
                message: "Incorrect password",
            });
        }

        //generate a token if password matches
        const token = generateToken(user);
        const {password, role, appointment, ...rest} = user._doc;

        res.status(200).json({status:true, message:"Successfully logged in", token, data:{...rest}, role});

    } catch (error) {
        res.status(500).json({status:false, message:"Unsuccessfully logging in"});
    }
};