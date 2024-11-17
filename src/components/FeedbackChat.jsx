import React from "react";
import "../styles/components/feedback-chat.css";
import Button from "../components/Button";
import Achievements from "../components/Achievements";
import { CiCircleQuestion } from "react-icons/ci";

export default function Feedback() {
  return (
    <>
      <div className="feedback rounded-5 p-4 gap-4 d-flex flex-column ">
        <Button
          type="submit"
          className="btn buttons text-start  w-100 py-3 px-5 rounded-pill "
          onClick={"#"}
          children={
            <div className="d-flex flex-row py-2 gap-2">
              <p className="fw-bold mb-0">
              Upgrade to <span>Pro Subscription
                  <CiCircleQuestion size={15} className="text-secondary" /></span>
              </p>
            </div>
          }
        />
        <Achievements />
        <p className="mb-0 px-3 py-3">
          Check out <span className="fw-bold" style={{ color: "var(--blue)" }}>the new updates</span> that were 
          <pre>implemented on December 15, 2024 </pre>
        </p>
      </div>
    </>
  );
}
