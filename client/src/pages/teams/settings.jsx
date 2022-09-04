import { useState } from "react";
import Breadcrumbs from "../../components/utils/Breadcrumbs";
import Button from "../../components/utils/Button";
import Title from "../../components/utils/Title";
import TeamHeader from "../../components/content/TeamHeader";
import DashboardLayout from "../../layouts/DashboardLayout";
import TextInput from "../../components/input/TextInput";
import SelectInput from "../../components/input/SelectInput";

const Settings = ()=>{
  const paths = [{name:"Teams", to:"/teams"}, {name:"Team Sekrum"}]; 
  const [teamName, setTeamName] = useState("Sekrum");
  const changeTeamName = (name)=>setTeamName(name);
  const [defaultPermission, setDefaultPermission] = useState("can edit");
  const changePermission = (value)=>setDefaultPermission(value);
  const [notificationInterval, setNotificationInterval] = useState("1 day");
  const changeInterval = (value)=>setNotificationInterval(value);
  return (
      <DashboardLayout>
        <Title>Team {teamName}</Title>
        <Breadcrumbs paths={paths}/>
        <TeamHeader name='sekrum'/>
        <div className="mt-12">
          <h1 className="text-xl md:text-2xl text-black font-bold">General</h1>
          <TextInput placeholder='Sekrum' name='Team Name' submit={changeTeamName}/>
          <span className="ml-10 mt-5 text-xl font-medium flex items-center">
            <span className="mr-4">Default Permission</span>: 
            <SelectInput 
              options={['can edit', 'only view']} 
              onChange={changePermission}
              value={defaultPermission}
              className='ml-4'
            />
          </span>
        </div>
        <div className="mt-6">
          <h1 className="text-xl md:text-2xl text-black font-bold">Notifications</h1>
          <span className="ml-10 mb-5 mt-5 text-xl font-medium flex items-center">
            Send reminders to members through email 
            <SelectInput 
              options={['1 day', '3 days', '5 days', '1 week']} 
              onChange={changeInterval}
              value={notificationInterval}
              className='mx-2'
            />
            before deadline.
          </span>
          <Button color='Orange' className='float-right'>Delete Team</Button>
        </div>
      </DashboardLayout>
  );
}

export default Settings;