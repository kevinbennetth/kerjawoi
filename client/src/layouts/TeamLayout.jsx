import Breadcrumbs from "../components/utils/Breadcrumbs";
import TeamHeader from "../components/content/TeamHeader";
import Title from "../components/utils/Title";
import { Outlet } from "react-router-dom";

const TeamLayout = () => {
  const paths = [{ name: "Teams", to: "/teams" }, { name: "Team Sekrum" }];
  return (
    <>
      <Title size="lg">Team Sekrum</Title>
      <Breadcrumbs paths={paths} />
      <TeamHeader name="sekrum" />
      <Outlet />
    </>
  );
};

export default TeamLayout;
