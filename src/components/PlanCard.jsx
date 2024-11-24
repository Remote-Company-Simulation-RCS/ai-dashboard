import React from "react";
import Button from "./Button";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

function PlanCard(props) {
  return (
    <div className="plan-card rounded-5">
      <h3 className="plan-name py-4 px-3 border-bottom border-dark fs-6 fw-bolder">
        {props.plan}
      </h3>
      <div className="bottom-card">
        <div className="price px-3 py-2 fs-2">
          ${props.price}
          <span className="per-month fs-6">/ month</span>
        </div>
        <p className="advantage px-3">{props.advantage}</p>
        <Button
          type="submit"
          className="plan-card-btn w-75 p-3 my-4 border-0 rounded-5 fw-bold"
          style={props.btnStyle}
        >
          {props.icon} {props.buttonlabel}
        </Button>
        <p className="why-this px-3 py-2">{props.for}</p>
        <ul className="px-3">
          <li className="nav-link text-decoration-none">
            <IoIosCheckmarkCircleOutline className="checkm-icon mx-1 mb-1 fs-5" />{" "}
            {props.benefit1}
          </li>
          <li className="nav-link text-decoration-none">
            <IoIosCheckmarkCircleOutline className="checkm-icon mx-1 mb-1 fs-5" />{" "}
            {props.benefit2}
          </li>
          <li className="nav-link text-decoration-none">
            <IoIosCheckmarkCircleOutline className="checkm-icon mx-1 mb-1 fs-5" />{" "}
            {props.benefit3}
          </li>
          <li className="nav-link text-decoration-none">
            <IoIosCheckmarkCircleOutline className="checkm-icon mx-1 mb-1 fs-5" />{" "}
            {props.benefit4}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default PlanCard;
