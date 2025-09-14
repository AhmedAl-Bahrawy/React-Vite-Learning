import styles from './List.module.css'
import PropTypes from 'prop-types'

function List(props) {
    const { itemList = [{ id: 0, name: 'None', calories: 0 }], category = "None" } = props;
    
    // Sort the items by name (don't mutate original array)
    const sortedItems = [...itemList].sort((a, b) => a.name.localeCompare(b.name));
    
    const listItems = sortedItems.map((item) => (
        <li key={item.id}>
            Name: {item.name}, Calories: {item.calories}
        </li>
    ));
    
    return (
        <div className={styles.container}>
            <h2>{category} List</h2>
            <ul className={styles.list}>
                {listItems}
            </ul>
        </div>
    );
}

List.propTypes = {
    itemList: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            calories: PropTypes.number.isRequired
        })
    ),
    category: PropTypes.string
}

export default List;