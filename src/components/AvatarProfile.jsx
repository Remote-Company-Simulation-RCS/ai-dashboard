import React from "react";
import pfpImage from "../assets/images/pfp.svg";
import { IoCubeOutline } from "react-icons/io5";
import Button from "./Button";
import { LuReceipt } from "react-icons/lu";
import CountUp from "react-countup";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/components/avatarProfile.css";

function AvatarProfile(props) {
  return (
    <div className="avatar-profile rounded-5">
      <div className="avatar-profile-header h-100 py-3 px-3 d-flex flex-column justify-content-center align-items-end text-end rounded-top-5">
        <h5>Free Subscription</h5>
        <p className="w-75 pb-2 pb-sm-0">
          <strong><CountUp end={1350} separator="," /> remaining requests</strong> out of <CountUp end={1500} separator="," />
        </p>
      </div>
      <div className="avatar-profile-image">
        <img
          src={pfpImage}
          alt=""
          width={125}
          className="rounded-circle ms-3"
        />
      </div>
      <div className="avatar-profile-body d-flex flex-column flex-sm-row justify-content-between h-auto">
        <div className="d-flex flex-column flex-lg-row">
          <div className="ms-3">
            <div className="d-flex">
              <h1 className="fw-bold">Nicole Fridman</h1>
              <Button className="btn avatar-btn  mx-3 h-50 align-self-center rounded-5">
                Change
              </Button>
            </div>
            <p className="lead">Registered at January 10, 2023</p>
          </div>
          <div className="vertical-divider"></div>
          <div className="d-flex flex-column justify-content-between ms-3 ms-lg-0 avatar-cube">
            <IoCubeOutline className="fs-4 mt-0 mb-2 mb-lg-0 ms-lg-3" />
            <p className="fs-6">Last login at March 11, 2023</p>
          </div>
        </div>
        <div className="d-grid justift-content-center text-end me-3">
          <small className="text-secondary">Next invoice will be at</small>
          <p className="fw-semibold">July 10, 2023 of $50</p>
          <Button className="btn btn-primary mx-3 me-0 py-2 px-sm-5 py-sm-0 px-md-4 py-md-1 p-lg-3 d-flex align-items-center justify-content-center rounded-pill">
            <LuReceipt className="me-2" /> Manage Subscription
          </Button>
        </div>
      </div>
    </div>
  );
}

export default AvatarProfile;
