import express from "express";
import { getAllBlogs, createBlog } from "../controllers/blog_controller";

const blogRouter = express.Router();

blogRouter.get("/", getAllBlogs);
blogRouter.post("/create", createBlog);

export default blogRouter;