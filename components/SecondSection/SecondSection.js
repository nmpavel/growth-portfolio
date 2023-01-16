import { useState } from "react";
import About from "./About/About";
import Awards from "./Awards/Awards";
import Button from "./ButtonSecondSection";
import Exhibition from "./Exhibition/Exhibition";
import Interviews from "./Interviews/Interviews";
import style from "./SecondSection.module.css";
import Services from "./ServicesPart/Services";
import Skills from "./Skills/Skills";

export default function SecondSection() {
  const [tab, setTab] = useState("About");

  return (
    <div className={style.container}>
      {/* The Navigation Bar */}
      <div className={style.navBar}>
        <Button
          selectedTab={tab}
          setSelectedTab={setTab}
          TabName="About"
          Label="ABOUT"
        />

        <Button
          selectedTab={tab}
          setSelectedTab={setTab}
          TabName="Skills"
          Label="SKILLS"
        />
        <Button
          selectedTab={tab}
          setSelectedTab={setTab}
          TabName="Service"
          Label="SERVICE"
        />
        <Button
          selectedTab={tab}
          setSelectedTab={setTab}
          TabName="Interview"
          Label="INTERVIEW"
        />
        <Button
          selectedTab={tab}
          setSelectedTab={setTab}
          TabName="Award"
          Label="AWARD"
        />
        <Button
          selectedTab={tab}
          setSelectedTab={setTab}
          TabName="Exhibition"
          Label="EXHIBITION"
        />
      </div>

      {/* The container which changes according to the button clicked */}

      <div>
        {tab == "About" && <About />}
        {tab == "Skills" && <Skills />}
        {tab == "Service" && <Services />}
        {tab == "Interview" && <Interviews />}
        {tab == "Award" && <Awards />}
        {tab == "Exhibition" && <Exhibition />}
      </div>
    </div>
  );
}
