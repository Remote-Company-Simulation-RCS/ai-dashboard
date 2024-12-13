import React, { useState } from "react";
import Logo from "../assets/icons/logo.svg";
import { AiOutlineUser, AiOutlineUnlock } from "react-icons/ai";
import Input from "../components/Input.jsx";
import Button from "../components/Button.jsx";
import "../styles/pages/signIn.css";
import "../styles/main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checked, setChecked] = useState(true);
  let emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password && emailRegex.test(email)) {
      console.log("Email:", email);
      console.log("Password:", password);
      Swal.fire({
        icon: "success",
        title: "Success!",
        text: "You have been signed in successfully.",
        customClass: {
          popup: "my-swal-container",
        },
        showConfirmButton: false,
        timer: 1999,
      });
      setTimeout(() => {
        navigate("/profile");
      }, 2000);
    } else if (email && password && !emailRegex.test(email)) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please enter a valid email",
        customClass: {
          popup: "my-swal-container",
        },
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
      });
    } else if (email) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please enter a password",
        customClass: {
          popup: "my-swal-container",
        },
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
      });
    } else if (password) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please enter an email",
        customClass: {
          popup: "my-swal-container",
        },
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please enter a password and an emai",
        customClass: {
          popup: "my-swal-container",
        },
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
      });
    }
  };

  const handleChecked = () => {
    setChecked(!checked);
  };

  return (
    <div className="sign-in dark-signin d-flex flex-column align-items-center text-center">
      <img src={Logo} className="img-fluid py-4" alt="icon image" />
      <h2 className="title-signin text-center mb-3 lh-lg ">Quickit: Sign In</h2>
      <form
        onSubmit={handleSubmit}
        className="d-flex justify-content-evenly align-items-center flex-column w-40 h-25"
      >
        <Input
          type="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="Email"
          ariaLabel="email"
          icon={<AiOutlineUser className="text-secondary" />}
          className="input-group mb-3 border-3"
          spanClassName="input-group-text bg-transparent border-secondary  border-end-0"
          inputClassName="form-control bg-transparent border-start-0 p-3 border-secondary"
        />
        <Input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          placeholder="Password"
          ariaLabel="password"
          icon={<AiOutlineUnlock className="text-secondary" />}
          className="input-group mb-3 border-3"
          spanClassName="input-group-text bg-transparent border-secondary  border-end-0"
          inputClassName="form-control bg-transparent border-start-0 p-3 border-secondary"
        />
        <div className="input-group bg-transparent mb-3 d-flex justify-content-center justify-content-md-beetween gap-2 w-100 h-50 align-items-center">
          <div className="input-group-text bg-transparent border-0 p-3 gap-2 ">
            <Input
              type="checkbox"
              checked={checked}
              value=""
              onChange={handleChecked}
              ariaLabel="Checkbox for following text input"
              inputClassName="form-check-input mt-1"
            />
            <p className="m-0 text-secondary">Remember password</p>
          </div>
          <a href="#" className="text-decoration-none">
            Restore password
          </a>
        </div>
        <Button
          type="submit"
          className="btn btn-primary w-100 py-3 rounded-4 mb-3"
          onClick={handleSubmit}
          children="Sign in"
        />
        <p className="text-center">
          Don't have an account?&nbsp;
          <a href="/signup" className="text-decoration-none">
            Sign up
          </a>
        </p>
      </form>
    </div>
  );
}

export default SignUpPage;
