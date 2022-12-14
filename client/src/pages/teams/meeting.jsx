import { useEffect, useState } from "react";
import Button from "../../components/utils/Button";
import PageIndicator from "../../components/utils/PageIndicator";
import SearchFilter from "../../components/input/SearchFilter";
import MeetingCard from "../../components/cards/MeetingCard";

const projects = [
  {
    name: "PapiKatering",
    desc: "Papi Katering is a Food Catering Web Application that is developed using MERN Stack",
  },
  {
    name: "Shoplexify",
    desc: "A Multi-page Online Shop Web Application that is developed using Flask as Backend and Bootstrap as Frontend",
  },
  { name: "KerjaWOI", desc: "A Project Management Web Application" },
];

const Meeting = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const setQuery = (query) => setSearchQuery(query);
  const [sortFilters, setSortFilters] = useState([]);
  const setFilters = (filters) => setSortFilters(filters);
  const [allProjects, setAllProjects] = useState([]);
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
    let res = [...projects, ...projects, ...projects, ...projects, ...projects];
    setAllProjects(res);
    if (res.length % 6 === 0) {
      setPages(res.length / 6);
    } else {
      setPages((res.length + (6 - (res.length % 6))) / 6);
    }
  }, [current]);
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-start mt-4 md:mt-8 gap-2 md:gap-0">
        <SearchFilter
          name="Meeting"
          filters={["Last Updated", "Name"]}
          submit={setQuery}
          chooseFilters={setFilters}
        />
        <Button color="dark-purple">Add Meeting</Button>
      </div>
      <div className="z-10 flex flex-row gap-10 flex-wrap justify-center p-2 mt-2">
        {allProjects
          .slice((current - 1) * 6, current * 6)
          .map((project, key) => (
            <MeetingCard key={key} />
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

export default Meeting;
