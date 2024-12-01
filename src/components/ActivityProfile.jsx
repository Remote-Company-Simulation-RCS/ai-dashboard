import {
  StepsItem,
  StepsList,
  StepsRoot,
} from "./ui/steps";
import { LuCalendar, LuUser, LuWallet } from "react-icons/lu";
import { Provider } from "./ui/provider";
import "../styles/components/activityProfile.css";

const ActivityProfile = () => {
  return (
    <Provider>
      <StepsRoot
        className="activity-profile"
        orientation="vertical"
      >
        <h3 className="activity-title">Last Activity</h3>
        <div className="activity-steps d-flex flex-row align-items-center">
          <StepsList className="activity-steps-list">
            <StepsItem
              className="activity-steps-item text-orange"
              icon={<LuUser />}
            />
            <StepsItem
              className="activity-steps-item text-orange"
              icon={<LuWallet />}
            />
            <StepsItem
              className="activity-steps-item text-orange"
              icon={<LuCalendar />}
            />
            <StepsItem
              className="activity-steps-item text-orange"
              icon={<LuUser />}
            />
            <StepsItem
              className="activity-steps-item text-orange"
              icon={<LuWallet />}
            />
          </StepsList>
          <div className="activity-steps-content">
            <div>
            <p className="activity-steps-content-item">
              <span className="name-item">Nicole Fridman </span> created new chat{" "}
              <span className="activity-span">The Big Bang Theory</span>
            </p>
            <span className="activity-line">1 day ago</span>
            </div>
            <div>
            <p className="activity-steps-content-item">
              <span className="name-item">Quickit </span> generated the new image{" "}
              <span className="activity-span">Small village in anime style</span>
            </p>
            <span className="activity-line">3 days ago</span>
            </div>
            <div>
            <p className="activity-steps-content-item">
              <span className="name-item">Nicole Fridman </span> created new chat{" "}
              <span className="activity-span">Anime Styled images</span>
            </p>
            <span className="activity-line">3 days ago</span>
            </div>
            <div>
            <p className="activity-steps-content-item">
              <span className="name-item">Nicole Fridman </span> updated name and other profile{" "}
              <span className="activity-span">settings</span>
            </p>
            <span className="activity-line">2 weeks ago</span>
            </div>
            <div>
            <p className="activity-steps-content-item">
              <span className="name-item">Quickit </span> was updated to the new{" "}
              <span className="activity-span">3.08 version</span>
            </p>
            <span className="activity-line">2 weeks ago</span>
            </div>
          </div>
        </div>
      </StepsRoot>
    </Provider>
  );
};
export default ActivityProfile;
