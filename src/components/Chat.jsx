import React from "react";
import "../styles/components/chat.css";
import Input from "../components/Input.jsx";
import Button from "../components/Button.jsx";
import { BsArrowReturnRight } from "react-icons/bs";

export default function Chat() {
  return (
    <div className="chat m-3 mt-4 rounded-5 p-4 d-flex">
      <Input
        type="text"
        placeholder="Start typing . . ."
        className="input-group  w-100 d-flex  flex-row-reverse align-self-end "
        spanClassName="input-group-text border-secondary bg-transparent border-start-0 "
        inputClassName="form-control bg-transparent border-end-0 p-3 px-3 px-md-5 border-secondary"
        icon={
          <Button
            type="submit"
            className="btn btn-buttons text-start rounded-pill"
            children={
            <div>
            <BsArrowReturnRight size={18}/>
            <span className="ms-2">Send</span>
            </div>}
          />
        }
      />
    </div>
  );
}
