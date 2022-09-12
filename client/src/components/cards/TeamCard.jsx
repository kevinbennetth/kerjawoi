import PeopleList from "../content/PeopleList";

const TeamCard = (props)=>{
    return (
        <a href={`/teams/${props.name}/projects`} className="z-0 px-8 py-5 w-[23vw] flex flex-col bg-white drop-shadow-lg">
            <h2 className="lg:text-2xl font-bold mb-2">{props.name} Team</h2>
            <h6 className="text-xs lg:text-base mb-2">Lead : {props.lead}</h6>
            <h6 className="text-xs lg:text-base mb-2">Member : {props.people.length} people</h6>
            <h6 className="text-xs lg:text-base mb-2">Last Updated : {props.last_update}</h6>
            <PeopleList people={props.people} limit={4}/>
        </a>
    )
}

export default TeamCard;