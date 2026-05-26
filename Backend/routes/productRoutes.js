import express from "express";
import { getkey,processPayment } from "../controller/productController.js";

const router = express.Router();

router.route("/payment/process").post(processPayment);
router.route("/getkey").get(getkey);

export default router;