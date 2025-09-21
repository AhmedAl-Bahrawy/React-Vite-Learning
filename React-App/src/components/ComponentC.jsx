import styles from './Component.module.css'
import ComponentD from "../components/ComponentD"

function ComponentC(props) {
    return (
        <div className={styles.box}>
            <h1>CompnentC</h1>
            <ComponentD user={props.user} />
        </div>
    )
}

export default ComponentC