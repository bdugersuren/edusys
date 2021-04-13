import React, { useState } from "react";
import TaskItem from "./TaskItem";
import { Checkbox } from "antd";

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
    <div className="bg-gray-300">
      <div className="flex">
        <div className="bg-indigo-400">
          <Checkbox onChange={onChange}>Бүгдийг сонгох</Checkbox>
        </div>
        <button onClick={() => setIsExpendAllTask(!isExpendAllTask)}>
          {tasks.checked ? <BiVerticalCenter /> : <BiMoveVertical />}
          Бүх асуулт
        </button>
        <button onClick={() => setIsExpendAllAns(!isExpendAllAns)}>
          {isExpendAllAns ? <BiScan /> : <BiOutline />}
          Бүх хариулт
        </button>
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
