const FoodTable = () => {
  return (
    <div className="md:w-2/5 w-full p-3 mt-5">
      <h1 className="font-bold text-2xl text-center pb-3 border-b">
        Want to cook: 01
      </h1>
      <table className="w-full mt-2">
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
          <tr className=" text-left">
            <td className="p-1">1</td>
            <td className="p-1">Chicken Caesar Salad</td>
            <td className="p-1">20 minutes</td>
            <td className="p-1">400 calories</td>
            <td className="p-1">
              {" "}
              <button className="btn bg-[#0BE58A] outline-none border-none  rounded-full">
                Preparing
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <h1 className="font-bold text-2xl text-center pb-3 border-b">
        Currently cooking: 02
      </h1>
      <table className="w-full mt-2">
        <thead>
          <tr className="font-bold text-left">
            <td></td>
            <td>Name</td>
            <td>Time</td>
            <td>Calories</td>
          </tr>
        </thead>
        <tbody>
          <tr className=" text-left">
            <td className="p-1">1</td>
            <td className="p-1">Chicken Caesar Salad</td>
            <td className="p-1">20 minutes</td>
            <td className="p-1">400 calories</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default FoodTable;
