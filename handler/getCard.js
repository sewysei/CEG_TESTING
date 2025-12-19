import Cards from "../cardModel.js";

export const getCard = async (req, res) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        status: "Failed",
        message: "There is no Token sent!",
      });
    }
    const token = authHeader.split(" ")[1];
    const { valid, expired, decoded } = checkToken(token);
    const userId = decoded.id;

    if (!valid) {
      return res.status(401).json({
        status: "Failed",
        message: expired ? "Token expired." : "Token invalid.",
      });
    }
    if (await isBlacklisted(token)) {
      return res
        .status(401)
        .json({ message: "Token has been invalidated. Please login again." });
    }
    if (!userId) {
      return res.status(401).json({
        message: "Unauthorized. User ID is missing.",
      });
    }

    const cards = await Cards.findOne({ userId: userId });
    if (!cards) {
      return res.status(404).json({
        status: "Failed",
        message: "Cards not found for the user.",
      });
    }
    res.status(200).json({
      status: "Success",
      data: cards,
    });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};
