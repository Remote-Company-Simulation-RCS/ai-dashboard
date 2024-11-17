import React from "react";
import Navbar from "../components/Navbar.jsx";
import SidebarChat from "../components/SidebarChat.jsx";
import Chat from "../components/Chat.jsx";
import FeedbackChat from "../components/FeedbackChat.jsx";
import "../styles/components/assistant-page.css";

export default function AssistantPage() {
  return (
    <>
      <Navbar />
      <div className="assistant-page d-flex">
        <SidebarChat/>  
        <Chat/> 
        <FeedbackChat/>
      </div>
    </>
  )
}

