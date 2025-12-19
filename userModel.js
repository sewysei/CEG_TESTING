import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  nama: {
    type: String,
    required: [true],
    unique: true,
    trim: true,
  },

  password: {
    type: String,
    required: true,
    select: false,
  },
});

const User = mongoose.model("user", userSchema);

export default User;
