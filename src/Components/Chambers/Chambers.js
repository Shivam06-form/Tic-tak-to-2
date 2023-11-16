import React from "react";


const Chambers = ({ value, onClick, className }) => {

  return (
    <button type="button" className={`square ${className}`}
      onClick={onClick}
    >{value}</button>

  );
};

export default Chambers;
