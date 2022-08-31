import './App.css';
import foods from './foods.json';
import { useState } from 'react';
import { Row, Divider, Button } from 'antd';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import { v4 as uuidv4 } from 'uuid';

function App() {
  // state
  const [food, setFood] = useState(foods);

  // handle functions
  const handleAddFood = (newFood) => {
    const foodCopy = [...food, newFood];
    setFood(foodCopy);
  };

  return (
    <div className="App">
      <AddFoodForm addFood={handleAddFood} />

      <Divider>Food List</Divider>
      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {food.map((foodItem) => {
          return <FoodBox key={uuidv4()} foods={foodItem} />;
        })}
      </Row>
    </div>
  );
}
export default App;
