import styles from './App.module.css'
import List from './components/List/List'


function App() {

  const fruits = [
        { id: 1, name: 'Apple', calories: 100 }
        ,{ id: 2, name: 'Banana', calories: 200 }
        , { id: 3, name: 'Orange', calories: 300 }
        , { id: 4, name: 'Mango', calories: 400 }
        , { id: 5, name: 'Pineapple', calories: 500 }
        , { id: 6, name: 'Strawberry', calories: 600 }
        , { id: 7, name: 'Watermelon', calories: 700 }
        , { id: 8, name: 'Grapes', calories: 800 }
        , { id: 9, name: 'Kiwi', calories: 900 }
        , { id: 10, name: 'Peach', calories: 1000 }
  ];

  const vegetables = [
    { id: 11, name: 'Carrot', calories: 100 }
    ,{ id: 12, name: 'Broccoli', calories: 200 }
    , { id: 13, name: 'Spinach', calories: 300 }
    , { id: 14, name: 'Cabbage', calories: 400 }
    , { id: 15, name: 'Lettuce', calories: 500 }
    , { id: 16, name: 'Tomato', calories: 600 }
    , { id: 17, name: 'Cucumber', calories: 700 }
    , { id: 18, name: 'Bell Pepper', calories: 800 }
    , { id: 19, name: 'Onion', calories: 900 }
    , { id: 20, name: 'Garlic', calories: 1000 }
  ];
  
  return (
    <div className={styles.app}>
      <List itemList={fruits} category='Fruits'></List>
      <List itemList={vegetables} category='Vegetables'></List>
    </div>
    
  )
}

export default App;