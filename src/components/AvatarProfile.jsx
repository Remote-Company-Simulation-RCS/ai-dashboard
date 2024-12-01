import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/components/avatarProfile.css";
import pfpImage from "../assets/images/pfp.svg";
import { IoCubeOutline } from "react-icons/io5";
import Button from "./Button";
import { LuReceipt } from "react-icons/lu";

function AvatarProfile(props) {
  return (
    <div className="avatar-profile rounded-5">
      <div className="avatar-profile-header rounded-top-5 text-end py-2 d-flex flex-column justify-content-center align-items-end px-3">
        <h5>Free Subscription</h5>
        <p className="m-0">
          <strong>1,350 remaining requests</strong> out of 1,500
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
      <div className="avatar-profile-body d-flex justify-content-between">
        <div className="d-flex">
          <div className="ms-3">
            <div className="d-flex">
              <h1 className="fw-bold">Nicole Fridman</h1>
              <Button className="btn avatar-btn ms-3 h-50 align-self-center rounded-5">
                Change
              </Button>
            </div>
            <p className="lead">Registered at January 10, 2023</p>
          </div>
          <div className="vertical-divider"></div>
          <div className="d-flex flex-column justify-content-between avatar-cube">
            <IoCubeOutline className="fs-4 mt-3" />
            <p className="fs-6">Last login at March 11, 2023</p>
          </div>
        </div>
        <div className="d-grid justift-content-center text-end me-3">
          <small className="text-secondary">Next invoice will be at</small>
          <p className="fw-semibold">July 10, 2023 of $50</p>
          <Button className="btn btn-primary d-flex align-items-center rounded-pill">
            <LuReceipt className="me-2" /> Manage Subscription
          </Button>
        </div>
      </div>
    </div>
  );
}

export default AvatarProfile;
