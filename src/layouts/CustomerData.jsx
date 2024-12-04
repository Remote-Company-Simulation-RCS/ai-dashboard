import React from "react";
import CustomerDetails from "../components/CustomerDetails";
import CustomerSecurity from "../components/CustomerSecurity";
import "../styles/components/customer.css";

const CustomerData = ({ col }) => {
  return (
    <div className={`customer-info mb-3 ${col}`}>
      <CustomerDetails />
      <CustomerSecurity />
    </div>
  );
};

export default CustomerData;
