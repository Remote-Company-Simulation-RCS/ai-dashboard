import React from "react";
import { Slider } from "@mui/material";
import "../styles/components/subSlider.css";

const SliderComponent = () => {
  return (
    <div className="slider-container mt-5">
      <h2 className="title-slider">Upgrade monthly requests limit</h2>
      <Slider
        className="slider-input"
        aria-label="Always visible"
        defaultValue={12000}
        valueLabelDisplay="on"
        step={10}
        min={1000}
        max={40000}
        variant="solid"
        sx={{
          color: "primary.main",
          height: 8,
          "& .MuiSlider-track": {
            border: "none",
            backgroundColor: "primary.main",
          },
          "--Slider-trackSize": "10px",
          "--Slider-markSize": "15px",
          "--Slider-thumbSize": "30px",
          "--Slider-valueLabelArrowSize": "20px",
        }}
      />
      <span className="value d-flex justify-content-between">
        <p>1000</p>
        <p>40000</p>
      </span>
    </div>
  );
};

export default SliderComponent;
