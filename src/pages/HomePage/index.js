import React from "react";
import { Spin } from "antd";
import { Row, Col ,Input} from 'antd';
import { LoadingOutlined } from "@ant-design/icons";
import styles from './style.module.css';
import SysTree from './../../components/SysTree';
import Testing from "../../components/Testing";
import imgQuiz from "../../assets/quiz.jpg";



import CKEditor from "@ckeditor/ckeditor5-react";

function HomePage() {
  const { TextArea } = Input;
  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

  return (
    <div className="flex flex-row" >
      <Spin indicator={antIcon} />
      <Row className={styles.sysHomeLayout}>
        <Col xs={2} sm={4} md={6} lg={8} xl={10}>
          <div> 
              
          </div>
        </Col>
        <Col xs={20} sm={16} md={12} lg={8} xl={4}>
      
        <div id="editor" ></div>

        </Col>
        <Col xs={2} sm={4} md={6} lg={8} xl={10}>
         
        </Col>
      </Row>
      <Row>
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            <img src={imgQuiz} style={{width:"100%"}}/>
        </Col>
      </Row>
    </div>
  );
}

export default HomePage;
