import React, { Component } from "react";
import { Layout } from "antd";
import FooterComp from "../components/FooterComp";
import HeaderComp from "../components/HeaderComp";



const { Header, Footer, Sider, Content } = Layout;

const MainLayout = (props) => {
  return (
    <Layout>
      <Header>
        <HeaderComp />
      </Header>
      <Content>{props.children}</Content>
      <Footer>
        <FooterComp />
      </Footer>
    </Layout>
  );
};
export default MainLayout;
