import React, { useState } from "react";
import styles from "./Food.module.css";

function Food() {
  const [foods, setFoods] = useState([]);

  const handleAddFood = () => {
    const newFood = document.getElementById("foodInput").value.trim();
    if (newFood) {
      document.getElementById("foodInput").value = "";
      setFoods([...foods, newFood]);
    }
  };

  const handleRemoveFood = (index) => {
    setFoods(foods.filter((_, i) => i !== index));
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleAddFood();
    }
  };

  return (
    <div className={styles.foodContainer}>
      <h2 className={styles.title}>🍽️ Food List</h2>

      <div className={styles.inputContainer}>
        <input
          type="text"
          placeholder="Add a delicious food item..."
          id="foodInput"
          className={styles.foodInput}
          onKeyPress={handleKeyPress}
        />
        <button onClick={handleAddFood} className={styles.addButton}>
          Add Food
        </button>
      </div>

      {foods.length > 0 ? (
        <ul className={styles.foodList}>
          {foods.map((food, index) => (
            <li
              key={index}
              className={styles.foodItem}
              onClick={() => handleRemoveFood(index)}
            >
              <span className={styles.foodText}>🍎 {food}</span>
              <span className={styles.removeIcon}>✕</span>
            </li>
          ))}
        </ul>
      ) : (
        <div className={styles.emptyState}>
          No food items yet. Add some delicious foods above! 🍕
        </div>
      )}

      {foods.length > 0 && (
        <div className={styles.foodCount}>
          {foods.length} food item{foods.length !== 1 ? "s" : ""} in your list
        </div>
      )}
    </div>
  );
}

export default Food;
