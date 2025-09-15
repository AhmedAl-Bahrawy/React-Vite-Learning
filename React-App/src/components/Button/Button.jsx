import styles from './Button.module.css'


function Button(props) {
    const {text = "Click Me", onClick} = props;

    return (
        <button onClick={onClick} className={styles.ctaButton}>{text}</button>
    );
}

export default Button;