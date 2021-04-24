import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import {loadTaskDatas,setAllCheckTasks } from "../../redux/taskTable/actionCreator";

import TaskItem from "./TaskItem";
import { Row, Checkbox } from "antd";
import styles from "./style.module.css";

import {
  BiScan,
  BiOutline,
  BiVerticalCenter,
  BiMoveVertical,
  // BiCheckboxChecked,
  // BiCheckboxSquare,
  // BiCheckbox,
} from "react-icons/bi";

function TasksComp() {
  const dispatch = useDispatch();

  const taskTableData = useSelector((state) => state.tasks.list);
  const checkedTopicIds = useSelector((state) => state.tasks.checkedTopicIds);
  const filteredTasksIds = useSelector((state) => state.tasks.filteredTasks);
  const currentPage = useSelector((state) => state.tasks.currentPage);
  const pagesize = useSelector((state) => state.tasks.pageSize);

  const [isExpendAllTask, setIsExpendAllTask] = useState(false);
  const [isExpendAllAns, setIsExpendAllAns] = useState(false);
  const [filteredTasks, setFilteredTasks] = useState([]);
  //const [isAllSelected, setIsAllSelected] = useState(0);
  const [indeterminate, setIndeterminate] = useState(false);

  const cnt= taskTableData.filter((t) => checkedTopicIds.includes(t.topic_id)).length;

  function onAllCheck(e) {
    dispatch(setAllCheckTasks(e.target.checked)); 
  }

  useEffect(() => {
    dispatch(loadTaskDatas());
  }, []);


  useEffect(() => {  
    if(filteredTasksIds.length!==cnt)  setIndeterminate(true);
      else setIndeterminate(false);
    if(filteredTasksIds.length===0){
      setIndeterminate(false);
    }
  }, [cnt,filteredTasksIds]);


  useEffect(() => {
    let filteredData = [];
    taskTableData
      .filter((t) => checkedTopicIds.includes(t.topic_id)).slice(10*(currentPage-1), 10*(currentPage))
      .map((t) => {        
        return filteredData.push({
          ...t,
          checked: filteredTasksIds.includes(t._id),
          isExpentTask: isExpendAllTask,
          isExpentAns: isExpendAllAns,          
        });
      });
    setFilteredTasks(filteredData);
  }, [checkedTopicIds, filteredTasksIds, isExpendAllTask, isExpendAllAns,currentPage, pagesize]);

    return (
    <Row>
      <div className={styles.TaskBoxCenter}>
        <div className="flex h-10 items-center text-xl">
          <div>
            <Checkbox onChange={onAllCheck} indeterminate={indeterminate}>
              Бүгдийг сонгох
            </Checkbox>
          </div>
          
          {/* <div className="mx-3 px-3 bg-green-200">            
            Сонгогдсон {filteredTasksIds.length}/{cnt}
          </div> */}
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
