import PropTypes from "prop-types";

const ItemCard = ({ food,addToTableToCook }) => {
  const {
    name,
    image,
    short_description,
    ingredients,
    preparing_time,
    calories,
  } = food;
  return (
    <div className="card bg-base-100 shadow-xl border p-3 space-y-2 mt-5">
      <figure>
        <img src={image} alt="food" className="md:h-44 h-full w-full" />
      </figure>
      <div className="card-body  space-y-1 p-3">
        <h2 className="card-title">{name}</h2>
        <p>{short_description}</p>
        <h2 className="font-bold">Ingredients: {ingredients.length}</h2>
        <ul className="list-disc pl-7">
          {ingredients.slice(0,3).map((ingredient, index) => {
            return <li key={index}>{ingredient}</li>;
          })}
        </ul>
        <div className="flex justify-between">
          <div className="flex gap-3 items-center">
            <i className="fa-regular fa-clock"></i>
            <p>{preparing_time} minutes</p>
          </div>
          <div className="flex gap-3 items-center">
            <i className="fa-solid fa-fire-flame-curved"></i>
            <p>{calories} calories</p>
          </div>
        </div>
        <div className="card-actions ">
          <button 
          className="btn bg-[#0BE58A] outline-none border-none  rounded-lg"
          onClick={()=>addToTableToCook(food)}
          >
            Want to Cook
          </button>
        </div>
      </div>
    </div>
  );
};
ItemCard.propTypes = {
  food: PropTypes.object.isRequired,
  addToTableToCook: PropTypes.func.isRequired,
};

export default ItemCard;
