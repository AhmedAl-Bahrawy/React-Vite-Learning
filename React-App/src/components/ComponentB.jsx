import styles from './Component.module.css'
import ComponentC from "../components/ComponentC"


function ComponentB(props) {
    return (
        <div className={styles.box}>
            <h1>CompnentB</h1>
            <ComponentC user={props.user } />
                
        </div>
    )
}

export default ComponentB