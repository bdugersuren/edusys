import React, { useEffect, useState } from "react";
import TasksComp from "../../components/TasksComp";
import { useSelector, useDispatch } from "react-redux";

import { loadClassDatas } from "../../redux/classTable/actionCreator";
import { loadSubjectDatas } from "../../redux/subjectTable/actionCreator";
import { loadTopicDatas } from "../../redux/topicTable/actionCreator";
import { loadTaskDatas } from "../../redux/taskTable/actionCreator";
import { filterTaskDatas } from "../../redux/taskTable/actionCreator";
import {
  BiBookReader,
} from "react-icons/bi";

import { GrCheckmark, GrDown, GrEdit, GrTask } from "react-icons/gr";

import { Select, Tree, Pagination } from "antd";

const { Option } = Select;

function TaskBankPage() {

  //const [checked, setChecked] = useState([]);
  //const [expanded, setExpanded] = useState([]);
  const [classId, setClassId] = useState(null);
  const [subjectId, setSubjectId] = useState(null);
  const [checkedTrees, setCheckedTrees] = useState([]);
  const [selectedTasks, setSelectedTasks] = useState([]);
  //const [filteredTasks, setFilteredTasks] = useState([]);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadTopicDatas());
    dispatch(loadClassDatas());
    dispatch(loadSubjectDatas());
    dispatch(loadTaskDatas());
  }, []);

  useEffect(() => {
    // let filteredData=[];
    // taskTableData
    //   .filter((t) => checkedTrees.includes(t.topic_id))
    //   .map((t) => {
    //       const { _id, questions, q_answer, title, description, ndx , topic_id, user_id, taskLevel_id} = t;
    //       return filteredData.push({
    //         checked:false,
    //         isExpentTask:false,
    //         isExpentAns:false,
    //         _id,
    //         questions,
    //         title,
    //         description,
    //         q_answer,
    //         ndx,
    //         topic_id,
    //         user_id,
    //         taskLevel_id
    //       });
    //   });
      //setFilteredTasks(filteredData);
      //console.log("================>",filteredTasks);
     // dispatch(filterTaskDatas(checkedTrees));
  }, [checkedTrees]);


  const subjectTableData = useSelector((state) => state.subjectTable.data);
  const classTableData = useSelector((state) => state.classTable.data);
  const topicTableData = useSelector((state) => state.topicTable.topics);
  const taskTableData = useSelector((state) => state.tasks.tasks);
  const filteredTasks = useSelector((state) => state.tasks.filteredTasks);

  const OnChangeClass = (value) => {
    setClassId(value);
  };

  const OnChangeSubject = (value) => {
    setSubjectId(value);
  };

  const classOptions = [];

  classTableData.map((c) => {
    const { _id, name } = c;
    return classOptions.push({
      value: _id,
      label: name,
    });
  });

  const subjOptions = [];

  subjectTableData.map((c) => {
    const { _id, name } = c;
    return subjOptions.push({
      value: _id,
      label: name,
    });
  });

  let topicNodes = [];

  topicTableData &&
    topicTableData
      .filter((c) => c.class_id._id === classId)
      .filter((s) => s.subject_id._id === subjectId)
      .map((td) => {
        const { _id, name } = td;
        return topicNodes.push({
          key: _id,
          title: name,
        });
      });

  
  function onChange(value) {
    console.log(`selected ${value}`);
  }

  const onSelect = (selectedKeys, info) => {
    console.log("selected", selectedKeys, info);
  };

  const onCheck = (checkedKeys, info) => {
    setCheckedTrees(checkedKeys);
    console.log("onCheck", checkedKeys, info, checkedTrees);
  };

  return (
    <div className="taskbank">
      <div className="flex">
        <label>Хичээл </label>
        <Select
          showSearch
          style={{ width: 200 }}
          placeholder="Хичээл сонгох"
          //optionFilterProp="children"
          onChange={OnChangeSubject}
          //onFocus={onFocus}
          //onBlur={onBlur}
          //onSearch={onSearch}
        >
          {subjectTableData.map((item) => (
            <Option key={item._id} value={item._id}>
              {item.name}
            </Option>
          ))}
        </Select>

        <label>Анги</label>

        <Select
          showSearch
          style={{ width: 200 }}
          placeholder="Хичээл сонгох"
          onChange={OnChangeClass}
        >
          {classTableData.map((item) => (
            <Option key={item._id} value={item._id}>
              {item.name}
            </Option>
          ))}
        </Select>
        <label className="border-2 ">
          Нийт даалгавар {filteredTasks.length}
        </label>
        <label>Сонгогдсон даалгавар {selectedTasks.length} </label>

        <button>Даалгавар үүсгэх</button>
        <button>Тест үүсгэх</button>
        <button>Засах</button>
        <button>Хувилах</button>

      </div>
      <div className="flex flex-row">
        <div className="flex-5">
          <Tree
            checkable
            onSelect={onSelect}
            onCheck={onCheck}
            treeData={topicNodes}
          />
        </div>
        <div className="flex-auto">
          <TasksComp
            tasks={filteredTasks}
            setSelectedTasks={setSelectedTasks}
          />
          <Pagination
            showQuickJumper
            defaultCurrent={1}
            defaultPageSize={2}
            total={filteredTasks.length}
            onChange={onChange}
          />
        </div>
        <div className="flex-2">
          <BiBookReader />
          <GrCheckmark />
          <GrDown /> <GrEdit /> <GrTask />
        </div>
      </div>
    </div>
  );
}

export default TaskBankPage;
