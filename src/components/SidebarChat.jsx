import React, { useState } from "react";
import Button from "../components/Button.jsx";
import { IoMdStar } from "react-icons/io";
import { TiTick } from "react-icons/ti";
import { FaQuestion, FaPlus } from "react-icons/fa";
import "../styles/components/sidebarChat.css";
import { NewChat } from "./Groq.jsx";

export default function SidebarChat({ visibility }) {
  const [oldRequest, setOldRequest] = useState([]);

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  }

  function handleNewChat() {
    const chatBox = document.getElementById("chat-messages");
    if (chatBox && chatBox.firstChild && chatBox.firstChild.textContent) {
      setOldRequest((r) => [
        ...r,
        {
          id: oldRequest.length,
          name: capitalizeFirstLetter(chatBox.firstChild.textContent),
        },
      ]);
    }
    NewChat();
  }

  return (
    <div
      className={`sidebar-chat ${
        visibility && "show"
      } ms-4 mt-4 rounded-5 p-3 d-block`}
    >
      <h6 className="fw-bold text-secondary">CURRENT</h6>
      <Button
        type="submit"
        className="btn buttons text-start my-4 w-100 rounded-pill"
        children={
          <div className="d-flex flex-row py-2 gap-2">
            <IoMdStar className="pt-1" size={23} />
            <div className="d-flex flex-column align-items-start">
              <p className="fw-bold mb-0">Current Chat</p>
            </div>
          </div>
        }
      />
      <h6 className="fw-bold text-secondary">OLD REQUESTS</h6>
      <div className="old-requests">
        <ul className="list-unstyled h-100">
          {oldRequest.map((request) => (
            <li
              key={request.id}
              className="list-item p-2 d-flex flex-row justify-content-between"
            >
              <div className="d-flex flex-column align-items-start">
                <p className="fw-bold mb-0">{request.name}</p>
              </div>
              <TiTick size={25} className="text-secondary" />
            </li>
          ))}
        </ul>
      </div>
      <Button
        type="submit"
        className="btn btn-buttons text-start my-4 w-100 rounded-pill"
        onClick={handleNewChat}
        children={
          <div className="d-flex flex-row py-2 gap-2">
            <FaPlus className="pt-1" size={23} />
            <p className="fw-bold mb-0">New Chat</p>
          </div>
        }
      />
    </div>
  );
}
