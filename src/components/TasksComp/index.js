import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import {loadTaskDatas,setAllCheckTasks, setTaskUser } from "../../redux/taskTable/actionCreator";

import TaskItem from "./TaskItem";
import { Row, Checkbox, Empty, DatePicker, Space} from "antd";
import styles from "./style.module.css";

//#region ------------ Icons --------------------------------
import {
  BiScan,
  BiOutline,
  BiVerticalCenter,
  BiMoveVertical,
} from "react-icons/bi";
//#endregion


function TasksComp() {
  const dispatch = useDispatch();
  const { RangePicker } = DatePicker; 

//#region -------------- redux state ----------------------------
  const taskTableData = useSelector((state) => state.tasks.list);
  const checkedTopicIds = useSelector((state) => state.tasks.checkedTopicIds);
  const filteredTasksIds = useSelector((state) => state.tasks.filteredTasks);
  const currentPage = useSelector((state) => state.tasks.currentPage);
  const pagesize = useSelector((state) => state.tasks.pageSize);
  const userId = useSelector((state) => state.auth._id);
//#endregion

//#region  --------------- Local state --------------------------

  const [isExpendAllTask, setIsExpendAllTask] = useState(false);
  const [isExpendAllAns, setIsExpendAllAns] = useState(false);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [indeterminate, setIndeterminate] = useState(false);
  const [myCreatedTask, setMyCreatedTask] = useState(false);
  const [cnt, setCnt] = useState([]);
  const [createdUserTask, setCreatedUserTask] = useState(false);

  //#endregion

//#region  ---------------- Functions ---------------------------
  const onHandleMyCreateTask=(e)=>{
    e.target.checked? dispatch(setTaskUser(userId)):dispatch(setTaskUser(null));
    setCreatedUserTask(e.target.checked);
  }

  function onAllCheck(e) {
    dispatch(setAllCheckTasks(e.target.checked)); 
  }

//#endregion

//#region  ----------------- Effects -----------------------------
  useEffect(() => {
    dispatch(loadTaskDatas());
    const cntChange= taskTableData.filter((t) => checkedTopicIds.includes(t.topic_id)).length;
    setCnt(cntChange);
  }, [filteredTasksIds]);


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
      //if(myCreatedTask)filteredData.filter(u=>u.user_id===0);
    setFilteredTasks(filteredData);
  }, [ checkedTopicIds, filteredTasksIds, isExpendAllTask, isExpendAllAns,currentPage, pagesize, myCreatedTask]);
//#endregion
    
return (
    <Row>
      <div className={styles.TaskBoxCenter}>
        <div className="flex h-10 items-center text-xl">
          <div>
            <Checkbox onChange={onAllCheck} indeterminate={indeterminate}>
              Бүгдийг сонгох
            </Checkbox>

            <Checkbox  defaultChecked={createdUserTask} onChange={onHandleMyCreateTask}>
              Миний үүсгэсэн
            </Checkbox>

            <Space direction="vertical" size={12}>
              <RangePicker />
            </Space>

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
          {filteredTasks.length!==0?
          filteredTasks.map((t) => {
            return <TaskItem key={t._id} task={t} />;
          }):<Empty />}
        </div>
      </div>
    </Row>
  );
}

export default TasksComp;
