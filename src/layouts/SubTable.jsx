import React from "react";
import "../styles/components/sub-table.css";
import Button from "../components/Button.jsx";
import SubtableCards from "../components/SubtableCard.jsx";
import { IoBagHandleOutline, IoCubeOutline } from "react-icons/io5";
import { LuWallet, LuPencil } from "react-icons/lu";
import { GiAlarmClock } from "react-icons/gi";
import { MdOutlineMessage } from "react-icons/md";
function SubTable() {
  return (
    <div className="sub-table rounded-5 px-4 py-3 d-flex flex-column mx-3 justify-content-between ">
      <div className="d-flex flex-row align-items-center justify-content-between ">
        <h2 className="title-subscription text-center mb-3 lh-lg ">
          Subscription
        </h2>
        <div className="d-flex flex-row justify-content-between gap-3 ">
          <Button
            type="submit"
            className="btn "
            onClick={"#"}
            children={
              <div className="d-flex flex-row align-items-center gap-1">
                <MdOutlineMessage size={20} className="contact-text" />
                <span className="contact-text">Contact us</span>
              </div>
            }
          />
          <Button
            type="submit"
            className="btn btn-primary rounded-5 px-3"
            onClick={"#"}
            children={
              <div className="btn-primary d-flex flex-row align-items-center gap-1">
                <LuPencil size={20} className="text-white" />
                <span className="text-white">Contact us</span>
              </div>
            }
          />
        </div>
      </div>
      <div className="d-flex flex-row align-items-center justify-content-between">
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
