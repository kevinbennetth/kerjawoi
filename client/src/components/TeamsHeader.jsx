import { AiFillProject } from "react-icons/ai";
import { BsFillPersonFill, BsFillCameraVideoFill, BsGearFill } from "react-icons/bs";


const TeamsHeader = () => {
    return (
        <div className="header sticky">
            <h1 className="font-bold text-4xl mb-2">Team Sekrum</h1>

            <div className="breadcrumb font-medium text-Gray">Teams  > Team Sekrum</div>

            <ul className="navbar flex border-b-2 mt-12">
                <li className="flex items-center 
                font-bold text-lg text-Gray 
                mr-32 pb-2 border-b-4 border-transparent
                hover:border-b-4 hover:border-dark-purple hover:text-dark-purple hover:fill-dark-purple">
                    <AiFillProject className="w-5 h-5 fill-Gray"/> <span className="ml-1">Projects</span>
                </li>
                <li className="flex items-center 
                font-bold text-lg text-Gray 
                mr-32 pb-2 border-b-4 border-transparent
                hover:border-b-4 hover:border-dark-purple hover:text-dark-purple hover:fill-dark-purple">
                    <BsFillPersonFill className="w-5 h-5 fill-Gray"/> <span className="ml-1">People</span>
                </li>
                <li className="flex items-center 
                font-bold text-lg text-Gray 
                mr-32 pb-2 border-b-4 border-transparent
                hover:border-b-4 hover:border-dark-purple hover:text-dark-purple hover:fill-dark-purple">
                    <BsFillCameraVideoFill className="w-5 h-5 fill-Gray"/> <span className="ml-1">Meeting</span>
                </li>
                <li className="flex items-center 
                font-bold text-lg text-Gray 
                mr-32 pb-2 border-b-4 border-transparent
                hover:border-b-4 hover:border-dark-purple hover:text-dark-purple hover:fill-dark-purple">
                    <BsGearFill className="w-5 h-5 fill-Gray"/> <span className="ml-1">Settings</span>
                </li>
            </ul>
        </div>
    )
}

export default TeamsHeader;