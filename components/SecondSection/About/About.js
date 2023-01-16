import Image from "next/image";
import { useEffect, useState } from "react";
import { getAbout } from "../../../services/secondSectionServices";
import style from "./About.module.css"

const About = ()=> {
  const [about, setAbout] = useState();


//   Data fetching using hook

  useEffect(() => {
    getAbout()
      .then(data => setAbout(data[0]));
  }, []);

 


  return (
     <div className={style.container}>

      {/* Image Container */}
        <div>
            <Image
            alt="About Photo"
            src={about?.photo}
            width={1500}
            height={500}
            />
        </div>

        {/* Text Container */}
        <div  className={style.tContainer}>
            <p className={style.aboutMe}>ABOUT ME</p>
            <h1  className={style.question}>{about?.question}</h1>
            <p>{about?.reason}</p>
            <p>{about?.aboutMe}</p>
            
            <button className={style.btn}>LEARN MORE</button>
            
        </div>

     </div>
  );
}
export default About;