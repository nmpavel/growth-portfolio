import { useState } from "react";
import style from "./ProjectCard.module.css";

export default function ProjectCard({ project }) {
  const [hovered, setHovering] = useState(false);

  

  return (
    <div
      key={project?.id}
      className={style.container}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      {/* Image Container */}
      <div className={style.imgContainer}>
        {hovered ? (
          <img
            src={project?.photo}
            className={style.hoveredImg}
          />
        ) : (
          <img
            src={project?.photo}
            className={style.afterHoveredImg}
          />
        )}
      </div>

      {/* Text Container */}
      <div className={style.tContainer}>
        <p className={style.stack}>{project?.stack}</p>
        <h2 className={style.name}>{project?.name}</h2>
        <p>{project?.description}</p>
        <button className={style.btn}>
          READ MORE
        </button>
      </div>
      {hovered ? (
        <div className={style.hoveredBorder}></div>
      ) : (
        <div className={style.afterHoveredBorder}></div>
      )}
    </div>
  );
}
