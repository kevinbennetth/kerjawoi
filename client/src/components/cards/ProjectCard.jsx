import { Link } from "react-router-dom";

const ProjectCard = (props) => {
  return (
    <Link
      to={`/${props.name}`}
      className="z-0 px-8 py-5 w-[23vw] flex flex-col bg-white drop-shadow-lg"
    >
      <h2 className="lg:text-2xl font-bold mb-2">{props.name}</h2>
      <p className="text-xs lg:text-base mb-2">{props.desc}</p>
    </Link>
  );
};

export default ProjectCard;
