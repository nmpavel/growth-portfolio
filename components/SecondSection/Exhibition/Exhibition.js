import { useEffect, useState } from "react";
import ExhibitionCard from "./ExhibitionCard";
import style from "./Exhibition.module.css"
import { getExhibitions } from "../../../services/secondSectionServices";

const Exhibition = () => {
  const [pictures, setPictures] = useState([]);

  useEffect(() => {
     getExhibitions()
      .then((data) => setPictures(data));
  }, []);

  return (
    <div className={style.container}>
      {pictures.map((picture) => {
        return <ExhibitionCard picture={picture} />;
      })}
    </div>
  );
};


export default Exhibition