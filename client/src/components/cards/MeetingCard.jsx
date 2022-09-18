import { AiFillCalendar } from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";
import { HiClock } from "react-icons/hi";
import ProfilePic from "../../assets/profilePicZoomed.png";
import Button from "../utils/Button";

const MeetingCard = () => {
  return (
    <div
      className="meeting-card grid grid-cols-12 items-center 
        px-8 py-4 my-8 rounded-lg shadow-[0_4px_8px_rgba(0,0,0,0.25)]"
    >
      <div className="details col-span-3 min-w-[200px]">
        <h5 className="text-2xl font-semibold">Meeting Title</h5>
        <span className="flex items-center text-lg font-medium">
          <AiFillCalendar className="w-5 h-5 fill-Gray mr-4" />
          Online
        </span>
        <span className="flex items-center text-lg font-medium">
          <MdLocationOn className="w-5 h-5 fill-Gray mr-4" />
          Very Long Address
        </span>
        <span className="flex items-center text-lg font-medium">
          <HiClock className="w-5 h-5 fill-Gray mr-4" />
          10.00 - 12.00
        </span>
      </div>

      <div className="members flex flex-wrap col-span-7 min-w-[300px]">
        <img
          className="rounded-full w-16 h-16 m-2 shadow-sm object-fill"
          src={ProfilePic}
          alt="Picture of Me"
        />
        <img
          className="rounded-full w-16 h-16 m-2 shadow-sm object-fill"
          src={ProfilePic}
          alt="Picture of Me"
        />
        <img
          className="rounded-full w-16 h-16 m-2 shadow-sm object-fill"
          src={ProfilePic}
          alt="Picture of Me"
        />
        <img
          className="rounded-full w-16 h-16 m-2 shadow-sm object-fill"
          src={ProfilePic}
          alt="Picture of Me"
        />
        <img
          className="rounded-full w-16 h-16 m-2 shadow-sm object-fill"
          src={ProfilePic}
          alt="Picture of Me"
        />
        <img
          className="rounded-full w-16 h-16 m-2 shadow-sm object-fill"
          src={ProfilePic}
          alt="Picture of Me"
        />
        <img
          className="rounded-full w-16 h-16 m-2 shadow-sm object-fill"
          src={ProfilePic}
          alt="Picture of Me"
        />
        <img
          className="rounded-full w-16 h-16 m-2 shadow-sm object-fill"
          src={ProfilePic}
          alt="Picture of Me"
        />
        <img
          className="rounded-full w-16 h-16 m-2 shadow-sm object-fill"
          src={ProfilePic}
          alt="Picture of Me"
        />
        <img
          className="rounded-full w-16 h-16 m-2 shadow-sm object-fill"
          src={ProfilePic}
          alt="Picture of Me"
        />
        <img
          className="rounded-full w-16 h-16 m-2 shadow-sm object-fill"
          src={ProfilePic}
          alt="Picture of Me"
        />
        <img
          className="rounded-full w-16 h-16 m-2 shadow-sm object-fill"
          src={ProfilePic}
          alt="Picture of Me"
        />
      </div>

      <div className="button-container col-span-2 min-w-[100px]">
        <Button
          text="Link"
          className="rounded-md drop-shadow-[4px_4px_0px_rgba(0,0,0,0.5)] 
                    font-bold bg-dark-purple text-white text-lg
                    py-2 px-8 w-full mb-4
                    hover:bg-dark-blue active:drop-shadow-none active:translate-x-1 active:translate-y-1"
        />
      </div>
    </div>
  );
};

export default MeetingCard;
