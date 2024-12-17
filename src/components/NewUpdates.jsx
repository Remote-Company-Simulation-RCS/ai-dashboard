import React from "react";
import { Link } from "react-router-dom";
import "../styles/components/newUpdates.css";

function NewUpdates() {
  return (
    <div className="new-updates fst-italic fs-4 p-4 my-4">
      Checkout{" "}
      <Link to="/assistant" className="text-decoration-none">
        the new updates
      </Link>{" "}
      that were implemented on 11/04
    </div>
  );
}

export default NewUpdates;
