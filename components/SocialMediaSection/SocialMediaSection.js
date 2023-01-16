import SocialMediaCard from "./SocialMediaCard";
import style from "./SocialMediaSection.module.css"

export default function SocialMediaSection() {


  return (
    <div className={style.container}>

      {/* Section Description */}
      <div className="space-y-4">
        <p className={style.para}>
          SOCIAL MEDIA
        </p>
        <h1 className={style.let}>Let's Be Friends</h1>
      </div>

      {/* Section Cards */}
      <div className={style.cards}>
         {
          [0,1,2,3,4,5].map((i)=>{
            return(
              <SocialMediaCard key={i} />
            )
          })
         }                
      </div>
    </div>
  );
}
