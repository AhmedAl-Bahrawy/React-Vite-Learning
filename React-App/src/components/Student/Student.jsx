import styles from './Student.module.css'
import PropTypes from 'prop-types';



function Student(props) {
    // Destructure with default values to ensure defaults work
    const { 
        name = "Guest", 
        age = 0, 
        grade = "none", 
        isStudent = false 
    } = props;
    
    return (
        <div className={styles.student}>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Grade: {grade}</p>
            <p>is Student: {isStudent ? "true" : "false"}</p>
        </div>
    );
}

Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    grade: PropTypes.string,
    isStudent: PropTypes.bool
}

Student.defaultProps = {
    name: "Guest",
    age: 0,
    grade: "none",
    isStudent: false,
}

export default Student;

//