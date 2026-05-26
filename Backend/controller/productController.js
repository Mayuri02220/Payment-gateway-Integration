import { instance } from "../server.js"
import crypto from "crypto";


export const processPayment = async (req, res) => {
    const options = {
        amount: Number(1000 * 100),
        currency: "INR"
    }
    const order = await instance.orders.create(options)

    res.status(200).json({
        sucess: true,
        order
    })
}


export const getkey = async (req, res) => {
    res.status(200).json({
        key: process.env.RAZORPAY_API_KEY
    })
}


export const paymentVerification = async (req, res) => {
    const { razorpay_payment_id, razorpay_order_id, razorpay_signature }
        = req.body
    const body = razorpay_order_id + "|" + razorpay_payment_id;

    const expectedSignature = crypto.createHmac("sha256", process.env.RAZORPAY_API_SECRETKEY).update(body.toString()).digest("hex");

    const isAuthentic = expectedSignature === razorpay_signature;
    if (isAuthentic) {
        return res.redirect(`http://localhost:5173/paymentSuccess?
            reference=${razorpay_payment_id}`)
    } else {
        res.status(404).json({
            success: false
        })
    }



}
