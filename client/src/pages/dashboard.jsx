import '../assets/css/scrollbar.css';
import DashboardLayout from "../layouts/DashboardLayout";
import Title from "../components/utils/Title";
import DeadlineCard from "../components/cards/DeadlineCard";

const meetings = [
  {team: 'Team Cockroach', desc:"Discussion on how to escape the Bad Place", date:'13 September 2022', time:'12.00 - 13.30', attendees:13},
  {team: 'Team Gru', desc:"Discussion on how to build a spaceship to steal the MOON!!", date:'14 September 2022', time:'14.00 - 17.30', attendees:15},
]

const deadlines = [
  { team: 'Team Cockroach', desc:"Discussion on how to escape the Bad Place", date:'17 September 2022', time:'22.30'},
  { team: 'Team Shawn', desc:"Discussion on how to torture Quentin Tarantino", date:'21 December 2022', time:'13.30'},
  { team: 'Team Tarantino', desc:"Discussion on the final movie ", date:'13 November 2022', time:'14.00'},
]

const DeadlineBoard = ({title, deadlines, purpose})=>{
  return (
    <div className="px-2 max-h-screen overflow-y-auto scroll-smooth scrollbar">
      <Title size='md'>{title}</Title>
      {deadlines.map((val, key)=>{
        return <DeadlineCard 
          key={key}
          team={val.team} 
          desc={val.desc} 
          date={val.date}
          time={val.time} 
          purpose={purpose}
          attendees={val?.attendees}
        />
      })}
    </div>
  )
}

const Dashboard = ()=>{
    return (
        <DashboardLayout>
          <Title size='sm'>Welcome, John!</Title>
          <h2 className="py-5 border-b border-Gray text-lg">
            Here are the upcoming events for you
          </h2>
          <div className="mt-10 flex justify-around">
            <DeadlineBoard title='Meetings' deadlines={[...meetings, ...meetings]} purpose='meeting'/>
            <DeadlineBoard title='Deadlines' deadlines={deadlines} purpose='task'/>
          </div>
        </DashboardLayout>
    );
}

export default Dashboard;