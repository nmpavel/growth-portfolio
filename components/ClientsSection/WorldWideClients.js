import Image from "next/image";
import { useEffect, useState } from "react";
import { getWorldwideClients } from "../../services/clientsServices";

import PhotoCard from "./PhotoCard";

const WorldWideClients=()=>{

    const [pictures,setPictures]=useState([]);
    
    useEffect(() => {
        getWorldwideClients()
        .then((data)=>setPictures(data))
      }, []);


    return(
        <div className="grid gap-6 grid-cols-2 md:grid-cols-3 my-6 md:ml-20 lg:ml-28
        bg-blue-500">
          {
            pictures.map((picture)=>{
                return(
                    <PhotoCard key={picture.id} picture={picture} />
                )
            })
          }

        </div>
    )
}
export default WorldWideClients;