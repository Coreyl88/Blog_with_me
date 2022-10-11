import express from "express";
import { getAllBlogs } from "../controllers/blog_controller";

const router = express.Router();

router.get("/", getAllBlogs);