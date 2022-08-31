// Style Guide:
// In this file you can find a reference example of the structure
// and content that the component should render.
// Remember to import Ant Design components before using them.
import { Card, Col, Button } from 'antd';

// Iteration 2
function FoodBox({ foods }) {
  return (
    <Col>
      <Card title={foods.name} style={{ width: 230, height: 300, margin: 10 }}>
        <img src={foods.image} height={60} alt="food" />
        <p>Calories: {foods.calories}</p>
        <p>Servings:{foods.servings}</p>
        <p>
          <b>Total Calories: {foods.calories * foods.servings} </b> kcal
        </p>
        <Button type="primary"> Delete </Button>
      </Card>
    </Col>
  );
}

export default FoodBox;
