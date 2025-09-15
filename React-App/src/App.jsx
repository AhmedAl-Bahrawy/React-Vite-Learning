import styles from './App.module.css'
import Button from './components/Button/Button';
import ProfilePicture from './components/ProfilePicture/ProfilePicture';

function App() {

  
  return (
    <div className={styles.app}>
      <Button text="Hee Me"></Button>
      <ProfilePicture></ProfilePicture>
    </div>
    
  );
}

export default App;