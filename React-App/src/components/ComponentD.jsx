import styles from './Component.module.css'

function ComponentD(props) {
    return (
        <div className={styles.box}>
            <h1>CompnentD</h1>
            <h2>{`Bye ${props.user}`}</h2>
        </div>
    )
}

export default ComponentD