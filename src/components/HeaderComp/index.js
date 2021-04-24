import React from "react";
import MainMenuComp from "../MainMenuComp";
//import UserInfoComp from "../UserInfoComp";
import styles from './style.module.css';

function HeaderComp() {
  return (
    <div>
      <div className={styles.mainTopHeader}>      
        <MainMenuComp />       
      </div>
    </div>
  );
}
export default HeaderComp;
