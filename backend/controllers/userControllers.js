import asyncHandler from "../middleWare/asyncHandler.js";
import User from "../model/userModels.js";
import jwt from "jsonwebtoken";

const registerUser = asyncHandler(async (req, res) => {
  res.send("register user");
});

const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user && (await user.matchPassword(password))) {
    const token = jwt.sign(
      {
        userId: user._id,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1hr" }
    );

    res.cookie("jwt", token, {
      httpOnly: true,
      secure: process.env.NODO_ENV !== "development",
      sameSite: "strict",
      maxAge: 60 * 50,
    });

    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(401);
    throw new Error("Invalid email and password");
  }
});

const getUserProfile = asyncHandler(async (req, res) => {
  res.send("get user profile");
});

const updateUserProfile = asyncHandler(async (req, res) => {
  res.send("update user profile");
});

const getUsers = asyncHandler(async (req, res) => {
  res.send("get all users");
});

const deleteUser = asyncHandler(async (req, res) => {
  res.send("delete users ");
});

const getUserById = asyncHandler(async (req, res) => {
  res.send("get user by id");
});

const updateUser = asyncHandler(async (req, res) => {
  res.send("update user");
});

export {
  authUser,
  registerUser,
  getUserById,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserProfile,
  updateUser,
};
