
import { useEffect, useState } from "react";
import { getAwards } from "../../../services/secondSectionServices";
import AwardCard from "./AwardCard";
import style from "./Awards.module.css";

const Awards=()=>{
  const [awards, setAwards] = useState([]);

  useEffect(() => {
      getAwards()
      .then((data) => setAwards(data));
  }, []);

  return (
    <div className={style.container}>
        {
            awards.map((award)=>{
                return(
                    <AwardCard key={award.id} award={award} />
                )
            })
        }
    </div>
  )
}
export default Awards;
