import Link from "next/link";
import { useState } from "react";

const NavbarLink = ({ link, label }) => {
  const[click,setClick]=useState(false);
  return (
    <li className=" mr-4 " onClick={()=>setClick(true)}>
      {
        click ? (<Link
          href={link}
          className="text-myColor-100 px-2 py-4 h-full border-b-2 border-myColor-100 transition-all duration-200 "
        >
          {label}
        </Link>):(<Link
        href={link}
        className="text-white hover:text-myColor-100 px-2 py-4 h-full hover:border-b-2 hover:border-myColor-100 transition-all duration-200 "
      >
        {label}
      </Link>)
      }
    </li>
  );
};
export default NavbarLink;