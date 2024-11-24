import React from "react";
import Button from "./Button";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

function SubCard(props) {
  return (
    <div className="sub-card rounded-5 bg-white">
      <h3 className="plan-name py-4 px-3 bg-body-secondary border-bottom border-dark fs-6 fw-bolder">{props.plan}</h3>
      <div className="price px-3 py-2 fs-2">
        ${props.price}
        <span className="per-month fs-6">/ month</span>
      </div>
      <p className="advantage px-3">{props.advantage}</p>
      <Button type="submit" className="sub-card-btn w-75 p-3 my-4 border-0 bg-subtle rounded-5">{props.icon} {props.buttonlabel}</Button>
      <p className="why-this px-3 py-2">{props.for}</p>
      <ul className="px-3">
        <li className=" nav-link text-decoration-none text-black-50">
          <IoIosCheckmarkCircleOutline className="mx-1 mb-1 fs-5 text-black" />{" "}
          {props.benefit1}
        </li>
        <li className=" nav-link text-decoration-none text-black-50">
          <IoIosCheckmarkCircleOutline className="mx-1 mb-1 fs-5 text-black" />{" "}
          {props.benefit2}
        </li>
        <li className=" nav-link text-decoration-none text-black-50">
          <IoIosCheckmarkCircleOutline className="mx-1 mb-1 fs-5 text-black" />{" "}
          {props.benefit3}
        </li>
        <li className=" nav-link text-decoration-none text-black-50">
          <IoIosCheckmarkCircleOutline className="mx-1 mb-1 fs-5 text-black" />{" "}
          {props.benefit4}
        </li>
      </ul>
    </div>
  );
}

export default SubCard;
