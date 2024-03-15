import { useState } from "react";
import FoodDisplay from "./FoodDisplay";
import FoodTable from "./FoodTable";
import { useEffect } from "react";

const AllFoods = () => {
  const [foods, setFoods] = useState([]);
  useEffect(()=>{
    fetch('./foods.json')
    .then(res => res.json())
    .then(data => setFoods(data))
  } ,[])

  return (
    <div className="container mt-5 md:flex flex-col md:flex-row m-auto">
      <FoodDisplay foods={foods}></FoodDisplay>
      <FoodTable></FoodTable>
    </div>
  );
};

export default AllFoods;
