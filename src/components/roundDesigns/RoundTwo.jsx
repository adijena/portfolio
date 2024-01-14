import React from "react";

const RoundTwo = () => {
  return (
    <div className="w-[500px] h-[500px] rounded-full absolute bottom-0 right-32">
      <div className="w-full h-full relative animate-spin-slow">
        <div className="w-16 h-16 rounded-full bg-red-600 absolute top-32 left-36 blur-2xl"></div>
        <div className="w-16 h-16 rounded-full bg-cyan-600 absolute top-0 blur-xl"></div>
        <div className="w-24 h-24 rounded-full bg-orange-600 absolute -bottom-10 left-16 blur-xl"></div>
        <div className="w-16 h-16 rounded-full bg-yellow-600 absolute top-32 -right-10 blur-2xl"></div>
      </div>
    </div>
  );
};

export default RoundTwo;
