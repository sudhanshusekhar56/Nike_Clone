import React from "react";
const ServiceCard = ({ imgURL, label, subtext }) => {
  return (
    <div>
      <img src={imgURL} alt={label} /> {/* Display the imgURL as an image */}
      <div>{subtext}</div> {/* Display the subtext */}
      <div>{label}</div> {/* Display the label */}
    </div>
  );
};

export default ServiceCard;
