import styles from './Component.module.css'
import ComponentB from "../components/ComponentB"
import React,{ useState } from 'react';

function ComponentA() {
    const [user, setUser] = useState("AhmedBahrawy")

    return (
        <div className={styles.box}>
            <h1>CompnentA</h1>
            <h2>{`Hello ${user}`}</h2>
            <ComponentB user={user} />
        </div>
    );
}

export default ComponentA