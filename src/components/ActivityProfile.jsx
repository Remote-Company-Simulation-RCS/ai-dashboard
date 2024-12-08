import { LuUser } from "react-icons/lu";
import "../styles/components/activityProfile.css";

const ActivityProfile = () => {
  return (
    <div className="activity-profile mb-3 mt-2 w-100 d-flex flex-column gap-1 p-3">
      <h3 className="activity-title">Last Activity</h3>
      <div className="activity-content">
        <div className="activity-item">
          <div className="circle">
            <LuUser />
          </div>
          <div className="asc-item">
            <p className="asc-item-p">
              <span className="asc-item-name">Nicole Fridman </span> created new
              chat{" "}
              <span className="asc-item-activity">The Big Bang Theory</span>
            </p>
            <span className="asc-item-line">1 day ago</span>
          </div>
        </div>
        <div className="activity-item">
          <div className="circle">
            <LuUser />
          </div>
          <div className="asc-item">
            <p className="asc-item-p">
              <span className="asc-item-name">Quickit </span> generated the new
              image{" "}
              <span className="asc-item-activity">
                Small village in anime style
              </span>
            </p>
            <span className="asc-item-line">3 days ago</span>
          </div>
        </div>
        <div className="activity-item">
          <div className="circle">
            <LuUser />
          </div>
          <div className="asc-item">
            <p className="asc-item-p">
              <span className="asc-item-name">Nicole Fridman </span> created new
              chat
              <span className="asc-item-activity">Anime Styled images</span>
            </p>
            <span className="asc-item-line">3 days ago</span>
          </div>
        </div>
        <div className="activity-item">
          <div className="circle">
            <LuUser />
          </div>
          <div className="asc-item">
            <p className="asc-item-p">
              <span className="asc-item-name">Nicole Fridman </span> updated
              name and other profile{" "}
              <span className="asc-item-activity">settings</span>
            </p>
            <span className="asc-item-line">2 weeks ago</span>
          </div>
        </div>
        <div className="activity-item">
          <div className="circle">
            <LuUser />
          </div>
          <div className="asc-item">
            <p className="asc-item-p">
              <span className="asc-item-name">Quickit </span> was updated to the
              new <span className="asc-item-activity">3.08 version</span>
            </p>
            <span className="asc-item-line">2 weeks ago</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ActivityProfile;
