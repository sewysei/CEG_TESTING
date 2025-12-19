import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  asam_kuat: {
    type: Number,
  },
  asam_lemah: {
    type: Number,
  },
  netral: {
    type: Number,
  },
  asam_kuat: {
    type: Number,
  },
  asam_kuat: {
    type: Number,
  },
});

const User = mongoose.model("user", userSchema);

export default User;
