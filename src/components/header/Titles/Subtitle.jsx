import React from "react";
import PropTypes from "prop-types";

function Subtitle({ Title }) {
  return (
    <div className="item">
      <div className="sp-subtitle">
        <h2 className="fir">{Title}</h2>
      </div>
    </div>
  );
}

Subtitle.prototype = {
  Title: PropTypes.string,
};

export default Subtitle;
