import { useState } from "react";
import AustralianClients from "./AustralianClients";
import WorldWideClients from "./WorldWideClients";
import style from "./ClientsSection.module.css";
import ButtonClientSection from "./ButtonClientSection";

export default function ClientsSection() {
  const [tab, setTab] = useState("Worldwide");
  return (
    <div className={style.container}>


      {/* Text Division */}
      <div className="space-y-12">
        <div className="space-y-4">
          <p className={style.heading}>
            MY HONORABLE
          </p>
          <h2 className={style.clients}>Clients</h2>
        </div>

        {/* Buttons Division */}
        <div className={style.btnDiv}>
        <ButtonClientSection
          selectedTab={tab}
          setSelectedTab={setTab}
          TabName="Worldwide"
          Label="WORLDWIDE"
        />
         <ButtonClientSection
          selectedTab={tab}
          setSelectedTab={setTab}
          TabName="Australia"
          Label="AUSTRALIA"
        />
        </div>
      </div>
      
      {/* Photos Container */}
      <div>
        {tab === "Worldwide" && <WorldWideClients/>}
        {tab === "Australia" && <AustralianClients/>}
      </div>
    </div>
  );
}
