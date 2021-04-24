import React, { useState } from "react";
import { Menu } from "antd";
import { Row, Col } from "antd";
import styles from "./style.module.css";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import logo from "./../../assets/img/logo.png";
//import UserInfoComp from './../../components/UserInfoComp';
import { MailOutlined, SettingOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";

import { Link } from "react-router-dom";

const { SubMenu } = Menu;
const MainMenuComp = () => {
  const [current, setCurrent] = useState(["mail"]);

  const handleClick = (e) => {
    console.log("click ", e);
    setCurrent([...current, e.key]);
  };

  const roleMenuDate = useSelector((state) => state.roleMenu.data);

  return (
    <div className={styles.sysHeader}>
      <Row>
        <Col xs={12} sm={0} md={4} lg={4} xl={4}>
          <img src={logo} alt="Logo" className={styles.sysLogo} />
        </Col>
        <Col xs={0} sm={20} md={18} lg={16} xl={16}>
          <Menu
            onClick={handleClick}
            selectedKeys={[current]}
            mode="horizontal"
          >
            {roleMenuDate.map((node) => {
              return node.children.length > 0 ? (
                <SubMenu
                  key={node.id}
                  icon={<SettingOutlined />}
                  title={node.title}
                >
                  {node.children.map((c) => {
                    return (
                      <Menu.Item key={c.id}>
                        <Link to={c.path}>{c.title}</Link>
                      </Menu.Item>
                    );
                  })}
                </SubMenu>
              ) : (
                <Menu.Item key={node.id} icon={<MailOutlined />}>
                  <Link to={node.path}>{node.title}</Link>
                </Menu.Item>
              );
            })}
          </Menu>
        </Col>
        <Col xs={12} sm={4} md={4} lg={4} xl={4}>
          <Avatar
            style={{
              backgroundColor: "#87d068", marginLeft:'2rem'
            }}
            icon={<UserOutlined /> }
          />
          {/* <UserInfoComp/> */}
         
        </Col>
      </Row>

    </div>
  );
};

export default MainMenuComp;
