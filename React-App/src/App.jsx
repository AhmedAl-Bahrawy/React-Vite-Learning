import styles from './App.module.css'
import Student from './components/Student/Student.jsx'

function App() {
  return (
    <div className={styles.app}>
      <Student name="Ahmed Albahrawy" age={15} grade="A" isStudent={true}></Student>
      <Student name="Ahmed Samir" age={14} isStudent={true}></Student>
      <Student/>
    </div>
    
  )
}

export default App;