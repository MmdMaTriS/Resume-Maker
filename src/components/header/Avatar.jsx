import React from "react";

function Avatar({ Source, Alt }) {
  return (
    <div className="photo">
      <img src={Source} alt={Alt} />
    </div>
  );
}

export default Avatar;
