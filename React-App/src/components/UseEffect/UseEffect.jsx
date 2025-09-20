import React, { useState, useEffect } from "react";
import styles from "./UseEffect.module.css";

function UseEffect() {

    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(() => {
        window.addEventListener("resize", () => {
            setWidth(window.innerWidth);
            setHeight(window.innerHeight);
        });
    }, []);


    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Window Size Tracker</h2>
            <div className={styles.dimensionDisplay}>
                <div className={styles.dimensionItem}>
                    <span className={styles.dimensionLabel}>Width:</span>
                    <span className={styles.dimensionValue}>{width}px</span>
                </div>
                <div className={styles.dimensionItem}>
                    <span className={styles.dimensionLabel}>Height:</span>
                    <span className={styles.dimensionValue}>{height}px</span>
                </div>
            </div>
            <p className={styles.description}>
                Resize your browser window to see the dimensions update in real-time!
            </p>
        </div>
    )
}

export default UseEffect;