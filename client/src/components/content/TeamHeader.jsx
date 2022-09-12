const TeamHeader = ({name})=>{
    return (
        <ul className="flex gap-40 mt-8 pb-4 font-bold border-b-2 border-black">
            <li><a href={`/teams/${name}/projects`}>Projects</a></li>
            <li><a href={`/teams/${name}/people`}>People</a></li>
            <li><a href={`/teams/${name}/meetings`}>Meetings</a></li>
            <li><a href={`/teams/${name}/settings`}>Settings</a></li>
        </ul>
    )
}

export default TeamHeader;