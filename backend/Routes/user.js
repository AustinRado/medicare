import express from "express";
import { updateUser, deleteUser, getAllUser, getSingleUser } from "../Controllers/userController.js";
import { authenticate, restrict } from "../auth/verifyToken.js";

const router = express.Router();

// authenticate, restrict(['patient']), this added layer of security is crucial as it ensures only authorized people can edit and make changes
router.get("/:id",authenticate, restrict(['patient']), getSingleUser);
router.put("/:id",authenticate, restrict(['patient']), updateUser);
router.delete("/:id",authenticate, restrict(['patient']), deleteUser);
router.get("/",authenticate, restrict(['patient']), getAllUser);


export default router;