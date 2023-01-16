import React from "react";
import style from "./ClientsSection.module.css";

const ButtonClientSection = ({
  selectedTab,
  setSelectedTab,
  Label,
  TabName,
}) => {
  return (
    <button
      onClick={() => setSelectedTab(TabName)}
      className={`text-xs md:text-sm transition-all duration-500 hover:text-myColor-100 m-2
          ${selectedTab === TabName ? "text-myColor-100" : "text-white"}`}
    >
      {Label}
    </button>
  );
};

export default ButtonClientSection;
