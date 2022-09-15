import { BsArrowRightCircle } from "react-icons/bs";

const DeadlineCard = ({team, desc, date, time, purpose, attendees, link})=>{
    return (
        <div className="mt-7 p-5 border-Gray border rounded-md">
            <h3 className="text-xl font-bold mb-2">{team}</h3>
            <h4 className="mb-2 font-medium">{desc}</h4>
            <span className={`font-medium ${purpose==='task' && 'text-[#FF0000]'}`}>{date} • {time}</span>
            <div className={`mt-5 flex ${purpose==='meeting'?"justify-between":"justify-end"}`}>
                {purpose==='meeting' && <p className="text-Gray text-sm">{attendees} Participant(s)</p>}
                <a href={link?link:"#"} className={`flex gap-2 items-center font-semibold ${purpose==='task'?'text-Orange':'text-bright-purple'}`}>
                    View Details <BsArrowRightCircle/>
                </a>
            </div>
        </div>
    )
};

export default DeadlineCard;