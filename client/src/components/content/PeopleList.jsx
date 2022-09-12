const PeopleList = ({people, limit})=>{
    return (
        <span className="flex mt-2">
            {people.slice(0,limit).map((person, key)=>{
                if(key==0){
                    return <img src={person} key={key} className='w-10 h-10 rounded-full'/>
                }else{
                    return <img src={person} key={key} className='w-10 h-10 rounded-full -ml-5'/>
                }
            })}
            {people.length>limit && <div className='-ml-5 w-10 h-10 flex justify-center items-center rounded-full bg-Orange text-lg text-white font-semibold'>+{people.length-limit}</div>}
        </span>
    )
}

export default PeopleList;