import React, { useState } from "react";

export default function SubCard(props) {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div
      className={`sub-card ${
        isActive ? "sub-active" : ""
      } d-flex gap-3 justify-content-start align-items-center mb-4`}
      onClick={handleClick}
    >
      <div className="sub-card-image d-flex justify-content-center align-items-center">
        {props.subIcon}
      </div>
      <div className="sub-card-text d-flex flex-column justify-content-center ">
        <h6 className="tarif-title">{props.title}</h6>
        <h3 className="tarif-text fw-bold">{props.text}</h3>
      </div>
    </div>
  );
}
