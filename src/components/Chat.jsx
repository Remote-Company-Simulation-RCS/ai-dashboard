import React, { useState } from "react";
import Input from "../components/Input.jsx";
import Button from "../components/Button.jsx";
import { BsArrowReturnRight } from "react-icons/bs";
import { main } from "../components/Groq.jsx";
import "../styles/main.css";
import "../styles/components/chat.css";

export default function Chat() {
  const [userMessage, setUserMessage] = useState("");

  function callMain() {
    main(userMessage);
    setUserMessage("");
  }

  function handleKeyPress(event) {
    if (event.key === "Enter") {
      if (event.target.value) {
        callMain();
      } else {
        alert("Please enter a message");
      }
    }
  }

  function handleButtonClick() {
    if (userMessage) {
      callMain();
    } else {
      alert("Please enter a message");
    }
  }

  return (
    <div className="chat m-3 mt-4 rounded-5 p-4 d-flex flex-column">
      <div className="chat-messages" id="chat-messages"></div>
      <Input
        type="text"
        placeholder="Start typing . . ."
        className="input-group w-100 d-flex flex-row-reverse align-self-end"
        spanClassName="chat-input input-group-text border-secondary bg-transparent border-start-0 "
        inputClassName="chat-input form-control bg-transparent border-end-0 p-3 px-3 px-md-5 border-secondary"
        onChange={(e) => setUserMessage(e.target.value)}
        onKeyDown={(e) => handleKeyPress(e)}
        value={userMessage}
        id="chat-input"
        icon={
          <Button
            type="submit"
            className="btn btn-buttons text-start rounded-pill"
            onClick={handleButtonClick}
            children={
              <div>
                <BsArrowReturnRight size={18} />
                <span className="ms-2">Send</span>
              </div>
            }
          />
        }
      />
    </div>
  );
}
