import React from "react";
import { Spin } from "antd";
import { Row, Col } from 'antd';
import { LoadingOutlined } from "@ant-design/icons";
import styles from './style.module.css';
import SysTree from './../../components/SysTree';
import Testing from "../../components/Testing";

function HomePage() {
  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

  return (
    <div className="flex flex-row" >
      <Spin indicator={antIcon} />
      <Row className={styles.sysHomeLayout}>
        <Col xs={2} sm={4} md={6} lg={8} xl={10}>
          <div> 
              <SysTree/>
          </div>
        </Col>
        <Col xs={20} sm={16} md={12} lg={8} xl={4}>
          Голын хэсэг байрлана <Testing/>
        </Col>
        <Col xs={2} sm={4} md={6} lg={8} xl={10}>
          Fixed menu
        </Col>
      </Row>
    </div>
  );
}

export default HomePage;
