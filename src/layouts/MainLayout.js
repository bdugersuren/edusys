import React from "react";
import { Layout } from "antd";
import FooterComp from "../components/FooterComp";
import HeaderComp from "../components/HeaderComp";
import { useSelector } from 'react-redux';

const {Content } = Layout;

const MainLayout = (props) => {  
  return (
    <Layout>
      <HeaderComp />
      <Content>{props.children}</Content>
      <FooterComp />
    </Layout>
  );
};
export default MainLayout;
