import { useState } from "react";
import FoodDisplay from "./FoodDisplay";
import FoodTable from "./FoodTable";
import { useEffect } from "react";

const AllFoods = () => {
  const [foods, setFoods] = useState([]);
  const [cook, setCook] = useState([]);
  const [cooking, setCooking] = useState([]);

  const addToTableToCook = (foodItem) => {
    const isFoodItem = cook.find((item) => item.id === foodItem.id);
    if (!isFoodItem) {
      setCook((cook) => [...cook, foodItem]);
    } else {
      alert("fuck you");
    }
  };
  const removeToTableToCook = (foodItem) => {
    const isFoodItem = cook.find((item) => item.id === foodItem.id);
    if (isFoodItem) {
      const updatedtable = cook.filter((item) => item.id !== foodItem.id);
      setCook(updatedtable);
    } 
    setCooking([...cooking,foodItem])

  };
  


  useEffect(() => {
    fetch("./foods.json")
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, []);

  return (
    <div className="container mt-5 md:flex flex-col md:flex-row m-auto">
      <FoodDisplay
        foods={foods}
        addToTableToCook={addToTableToCook}
        
      ></FoodDisplay>
      <FoodTable cook={cook} removeToTableToCook={removeToTableToCook} cooking={cooking}></FoodTable>
    </div>
  );
};

export default AllFoods;
