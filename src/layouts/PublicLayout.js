import React from "react";
import FooterComp from "../components/FooterComp";
import HeaderComp from "../components/HeaderComp";

const PublicLayout = (props) => {
  return (
    <div>
      <HeaderComp />
 
      {props.children}

      <FooterComp />
    </div>
  );
};
export default PublicLayout;
