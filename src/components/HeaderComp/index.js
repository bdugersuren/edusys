import React from "react";
import MainMenuComp from "../MainMenuComp";
import UserInfoComp from "../UserInfoComp";

function HeaderComp() {
  return (
    <div className="mainTopHeader">
      <div>
        <MainMenuComp />
        <div className="user">
          <UserInfoComp />
        </div>
      </div>
      <div className=""></div>
    </div>
  );
}
// testing
export default HeaderComp;
