import React from 'react';
import style from "./SecondSection.module.css";

const Button = ({selectedTab, setSelectedTab, Label, TabName}) => {
  return (
    <button
    onClick={() => setSelectedTab(TabName)}
    className={`${style.btn}
    ${
     selectedTab === TabName
       ? `${style.if}`
       : `${style.ifNot}`
   }`}
  >
    {Label}
  </button>
  )
}

export default Button