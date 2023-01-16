import { useState } from "react";
import style from "./SocialMediaCard.module.css"

const SocialMediaCard=()=>{
    const[color,setColor]=useState(false);
    return(
        <button className={style.btn} onMouseEnter={()=>setColor(true)} onMouseLeave={()=>setColor(false)}>
          <div className={style.container}>

            {/* Text Container */}
            <div className={style.textContainer}>
              <p className={style.title}>LinkedIn</p>
              {
                color? <p className=" text-xs text-black ">Professinal Social Profile</p> : <p className=" text-xs text-myColor-100 ">Professinal Social Profile</p>
              }
            </div>

            {/* Icon Container */}
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                className="w-16 h-12"
              >
                <path
                  fill="mycolor-500"
                  d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                />
              </svg>
              
            </div>
          </div>
        </button>
    )
}
export default SocialMediaCard