import React, { useState } from "react";
import styles from "./ColorPicker.module.css";

function ColorPicker() {
  const [color, setColor] = useState("#FFFFFF");

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p className={styles.componentTitle}>Color Picker</p>
        <h1 className={styles.title}></h1>
      </div>
      <div className={styles.colorDisplay} style={{ backgroundColor: color }}>
        <p className={styles.colorText}>Selected Color: {color}</p>
      </div>
      <div className={styles.inputContainer}>
        <label className={styles.label}>Select a Color</label>
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          className={styles.input}
        />
      </div>
      <div className={styles.info}>
        <p>You can copy the hex value and use it anywhere.</p>
      </div>
    </div>
  );
}

export default ColorPicker;
