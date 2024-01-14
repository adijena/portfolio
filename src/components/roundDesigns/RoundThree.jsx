import React from "react";

const RoundThree = () => {
  return (
    <div className="w-96 h-96 rounded-full absolute top-72 left-72">
      <div className="w-full h-full relative animate-reverse-spin">
      <div className="w-16 h-16 rounded-full bg-green-600 absolute top-32 left-36 blur-2xl"></div>
        <div className="w-16 h-16 rounded-full bg-red-600 absolute top-0 blur-xl"></div>
        <div className="w-24 h-24 rounded-full bg-orange-600 absolute -bottom-10 left-16 blur-xl"></div>
        <div className="w-16 h-16 rounded-full bg-blue-600 absolute top-32 -right-10 blur-2xl"></div>
      </div>
    </div>
  );
};

export default RoundThree;
