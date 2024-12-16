import React from "react";
import { HiAnnotation } from "react-icons/hi";
import PlanCard from "../components/PlanCard";
import Button from "../components/Button";
import "../styles/components/planCards.css";

function PlanCards() {
  return (
    <div className="plan-cards d-flex flex-wrap justify-content-around mx-3 mt-5">
      <PlanCard
        plan="Free Plan"
        price={"Free"}
        advantage="1 user, billed annually"
        for="For Personal Use"
        benefit1="Only 1 user"
        benefit2="Monthly limit of 10 requests"
        benefit3="Only the Base Model"
        benefit4="Phone and email support"
        button={
          <Button
            type="submit"
            className="plan-card-btn light w-75 p-3 my-4 border-0 rounded-5 fw-bold"
          >
            Current Plan
          </Button>
        }
      />
      <PlanCard
        plan="Pro Plan"
        price={`$ 99 `}
        perMonth="/ month"
        planClass="plan-name-pro"
        advantage="up to 5 users, billed annually"
        for="For scaling business"
        benefit1="Up to 5 users"
        benefit2="Monthly limit of 30,000 requests"
        benefit3="Customizable Dashboard"
        benefit4="Advanced support"
        button={
          <Button
            type="submit"
            className="plan-card-btn blue w-75 p-3 my-4 text-white bg-primary border-0 rounded-5 fw-bold"
          >
            Upgrade to Pro
          </Button>
        }
      />
      <PlanCard
        plan="Pro Max Plan"
        price={`$ 149`}
        perMonth="/ month"
        planClass="plan-name-max"
        advantage="up to 10 users, billed annually"
        for="For scaling business"
        benefit1="Up to 10 users"
        benefit2="Monthly limit of 40,000 requests"
        benefit3="Customizable reporting"
        benefit4="Advanced support"
        button={
          <Button
            type="submit"
            className="plan-card-btn blue w-75 p-3 my-4 text-white bg-primary border-0 rounded-5 fw-bold"
          >
            Upgrade to Pro Max
          </Button>
        }
      />
      <PlanCard
        plan="Enterprise"
        price={`$ 249`}
        perMonth="/ month"
        planClass="plan-enterprise"
        bottomClass="plan-enterprise-bottom"
        advantage="unlimited users, billed annually"
        for="For large organizations"
        benefit1="Unlimited users"
        benefit2="Customizable requests limit"
        benefit3="Advanced reporting analytics"
        benefit4="24/7 priority support"
        button={
          <Button
            type="submit"
            className="plan-card-btn black w-75 p-3 my-4 text-white bg-black border-0 rounded-5 fw-bold"
          >
            <HiAnnotation className="mb-1" /> Contact Sales
          </Button>
        }
      />
    </div>
  );
}

export default PlanCards;
