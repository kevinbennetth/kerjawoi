import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import TeamsHeader from '../components/TeamsHeader';
import MeetingCard from '../components/MeetingCard';

const Meetings = () => {
    return (
        <div className="meeting mx-8 my-12">
            <TeamsHeader />

            <div className="subheader">
                
            </div>
            <div className="list-meeting">
                <MeetingCard />
                <MeetingCard />
                <MeetingCard />
            </div>

            <div className="footer flex justify-end">
                <div className="pagination flex justify-center items-center">
                    <FiChevronLeft className="w-8 h-8"/>

                    <button className="w-12 h-12 mx-2
                    flex justify-center items-center rounded-md 
                    text-xl font-semibold text-dark-purple
                    hover:bg-dark-purple hover:text-white">1</button>
                    <button className="w-12 h-12 mx-2
                    flex justify-center items-center rounded-md
                    text-xl font-semibold text-white bg-dark-purple">2</button>
                    <button className="w-12 h-12 mx-2
                    flex justify-center items-center rounded-md
                    text-xl font-semibold text-dark-purple
                    hover:bg-dark-purple hover:text-white">3</button>

                    <FiChevronRight className="w-8 h-8"/>
                </div>
            </div>
        </div>
    )
}

export default Meetings;