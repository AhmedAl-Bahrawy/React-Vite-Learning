import styles from "./App.module.css";
import UseEffect from "./components/UseEffect/UseEffect";


function App() {
  return (
    <div className={styles.app}>
      <div className={styles.header}>
        <h1 className={styles.title}>React useEffect Handlers Demo</h1>
        <p className={styles.subtitle}>
          Interactive components showcasing different React useEffect handling
          patterns
        </p>
      </div>
      <div className={styles.components}>
        <UseEffect />
      </div>
    </div>
  );
}

export default App;
