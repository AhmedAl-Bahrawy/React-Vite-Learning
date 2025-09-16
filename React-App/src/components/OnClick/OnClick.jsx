import React, { useState } from "react";
import styles from './OnClick.module.css';

function OnClick() {
    const [name, setName] = useState('');
    const [inputValue, setInputValue] = useState('');
    const [isUpdated, setIsUpdated] = useState(false);
    
    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleButtonClick = () => {
        setName(inputValue);
        setIsUpdated(true);
        // Reset animation after it completes
        setTimeout(() => setIsUpdated(false), 500);
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h2 className={styles.componentTitle}>OnClick (Button)</h2>
            </div>
            <h1 className={`${styles.title} ${isUpdated ? styles.updated : ''}`}>
                Hello, {name || 'World'}!
            </h1>
            <div className={styles.inputContainer}>
                <input
                    type="text"
                    placeholder="Enter your name"
                    value={inputValue}
                    onChange={handleInputChange}
                    className={styles.input}
                />
            </div>
            <button 
                onClick={handleButtonClick}
                className={styles.button}
                disabled={!inputValue.trim()}
            >
                Update Name
            </button>
            <div className={styles.info}>
                <p>🎯 Click the button to update the name!</p>
            </div>
        </div>
    );
}

export default OnClick;