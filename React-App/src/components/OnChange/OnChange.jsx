import React, { useState } from 'react'
import styles from './OnChange.module.css'

function OnChange() {
    const [name, setName] = useState('');
    
    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h2 className={styles.componentTitle}>OnChange (Real-time)</h2>
            </div>
            <h1 className={styles.title}>
                Hello, {name || 'World'}!
            </h1>
            <div className={styles.inputContainer}>
                <input 
                    type="text" 
                    placeholder="Enter your name" 
                    value={name}
                    onChange={handleNameChange}
                    className={styles.input}
                />
            </div>
            <div className={styles.info}>
                <p>✨ Updates in real-time as you type!</p>
            </div>
        </div>
    );
}

export default OnChange;
