import React from "react";
import { Layout } from "antd";
import FooterComp from "../components/FooterComp";
import HeaderComp from "../components/HeaderComp";
import { useSelector } from 'react-redux';

<<<<<<< HEAD
const {Content } = Layout;

const MainLayout = (props) => {  
=======
const { Header, Footer, Content } = Layout;

const MainLayout = (props) => {
>>>>>>> db82afb27ddbb68455a6b56a7513f2f85ad40d55
  return (
    <Layout>
      <HeaderComp />
      <Content>{props.children}</Content>
      <FooterComp />
    </Layout>
  );
};
export default MainLayout;
