import Image from "next/image";
import { useEffect, useState } from "react";
import { getEmployees } from "../../services/introductionServices";
import style from "./Introduction.module.css"

const Introduction=()=>{
  const [introduction, setIntroduction] = useState();


//   Data fetching using hook

  useEffect(() => {
    getEmployees()
    .then((data)=>setIntroduction(data[0]))
  }, []);




  return (
    <div className={style.container}>
      {/* Welcoming section */}

      {
        <div className={style.wContainer}>
          <p className={style.hello}>Hello, I'm</p>

          <h1 className={style.name}>
            {introduction?.name}
          </h1>
          <p className={style.desig}>{introduction?.designation}</p>
        </div>
      }

      {/* Photo Section */}

      <div className="pr-20">
        <Image src="/Person.png" alt="Person Photo" width={800} height={400}  priority />
      </div>
    </div>
  );
}
export default Introduction;
