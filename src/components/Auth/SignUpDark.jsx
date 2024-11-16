import React, { useState } from "react";
import "../../styles/main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "../../assets/icons/logo.svg";
import { AiOutlineUser } from "react-icons/ai";
import { LuLuggage } from "react-icons/lu";
import { FaArrowRightLong, FaApple, FaCirclePlay } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import Button from "../Button.jsx";
import SignUpCards from "../SignUpCards";

function SignUp() {
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleCompanyChange = (e) => {
    setCompany(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Company:", company);
  };

  return (
    <div className="sign-up dark-signup d-flex flex-column align-items-center text-center">
      <img src={Logo} className="img-fluid py-5" alt="icon image" />
      <h2 className="title-signup text-center mb-5 ">Create account</h2>
      <p className="desc-signup lead text-white-50">
        Start your 30-day free trial. Cancel anytime.
      </p>
      <form className="d-flex flex-wrap flex-md-nowrap mx-3 flex-row gap-3 align-items-center mb-3">
        <div className="input-group border-3">
          <span
            className="input-group-text  text-secondary border-secondary bg-transparent border-end-0"
            id="basic-addon1"
          >
            <AiOutlineUser className="text-secondary" />
          </span>
          <input
            type="email"
            value={email}
            className="form-control bg-transparent border-start-0 p-3 border-secondary"
            onChange={handleEmailChange}
            placeholder="Email"
            required
            aria-label="Email"
            aria-describedby="basic-addon1"
          />
        </div>
        <div className="input-group border-3 ">
          <span
            className="input-group-text  text-secondary border-secondary bg-transparent border-end-0"
            id="basic-addon1"
          >
            <LuLuggage className="text-secondary" />
          </span>
          <input
            type="text"
            value={company}
            className="form-control bg-transparent border-start-0 p-3 border-secondary"
            onChange={handleCompanyChange}
            placeholder="Company"
            required
            aria-label="Company"
            aria-describedby="basic-addon1"
          />
        </div>
        <Button type="submit" className="btn btn-primary rounded-circle next-btn d-flex justify-content-center mx-auto" onClick={handleSubmit} children={<FaArrowRightLong className="text-white fs-4"/>} />
      </form>
      <p className="text-center text-secondary">
        Have an account?
        <a href="#" className="signin-herf text-decoration-none">
          &nbsp; Try to sign in
        </a>
      </p>
      <div className="row d-flex justify-content-evenly px-2 px-md-5 flex-column align-items-center flex-md-row gap-3">
        <SignUpCards
          icon={<FcGoogle className="display-6" />}
          action="Sign Up"
          app="with Google"
        />
        <SignUpCards
          icon={<FaApple className="display-6" />}
          action="Sign Up"
          app="with Apple"
        />
        <SignUpCards
          icon={<FaCirclePlay className="display-6" />}
          action="Watch how Quickit"
          app="can solve your problems"
        />
      </div>
    </div>
  );
}

export default SignUp;
