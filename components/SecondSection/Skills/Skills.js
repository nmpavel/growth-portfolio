import { useEffect, useState } from "react";
import { getSkills } from "../../../services/secondSectionServices";
import style from "./Skills.module.css"

const Skills=()=>{
  const [skills, setSkills] = useState([]);

  useEffect(() => {
      getSkills()
      .then((data) => setSkills(data));
  }, []);

  return (
    <div className={style.container}>
      {skills.map((skill) => {
        return (

          <div key={skill.id} className=" space-y-6 ">
            <div className="flex justify-between ">
              <p>{skill.name}</p>
              <p className="text-myColor-100">{skill.progress}%</p>
            </div>
            
            {/* Progress Bar Section */}
            <div className={style.progressBar}>
              <div
                className={style.bar}
                style={{ width: `${skill.progress}%` }}
              ></div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default Skills;