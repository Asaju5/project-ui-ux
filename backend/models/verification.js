import mongoose from "mongoose";
const Schema = mongoose.Schema;

const otpSchema = new Schema({
  otp: {
    type: String,
  },

  email: {
    type: String,
    unique: true,
  },
  createdAt: Date,
  expiredAt: Date,
});

export default mongoose.model("OTP", otpSchema);
