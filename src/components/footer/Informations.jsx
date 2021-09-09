import React from "react";

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

export default Information;
