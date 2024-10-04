import React from "react";

const HeroPage = ({ children }) => {
  return (
    <div className="relative flex flex-col items-center justify-center w-[90%] mx-auto ">
      {children}
    </div>
  );
};

export default HeroPage;
