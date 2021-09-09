import React from "react";
import PropTypes from "prop-types";

function PersonName({ PName }) {
  return <h1>{PName}</h1>;
}

PersonName.prototype = {
  PName: PropTypes.string.isRequired,
};

export default PersonName;
