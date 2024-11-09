import React, { useState } from "react";
import "../../styles/components/signin.css";
import "bootstrap/dist/css/bootstrap.min.css";
import DarkBg from "../../assets/icons/logo.svg";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
    <div className="sign-in d-flex flex-column  align-items-center">
      <img src={DarkBg} alt="icon image" />
      <h2 className="title-signin text-center fw-bold mb-5 lh-lg ">
        {" "}
        Quickit: Sign In
      </h2>
      <form onSubmit={handleSubmit} className="d-flex justify-content-evenly align-items-center flex-column  w-40 h-25">
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Shkruaj email-in tuaj"
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Shkruaj fjalëkalimin tuaj"
            required
          />
        </div>
        <div className="d-flex justify-content-between gap-3 w-100">
          <div className="form-check">
            <input
              type="checkbox"
              id="remember-me"
              name="remember-password "
              value="remember-me"
            />
            <label for="remember-me"> Remember password</label>
          </div>
          <a href="#">Restore password</a>
        </div>
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}

export default SignIn;
