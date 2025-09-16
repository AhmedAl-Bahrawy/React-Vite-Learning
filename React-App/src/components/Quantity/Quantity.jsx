import React, { useState } from "react";
import styles from './Quantity.module.css';

function Quantity() {
    const [quantity, setQuantity] = useState(0);

    const handleQuantityChange = (event) => {
        setQuantity(event.target.value);
    };

    const increment = () => {
        setQuantity(prev => prev + 1);
    };

    const decrement = () => {
        setQuantity(prev => Math.max(0, prev - 1));
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h2 className={styles.componentTitle}>Quantity Counter</h2>
            </div>
            <div className={styles.quantityDisplay}>
                <h1 className={styles.quantityNumber}>{quantity}</h1>
                <p className={styles.quantityLabel}>Items</p>
            </div>
            <div className={styles.controls}>
                <button 
                    onClick={decrement} 
                    className={styles.button}
                    disabled={quantity === 0}
                >
                    −
                </button>
                <input 
                    type="number" 
                    value={quantity} 
                    onChange={handleQuantityChange}
                    className={styles.input}
                    min="0"
                />
                <button 
                    onClick={increment} 
                    className={styles.button}
                >
                    +
                </button>
            </div>
            <div className={styles.info}>
                <p>Use buttons or type directly in the input!</p>
            </div>
        </div>
    );
}

export default Quantity;