import { useState } from "react";
import Button from "../../components/utils/Button";
import TextInput from "../../components/input/TextInput";
import SelectInput from "../../components/input/SelectInput";

const Settings = () => {
  const [teamName, setTeamName] = useState("Sekrum");
  const changeTeamName = (name) => setTeamName(name);
  const [defaultPermission, setDefaultPermission] = useState("can edit");
  const changePermission = (value) => setDefaultPermission(value);
  const [notificationInterval, setNotificationInterval] = useState("1 day");
  const changeInterval = (value) => setNotificationInterval(value);
  return (
    <>
      <div className="mt-12">
        <h1 className="text-xl md:text-2xl text-black font-bold">General</h1>
        <span className="ml-10 mt-5 text-xl font-medium flex items-center">
          <span className="mr-20">Team Name</span>:
          <TextInput
            placeholder="Sekrum"
            submit={changeTeamName}
            className="ml-4 bg-dark-white"
          />
        </span>
        <span className="ml-10 mt-5 text-xl font-medium flex items-center">
          <span className="mr-4">Default Permission</span>:
          <SelectInput
            options={["can edit", "only view"]}
            onChange={changePermission}
            value={defaultPermission}
            className="ml-4"
            color="dark-white"
          />
        </span>
      </div>
      <div className="mt-6">
        <h1 className="text-xl md:text-2xl text-black font-bold">
          Notifications
        </h1>
        <span className="ml-10 mb-5 mt-5 text-xl font-medium flex items-center">
          Send reminders to members through email
          <SelectInput
            options={["1 day", "3 days", "5 days", "1 week"]}
            onChange={changeInterval}
            value={notificationInterval}
            className="mx-2"
          />
          before deadline.
        </span>
        <Button color="Orange" className="float-right">
          Delete Team
        </Button>
      </div>
    </>
  );
};

export default Settings;
