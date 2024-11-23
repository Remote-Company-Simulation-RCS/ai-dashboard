import React from "react";
import Button from "./Button";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

function SubCard(props) {
  return (
    <div className="sub-card">
      <h3>{props.plan}</h3>
      <div className="price">
        ${props.price}
        <span className="per-month">/ month</span>
      </div>
      <p className="advantage">{props.advantage}</p>
      <Button type="submit" className="sub-card-btn">
        {props.planChoice}
      </Button>
      <p className="why-this">{props.for}</p>
      <ul>
        <li>
          <IoIosCheckmarkCircleOutline className="mx-1 mb-1 fs-5" />{" "}
          {props.benefit1}
        </li>
        <li>
          <IoIosCheckmarkCircleOutline className="mx-1 mb-1 fs-5" />{" "}
          {props.benefit2}
        </li>
        <li>
          <IoIosCheckmarkCircleOutline className="mx-1 mb-1 fs-5" />{" "}
          {props.benefit3}
        </li>
        <li>
          <IoIosCheckmarkCircleOutline className="mx-1 mb-1 fs-5" />{" "}
          {props.benefit4}
        </li>
      </ul>
    </div>
  );
}

export default SubCard;
