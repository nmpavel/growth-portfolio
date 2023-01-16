import Image from "next/image";
import Link from "next/link";
import FooterComponent from "./FooterComponent";
import style from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={style.container}>

      {/* Text & Logo Container */}
      <div className={style.textLogoContainer}>
        <div>
          <Image src="/Logo.png" alt="Logo" width={150} height={200} className="mb-16" />
        </div>

        <p className={style.para1}>Let's Talk ?</p>
        <button className={style.btn}>LET'S CHAT</button>
      </div>

      {/* Navigation Button Container */}
      <div className={style.navContainer}>
        
          <ul className={style.navDiv}>
            <FooterComponent link={"/"} label="HOME" />
            <FooterComponent link={"/price"} label="PRICE" />
            <FooterComponent link={"/shop"} label="SHOP" />
            <FooterComponent link={"/blog"} label="BLOG" />
            <FooterComponent link={"/contact"} label="CONTACT" />
          </ul>
        

        <p className={style.para2}>Copyright By@Example-2022</p>
      </div>
    </div>
  );
}
