import React from "react";
import SubCard from "./SubCards";
import Button from "../components/Button";

function SubCards() {
  return (
    <div className="d-flex gap-3">
      <SubCard
        plan="Basic Plan"
        price={49}
        advantage="1 user, billed annually"
        for="For small company"
        benefit1="Only 1 user"
        benefit2="Monthly limit of 12,000 requests"
        benefit3="Basic features and tools with AI"
        benefit4="Phone and email support"
      >
        <Button planChoice="Current Plan" />
      </SubCard>
      <SubCard
        plan="Pro Plan"
        price={99}
        advantage="up to 5 users, billed annually"
        for="For scaling business"
        benefit1="Only 5 users"
        benefit2="Monthly limit of 30,000 requests"
        benefit3="Customizable Dashboard"
        benefit4="Advanced support"
      >
        <Button planChoice="Upgrade to Pro" />
      </SubCard>
      <SubCard
        plan="Pro Max Plan"
        price={149}
        advantage="up to 10 users, billed annually"
        for="For scaling business"
        benefit1="Only 10 users"
        benefit2="Monthly limit of 40,000 requests"
        benefit3="Customizable reporting"
        benefit4="Advanced support"
      >
        <Button planChoice="Upgrade to Pro Max" />
      </SubCard>
      <SubCard
        plan="Enterprise"
        price={249}
        advantage="unlimited users, billed annually"
        for="For large organizations"
        benefit1="Unlimited users"
        benefit2="Customizable requests limit"
        benefit3="Advanced reporting analytics"
        benefit4="24/7 priority support"
      >
        <Button planChoice="Contact Sales" />
      </SubCard>
    </div>
  );
}

export default SubCards;
