import express from "express";
import { likePost, getFeedPosts, getUserPosts } from "../controllers/posts.js"; 
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

// * READ
router.get("/", verifyToken, getFeedPosts);
router.get("/:userId/posts", verifyToken, getUserPosts);

// * UPDATE
router.patch("/:id/like", verifyToken, likePost);


export default router;