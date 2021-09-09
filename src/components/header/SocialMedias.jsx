import React from "react";
import PropTypes from "prop-types";

function SocialMedias({ Links }) {
  return (
    <>
      {Links.map(({ name, link }) => {
        return (
          <a href={link} target="_blank">
            <i className={`fa fa-${name}`}></i>
          </a>
        );
      })}
    </>
  );
}

SocialMedias.PropTypes = {
  Links: PropTypes.arrayOf([
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    }),
  ]),
};

export default SocialMedias;
