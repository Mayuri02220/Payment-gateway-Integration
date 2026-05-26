import React from 'react'
import '../style/paymentSuccess.css'
import { useLocation } from 'react-router-dom'

function PaymentSuccess() {

    const query = new URLSearchParams(useLocation().search);
    const reference = query.get("reference");

    return (
        <div className='paymentSuccess-container'>
            <div className="paymentSuccess-card">
                <h1 className="paymentSuccess-title">Payment Successful...</h1>
                <p className="paymentSuccess-message">
                    <small>Thanking you for your payment</small> <br/> Your transaction was Successful!</p>
                {reference && (
                    <p className="paymentSuccess-reference">
                        <strong>Reference ID:</strong> {reference} </p>
                )}
            </div>
        </div >
    )
}

export default PaymentSuccess

