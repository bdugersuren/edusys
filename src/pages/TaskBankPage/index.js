import React, { useEffect, useState } from "react";
import PaginationComp from "../../components/PaginationComp";
import TasksComp from "../../components/TasksComp";
import { useSelector, useDispatch } from "react-redux";

import { loadClassDatas } from "../../redux/classTable/actionCreator";
import { loadSubjectDatas } from "../../redux/subjectTable/actionCreator";
import { loadTopicDatas } from "../../redux/topicTable/actionCreator";
import { loadTaskDatas } from "../../redux/taskTable/actionCreator";

import actions from "../../redux/topicTable/actions";

import {
  BiChevronRight,
  BiChevronDown,
  BiCheckboxChecked,
  BiCheckbox,
  BiCheckboxSquare,
  BiVerticalCenter,
  BiBookOpen,
  BiBook,
  BiBookReader,
  BiArrowFromTop,
} from "react-icons/bi";

import {
  GrAddCircle,
  GrCheckmark,
  GrDown,
  GrEdit,
  GrTask,
} from "react-icons/gr";

import { Select, Tree, Pagination  } from "antd";

const { Option } = Select;
//const  {Option}   = Tree;

function TaskBankPage() {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState([]);
  const [expanded, setExpanded] = useState([]);
  const [classId, setClassId] = useState(null);
  const [subjectId, setSubjectId] = useState(null);
  const [checkedTrees, setCheckedTrees] = useState([]);
  const [selectedTasks, setSelectedTasks] = useState([]);

  useEffect(() => {
    //console.log("====================> hi <=================");
    //dispatch(loadClassDatas());
    dispatch(loadTopicDatas());
    // dispatch(
    //   actions.filterTopicDatas({
    //     class_id: classId,
    //     subject_id: subjectId,
    //   })
    //);
  }, [classId, subjectId]);

  const subjectTableData = useSelector((state) => state.subjectTable.data);
  const classTableData = useSelector((state) => state.classTable.data);
  const topicTableData = useSelector((state) => state.topicTable.topics);
  const taskTableData = useSelector((state) => state.tasks.tasks);

  useEffect(() => {
    dispatch(loadClassDatas());
    dispatch(loadSubjectDatas());
    dispatch(loadTaskDatas());
  }, []);

  const OnChangeClass = (value) => {
    setClassId(value);
    console.log(`selected Class ID ${value}  `);
  };

  const OnChangeSubject = (value) => {
    setSubjectId(value);
    console.log(`selected Subject ID ${value}   `);
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
      .filter((c) => c.class_id._id == classId)
      .filter((s) => s.subject_id._id == subjectId)
      .map((td) => {
        //topicTableData.map((td) => {
        const { _id, name } = td;
        return topicNodes.push({
          key: _id,
          title: name,
        });
      });

  //const isContain()

  // let filteredTasks = [];

  // taskTableData &&
  // taskTableData
  //     .filter((t) =>checkedTrees.includes(t.topic_id)  )
  //     .map((td) => {
  //       //topicTableData.map((td) => {
  //       const { _id, name } = td;
  //       return filteredTasks.push({
  //         key: _id,
  //         title: questions,

  //       });
  //     });

  const filteredTasks = taskTableData.filter((t) =>
    checkedTrees.includes(t.topic_id)
  );

  console.log(checkedTrees, " <=====   topic nodes   ====>   ", filteredTasks);

  function onChange(value) {
    console.log(`selected ${value}`);
  }

  function onBlur() {
    console.log("blur");
  }

  function onFocus() {
    console.log("focus");
  }

  function onSearch(val) {
    console.log("search:", val);
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
          //optionFilterProp="children"
          onChange={OnChangeClass}
          //onFocus={onFocus}
          //onBlur={onBlur}
          //onSearch={onSearch}
        >
          {classTableData.map((item) => (
            <Option value={item._id}>{item.name}</Option>
          ))}
        </Select>
        <label className="border-2 ">Сонгогдсондаалгавар 120</label>
        <label>Сонгогдсон даалгавар 12</label>

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
          <TasksComp tasks={filteredTasks} setSelectedTasks={setSelectedTasks} />
          <Pagination showQuickJumper defaultCurrent={2} total={500} onChange={onChange} />
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
