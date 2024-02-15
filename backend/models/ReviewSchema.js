import mongoose from "mongoose";
// import Doctor from "./DoctorSchema";

const ReviewSchema = new mongoose.Schema(
  {
    doctor: {
      type: mongoose.Types.ObjectId,
      ref: "Doctor",
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    reviewText: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
      min: 0,
      max: 5,
      default: 0,
    },
  },
  { timestamps: true }
);

ReviewSchema.pre(/^find/, function(next){
  this.populate({
    path: "user",
    select:'name photo',
  });
  next();
});

/**
 * Calculate average rating of a doctor
 * statics method - used to calculate average rating of a doctor in mongoDB
 * @params doctorID
 */
ReviewSchema.statics.calculateAverageRatings = async function (doctorId) {
  //this refers to the current review
  const stats = await this.aggregate([
    {
      $match: { doctor: doctorId },
    },
    {
      $group: {
      _id: "$doctor", 
      numOfRating:{$sum:1}, 
      averageRating: {$avg: "$rating"},
    },
  },
  ]);
  await Doctor.findByIdAndUpdate(doctorId, {
    totalRating: stats[0].averageRating,
    averageRating: stats[0].averageRating,
  });
};

// ReviewSchema.post('save', function(){
//   this.constructor.calculateAverageRatings(this.doctor);
// });

export default mongoose.model("Review", ReviewSchema);