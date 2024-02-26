import mongoose from 'mongoose';

const {Schema} = mongoose

const BookingSchema = new Schema(
{
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    doctor: {
        type: Schema.Types.ObjectId,
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