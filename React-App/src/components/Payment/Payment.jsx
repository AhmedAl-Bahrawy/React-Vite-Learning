import React, { useState } from "react";
import styles from './Payment.module.css';

function Payment() {
    const [payment, setPayment] = useState("");

    const handlePaymentChange = (event) => {
        setPayment(event.target.value);
    };

    const getPaymentIcon = (method) => {
        switch(method) {
            case 'credit': return '💳';
            case 'debit': return '💳';
            case 'paypal': return '🅿️';
            case 'cash': return '💵';
            case 'visa': return '💳';
            default: return '💳';
        }
    };

    const getPaymentLabel = (method) => {
        switch(method) {
            case 'credit': return 'Credit Card';
            case 'debit': return 'Debit Card';
            case 'paypal': return 'PayPal';
            case 'cash': return 'Cash';
            case 'visa': return 'Visa';
            default: return 'Select Payment Method';
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h2 className={styles.componentTitle}>Payment Method</h2>
            </div>
            
            <div className={styles.paymentDisplay}>
                <div className={styles.paymentIcon}>
                    {getPaymentIcon(payment)}
                </div>
                <h1 className={styles.paymentText}>
                    {payment ? getPaymentLabel(payment) : 'Select Payment Method'}
                </h1>
            </div>

            <div className={styles.selectContainer}>
                <select 
                    value={payment} 
                    onChange={handlePaymentChange} 
                    className={styles.select}
                >
                    <option value="">Select payment method</option>
                    <option value="credit">💳 Credit Card</option>
                    <option value="debit">💳 Debit Card</option>
                    <option value="paypal">🅿️ PayPal</option>
                    <option value="cash">💵 Cash</option>
                    <option value="visa">💳 Visa</option>
                </select>
            </div>

            <div className={styles.info}>
                <p>Choose your preferred payment method</p>
            </div>
        </div>
    );
}

export default Payment;