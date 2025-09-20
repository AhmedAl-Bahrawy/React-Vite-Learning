import React, { useState, useEffect } from "react";
import styles from "./UseEffect.module.css";

function UseEffect() {
    const [count, setCount] = useState(0);
    const [color, setColor] = useState("red");

    useEffect(() => {
        document.title = `Count: ${count}, Color ${color}`;

        return () => {
            // Cleanup function
        }
    }, [count, color])

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>UseEffect Counter Demo</h2>
            <p className={styles.counter} style={{ color: color }}>
                Count: {count}
            </p>
            <div className={styles.buttonGroup}>
                <button 
                    className={`${styles.button} ${styles.incrementButton}`}
                    onClick={() => { setCount(count + 1) }}
                >
                    Increment
                </button>
                <button 
                    className={`${styles.button} ${styles.decrementButton}`}
                    onClick={() => { setCount(count - 1) }}
                >
                    Decrement
                </button>
                <button 
                    className={`${styles.button} ${styles.colorButton}`}
                    onClick={() => { setColor(c => c === "red" ? "blue" : "red") }}
                >
                    Change Color
                </button>
            </div>
        </div>
    )
}

export default UseEffect;