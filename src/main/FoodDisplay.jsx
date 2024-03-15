import ItemCard from "./ItemCard";
import PropTypes from "prop-types";

const FoodDisplay = ({ foods }) => {
  return (
    <div className="md:w-3/5 w-full grid md:grid-cols-2 grid-cols-1 gap-4">
      {
        foods.map((food, index) => {
          return <ItemCard key={index} food={food} />;
        })
      }
    </div>
  );
};

FoodDisplay.propTypes = {
  foods: PropTypes.array.isRequired,
};

export default FoodDisplay;
