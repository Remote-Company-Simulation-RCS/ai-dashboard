import React from "react";
import { HiChartBar } from "react-icons/hi";
import { IoMdChatboxes } from "react-icons/io";
import { FaFileImage } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Button from "./Button.jsx";
import "../styles/components/overviewProfile.css";

export default function OverviewProfile() {
  const navigate = useNavigate();

  function handleSubscription() {
    navigate("/assistant");
  }
  return (
    <div className="w-100 h-100 mb-3 mt-2 d-flex flex-column align-items-center gap-4">
      <div className="overview-details w-100 px-4 rounded-5 d-flex flex-column justify-content-center">
        <div className="d-flex align-items-center justify-content-between">
          <h3 className="fs-5 fw-bold overview-title">Overview</h3>
          <HiChartBar className="p-2 rounded-5 bg-blue-icon" />
        </div>
        <div className="overview-items">
          <div className="overview-item">
            <span className="fw-bold overview-number">153</span>
            <p className="overview-name">topics in chat</p>
          </div>
          <div className="overview-item">
            <span className="fw-bold overview-number">1.589</span>
            <p className="overview-name">generated images</p>
          </div>
        </div>
        <div className="d-flex justify-content-start gap-2">
          <span className="fw-bold overview-number">186.059</span>{" "}
          <p className="overview-name mt-3">requests</p>
        </div>
      </div>
      <div className="w-100 rounded-5 d-flex flex-column justify-content-center">
        <div className="d-flex flex-row gap-2  w-100 h-100 justify-content-between align-items-center">
          <Button
            className="button-overview chat-btn"
            type="submit"
            onClick={handleSubscription}
            children={
              <div className="d-flex w-100 h-100 flex-column align-items-center">
                <IoMdChatboxes className="p-2 rounded-5 overview-icon" />
                <p className="button-tittle">Start new chat</p>
              </div>
            }
          />
          <Button
            className="button-overview img-btn"
            type="submit"
            onClick={handleSubscription}
            children={
              <div className="d-flex w-190 h-100 flex-column align-items-center">
                <FaFileImage className="p-2 rounded-5 overview-icon" />
                <p className="button-tittle">Generate Image</p>
              </div>
            }
          />
        </div>
      </div>
    </div>
  );
}
