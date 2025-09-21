import React, {useState, useEffect} from "react";
import styles from "./Clock.module.css";

function Clock() {
    const [time, setTime] = useState(new Date());
    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000)

        return () => {
            clearInterval(intervalId);
        }
    },[]);

    const formatTime = () => {
        let hours = time.getHours();
        let minutes = time.getMinutes();
        let seconds = time.getSeconds();
        let meridiem = hours >= 12 ? "PM" : "AM";
        hours = hours % 12 || 12;

        return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}:${meridiem}`
    }

    const padZero = (num) => {
        return (num < 10 ? "0" : "") + num;
    }

    return (
        <div className={styles.clockContainer}>
            <div className={styles.clockDisplay}>
                <span className={styles.timeText}>{ formatTime()}</span>
            </div>        
        </div>
    );
}

export default Clock