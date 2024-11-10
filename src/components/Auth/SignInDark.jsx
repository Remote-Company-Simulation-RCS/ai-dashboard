import React, { useState } from "react";
import "../../styles/main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "../../assets/icons/logo.svg";
import { AiOutlineUser, AiOutlineUnlock } from "react-icons/ai";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checked, setChecked] = useState(true);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="sign-in dark d-flex flex-column align-items-center text-center">
      <img src={Logo} className="img-fluid py-4" alt="icon image" />
      <h2 className="title-signin text-center mb-5 lh-lg ">Quickit: Sign In</h2>
      <form
        onSubmit={handleSubmit}
        className="d-flex justify-content-evenly align-items-center flex-column w-40 h-25"
      >
        <div className="input-group mb-3 border-3 ">
          <span
            className="input-group-text  text-secondary border-secondary bg-transparent border-end-0"
            id="basic-addon1"
          >
            <AiOutlineUser className=" text-secondary" />
          </span>
          <input
            type="email"
            value={email}
            className="form-control bg-transparent border-start-0 p-3 border-secondary"
            onChange={handleEmailChange}
            placeholder="Email"
            required
            aria-label="email"
            aria-describedby="basic-addon1"
          />
        </div>
        <div className="input-group mb-3 border-3 border-secondary">
          <span
            className="input-group-text text-secondary border-secondary bg-transparent border-end-0  "
            id="basic-addon1"
          >
            <AiOutlineUnlock />
          </span>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Password"
            required
            className="form-control bg-transparent border-start-0 border-secondary p-3"
            aria-label="password"
            aria-describedby="basic-addon1"
          />
        </div>
        <div className="input-group bg-transparent mb-3 d-flex justify-content-between gap-3 w-100 h-50 d-flex align-items-center">
          <div class="input-group-text bg-transparent border-0 p-3 gap-3 ">
            <input
              className="form-check-input mt-0"
              type="checkbox"
              value=""
              checked={checked}
              onChange={() => setChecked(!checked)}
              aria-label="Checkbox for following text input"
            />
            <p className="m-0 text-white">Remember password</p>
          </div>
          <a href="#" className="signin-herf text-decoration-none">
            Restore password
          </a>
        </div>
        <button
          type="submit"
          className="btn btn-primary w-100 py-3 rounded-4 mb-3"
        >
          Sign In
        </button>
        <p className="text-center text-secondary">
          Don't have an account?{" "}
          <a href="#" className="signin-herf text-decoration-none">
            Sign up
          </a>
        </p>
      </form>
    </div>
  );
}

export default SignIn;
