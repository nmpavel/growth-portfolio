import Image from "next/image";
import { useEffect, useState } from "react";
import { getInterviews } from "../../../services/secondSectionServices";
import style from "./Interviews.module.css";

const Interviews=()=>{
    const [interviews, setInterviews] = useState([]);

    useEffect(() => {
      getInterviews()
      .then(data => setInterviews(data));
    }, []);

  return (
    <div className={style.container}>
        {
           interviews?.map((interview)=>{
                return(
                    <div key={interview.id} className={style.innerContainer}>

                        {/* Image Container */}
                        <div>
                            <Image
                            src={interview.logo}
                            width={400}
                            height={200}
                            alt="Interview Logo"
                            className={style.img}
                            />
                        </div>

                        {/* Text Container */}
                        <div className={style.tContainer}>
                        <div className="space-y-4">
                            <p className="text-xl font-semibold">{interview.name}</p>
                            <p>{interview.description}</p>
                        </div>
                        <button className="text-myColor-100 text-xs ">SEE MORE</button>
                        </div>
                    </div>
                )
            })
        }
    </div>
  )
}
export default Interviews;