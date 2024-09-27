import express from "express";

import { login, signup } from "../controller/user.controller.js";


const router = express.Router();

router.post("/signup", signup);// defined the route for signup form & post methoud used bcz we/user will send the data to db
router.post("/login", login);
export default router;