import React, { useState } from "react";
import styles from "./Car.module.css";

function Car() {
  const [cars, setCars] = useState([]);
  const [carYear, setCarYear] = useState(new Date().getFullYear());
  const [carMake, setCarMake] = useState("");
  const [carModel, setCarModel] = useState("");

  const handleAddCar = () => {
    if (carMake.trim() && carModel.trim()) {
      setCars([
        ...cars,
        {
          year: carYear,
          make: carMake.trim(),
          model: carModel.trim(),
        },
      ]);
      setCarMake("");
      setCarModel("");
      setCarYear(new Date().getFullYear());
    }
  };

  const handleRemoveCar = (index) => {
    setCars(cars.filter((_, i) => i !== index));
  };

  const handleYearChange = (e) => {
    setCarYear(e.target.value);
  };

  const handleMakeChange = (e) => {
    setCarMake(e.target.value);
  };

  const handleModelChange = (e) => {
    setCarModel(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleAddCar();
    }
  };

  const isFormValid = carMake.trim() && carModel.trim();

  return (
    <div className={styles.carContainer}>
      <h2 className={styles.title}>🚗 Car Collection</h2>

      <div className={styles.formContainer}>
        <div className={styles.inputGroup}>
          <input
            type="number"
            value={carYear}
            onChange={handleYearChange}
            placeholder="Year"
            className={`${styles.carInput} ${styles.yearInput}`}
            min="1900"
            max={new Date().getFullYear() + 1}
          />
          <input
            type="text"
            value={carMake}
            onChange={handleMakeChange}
            placeholder="Make (e.g., Toyota)"
            className={styles.carInput}
            onKeyPress={handleKeyPress}
          />
          <input
            type="text"
            value={carModel}
            onChange={handleModelChange}
            placeholder="Model (e.g., Camry)"
            className={styles.carInput}
            onKeyPress={handleKeyPress}
          />
        </div>
        <button
          onClick={handleAddCar}
          className={styles.addButton}
          disabled={!isFormValid}
        >
          Add Car
        </button>
      </div>

      {cars.length > 0 ? (
        <ul className={styles.carList}>
          {cars.map((car, index) => (
            <li key={index} className={styles.carItem}>
              <div className={styles.carInfo}>
                <p className={styles.carDetails}>
                  🚙 {car.year} {car.make} {car.model}
                </p>
                <p className={styles.carSpecs}>
                  Year: {car.year} • Make: {car.make} • Model: {car.model}
                </p>
              </div>
              <button
                onClick={() => handleRemoveCar(index)}
                className={styles.removeButton}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <div className={styles.emptyState}>
          No cars in your collection yet. Add some vehicles above! 🏎️
        </div>
      )}

      {cars.length > 0 && (
        <div className={styles.carCount}>
          {cars.length} car{cars.length !== 1 ? "s" : ""} in your collection
        </div>
      )}
    </div>
  );
}

export default Car;
