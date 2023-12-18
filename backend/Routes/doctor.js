import express from "express";
import { updateDoctor, deleteDoctor, getAllDoctor, getSingleDoctor } from "../Controllers/doctorController.js";
import { authenticate, restrict } from "../auth/verifyToken.js";
import reviewRouter from './review.js';

const router = express.Router();

//nested route is configured
router.use('/:doctorId/reviews', reviewRouter);

router.put("/:id",authenticate, restrict(['doctor']), updateDoctor);
router.delete("/:id",authenticate, restrict(['doctor']), deleteDoctor);
router.get("/", getAllDoctor);
router.get("/:id", getSingleDoctor);

export default router;