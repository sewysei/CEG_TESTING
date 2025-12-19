import User from "../userModel.js";
import dotenv from "dotenv";
dotenv.config();

export const login = async (req, res) => {
  try {
    const { nama, password } = req.body;

    const user = await User.findOne({ nama });

    if (user.password !== password) {
      return res.status(401).json({
        message: "Invalid credentials.",
      });
    }

    const payload = {
      id: user._id,
      nama: user.nama,
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.status(200).json({
      message: "Login successful.",
      data: {
        id: user._id,
        nama: user.nama,
        token: token,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: "A server error occurred: " + error.message,
    });
  }
};
