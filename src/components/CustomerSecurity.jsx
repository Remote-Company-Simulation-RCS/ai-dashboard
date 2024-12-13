import React, { useState } from "react";
import { MdOutlineModeEdit } from "react-icons/md";
import { AiOutlineUnlock } from "react-icons/ai";
import Button from "./Button";
import { Modal } from "antd";
import Input from "./Input";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "../styles/pages/signIn.css";
import "../styles/components/customer.css";
import "bootstrap/dist/css/bootstrap.min.css";

const CustomerSecurity = () => {
  const [open, setOpen] = React.useState(false);

  const showLoading = () => {
    setOpen(true);
  };

  const [oldPassword, setOldPassword] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleOldPasswordChange = (e) => {
    setOldPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (oldPassword && password && oldPassword !== password) {
      Swal.fire({
        icon: "success",
        title: "Success!",
        text: "You have changed your password successfully.",
        customClass: {
          popup: "my-swal-container",
        },
        showConfirmButton: false,
        timer: 1999,
      });
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } else if (oldPassword || oldPassword === password) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please enter a new password",
        customClass: {
          popup: "my-swal-container",
        },
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
      });
    } else if (password) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please enter old password",
        customClass: {
          popup: "my-swal-container",
        },
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please enter your old password and new password",
        customClass: {
          popup: "my-swal-container",
        },
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
      });
    }
  };

  return (
    <div className="customer-details mt-4 w-100 px-4 rounded-5">
      <div className="d-flex align-items-center justify-content-between">
        <h2 className="fs-5 fw-bold">Security</h2>
        <MdOutlineModeEdit className="p-2 rounded-5 bg-blue-icon" />
      </div>
      <div className="details-item">
        <span className="label text-secondary">2FA</span>
        <span className="value">Enabled</span>
      </div>
      <div className="details-item">
        <span className="label text-secondary">Method</span>
        <span className="value">SMS</span>
      </div>
      <Button
        className="bg-blue-icon w-100 h-auto py-3 border-0 rounded-5 fw-bold"
        onClick={showLoading}
      >
        Change Password
      </Button>
      <Modal
        title={<p>Change Password</p>}
        open={open}
        onCancel={() => setOpen(false)}
        footer={
          <div className="d-flex justify-content-center w-100 fs-3"> </div>
        }
      >
        <form
          onSubmit={handleSubmit}
          className="d-flex justify-content-evenly align-items-center flex-column w-40 h-25"
        >
          <Input
            type="password"
            value={oldPassword}
            onChange={handleOldPasswordChange}
            placeholder="Old Password"
            ariaLabel="Oldpassword"
            icon={<AiOutlineUnlock className="text-secondary" />}
            className="input-group mb-3 border-3"
            spanClassName="input-group-text bg-transparent customer-security-span border-secondary border-end-0"
            inputClassName="form-control bg-transparent border-start-0 p-3 customer-security-input border-secondary"
          />
          <Input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="New Password"
            ariaLabel="password"
            icon={<AiOutlineUnlock className="text-secondary" />}
            className="input-group mb-3 border-3"
            spanClassName="input-group-text bg-transparent border-secondary customer-security-span border-end-0"
            inputClassName="form-control bg-transparent border-start-0 p-3 customer-security-input border-secondary"
          />
          <Button
            type="submit"
            className="btn btn-primary w-100 py-3 rounded-4 mb-3 mt-2"
            children="Added New Password"
          />
        </form>
      </Modal>
    </div>
  );
};

export default CustomerSecurity;
