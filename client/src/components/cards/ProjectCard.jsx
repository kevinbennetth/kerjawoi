const ProjectCard = (props)=>{
    return (
        <a className="z-0 px-8 py-5 w-[23vw] flex flex-col bg-white drop-shadow-lg">
            <h2 className="lg:text-2xl font-bold mb-2">{props.name}</h2>
            <p className="text-xs lg:text-base mb-2">{props.desc}</p>
        </a>
    )
}

export default ProjectCard;