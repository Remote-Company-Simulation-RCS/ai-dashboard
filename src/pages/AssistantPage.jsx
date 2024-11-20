import React from "react";
import "../styles/components/assistant-page.css";
import "../styles/main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../components/Navbar.jsx";
import SidebarChat from "../components/SidebarChat.jsx";
import Chat from "../components/Chat.jsx";
import FeedbackChat from "../components/FeedbackChat.jsx";


export default function AssistantPage() {
  return (
    <div className="assistant-page-container">
      <Navbar />
      <div className="assistant-page d-flex">
        <SidebarChat/>  
        <Chat/> 
        <FeedbackChat/>
      </div>
    </div>
  )
}

