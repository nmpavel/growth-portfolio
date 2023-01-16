import { useEffect, useState } from "react";
import Image from "next/image";
import style from "./ExhibitionCard.module.css"

const ExhibitionCard=({picture})=>{
    const[showText, setShowText]=useState(false);
    return(
        <div key={picture.id} className={style.container} onMouseEnter={()=>setShowText(true)} onMouseLeave={()=>setShowText(false)} >
                        
        <Image
        alt="Exhibition Pictures"
        className={style.img}
        src={picture.path} 
        width={500}
        height={300}
        />
      {
        showText && <div  className={style.captionContainer}> <p className={style.caption}>{picture.caption}</p> </div>
      } 
    </div>
    )
}
export default ExhibitionCard;