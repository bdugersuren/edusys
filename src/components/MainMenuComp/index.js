import React, { useState, useEffect, useRef} from "react";
import { Menu } from "antd";
import { Row, Col } from "antd";
import styles from "./style.module.css";
import { Avatar, Dropdown, Form, Input, Button, Checkbox , InputNumber} from "antd";
import { UserOutlined } from "@ant-design/icons";
import logo from "./../../assets/logo.jpg";
import { MailOutlined, SettingOutlined, DownOutlined } from "@ant-design/icons";
import { useSelector , useDispatch} from "react-redux";

import { Link } from "react-router-dom";
import Modal from "antd/lib/modal/Modal";

import LoginModalComp from "../LoginModalComp";
import { logOut } from "../../redux/authentication/actionCreator";



const { SubMenu } = Menu;



//------------- Цэсний эхлэл хэсэг --------------------------
const MainMenuComp = () => {
  const dispatch = useDispatch();

  const [current, setCurrent] = useState(["mail"]);
  const [isLogoutModalVisible, setIsLogoutModalVisible] = useState(false);
  const [isLoginModalVisible, setIsLoginModalVisible] = useState(false);

  const handleClick = (e) => {
    console.log("click ", e);
    setCurrent([...current, e.key]);
  };
  const isLogin = useSelector((state) => state.roleMenu.data);
  const roleMenuDate = useSelector((state) => state.roleMenu.data);
  const userRole = useSelector((state) => state.auth.role);
  const userId = useSelector((state) => state.auth._id);
  const userName = useSelector((state) => state.auth.name);
  //const userId = useSelector((state) => state.auth._id);
  const userMenus = useSelector((state) => state.auth.menu);

  //#region  ---------------------------  Functions ------------------------------------
  const handleLogoutModalOk = () => {
    setIsLogoutModalVisible(false);
    dispatch(logOut());
  }

  const handleLogoutModalCancel = () => {
    setIsLogoutModalVisible(false);
  }

  const handleLogout = () => {
    setIsLogoutModalVisible(true);  
    
  }

  const handleLoginModalOk = () => {
    setIsLoginModalVisible(false);
  }

  const handleLoginModalCancel = () => {
    setIsLoginModalVisible(false);
  }

  const handleLogin = (e) => {
    console.log(`----------------  ${e} ---------------------`);
    setIsLoginModalVisible(true);
  }

  //#endregion

  const menu = userId === "" || userId === null ?
    <Menu>
      <Menu.Item onClick={handleLogin}>
        Нэвтрэх
    </Menu.Item>
      <Menu.Item >
        Бүртгүүлэх
    </Menu.Item>
      <Menu.Item >
        Нууц үгээ мартсан
    </Menu.Item>
    </Menu> :
    <Menu>
      <Menu.Item >
        {userName} ({userRole})
    </Menu.Item>
      <Menu.Item onClick={handleLogout}>
        Гарах
    </Menu.Item>
    </Menu>
    ;



  console.log("======= User role =======>", userRole);
  return (
    <div >
      <Row>
        <Col xs={0} sm={0} md={0} lg={1} xl={1}>
          <img src={logo} alt="Logo" style={{ height: '50px' }} />
        </Col>
        <Col xs={21} sm={21} md={21} lg={21} xl={21}>
          <Menu
            onClick={handleClick}
            selectedKeys={[current]}
            mode="horizontal"
          >
            {roleMenuDate.filter(m => m.role_id === userRole).map((node) => {
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


            {/* {userMenus.map(m=>{
              return(
                <SubMenu
                  key={m._id}
                  icon={<SettingOutlined />}
                  title={m.title}
                >                  
                </SubMenu>
              )
            })} */}
          </Menu>
        </Col>
        <Col xs={2} sm={2} md={2} lg={2} xl={2}>

          <Dropdown overlay={menu} placement="bottomRight">
            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
              <Avatar
                style={{
                  backgroundColor: "#87d068", marginLeft: '2rem'
                }}
                icon={<UserOutlined />}
              />
            </a>
          </Dropdown>


        </Col>
      </Row>
      <Modal title="Системээс гарах"
        visible={isLogoutModalVisible} onOk={handleLogoutModalOk} onCancel={handleLogoutModalCancel}
        okText="Гарах"
        cancelText="Болих"
      >
        <p>Та системээс гарах гэж байна уу?</p>

      </Modal>

      <Modal title="Системд нэвтрэх"
        visible={isLoginModalVisible} onOk={handleLoginModalOk} onCancel={handleLoginModalCancel}
        okText="Нэвтрэх"
        cancelText="Болих"
      >
        <p>Тестийн системд нэвтрэх</p>

     </Modal>

     <LoginModalComp visible={isLoginModalVisible} 
        onCancel={()=>setIsLoginModalVisible(false)} 
        onOk={handleLoginModalOk}
        />

    </div>
  );
};

export default MainMenuComp;
