import styles from './Button.module.css'

function Button(props) {
  const { text = "Click Me" } = props;
  let count = 0;


  const HandleClick = () => {
    console.log("Button Clicked");
  };

  const HandleClick2 = (name) => {
    console.log(`Button Clicked ${name}`);
  };
  
  const HandleClick3 = () => {
    if (count < 3) {
      count++;
      console.log(`aButton Clicked ${count}`);
    }
    else {
      count = 0;
      console.log(`Stop clicking me`);
    }
  };

  const HandleClick4 = (e) => {
    e.target.textContent = e.target.textContent === "Click Me" ? "Clicked" : "Click Me";

  };

  return (
    <button className={styles.ctaButton} onClick={(e) => HandleClick4(e)}>
      {text}
    </button>
  );
}

export default Button;