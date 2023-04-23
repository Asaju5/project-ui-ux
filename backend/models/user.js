import mongoose from "mongoose";
import { Schema } from "mongoose";

const userSchema = new Schema({
  name: {
    type: String,
  },

  email: {
    type: String,
  },

  password: {
    type: String,
  },
  profilepic: {
    type: String,
  },
});

export default mongoose.model("User", userSchema);
