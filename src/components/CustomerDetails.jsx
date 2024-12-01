import React from "react";
import { MdOutlineModeEdit } from "react-icons/md";
import "../styles/pages/profilePage.css";

const CustomerDetails = () => {
  return (
    <div className="customer-details w-25 mb-4 px-4 rounded-5">
      <div className="d-flex align-items-center justify-content-between">
        <h2 className="fs-5 fw-bold">Customer Details</h2>
        <MdOutlineModeEdit className="p-2 rounded-5 bg-blue-icon" />
      </div>
      <div className="details-item">
        <span className="label text-secondary">Email:</span>
        <span className="value text-orange">mail@company.com</span>
      </div>
      <div className="details-item">
        <span className="label text-secondary">Phone Number:</span>
        <span className="value text-orange">(220) 895-0908</span>
      </div>
      <div className="details-item">
        <span className="label text-secondary">Date of Birth:</span>
        <span className="value">12/05/1994</span>
      </div>
      <div className="details-item">
        <span className="label text-secondary">Company:</span>
        <span className="value">Quickit</span>
      </div>
    </div>
  );
};

export default CustomerDetails;
