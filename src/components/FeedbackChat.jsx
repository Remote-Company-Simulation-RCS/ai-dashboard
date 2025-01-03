import React from "react";
import Button from "./Button.jsx";
import Achievements from "./Achievements.jsx";
import Rating from "./Rating.jsx";
import { CiCircleQuestion } from "react-icons/ci";
import { useNavigate, Link } from "react-router-dom";
import "../styles/main.css";
import "../styles/components/feedbackChat.css";

export default function Feedback() {
  const navigate = useNavigate();

  function handleSubscription() {
    navigate("/subscription");
  }

  return (
    <>
      <div className="feedback mt-4 me-4 rounded-5 d-flex flex-column justify-content-between d-none d-xl-flex">
        <Button
          type="submit"
          className="btn buttons text-start w-100 py-3 px-4 rounded-pill "
          onClick={handleSubscription}
          children={
            <div className="d-flex flex-row py-2 gap-2">
              <p className="fw-bold mb-0">
                Upgrade to{" "}
                <span>
                  Pro Subscription{" "}
                  <CiCircleQuestion size={15} className="text-secondary" />
                </span>
              </p>
            </div>
          }
        />
        <Achievements />
        <Rating />
      </div>
    </>
  );
}
