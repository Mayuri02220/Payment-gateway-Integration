import { instance } from "../server.js"


export const processPayment = async(req, res) => {
    const options = {
        amount: Number(1000*100),
        currency: "INR"
    }
    const order = await instance.orders.create(options)

    res.status(200).json({
        sucess: true,
        order
    })
}



export const getkey = async(req,res) =>{
res.status(200).json({
 key:process.env.RAZORPAY_API_KEY   
})
}