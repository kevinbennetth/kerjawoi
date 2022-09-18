import { useEffect, useState } from "react";
import Breadcrumbs from "../../components/utils/Breadcrumbs";
import Button from "../../components/utils/Button";
import PageIndicator from "../../components/utils/PageIndicator";
import SearchFilter from "../../components/input/SearchFilter";
import TeamCard from "../../components/cards/TeamCard";
import TeamModal from "../../components/modal/TeamModal";
import Title from "../../components/utils/Title";

const teams = [
  {
    name: "Do Stuff",
    lead: "Mr. Nobody",
    last_update: "25th May 2022",
    people: [
      "https://randomuser.me/api/portraits/men/46.jpg",
      "https://randomuser.me/api/portraits/men/6.jpg",
      "https://randomuser.me/api/portraits/men/36.jpg",
      "https://randomuser.me/api/portraits/women/46.jpg",
      "https://randomuser.me/api/portraits/women/21.jpg",
      "https://randomuser.me/api/portraits/men/12.jpg",
      "https://randomuser.me/api/portraits/women/6.jpg",
      "https://randomuser.me/api/portraits/women/29.jpg",
    ],
  },
  {
    name: "Apple",
    lead: "Mrs. Appleman",
    last_update: "23rd June 2022",
    people: [
      "https://randomuser.me/api/portraits/women/46.jpg",
      "https://randomuser.me/api/portraits/women/6.jpg",
      "https://randomuser.me/api/portraits/women/36.jpg",
      "https://randomuser.me/api/portraits/men/46.jpg",
    ],
  },
];

const Teams = () => {
  const paths = [{ name: "Teams" }];
  const [searchQuery, setSearchQuery] = useState("");
  const setQuery = (query) => setSearchQuery(query);
  const [sortFilters, setSortFilters] = useState([]);
  const setFilters = (filters) => setSortFilters(filters);
  const [allTeams, setAllTeams] = useState([]);
  const [pages, setPages] = useState(1);
  const [current, setCurrent] = useState(1);
  const prevPage = () => {
    if (current > 1) {
      setCurrent(current - 1);
    }
  };
  const nextPage = () => {
    if (current < pages) {
      setCurrent(current + 1);
    }
  };
  useEffect(() => {
    let res = [
      ...teams,
      ...teams,
      ...teams,
      ...teams,
      ...teams,
      ...teams,
      ...teams,
      ...teams,
      ...teams,
      ...teams,
      ...teams,
    ];
    setAllTeams(res);
    if (res.length % 6 === 0) {
      setPages(res.length / 6);
    } else {
      setPages((res.length + (6 - (res.length % 6))) / 6);
    }
  }, [current]);
  const [addTeam, setAddTeam] = useState(false);
  const addTeamHandler = (e) => {
    console.log(e);
    setAddTeam(false);
  };
  return (
    <>
      <TeamModal
        show={addTeam}
        onHideModal={() => setAddTeam(false)}
        onSubmit={addTeamHandler}
      />
      <Title size="lg">Teams</Title>
      <Breadcrumbs paths={paths} />
      <div className="flex flex-col md:flex-row justify-between items-start mt-4 md:mt-8 gap-2 md:gap-0">
        <SearchFilter
          name="Team"
          filters={["Last Updated", "Name"]}
          submit={setQuery}
          chooseFilters={setFilters}
        />
        <Button color="dark-purple" onClick={() => setAddTeam(true)}>
          Add Team
        </Button>
      </div>
      <div className="z-10 flex flex-row gap-10 flex-wrap justify-center p-2 mt-2">
        {allTeams.slice((current - 1) * 6, current * 6).map((team, key) => (
          <TeamCard
            key={key}
            name={team.name}
            lead={team.lead}
            people={team.people}
            last_update={team.last_update}
          />
        ))}
      </div>
      <PageIndicator
        pages={pages}
        current={current}
        prev={prevPage}
        next={nextPage}
      />
    </>
  );
};

export default Teams;
