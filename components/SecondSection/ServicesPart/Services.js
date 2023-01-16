import Image from "next/image";
import { useEffect, useState } from "react";
import { getServices } from "../../../services/secondSectionServices";
import style from "./Services.module.css"

const Services=()=>{
  const [services, setServices] = useState([]);

  useEffect(() => {
    getServices()
    .then((data)=>setServices(data));
  }, []);

  return (
    <div className={style.container}>
        {
            services.map((service)=>{
                return(
                    <div key={service.id} className={style.innerContainer}>
                        
                        <div>
                            <Image
                            alt="Services Logo"
                            src={service.logo}
                            width={40}
                            height={50}
                            />
                        </div>

                        <div className="space-y-6">
                            <p className="text-xl font-semibold">{service.name}</p>
                            <p>{service.description}</p>
                        </div>
                    
                    </div>

                )
            })
        }
    </div>
  )
}
export default Services;