import React from "react";

const Button = ({ label, iconUrl }) => {
  return (
    <button className="flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-1 bg-coral-red rounded-full text-white border-coral-red">
      {label}{" "}
      <img
        src={iconUrl}
        alt="Right Arrow"
        className="ml-2 rouded-full h-5 w-5"
      />
    </button>
  );
};

export default Button;
