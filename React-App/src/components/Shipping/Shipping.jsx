import React, { useState } from "react";
import styles from "./Shipping.module.css";

function Shipping() {
  const [shipping, setShipping] = useState("");

  const handleShippingChange = (event) => {
    setShipping(event.target.value);
  };

  const getShippingIcon = (method) => {
    switch (method) {
      case "PickUp":
        return "🏪";
      case "Delivery":
        return "🚚";
      default:
        return "📦";
    }
  };

  const getShippingLabel = (method) => {
    switch (method) {
      case "PickUp":
        return "Store Pickup";
      case "Delivery":
        return "Home Delivery";
      default:
        return "Select Shipping Method";
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.componentTitle}>Shipping Method</h2>
      </div>

      <div className={styles.shippingDisplay}>
        <div className={styles.shippingIcon}>{getShippingIcon(shipping)}</div>
        <h1 className={styles.shippingText}>
          {shipping ? getShippingLabel(shipping) : "Select Shipping Method"}
        </h1>
      </div>

      <div className={styles.optionsContainer}>
        <label className={styles.radioLabel}>
          <input
            type="radio"
            value="PickUp"
            checked={shipping === "PickUp"}
            onChange={handleShippingChange}
            className={styles.radioInput}
          />
          <span className={styles.radioCustom}></span>
          <div className={styles.radioContent}>
            <span className={styles.radioIcon}>🏪</span>
            <span className={styles.radioText}>Store Pickup</span>
            <span className={styles.radioSubtext}>Free - Ready in 2 hours</span>
          </div>
        </label>

        <label className={styles.radioLabel}>
          <input
            type="radio"
            value="Delivery"
            checked={shipping === "Delivery"}
            onChange={handleShippingChange}
            className={styles.radioInput}
          />
          <span className={styles.radioCustom}></span>
          <div className={styles.radioContent}>
            <span className={styles.radioIcon}>🚚</span>
            <span className={styles.radioText}>Home Delivery</span>
            <span className={styles.radioSubtext}>
              $5.99 - 2-3 business days
            </span>
          </div>
        </label>
      </div>

      <div className={styles.info}>
        <p>Choose your preferred shipping method</p>
      </div>
    </div>
  );
}

export default Shipping;
