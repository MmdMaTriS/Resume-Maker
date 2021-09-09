import React from "react";

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

export default SocialMedias;
