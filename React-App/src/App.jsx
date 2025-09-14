import styles from './App.module.css'
import Greeting from './components/Greeting/Greeting';

function App() {
  return (
    <div className={styles.app}>
      <Greeting isLoggedIn={true} name="Ahmed" />
    </div>
    
  )
}

export default App;