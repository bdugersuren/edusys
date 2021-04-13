import React, { useState } from "react";
import TaskItem from "./TaskItem";
import { Checkbox } from "antd";
import styles from "./style.module.css";
import { Row, Col } from 'antd';

import {
  BiScan,
  BiOutline,
  BiVerticalCenter,
  BiMoveVertical,
} from "react-icons/bi";

function TasksComp({ tasks, setSelectedTasks }) {
  const [isExpendAllTask, setIsExpendAllTask] = useState(false);
  const [isExpendAllAns, setIsExpendAllAns] = useState(false);

  const SelectedTaskValue = () => {
    setSelectedTasks(["123", "456"]);
    console.log("8888888888888888888888888888");
  };

  function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
  }
  console.log("+++++++++++++++++++++>", tasks);
  return (
    <Row>
      <Col xs={7} sm={7} md={7} lg={7} xl={7}>
      <div>
        <Checkbox onChange={onChange}>Бүгдийг сонгох</Checkbox>
      </div>
      </Col>
      <Col xs={13} sm={13} md={13} lg={13} xl={13}>
        Col2
      </Col>
      <Col xs={4} sm={4} md={4} lg={4} xl={4}>
        Col3
      </Col>
    </Row>
  );
}

export default TasksComp;
