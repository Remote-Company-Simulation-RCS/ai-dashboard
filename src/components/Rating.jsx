import React, { useState } from "react";
import Button from "./Button.jsx";
import { RiStarSLine } from "react-icons/ri";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import "../styles/components/rating.css";

const Rating = ({ maxStars = 5 }) => {
  const [rating, setRating] = useState(0);

  const handleClick = (value) => {
    setRating(value);
  };

  return (
    <div className="rating d-flex flex-column">
      <h4 className="fs-5 m-0">Did quickit help you?</h4>
      <p className=" m-0">Evaluate AI assistance in your request</p>
      <div
        className="stars d-flex justify-content-between px-2 py-2 rounded-5"
        style={{ fontSize: "10px", display: "flex", gap: "5px" }}
      >
        {Array.from({ length: maxStars }, (_, index) => (
          <span
            key={index}
            style={{
              cursor: "pointer",
              color: index < rating ? "gold" : "gray",
            }}
            onClick={() => handleClick(index + 1)}
          >
            <RiStarSLine className="fs-4" />
          </span>
        ))}
      </div>
      <Button
        type="submit"
        className="button py-3 rounded-5 border-0 bg-primary"
      >
        <IoIosCheckmarkCircleOutline className="mx-1 mb-1 fs-5" />
        Finish & start new chat
      </Button>
    </div>
  );
};

export default Rating;
