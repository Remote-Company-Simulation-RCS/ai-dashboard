import React from "react";
import { MdOutlineModeEdit } from "react-icons/md";
import Button from "./Button";
import "../styles/components/customer.css";

const CustomerSecurity = () => {
  return (
    <div className="customer-details mb-3 w-100 px-4 rounded-5">
      <div className="d-flex align-items-center justify-content-between">
        <h2 className="fs-5 fw-bold">Security</h2>
        <MdOutlineModeEdit className="p-2 rounded-5 bg-blue-icon" />
      </div>
      <div className="details-item">
        <span className="label text-secondary">2FA</span>
        <span className="value">Enabled</span>
      </div>
      <div className="details-item">
        <span className="label text-secondary">Method</span>
        <span className="value">SMS</span>
      </div>
          <Button className="bg-blue-icon w-100 h-auto py-3 rounded-5 fw-bold">Change Password</Button>
    </div>
  );
};

export default CustomerSecurity;
