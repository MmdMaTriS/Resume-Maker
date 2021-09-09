import React from "react";

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

export default Description;
