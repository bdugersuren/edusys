import React from "react";
import FooterComp from "../components/FooterComp";
import HeaderComp from "../components/HeaderComp";

const HomeLayout = (props) => {
  return (
    <div>
      <HeaderComp />
<div>sadadasdsasdas</div>
      {props.children}

      <FooterComp />
    </div>
  );
};
export default HomeLayout;
