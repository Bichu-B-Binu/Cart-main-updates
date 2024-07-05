import asyncHandler from "../middleWare/asyncHandler.js";
import User from "../model/userModels.js";

const registerUser = asyncHandler(async (req, res) => {
  res.send("register user");
});

const authUser = asyncHandler(async (req, res) => {
  res.send("auth user");
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
