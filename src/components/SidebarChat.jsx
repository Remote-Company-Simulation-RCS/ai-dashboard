import React from "react";
import "../styles/components/sidebarchat.css";
import Button from "../components/Button.jsx";
import { IoMdStar } from "react-icons/io";
import { TiTick } from "react-icons/ti";
import { FaQuestion, FaPlus } from "react-icons/fa";


export default function SidebarChat() {
  return (
    <div className="sidebar-chat m-3 mt-4 rounded-5 p-4">
      <h6 className="fw-bold text-secondary">CURRENT</h6>
      <Button
        type="submit"
        className="btn buttons text-start my-4 w-100 rounded-pill "
        onClick={"#"}
        children={
          <div className="d-flex flex-row py-2 gap-2">
            <IoMdStar className="pt-1" size={23} />
            <div className="d-flex flex-column align-items-start ">
              <p className="fw-bold mb-0">Population statistics</p>
              <span>3 answers</span>
            </div>
          </div>
        }
      />
      <h6 className="fw-bold text-secondary">OLD REQUESTS</h6>
      <ul className="list-unstyled">
        <li className="list-item p-2 d-flex flex-row justify-content-between">
          <div className="d-flex flex-column align-items-start ">
            <p className="fw-bold mb-0">Image correction  </p>
            <span className="text-secondary">5 answers</span>
          </div>
          <TiTick size={25} className="text-secondary" />
        </li>
        <li className="list-item p-2 d-flex flex-row justify-content-between">
          <div className="d-flex flex-column align-items-start ">
            <p className="fw-bold mb-0">Generating preview  </p>
            <span className="text-secondary">10 answers</span>
          </div>
          <TiTick size={25} className="text-secondary" />
        </li>
        <li className="list-item p-2 d-flex flex-row justify-content-between">
          <div className="d-flex flex-column align-items-start ">
            <p className="fw-bold mb-0">Questions about banks </p>
            <span className="text-secondary">8 answers</span>
          </div>
          <FaQuestion size={20} className="text-secondary" />
        </li>
        <li className="list-item p-2 d-flex flex-row justify-content-between">
          <div className="d-flex flex-column align-items-start ">
            <p className="fw-bold mb-0">Gift choosing </p>
            <span className="text-secondary">15 answers</span>
          </div>
          <TiTick size={25} className="text-secondary" />
        </li>
      </ul>
      <Button
        type="submit"
        className="btn btn-buttons text-start my-4 w-100 rounded-pill "
        onClick={"#"}
        children={
          <div className="d-flex flex-row py-2 gap-2">
            <FaPlus className="pt-1" size={23} />
            <p className="fw-bold mb-0" >New Chat</p>
          </div>
        }
      />
    </div>
  );
}
