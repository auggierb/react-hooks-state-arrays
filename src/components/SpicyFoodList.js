import React, { useState } from "react";
import { spicyFoods, getNewSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);
const foodList= foods.map((food=><li key={food.id} onClick={()=>handleClick(food.id)}>{food.name}  Heat: {food.heatLevel} Cusine: {food.cuisine}</li>))
  function handleAddFood() {
    const newFood = getNewSpicyFood();
   const newFoodArray=[...foods, newFood]
   setFoods(newFoodArray);
  }
function handleLiClick(id){
  const newFoodArray = foods.map((food)=>{if(food.id ===id){
    return{
      ...food,
      heatLevel: food.heatLevel + 1,
    }}
    else{ return food}
  }
  )};
setFoods(newFoodArray)

  return (
    <div>
      <button onClick={handleLiClick}>Add New Food</button>
      <ul>{foodList}</ul>
    </div>
  );
  }

export default SpicyFoodList;
