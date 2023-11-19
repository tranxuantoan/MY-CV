interface Educationtype {
    title: string;
    desc: string;
    time: string;

}

const Educations = ({title, desc, time}: Educationtype)=>{
    return (
             <div className="content flex justify-between flex-1 my-[25px]">
                    <div className="content_wrapper">
                        <h3 className="font-bold">{title}</h3>
                        <p className="text-gray-400 italic">{desc}</p>
                    </div>
                    <div className="text-gray-400">
                        {time}
                    </div>
             </div>
    )
}

export default Educations