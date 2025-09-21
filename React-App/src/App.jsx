import styles from "./App.module.css";
import ComponentA from "./components/ComponentA"



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
        <ComponentA />

      </div>
    </div>
  );
}

export default App;
