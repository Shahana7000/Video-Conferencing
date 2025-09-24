import { Router } from "express";
import { register, login } from "../controllers/user.controller.js";

const router = Router();

router.post("/login", login);
router.post("/register", register);

// Placeholder routes (you can add controllers later)
router.post("/add_to_activity", (req, res) => res.json({ message: "Not implemented yet" }));
router.get("/get_all_activity", (req, res) => res.json({ message: "Not implemented yet" }));

export default router;
