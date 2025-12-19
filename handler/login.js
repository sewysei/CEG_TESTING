import User from "../userModel.js";
import dotenv from "dotenv";
dotenv.config();

export const login = async (req, res) => {
  try {
    const { nama, password } = req.body;

    const user = await User.findOne({ nama });

    res.status(200).json({
      message: "Login successful.",
      user: {
        id: user._id,
        nama: user.nama,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: "A server error occurred: " + error.message,
    });
  }
};
