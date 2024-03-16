import ItemCard from "./ItemCard";
import PropTypes from "prop-types";

const FoodDisplay = ({ foods, addToTableToCook }) => {
  return (
    <div className="md:w-3/5 w-full grid md:grid-cols-2 grid-cols-1 gap-4">
      {foods.map((food, index) => {
        return <ItemCard key={index} food={food} addToTableToCook={addToTableToCook}  />;
      })}
    </div>
  );
};

FoodDisplay.propTypes = {
  foods: PropTypes.array.isRequired,
  addToTableToCook: PropTypes.func.isRequired,

};

export default FoodDisplay;
