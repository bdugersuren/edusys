import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  loadTaskDatas,
  changeSelSubjectId,
  changeSelClassId,
  changeTopicIds,
} from "../../redux/taskTable/actionCreator";

import TaskItem from "./TaskItem";

import styles from "./style.module.css";

import { Row, Col, Tooltip, Checkbox } from "antd";

import {
  BiScan,
  BiOutline,
  BiVerticalCenter,
  BiMoveVertical,
  BiCheckboxChecked,
  BiCheckboxSquare,
  BiCheckbox,
} from "react-icons/bi";

function TasksComp() {
  const dispatch = useDispatch();

  const taskTableData = useSelector((state) => state.tasks.list);
  const checkedTopicIds = useSelector((state) => state.tasks.checkedTopicIds);
  const filteredTasksIds = useSelector((state) => state.tasks.filteredTasks);

  const [isExpendAllTask, setIsExpendAllTask] = useState(false);
  const [isExpendAllAns, setIsExpendAllAns] = useState(false);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [isAllSelected, setIsAllSelected] = useState(0);

  const setIsSelectedTask = ({ id }) => {
    //setSelectedTasks(["123", "456"]);
    console.log("8888888888888888888888888888", id);
  };

  function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
  }

  useEffect(() => {
    dispatch(loadTaskDatas());
  }, []);

  useEffect(() => {
    let filteredData = [];
    taskTableData
      .filter((t) => checkedTopicIds.includes(t.topic_id))
      .map((t) => {
        const {
          _id,
          questions,
          q_answer,
          title,
          description,
          ndx,
          topic_id,
          user_id,
          taskLevel_id,
          taskType_id,
        } = t;
        return filteredData.push({
          checked: filteredTasksIds.includes(_id),
          isExpentTask: isExpendAllTask,
          isExpentAns: isExpendAllAns,
          _id,
          questions,
          title,
          description,
          q_answer,
          ndx,
          topic_id,
          user_id,
          taskLevel_id,
          taskType_id
        });
      });
    setFilteredTasks(filteredData);
    console.log("================>", filteredTasksIds);
  }, [checkedTopicIds, filteredTasksIds, isExpendAllTask, isExpendAllAns]);

  return (
    <Row>
      <div className={styles.TaskBoxCenter}>
        <div className="flex h-10 items-center text-xl">
          <div
            onClick={() => setIsAllSelected(!isAllSelected)}
            className="flex items-center cursor-pointer "
          >
            {isAllSelected === 0 ? <BiCheckbox /> : <BiCheckboxChecked />}
            <div>Бүгдийг сонгох</div>
          </div>
          <div className="mx-3 px-3 bg-green-200">
            {" "}
            Сонгогдсон {filteredTasksIds.length}/{filteredTasks.length}
          </div>
          <div className="flex-auto"></div>

          <div
            onClick={() => setIsExpendAllAns(!isExpendAllAns)}
            className="cursor-pointer"
          >
            {isExpendAllAns ? <BiScan /> : <BiOutline />}
          </div>
          <div
            className="cursor-pointer mx-6"
            onClick={() => setIsExpendAllTask(!isExpendAllTask)}
          >
            {isExpendAllTask ? <BiVerticalCenter /> : <BiMoveVertical />}
          </div>
        </div>

        <div>
          {filteredTasks.map((t) => {
            return <TaskItem key={t._id} task={t} />;
          })}
        </div>
      </div>
    </Row>
  );
}

export default TasksComp;
