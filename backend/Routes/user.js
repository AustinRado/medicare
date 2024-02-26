import express from "express";
import { 
    updateUser, 
    deleteUser, 
    getAllUser, 
    getSingleUser,
    getUserProfile,
    getMyAppointments
 } from "../Controllers/userController.js";
import { authenticate, restrict } from "../auth/verifyToken.js";

const router = express.Router();

// authenticate, restrict(['patient']), this added layer of security is crucial as it ensures only authorized people can edit and make changes
router.get("/:id",authenticate, restrict(['patient']), getSingleUser);
router.get("/",authenticate, restrict(['patient']), getAllUser);
router.put("/:id",authenticate, restrict(['admin']), updateUser);
router.delete("/:id",authenticate, restrict(['patient']), deleteUser);
router.get("/profile/me",authenticate, restrict(['patient']), getUserProfile);
router.get("/appointments/my-appointment",authenticate, restrict(['patient']), getMyAppointments);



export default router;