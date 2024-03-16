import PropTypes from "prop-types";
import { useState } from "react";

const FoodTable = ({ cook, removeToTableToCook, cooking }) => {
  const [totalCalories, setTotalCalories] = useState(0);
  const [totalTime, settotalTime] = useState(0);
  // const { name, preparing_time, calories } = cook;
  console.log;
  return (
    <div className="md:w-2/5 w-full p-3 mt-5">
      <h1 className="font-bold text-2xl text-center pb-3 border-b">
        Want to cook: 0{cook.length}
      </h1>
      <table className="w-full ">
        <thead>
          <tr className="font-bold text-left">
            <td></td>
            <td>Name</td>
            <td>Time</td>
            <td>Calories</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {cook.map((data, index) => {
            return (
              <tr key={index} className="text-left">
                <td className="p-1">{index + 1}</td>
                <td className="p-1">{data.name}</td>
                <td className="p-1">{data.preparing_time} minutes</td>
                <td className="p-1">{data.calories} calories</td>
                <td className="p-1">
                  <button
                    className="btn bg-[#0BE58A] outline-none border-none rounded-lg"
                    onClick={() => {
                      removeToTableToCook(data);
                      setTotalCalories(
                        (totalCalories) => totalCalories + data.calories
                      );
                      settotalTime(
                        (totalTime) => totalTime + data.preparing_time
                      );
                    }}
                  >
                    Preparing
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <h1 className="font-bold text-2xl text-center pb-3 border-b mt-5">
        Currently cooking: 0{cooking.length}
      </h1>
      <table className="w-full ">
        <thead>
          <tr className="font-bold text-left">
            <td></td>
            <td>Name</td>
            <td>Time</td>
            <td>Calories</td>
          </tr>
        </thead>
        <tbody>
          {cooking.map((data, index) => {
            return (
              <tr key={index} className="text-left">
                <td className="p-1">{index + 1}</td>
                <td className="p-1">{data.name}</td>
                <td className="p-1">{data.preparing_time} minutes</td>
                <td className="p-1">{data.calories} calories</td>
              </tr>
            );
          })}
          
          <tr className={`text-left w-full ${totalTime === 0 ? "hidden" : ""}`}>
            <td className="p-1"></td>
            <td className="p-1"></td>
            <td className="p-1">
              Total Time = <br />
              {totalTime} minutes
            </td>
            <td className="p-1">
              Total Calories <br /> = {totalCalories} calories
            </td>
          </tr>
          
        </tbody>
      </table>
    </div>
  );
};
FoodTable.propTypes = {
  cook: PropTypes.array.isRequired,
  cooking: PropTypes.array.isRequired,
  removeToTableToCook: PropTypes.func.isRequired,
};
export default FoodTable;
