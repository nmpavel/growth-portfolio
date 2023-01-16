import Image from "next/image";
import Introduction from "./Introduction";
import Navbar from "./Navbar";

export default function FirstSection() {
  return (
    
      <div className=" text-white w-full bg-blue-500 ">
        {/* <Image
          src="/Group-27.png"
          alt="Colours"
          layout="fill"
          objectFit="cover"
        /> */}
      
      <Navbar/>
      <Introduction/>
    </div>
  );
}
