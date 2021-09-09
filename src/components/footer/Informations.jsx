import React from "react";
import PropTypes from "prop-types";

function Information({ Info }) {
  return (
    <>
      {Info.map(({ title, value }) => {
        if (title !== "E-mail") {
          return (
            <li>
              <span className="title">{title}</span>
              <span className="value">{value}</span>
            </li>
          );
        } else {
          return (
            <li>
              <span className="title">{title}</span>
              <span className="value">
                <a href={`mailto:${value}`}>{value}</a>
              </span>
            </li>
          );
        }
      })}
    </>
  );
}

Information.propTypes = {
  Info: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
    })
  ),
};

export default Information;
