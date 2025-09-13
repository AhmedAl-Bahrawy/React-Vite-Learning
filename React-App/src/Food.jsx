import './Food.css'

function Food() {
    const food = ['Apple', 'Banana', 'Orange', 'Mango', 'Pineapple', 'Watermelon'];
    return (
        <div className="content">
            <ul>
                {food.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

export default Food;