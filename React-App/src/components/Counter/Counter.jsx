import React, { useState } from "react";
import Button from "../Button/Button";
import styles from './Counter.module.css';

function Counter() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    const reset = () => {
        setCount(0);
    };

    return (
        <div className={styles.counterContainer}>
            <div className={styles.counterCard}>
                <h2 className={styles.title}>Counter App</h2>
                <div className={styles.countDisplay}>
                    {count}
                </div>
                <div className={styles.buttonGroup}>
                    <Button text="Add" onClick={increment} />
                    <Button text="Subtract" onClick={decrement} />
                    <Button text="Reset" onClick={reset} />
                    
                </div>
            </div>
        </div>
    );
}

export default Counter;