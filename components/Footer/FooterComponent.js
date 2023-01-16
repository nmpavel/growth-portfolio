import Link from "next/link";
import React from "react";

const FooterComponent=({ link, label })=> {
  return (
    <li className="w-full py-2 border-b-2 border-gray-700 transition-all duration-300 hover:text-myColor-100 md:border-none">
      <Link href={link}>{label}</Link>
    </li>
  );
}
export default FooterComponent
