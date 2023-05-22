import { hashPassword, comparePassword } from "../Utils/auth";
import User from "../models/user";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  // const generateOTP = () => {
  //   return randomstring.generate({
  //     length: 6,
  //     charset: "numeric",
  //   });
  // };
  try {
    const { fullname, email, password } = req.body;
    // validation
    if (!fullname) return res.status(400).send("Name is required");
    if (!password || password.length < 6) {
      return res
        .status(400)
        .send("Password is required and should be min 6 characters long");
    }
    let userExist = await User.findOne({ email }).exec();
    if (userExist) return res.status(400).send("Email is taken");

    // Generate OTP
    // const otp = generateOTP();
    // hash password
    const hashedPassword = await hashPassword(password);

    // register
    const newUser = new User({
      fullname,
      email,
      password: hashedPassword,
      // otp,
    });
    await newUser.save();

    // Send OTP to the user's email
    // let transporter = nodemailer.createTransport({
    //   service: "Gmail",
    //   auth: {
    //     user: "testemail122003@gmail.com",
    //     pass: "rmoqeaaevsuecxzw",
    //   },
    // });

    // const mailOptions = {
    //   from: "testemail122003@gmail.com",
    //   to: email,
    //   subject: "OTP Verification",
    //   text: `Your OTP is: ${otp}`,
    // };
    // transporter.sendMail(mailOptions, (error, info) => {
    //   if (error) {
    //     console.log("Error sending email:", error);
    //     // Handle error, e.g., return an error response to the client
    //   } else {
    //     console.log("Email sent:", info.response);
    //     // Handle success, e.g., return a success response to the client
    //   }
    // });
    // Return a response to the client
    // res.json({ message: "OTP sent to your email" });
    return res.json({ ok: true });
  } catch (err) {
    console.log("Error registering user:", err);
    // Handle error, e.g., return an error response to the client
    res.status(500).json({ error: "Failed to register user" });
  }
};

export const login = async (req, res) => {
  try {
    // console.log(req.body);
    const { email, password } = req.body;
    // check if our db has user with that email
    const user = await User.findOne({ email }).exec();
    if (!user) return res.status(400).send("No user found");
    // check password
    const match = await comparePassword(password, user.password);
    if (!match) return res.status(400).send("Wrong password");

    // create signed jwt
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    // return user and token to client, exclude hashed password
    user.password = undefined;
    // send token in cookie
    res.cookie("token", token, {
      httpOnly: true,
      // secure: true, // only works on https
    });
    // send user as json response
    res.json(user);
  } catch (err) {
    console.log(err);
    return res.status(400).send("Error. Try again.");
  }
};

export const logout = async (req, res) => {
  try {
    res.clearCookie("token");
    return res.json({ message: "Signout success" });
  } catch (err) {
    console.log(err);
  }
};
