import express from "express";
import { getAllReviews, createReview } from "../Controllers/reviewController.js";
import { authenticate, restrict } from "../auth/verifyToken.js";

const router = express.Router({mergeParams:true}); //options ensures params from parent id are accessible

/** associate it with a specific doctor 
 * /doctor/doctorId/reviews
 * to achieve this we set up a nested route
 * */
router.route('/').get(getAllReviews).post(authenticate, restrict(['patient']), createReview );

export default router;