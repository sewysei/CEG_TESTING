import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  asam_kuat: {
    type: Number,
    required: true,
    default: 2,
  },
  asam_lemah: {
    type: Number,
    required: true,
    default: 2,
  },
  netral: {
    type: Number,
    required: true,
    default: 1,
  },
  asam_kuat: {
    type: Number,
    required: true,
    default: 2,
  },
  asam_lemah: {
    type: Number,
    required: true,
    default: 2,
  },
});

const Card = mongoose.model("card", userSchema);

export default Cards;
