import express from "express";
import { signup } from "../controllers/authen.controller.js";

const router = express.Router();

router.post("/signup", signup);

export default router;
