import React from "react";
import PropTypes from "prop-types";

function About({ About }) {
  return <p>{About}</p>;
}

About.propTypes = {
  About: PropTypes.string.isRequired,
};
export default About;
