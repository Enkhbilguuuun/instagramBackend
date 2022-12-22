import express from "express";
import { getAllUsers, createUser, userById, updateUser, removeUser, getAllPosts, createPost, postById, updatePost, removePost} from "../controller/user.js";


const router = express.Router();
const router2 = express.Router();


router.route("/").get(getAllUsers).post(createUser);
router.route('/:id').get(userById).put(updateUser).delete(removeUser);
router2.route("/").get(getAllPosts).post(createPost);
router2.route('/:id').get(postById).put(updatePost).delete(removePost);



export default router; router2
