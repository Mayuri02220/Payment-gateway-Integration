import app from "./app.js";
import dotenv from "dotenv";
import Razorpay from "Razorpay";

dotenv.config({path:"Backend/config/config.env"})



export const instance = new Razorpay({
  key_id: process.env.RAZORPAY_API_KEY,
  key_secret: process.env.RAZORPAY_API_SECRETKEY,
  
});



app.listen(process.env.PORT, () => {
console.log(`server start ${process.env.PORT}` );
});




