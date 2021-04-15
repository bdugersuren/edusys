import React, { useState } from "react";
import TaskItem from "./TaskItem";
import { Checkbox } from "antd";
import styles from "./style.module.css";
import { Row, Col } from "antd";

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
     
        <div className={styles.TaskBoxCenter}>
          {/* <div className={styles.TaskBoxCenterTop}>           
              <Checkbox onChange={onChange}>Бүгдийг сонгох</Checkbox>
            <button
              className={styles.TaskFixedButton}
              onClick={() => setIsExpendAllTask(!isExpendAllTask)}
            >
              {tasks.checked ? <BiVerticalCenter /> : <BiMoveVertical />}
              Бүх асуулт2
            </button>

            <button onClick={() => setIsExpendAllAns(!isExpendAllAns)}>
              {isExpendAllAns ? <BiScan /> : <BiOutline />}
              Бүх хариулт
            </button>

           
          </div> */}
          {tasks.map((t) => {
            return (
              <TaskItem
                key={t._id}
                task={t}
                setSelectedTasks={SelectedTaskValue}
              />
            );
          })}
        </div>
 
    </Row>
  );
}

export default TasksComp;
