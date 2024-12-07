import React from "react";
import Button from "../components/Button";
import { CiCircleQuestion } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import BugReports from "../components/BugReports";
import CountriesStats from "../components/CountriesStats";

function DashboardRight() {
  const navigate = useNavigate();

  function handleSubscription() {
    navigate("/subscription");
  }

  return (
    <div className="dashboard-right">
      <Button
        type="submit"
        className="btn buttons text-start py-3 px-5 rounded-pill"
        onClick={handleSubscription}
        children={
          <div className="d-flex flex-row py-2 px-2 gap-2">
            <p className="fw-bold mb-0">
              Upgrade to{" "}
              <span className="text-primary">
                Pro Subscription{" "}
                <CiCircleQuestion size={15} className="text-secondary" />
              </span>
            </p>
          </div>
        }
      />
      <BugReports />
      <CountriesStats />
    </div>
  );
}

export default DashboardRight;
