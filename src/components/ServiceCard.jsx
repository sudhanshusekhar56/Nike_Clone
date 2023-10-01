const ServiceCard = ({ imgURL, label, subtext }) => {
  return (
    <div>
      <img src={imgURL} alt={label} />
      <div>{subtext}</div>
      <div>{label}</div>
    </div>
  );
};

export default ServiceCard;
