import React from "react";
import PropTypes from "prop-types";

function Avatar({ Source, Alt }) {
  return (
    <div className="photo">
      <img src={Source} alt={Alt} />
    </div>
  );
}

Avatar.prototype = {
  Source: PropTypes.string.isRequired,
  Alt: PropTypes.string.isRequired,
};

export default Avatar;
