import React from "react";
import { HiChartBar } from "react-icons/hi";
import { IoMdChatboxes } from "react-icons/io";
import { FaFileImage } from "react-icons/fa";
import Button from "./Button.jsx";
import "../styles/components/overviewProfile.css";

export default function OverviewProfile() {
  return (
    <div div className="d-flex justify-content-center row w-100 h-100 gap-2">
    <div className="overview-details w px-4 rounded-5">
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
      <div className="d-flex justify-content-center gap-2">
        <span className="fw-bold overview-number">186.059</span>{" "}
        <p className="overview-name mt-3">requests</p>
      </div>
    </div>
    <div className="w-100 h-50 d-flex column justify-content-center gap-2">
    <Button 
      className="button-overview"
      type="submit"
      onClick={"#"}
      children={
      <div className="d-flex w-100 h-100 align-items-center justify-content-start row px-3 gap-2">
         <IoMdChatboxes className="p-2 rounded-5 overview-icon" />
         <p className="button-tittle">Start new chat</p>
      </div>}
      />
        <Button 
      className="button-overview"
      type="submit"
      onClick={"#"}
      children={
      <div className="d-flex w-100 h-100 align-items-center justify-content-start row px-3 gap-2">
         <FaFileImage className="p-2 rounded-5 overview-icon" />
         <p className="button-tittle">Generate Image</p>
      </div>}

      />
      </div>
    </div>
    
  );
}
