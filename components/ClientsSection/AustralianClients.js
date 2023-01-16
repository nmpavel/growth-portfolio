import Image from "next/image";
import { useEffect, useState } from "react";
import { getAustralianClients } from "../../services/clientsServices";
import PhotoCard from "./PhotoCard";

const AustralianClients=()=>{
  const [pictures, setPictures] = useState([]);

  useEffect(() => {
    getAustralianClients()
    .then((data)=>setPictures(data))
  }, []);

  return (
    <div
      className="grid gap-6 grid-cols-2 md:grid-cols-3 mt-6 md:mt-0 md:ml-20 lg:ml-28
         bg-blue-500  "
    >
      {pictures.map((picture) => {
        return (
          <PhotoCard key={picture.id} picture={picture} />
        );
      })}
    </div>
  );
}
export default AustralianClients;
