import React from "react";
import CustomerDetails from "../components/CustomerDetails";
import CustomerSecurity from "../components/CustomerSecurity";
import "../styles/components/customer.css";

const CustomerData = () => {
  return (
    <div className="customer-info">
      <CustomerDetails />
      <CustomerSecurity />
    </div>
  );
};

export default CustomerData;
