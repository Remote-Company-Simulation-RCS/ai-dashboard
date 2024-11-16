import React from "react";

function SignUpCards(props) {
  return (
    <div className="col-12 col-lg-4 col-xl-4 card d-flex justify-content-center" style={{ width: props.width, backgroundImage: `url(${props.bgImage})` }} >
      <button className="text-start border-0 bg-transparent">
        <div>{props.icon}</div>
        <p className="text-white-50 mb-0 mt-3">
          {props.action}
          <br />
          <span className="text-white">{props.app}</span>
        </p>
      </button>
    </div>
  );
}

export default SignUpCards;
