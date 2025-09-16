import styles from "./App.module.css";
import Food from "./components/Food/Food";
import Car from "./components/Car/Car";

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.header}>
        <h1 className={styles.title}>React Array Handlers Demo</h1>
        <p className={styles.subtitle}>
          Interactive components showcasing different React array handling
          patterns
        </p>
      </div>
      <div className={styles.components}>
        <Car></Car>
        <Food></Food>
      </div>
    </div>
  );
}

export default App;
