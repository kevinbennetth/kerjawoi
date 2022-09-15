import { useState } from "react";
import { AiFillDelete, AiOutlineEdit } from "react-icons/ai";
import Breadcrumbs from "../../components/utils/Breadcrumbs";
import Button from "../../components/utils/Button";
import DashboardLayout from "../../layouts/DashboardLayout";
import PeopleModal from "../../components/modal/PeopleModal";
import SearchFilter from "../../components/input/SearchFilter";
import SelectInput from "../../components/input/SelectInput";
import TeamHeader from "../../components/content/TeamHeader";
import TextInput from "../../components/input/TextInput";
import Title from "../../components/utils/Title";

const members = [
  {name: 'Raymond Holt', email:'rayholt@gmail.com', role:'Project Leader', permission:'Admin', image:'https://randomuser.me/api/portraits/men/3.jpg'},
  {name: 'Terrence Jeffords', email:'terry@gmail.com', role:'Member', permission:'Can Edit', image:'https://randomuser.me/api/portraits/men/4.jpg'},
  {name: 'Gina Linetti', email:'gina@gmail.com', role:'Member', permission:'Can Edit', image:'https://randomuser.me/api/portraits/women/1.jpg'},
  {name: 'Jake Peralta', email:'jake@gmail.com', role:'Member', permission:'Only View', image:'https://randomuser.me/api/portraits/men/5.jpg'},
  {name: 'Amy Santiago', email:'santiago@gmail.com', role:'Member', permission:'Only View', image:'https://randomuser.me/api/portraits/women/2.jpg'},
  {name: 'Rosa Diaz', email:'goldfinch@gmail.com', role:'Member', permission:'Only View', image:'https://randomuser.me/api/portraits/women/3.jpg'},
  {name: 'Charles Boyle', email:'chuck@gmail.com', role:'Member', permission:'Only View', image:'https://randomuser.me/api/portraits/men/6.jpg'},
]

const PeopleRow = ({name, email, role, permission, image, admin})=>{
  const [currPermission, setPermission] = useState(permission);
  const changePermission = (e)=>{
    setPermission(e);
  }
  const [editRole, setEditRole] = useState(false);
  const [currentRole, setCurrentRole] = useState(role);
  const changeRole = (value)=>{
    setCurrentRole(value);
    setEditRole(false);
  }
  return (
    <ul className="grid grid-cols-10">
      <li className="col-span-3 p-3 flex items-center">
        <img src={image} alt={name} className='w-10 h-10 rounded-full mr-3'/>
        <div className="flex flex-col justify-center items-start">
          <p className="font-semibold">{name}</p>
          <p className="text-sm">{email}</p>
        </div>
      </li>
      <li className="col-span-3 p-3 flex items-center">
        {editRole
        ?<TextInput
          placeholder={currentRole}
          submit={changeRole}
        />
        :<p>{currentRole}</p>} 
        {admin && role!=='Project Leader' && !editRole && <AiOutlineEdit onClick={()=>setEditRole(true)}/>}
      </li>
      <li className="col-span-3 p-3 flex items-center">
        {admin
        ?<SelectInput 
          options={['Admin', 'Can Edit', 'Only View']} 
          value={currPermission} 
          onChange={changePermission}
          color="white"
        />
        :<p className="p-2 bg-dark-white rounded-md drop-shadow text-center">{permission}</p>
      }
      </li>
      {admin && role!=='Project Leader' && 
        <li className="cursor-pointer col p-3 flex justify-center items-center text-xl md:text-2xl text-[#FF0000]">
          <AiFillDelete className="hover:drop-shadow-lg"/>
        </li>
      }
    </ul>
  )
}

const People = ({admin})=>{
  const paths = [{name:"Teams", to:"/teams"}, {name:"Team Sekrum"}];
  const [searchQuery, setSearchQuery] = useState("");
  const setQuery = (query)=>setSearchQuery(query);
  const [sortFilters, setSortFilters] = useState([]);
  const setFilters = (filters)=>setSortFilters(filters);
  const [addPeople, setAddPeople] = useState(false);
  const addPeopleHandler = (e)=>{
    console.log(e);
    setAddPeople(false);
  }
  return (
      <DashboardLayout>
        {addPeople && <PeopleModal 
          show={addPeople} 
          onHideModal={()=>setAddPeople(false)} 
          onSubmit={addPeopleHandler}
        />}
        <Title size='lg'>Team Sekrum</Title>
        <Breadcrumbs paths={paths}/>
        <TeamHeader name='sekrum'/>
        <div className="flex flex-col md:flex-row justify-between items-start mt-4 md:mt-8 gap-2 md:gap-0">
          <SearchFilter 
            name='Member' 
            filters={['Last Updated', 'Name']} 
            submit={setQuery}
            chooseFilters={setFilters}
          />
          {admin && <Button color='dark-purple' onClick={()=>setAddPeople(true)}>Add Member</Button>}
        </div>
        <div className="z-10 p-2 mt-2 w-100 border">
          <div className="border-b">
            <ul className="grid grid-cols-10 font-bold">
              <li className="col-span-3 p-3 text-left mr-10">Member Name</li>
              <li className="col-span-3 p-3 text-left mr-10">Role</li>
              <li className="col-span-3 p-3 text-left mr-10">Permission</li>
              {admin && <li className="col p-3 text-left">Action</li>}  
            </ul>
          </div>    
          <div>
            {members.map((member, key)=>{
              return <PeopleRow 
                key={key}
                name={member.name}
                role={member.role}
                permission={member.permission}
                image={member.image}
                email={member.email}
                admin={admin}
              />
            })}
          </div>
        </div>
      </DashboardLayout>
  );
}

export default People;