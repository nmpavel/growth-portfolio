import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import CommonButton from "../CommonButton";
import DrawerLink from "./DrawerLink";
import NavbarLink from "./NavbarLink";
import style from "./Navbar.module.css"

function Navbar() {
  const [click, setClick] = useState(false);

  return (
    <div className={style.container}>
      <nav className={style.navBar}>
        <div className={style.innerDiv}>
          <div>
            <Link href="/" className=" cursor-pointer ">
              <Image src="/Logo.png" alt="Logo" width={144} height={144} />
            </Link>
          </div>

          {/* Optional Navigation */}
          <div className={style.nammedNav}>
            <div className=" hidden lg:block ">
              <ul className="flex list-none text-left">
                <NavbarLink link={"/"} label={"HOME"} />
                <NavbarLink link={"/price"} label={"PRICE"} />
                <NavbarLink link={"/shop"} label={"SHOP"} />
                <NavbarLink link={"/blog"} label={"BLOG"} />
                <NavbarLink link={"/contact"} label={"CONTACT"} />
              </ul>
            </div>

            <CommonButton link={"/contact"} label={"LET'S CHAT"} />

           
           {/* Conditional Navigation */}
            <div>
              <button
                className={style.drawer}
                onClick={() => setClick(true)}
              >
                ☰
              </button>

              {click === true && (
                <div className={style.topBar}>

                  {/* Common Logo & Button */}
                  <div className={style.commonDiv}>
                    <Link href="/" className=" cursor-pointer ">
                      <Image src="/Logo.png" alt="Logo" width={144} height={144} />
                    </Link>

                    <div className="flex items-center space-x-4">
                      <CommonButton link={"/contact"} label={"LET'S CHAT"} />
                      <button
                        className={style.cross}
                        onClick={() => setClick(false)}
                      >
                        ×
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col ">
                    <DrawerLink link={"/"} label={"Home"} />
                    <DrawerLink link={"/price"} label={"Price"} />
                    <DrawerLink link={"/shop"} label={"Shop"} />
                    <DrawerLink link={"/blog"} label={"Blog"} />
                    <DrawerLink link={"/contact"} label={"Contact"} />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
