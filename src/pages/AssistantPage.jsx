import React, { useState } from "react";
import Navbar from "../components/Navbar.jsx";
import SidebarChat from "../components/SidebarChat.jsx";
import Chat from "../components/Chat.jsx";
import FeedbackChat from "../components/FeedbackChat.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/main.css";
import "../styles/pages/assistantPage.css";

export default function AssistantPage() {
  const [isChatVisible, setIsChatVisible] = useState(false);

  const toggleSidebarChat = () => {
    setIsChatVisible((prevState) => !prevState);
  };
  return (
    <div className="assistant-page-container">
      <Navbar
        chatHistoryToggle={true}
        phonePadding={"px-md-5"}
        toggle
        toggleChat={toggleSidebarChat}
      />
      <div className="assistant-page d-flex">
        <SidebarChat visibility={isChatVisible} />
        <Chat />
        <FeedbackChat />
      </div>
    </div>
  );
}
