import React, { useState } from "react";
import TaskItem from "./TaskItem";
import { Checkbox } from "antd";
import styles from "./style.module.css";

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
    <div className={styles.TaskBoxCenter}>
      <div className={styles.TaskBoxCenter2}>
        <div className="inline-block w-32 h-2 m-2 p-0">
          <Checkbox onChange={onChange}>Бүгдийг сонгох</Checkbox>
        </div>

          <button className={styles.TaskFixedButton} onClick={() => setIsExpendAllTask(!isExpendAllTask)}>
            {tasks.checked ? <BiVerticalCenter /> : <BiMoveVertical />}
            Бүх асуулт2
          </button>
        

     
          <button onClick={() => setIsExpendAllAns(!isExpendAllAns)}>
            {isExpendAllAns ? <BiScan /> : <BiOutline />}
            Бүх хариулт
          </button>
      

        <div className={styles.TaskInfo1}>
          <label>
            Нийт даалгавар: 565
            {/* {filteredTasks.length} */}
          </label>
        </div>

        <div className={styles.TaskInfo2}>
          <label>
            Сонгогдсон даалгавар: 85
            {/* {selectedTasks.length} */}
          </label>
        </div>
      </div>
      {tasks.map((t) => {
        return (
          <TaskItem key={t._id} task={t} setSelectedTasks={SelectedTaskValue} />
        );
      })}
    </div>
  );
}

export default TasksComp;
