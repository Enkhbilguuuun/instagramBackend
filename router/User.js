import express from "express";
import {
  getAllUsers,
  createUser,
  userById,
  updateUser,
  removeUser,
  userLogIn
} from "../controller/user.js";

const router = express.Router();

router.route("/").get(getAllUsers).post(createUser).get(userLogIn);
router.route("/:id").get(userById).put(updateUser).delete(removeUser);

export default router;
