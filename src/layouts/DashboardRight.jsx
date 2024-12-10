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
    <div className="dashboard-right d-flex flex-column justify-content-between d-none d-xl-block">
      <Button
        type="submit"
        className="btn buttons text-start w-100 py-3 px-4 rounded-pill "
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
      <div className="d-flex flex-column justify-content-between gap-4">
      <BugReports />
      <CountriesStats />
      </div>
    </div>
  );
}

export default DashboardRight;
