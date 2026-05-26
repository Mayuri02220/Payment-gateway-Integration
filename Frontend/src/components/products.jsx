import React from 'react'
import axios from 'axios';
import "../style/product.css"


const Products = ({ data }) => {
    console.log(data);


    const checkoutHandler = async (amount) => {

        const { data: keyData } = await axios.get("api/getkey");
        const { key } = keyData;
        console.log(key);


        const { data: orderData } = await axios.post("api/payment/process",
            { amount });
        const { order } = orderData;
        console.log(orderData);


        const options = {
            key: key,// Replace with your Razorpay key_id
            amount: amount, // Amount is in currency subunits.
            currency: 'INR',
            name: 'Acme Corp',
            description: 'Test Transaction',
            order_id: order.id, // This is the order_id created in the backend
            callback_url: '/api/paymentVerification', // Your success URL
            prefill: {
                name: 'test',
                email: 'test@example.com',
                contact: '9579695930'
            },
            method: {
                upi: true,
                card: true,
                netbanking: true,
                wallet: true,
                paylater: true
            },
            theme: {
                color: '#F37254'
            },
        };

        const rzp = new Razorpay(options);
        rzp.open();
    }


    return (

        <div className='products-container'>
            {
                data.map((item) => (
                    <div className='product-card' key={item.id}>
                        <img src={item.image} alt="product" className="product-image" />
                        <h3 className='product-title'> {item.title}</h3>
                        <p className='product-price'> Price <strong>{item.price}</strong></p>
                        <button className='pay-button'
                            onClick={() => checkoutHandler(item.price)}>PAY {item.price}</button>
                    </div>
                ))
            }


        </div>
    )
}

export default Products;
