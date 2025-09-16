import styles from "./App.module.css";
import OnChange from "./components/OnChange/OnChange";
import OnClick from "./components/OnClick/OnClick";
import Quantity from "./components/Quantity/Quantity";
import Payment from "./components/Payment/Payment";
import Shipping from "./components/Shipping/Shipping";
import ColorPicker from "./components/ColorPicker/ColorPicker";

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.header}>
        <h1 className={styles.title}>React Event Handlers Demo</h1>
        <p className={styles.subtitle}>
          Interactive components showcasing different React event handling
          patterns
        </p>
      </div>
      <div className={styles.components}>
        <OnChange />
        <OnClick />
        <Quantity />
        <Payment />
        <Shipping />
        <ColorPicker />
      </div>
    </div>
  );
}

export default App;
