import styles from './Greeting.module.css'



function Greeting(props) {
    const { isLoggedIn = false, name = 'Guest' } = props;

    const welcomeMessage = <h2 className={styles.welcomeMessage}>Hello {name}</h2>
    const loginPrompt = <h2 className={styles.loginPrompt}>Please login to continue</h2>

    return (isLoggedIn ? welcomeMessage : loginPrompt);
  
}


export default Greeting;