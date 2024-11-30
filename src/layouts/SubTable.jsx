import React from "react";
import Buttons from "../components/Button.jsx";
import PlanCards from "../layouts/PlanCards.jsx";
import { Button, Modal } from 'antd';
import SubtableCards from "../components/SubtableCard.jsx";
import { IoBagHandleOutline, IoCubeOutline } from "react-icons/io5";
import { LuWallet, LuPencil } from "react-icons/lu";
import { GiAlarmClock } from "react-icons/gi";
import { MdOutlineMessage } from "react-icons/md";
import "../styles/components/subTable.css";

function SubTable() {
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const showLoading = () => {
    setOpen(true);
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 500);
  };

  return (
    <div className="sub-table rounded-5 px-1 px-sm-5 py-3 d-flex flex-column mx-4 mt-4 justify-content-between ">
      <div className="d-flex flew-wrap flex-column flex-sm-row align-items-center justify-content-between gap-2">
        <h2 className="title-subscription text-center mt-3 mb-0 mt-sm-0 mb-sm-4 lh-lg ">
          Subscription
        </h2>
        <div className="d-flex flex-row justify-content-between gap-3 mt-1 mb-5 m-sm-0 mb-sm-3">
          <Buttons
            type="submit"
            className="btn"
            onClick={"#"}
            children={
              <div className="d-flex flex-row align-items-center gap-1">
                <MdOutlineMessage size={20} className="contact-text" />
                <span className="contact-text">Contact us</span>
              </div>
            }
          />
          <Buttons
            type="submit"
            className="btn btn-primary rounded-5 px-3"
            onClick={showLoading}
            children={
              <div className="btn-primary d-flex flex-row align-items-center gap-1">
                <LuPencil size={20} className="text-white" />
                <span className="text-white">Change Plan</span>
              </div>
            }
          />
          <Modal
            width={1350}
            title={<p>Change Plan</p>}
            footer={
              <div className="d-flex justify-content-center w-100 fs-3"> </div>
            }
            loading={loading}
            open={open}
            onCancel={() => setOpen(false)}
          >
            <PlanCards />
          </Modal>
        </div>
      </div>
      <div className="d-flex flex-wrap align-items-center justify-content-around">
        <SubtableCards
          text="Basic Plan"
          title="Tariff"
          subIcon={<IoBagHandleOutline size={20} />}
        />

        <SubtableCards
          text="$49/m"
          title="Tariff Cost"
          subIcon={<LuWallet size={20} />}
        />

        <SubtableCards
          text="12,000"
          title="Monthly Requests Limit"
          subIcon={<IoCubeOutline size={20} />}
        />

        <SubtableCards
          text="Aug 6, 2024"
          title="Renewal Date"
          subIcon={<GiAlarmClock size={20} />}
        />
      </div>
    </div>
  );
}

export default SubTable;
