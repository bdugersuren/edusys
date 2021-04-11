import React, { useState } from "react";
import { Menu } from "antd";
import {
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { useSelector} from "react-redux";

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
