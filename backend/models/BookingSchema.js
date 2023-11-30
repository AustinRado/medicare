import mongoose from 'mongoose';

const BookingSchema = new mongoose.Schema(
{
    user: {
        type: schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    doctor: {
        type: schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    ticketPrice: { type: String, required: true },
    appointmentDate: {
      type: Date,
      required: true,
    },
  status: {
        type: String,
        enum: ["pending", "accepted", "rejected"],
        default: "pending",
        required: true
    },
isPaid: {
        type: Boolean,
        default: true,
    },
},
{ timestamps: true }
);
export default mongoose.model("Booking", BookingSchema);