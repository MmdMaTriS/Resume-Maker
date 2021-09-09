import React from "react";
import PropTypes from "prop-types";

function Description({ Description }) {
  return (
    <React.Fragment>
      <div className="item">
        {Description.map(({ desText }) => {
          return <div className="sp-subtitle">{desText}</div>;
        })}
      </div>
    </React.Fragment>
  );
}

Description.propTypes = {
  Description: PropTypes.string.isRequired,
};

export default Description;
