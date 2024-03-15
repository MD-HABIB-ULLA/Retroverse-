const Banner = () => {
  return (
    <div
      className="hero md:p-36 py-20 bg-black container m-auto bg-cover rounded-2xl mt-5 "
      style={{
        backgroundImage:
          "url(https://i.postimg.cc/02psx3CZ/Rectangle-1.png)",
      }}
    >
      <div className="hero-content text-center text-neutral-content">
        <div className="md:w-[80%] space-y-4">
          <h1 className=" md:text-5xl text-3xl font-bold">Discover an exceptional cooking class tailored for you!</h1>
          <p className="">
          Explore an array of tantalizing recipes, culinary masterclasses, and exclusive chef interviews. Whether you are a seasoned chef or an aspiring home cook, Culinary Canvas invites you to embark on a flavorful journey, where every dish tells a story and every bite is a masterpiece.
          </p>
          <div className="lg:w-[35%] md:w-[50%] w-[60%] m-auto flex justify-between">
          <button className="btn bg-[#0BE58A] outline-none border-none  rounded-full">Get Started</button>
          <button className="btn bg-transparent outline-none border  rounded-full text-white">Our Feedback</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
