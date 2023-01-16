import React from "react";
import Image from "next/image";
import style from "./AwardCard.module.css"


const AwardCard=({award})=>{
  return (
    <div
      key={award.id}
      className={style.container}
    >

      {/* Image Container  */}
      <div>
        <Image alt="Awards Logo" src={award.logo} width={200} height={200} />
      </div>

      {/* Text Container */}
      <div className={style.tcontainer}>
        <p className={style.name}>{award.name}</p>
        <p>{award.description}</p>
      </div>
    </div>
  );
}
export default AwardCard;