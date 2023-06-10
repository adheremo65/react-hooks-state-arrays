import React, { useState } from "react";
import { spicyFoods, getNewRandomSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);
  const [selected, setSelected] = useState("All");

  function handleAddFood() {
    const newFood = getNewRandomSpicyFood();
    const newFoodAdded = [...foods, newFood];
    setFoods(newFoodAdded);

    // console.log(newFood);
  }
  function handleLiClick(id) {
    const newFoodArray = foods.filter((food) => food.id !== id);
    setFoods(newFoodArray);
  }
  const foodsToDisplay = foods.filter((food) => {
    if (selected === "All") {
      return true;
    } else {
      return food.cuisine === selected;
    }
  });
  const foodList = foodsToDisplay.map((food) => (
    <li key={food.id} onClick={() => handleLiClick(food.id)}>
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
  ));

  function handleSelect(e) {
    setSelected(e.target.value);
    console.log(e.target.value);
  }

  return (
    <div>
      <button onClick={handleAddFood}>Add New Food</button>
      <select onChange={handleSelect} name="filter">
        <option value={selected}>{selected}</option>
        <option value="American">American</option>
        <option value="Sichuan">Sichuan</option>
        <option value="Thai">Thai</option>
        <option value="Mexican">Mexican</option>
      </select>
      <ul>{foodList}</ul>
    </div>
  );
}

export default SpicyFoodList;
