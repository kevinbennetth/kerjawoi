import CalendarIcon from "../asset/svg/CalendarIcon";
import DashboardIcon from "../asset/svg/DashboardIcon";
import KerjaWoiIcon from "../asset/svg/KerjaWoiIcon";
import LogoutIcon from "../asset/svg/LogoutIcon";
import TeamIcon from "../asset/svg/TeamIcon";

const Navigation = () => {
  return (
    <nav className="bg-dark-purple w-1/6 min-h-screen flex flex-col justify-between">
      <div className="flex flex-col p-4">
        <div className="flex flex-row items-center gap-8 mb-8 font-bold ml-3">
          <KerjaWoiIcon />
          <h4 className="text-white text-xl">KerjaWOI</h4>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-row items-center gap-6 cursor-pointer bg-dark-blue bg-opacity-0 hover:bg-opacity-100 transition-all p-4 rounded-md">
            <DashboardIcon />
            <p className="text-white">Dashboard</p>
          </div>
          <div className="flex flex-row items-center gap-6 cursor-pointer bg-dark-blue bg-opacity-0 hover:bg-opacity-100 transition-all p-4 rounded-md">
            <TeamIcon />
            <p className="text-white">Teams</p>
          </div>
          <div className="flex flex-row items-center gap-6 cursor-pointer bg-dark-blue bg-opacity-0 hover:bg-opacity-100 transition-all p-4 rounded-md">
            <CalendarIcon />
            <p className="text-white">Calendar</p>
          </div>
          <div className="flex flex-row items-center gap-6 cursor-pointer bg-dark-blue bg-opacity-0 hover:bg-opacity-100 transition-all p-4 rounded-md">
            <LogoutIcon />
            <p className="text-white">Logout</p>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center gap-6 p-4 border-t-[1px] border-dark-blue border-opacity-80">
        <img
          src="https://cdn10.bostonmagazine.com/wp-content/uploads/sites/2/2021/08/rubber-duck-stock-fb.jpg"
          alt="Profile" 
          className="rounded-full aspect-square object-cover w-1/4"
        />
        <div className="flex flex-col gap-1 text-white w-3/4">
          <h4 className="text-md font-semibold">John Doe</h4>
          <p className="text-xs font-light cursor-pointer">View Profile</p>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
