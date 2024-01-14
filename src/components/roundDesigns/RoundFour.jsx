import React from "react";

const RoundFour = () => {
  return (
    <div className="w-[800px] h-[800px] rounded-full absolute top-0 left-1/3">
      <div className="w-full h-full relative animate-reverse-spin">
        <div className="w-16 h-16 rounded-full bg-amber-600 absolute top-32 left-36 blur-2xl"></div>
        <div className="w-16 h-16 rounded-full bg-red-600 absolute top-0 blur-xl"></div>
        <div className="w-24 h-24 rounded-full bg-pink-600 absolute -bottom-10 left-16 blur-xl"></div>
        <div className="w-16 h-16 rounded-full bg-fuchsia-600 absolute top-32 -right-10 blur-2xl"></div>
      </div>
    </div>
  );
};

export default RoundFour;
