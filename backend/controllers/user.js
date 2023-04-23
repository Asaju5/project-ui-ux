import nodemailer from "nodemailer";
import User from "../models/user";

export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name) return res.status(400).send("Please fill out your name");
    if (!password || password < 8)
      return res
        .status(400)
        .send("Password required and must be 8 characters min.");
    let isUser = await User.findOne({ email }).exec();
    if (isUser)
      return res.status(400).send("There's a user with the same email");

    // const hashedpassword = await hashPassword(password);

    const user = new User({
      name,
      email,
      password,
      verified: false,
    });

    await user.save();
    return res.json({ ok: true });
  } catch (err) {
    console.log(err);
    return res.status(400).send(err.message);
  }
};

export const postPicture = async (req, res) => {};
