const Navber = () => {
  return (
    <div className="navbar bg-base-100 container m-auto flex justify-between w-full mt-2">
      <div className="">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              {" "}
              <a className="text-[#150B2Bb3] font-semibold">Home</a>
            </li>
            <li>
              {" "}
              <a className="text-[#150B2Bb3] font-semibold">Recipes</a>
            </li>
            <li>
              {" "}
              <a className="text-[#150B2Bb3] font-semibold">About</a>
            </li>
            <li>
              {" "}
              <a className="text-[#150B2Bb3] font-semibold">Search</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost md:text-3xl text-xl font-bold ">Chefs Palette</a>
      </div>
      <div className=" hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            {" "}
            <a className="text-[#150B2Bb3] font-semibold">Home</a>
          </li>
          <li>
            {" "}
            <a className="text-[#150B2Bb3] font-semibold">Recipes</a>
          </li>
          <li>
            {" "}
            <a className="text-[#150B2Bb3] font-semibold">About</a>
          </li>
          <li>
            {" "}
            <a className="text-[#150B2Bb3] font-semibold">Search</a>
          </li>
        </ul>
      </div>
      <div className=" space-x-2 ">
        <div className=" bg-[#d2d2d24b] text-black md:w-auto flex rounded-full px-4 items-center">
          <i className="text-[#150B2Bb3] fa-solid fa-magnifying-glass text-2xl"></i>
          <input
            type="text"
            placeholder="Search"
            className=" outline-none p-3 w-20  md:w-40 bg-transparent "
          />
        </div>
        <a className="bg-[#0BE58A] text-black rounded-full p-2">
          <i className="fa-regular fa-user border md:p-2 p-1 rounded-full border-black "></i>
        </a>
      </div>
    </div>
  );
};

export default Navber;
