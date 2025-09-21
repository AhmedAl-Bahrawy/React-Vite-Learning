import styles from "./App.module.css";
import Clock from "./components/Clock/Clock";



function App() {
  return (
    <div className={styles.app}>
      <div className={styles.header}>
        <h1 className={styles.title}>React Clock Demo</h1>
        <p className={styles.subtitle}>
          Interactive components showcases
        </p>
      </div>
      <div className={styles.components}>
        <Clock/>
      </div>
    </div>
  );
}

export default App;
