import React from "react";
import { HiAnnotation } from "react-icons/hi";
import SubCard from "../components/SubCard";
import Button from "../components/Button";
import "../styles/components/subCards.css";

function SubCards() {
  return (
    <div className="d-flex justify-content-center gap-5 mt-5">
      <SubCard
        plan="Basic Plan"
        price={49}
        advantage="1 user, billed annually"
        for="For small company"
        benefit1="Only 1 user"
        benefit2="Monthly limit of 12,000 requests"
        benefit3="Basic features and tools with AI"
        benefit4="Phone and email support"
        buttonlabel="Current Plan"
      />
      <SubCard
        plan="Pro Plan"
        price={99}
        advantage="up to 5 users, billed annually"
        for="For scaling business"
        benefit1="Only 5 users"
        benefit2="Monthly limit of 30,000 requests"
        benefit3="Customizable Dashboard"
        benefit4="Advanced support"
        buttonlabel="Upgrade to Pro"
      />
      <SubCard
        plan="Pro Max Plan"
        price={149}
        advantage="up to 10 users, billed annually"
        for="For scaling business"
        benefit1="Only 10 users"
        benefit2="Monthly limit of 40,000 requests"
        benefit3="Customizable reporting"
        benefit4="Advanced support"
        buttonlabel="Upgrade to Pro Max"
      />
      <SubCard
        plan="Enterprise"
        price={249}
        advantage="unlimited users, billed annually"
        for="For large organizations"
        benefit1="Unlimited users"
        benefit2="Customizable requests limit"
        benefit3="Advanced reporting analytics"
        benefit4="24/7 priority support"
        icon={<HiAnnotation className="mb-1" />}
        buttonlabel="Contact Sales"
      />
    </div>
  );
}

export default SubCards;
