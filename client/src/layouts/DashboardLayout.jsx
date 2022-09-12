import CalendarIcon from "../asset/svg/CalendarIcon";
import DashboardIcon from "../asset/svg/DashboardIcon";
import KerjaWoiIcon from "../asset/svg/KerjaWoiIcon";
import LogoutIcon from "../asset/svg/LogoutIcon";
import TeamIcon from "../asset/svg/TeamIcon";

const DashboardLayout = ({ children }) => {
  return (
    <div className="lg:grid lg:grid-cols-6 w-100 min-h-screen h-auto">
      <nav className="bg-dark-purple lg:col-span-1 h-100 flex flex-col justify-between">
        <div className="flex flex-col p-4">
          <a
            href="/"
            className="flex flex-row items-center gap-8 mb-8 font-bold ml-3"
          >
            <KerjaWoiIcon />
            <h4 className="text-white text-xl">KerjaWOI</h4>
          </a>
          <div className="flex flex-col gap-4">
            <a
              href="/"
              className="flex flex-row items-center gap-6 cursor-pointer bg-dark-blue bg-opacity-0 hover:bg-opacity-100 transition-all p-4 rounded-md"
            >
              <DashboardIcon />
              <p className="text-white">Dashboard</p>
            </a>
            <a
              href="teams"
              className="flex flex-row items-center gap-6 cursor-pointer bg-dark-blue bg-opacity-0 hover:bg-opacity-100 transition-all p-4 rounded-md"
            >
              <TeamIcon />
              <p className="text-white">Teams</p>
            </a>
            <a
              href="calendar"
              className="flex flex-row items-center gap-6 cursor-pointer bg-dark-blue bg-opacity-0 hover:bg-opacity-100 transition-all p-4 rounded-md"
            >
              <CalendarIcon />
              <p className="text-white">Calendar</p>
            </a>
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
            <a href="profile" className="text-xs font-light cursor-pointer">
              View Profile
            </a>
          </div>
        </div>
      </nav>
      <div className="lg:col-span-5 p-10 bg-[#F9F9F9]">{children}</div>
    </div>
  );
};

export default DashboardLayout;
