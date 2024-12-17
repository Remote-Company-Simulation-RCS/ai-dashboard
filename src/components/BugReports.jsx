import React from "react";
import Button from "./Button";
import { SlPaperPlane } from "react-icons/sl";
import "../styles/components/bugReports.css";

function BugReports() {
  return (
    <div className="bug-reports p-4 rounded-5 mt-3">
      <h3 className="fs-5 fw-bold">Do you find some bug?</h3>
      <p className="text-secondary">Leave your feedback about Quckit</p>
      <Button className="py-3 w-100 blue bg-primary text-white border-0 rounded-5">
        <SlPaperPlane /> Create a ticket
      </Button>
    </div>
  );
}

export default BugReports;
