import { Group } from "@chakra-ui/react";
import { Button } from "./ui/button";
import {
  StepsCompletedContent,
  StepsContent,
  StepsItem,
  StepsList,
  StepsNextTrigger,
  StepsPrevTrigger,
  StepsRoot,
} from "./ui/steps";
import { LuCalendar, LuUser, LuWallet } from "react-icons/lu";
import {Provider} from "./ui/provider";

const ActivityProfile = () => {
  return (
    <Provider>
        <StepsRoot orientation="vertical" defaultValue={1} count={3} className="w-100 h-100">
      <StepsList>
        <StepsItem index={0} icon={<LuUser />} />
        <StepsItem index={1} icon={<LuWallet />} />
        <StepsItem index={2} icon={<LuCalendar />} />
      </StepsList>

      <StepsContent index={0}>Contact Details</StepsContent>
      <StepsContent index={1}>Payment</StepsContent>
      <StepsContent index={2}>Book an Appointment</StepsContent>
      <StepsCompletedContent>All steps are complete!</StepsCompletedContent>

      <Group>
        <StepsPrevTrigger asChild>
          <Button variant="outline" size="sm">
            Prev
          </Button>
        </StepsPrevTrigger>
        <StepsNextTrigger asChild>
          <Button variant="outline" size="sm">
            Next
          </Button>
        </StepsNextTrigger>
      </Group>
    </StepsRoot>
    </Provider>
  );
};
export default ActivityProfile;
