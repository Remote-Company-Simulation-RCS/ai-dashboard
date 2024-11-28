import React from "react";
import Navbar from "../components/Navbar.jsx";
import SidebarChat from "../components/SidebarChat.jsx";
import Chat from "../components/Chat.jsx";
import FeedbackChat from "../components/FeedbackChat.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/main.css";
import "../styles/pages/assistantPage.css";

export default function AssistantPage() {
  return (
    <div className="assistant-page-container">
      <Navbar chatHistoryToggle={true} />
      <div className="assistant-page d-flex">
        <SidebarChat />
        <Chat />
        <FeedbackChat />
      </div>
    </div>
  );
}
