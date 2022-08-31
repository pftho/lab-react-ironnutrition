import './App.css';
import foods from './foods.json';
import { useState } from 'react';
import { Row, Divider, Button } from 'antd';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import { v4 as uuidv4 } from 'uuid';

const NewData = foods.map(({ name, calories, image, servings }) => {
  return { name, calories, servings, image, id: uuidv4() };
});

function App() {
  // state
  const [food, setFood] = useState(NewData);

  // handle functions
  const handleAddFood = (newFood) => {
    const foodCopy = [...food, newFood];
    setFood(foodCopy);
  };

  const handleDelete = (id) => {
    const foodCopy = [...food];
    const newFoodList = foodCopy.filter((foodItem) => foodItem.id !== id);
    console.log(newFoodList);
    setFood(newFoodList);
  };

  return (
    <div className="App">
      <AddFoodForm addFood={handleAddFood} />

      <Button> Hide Form / Add New Food </Button>

      <Divider>Food List</Divider>
      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {food.map((foodItem) => {
          return (
            <FoodBox
              key={uuidv4()}
              foods={foodItem}
              handleDelete={handleDelete}
            />
          );
        })}
      </Row>
    </div>
  );
}
export default App;
