// Style Guide:
// In this file you can find a reference example of the structure
// and content that the component should render.
// Remember to import Ant Design components before using them.
import { Divider, Input } from 'antd';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';

// Iteration 4
function AddFoodForm({ addFood }) {
  //States
  const [name, setName] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [calories, setCalories] = useState(0);
  const [servings, setServings] = useState(0);

  // handle functions for each state

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleImageUrl = (e) => {
    setImageUrl(e.target.value);
  };
  const handleCalories = (e) => {
    setCalories(e.target.value);
  };
  const handleServings = (e) => {
    setServings(e.target.value);
  };

  const handleAddFood = (e) => {
    e.preventDefault();
    const id = uuidv4();
    const newFood = { id, name, imageUrl, calories, servings };
    console.log('submited', newFood);
    addFood(newFood);
    setName('');
    setImageUrl('');
    setCalories(0);
    setServings(0);
  };

  return (
    <form onSubmit={handleAddFood}>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input value={name} type="text" onChange={handleName} />

      <label>Image</label>
      <Input value={imageUrl} type="text" onChange={handleImageUrl} />

      <label>Calories</label>
      <Input value={calories} type="number" onChange={handleCalories} />

      <label>Servings</label>
      <Input value={servings} type="number" onChange={handleServings} />

      <button type="submit">Create</button>
    </form>
  );
}

export default AddFoodForm;
