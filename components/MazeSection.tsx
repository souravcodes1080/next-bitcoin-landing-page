import React from "react";

function MazeSection() {
  return (
    <div>
      <div className='w-[90%] mx-auto rounded-3xl bg-[url("/images/maze.png")] h-[85vh] bg-center bg-no-repeat bg-cover mb-20'>
        <h1 className="text-center font-semibold sm:text-4xl text-2xl pt-15 ">
          Experience Freedom
        </h1>
        <p className="text-center text-base pt-5 pb-1">
          Borrow, earn, and spend without selling a single sat.
        </p>
        <p className="text-center text-base">Just Bitcoin, working for you.</p>
        <p className="text-center text-base py-1">No banks. No middlemen.</p>
        <div className="flex justify-center">
          <button className=" sm:px-9 sm:py-4 px-5 py-3 mt-4 bg-black rounded-3xl text-white text-xl font-semibold cursor-pointer hover:bg-pink-700 transition-all duration-200 ">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default MazeSection;
