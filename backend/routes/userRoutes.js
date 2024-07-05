import express from "express";
import {
  authUser,
  registerUser,
  getUserById,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserProfile,
  updateUser,
} from "../controllers/userControllers.js";

const router = express.Router();

router.route("/").post(registerUser).get(getUsers);
router.post("/login", authUser);
router.route("/profile").get(getUserProfile).put(updateUserProfile);

router.route("/:id").delete(deleteUser).get(getUserById).put(updateUser);

export default router;
