import React, { useState, useEffect } from "react";
import { Menu } from "antd";
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";

import { loadRouteMenus } from "../../redux/roleMenu/actionCreator";
import { Link } from "react-router-dom";

const x = "AppstoreOutlined";
const { SubMenu } = Menu;
const MainMenuComp = () => {
  const [current, setCurrent] = useState(["mail"]);

  const handleClick = (e) => {
    console.log("click ", e);
    setCurrent([...current, e.key]);
  };
  const dispatch = useDispatch();
  const roleMenuDate = useSelector((state) => state.roleMenu.data);

  return (
    <div>
      <Menu  onClick={handleClick} selectedKeys={[current]} mode="horizontal">
        {roleMenuDate.map((node) => {
          return ( 
            node.children.length>0?
            <SubMenu 
              key={node.id}
              icon={<SettingOutlined />}
              title={node.title}
            >              
              {node.children.map((c) => {
                return <Menu.Item key={c.id}>
                  <Link to={c.path}>
                  {c.title}
                  </Link>
                  </Menu.Item>
                  
              })}
            </SubMenu>:
            <Menu.Item key={node.id} icon={<MailOutlined />}>
            <Link to={node.path}>
              {node.title}
            </Link>
          </Menu.Item>
          );
        })}
      </Menu>
    </div>
  );
};

export default MainMenuComp;
