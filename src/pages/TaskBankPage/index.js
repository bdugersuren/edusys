import React, { useEffect, useState } from "react";
import TasksComp from "../../components/TasksComp";
import { useSelector, useDispatch } from "react-redux";
import { Row, Col } from "antd";
import { loadClassDatas } from "../../redux/classTable/actionCreator";
import { loadSubjectDatas } from "../../redux/subjectTable/actionCreator";
import { loadTopicDatas } from "../../redux/topicTable/actionCreator";
import { loadTaskDatas } from "../../redux/taskTable/actionCreator";
import {
  FileAddOutlined,
  CopyOutlined,
  ScissorOutlined,
  PrinterOutlined,
  PaperClipOutlined,
  PictureOutlined,
  PlaySquareOutlined,
  ReloadOutlined,
  SaveOutlined,
  UndoOutlined,
  RedoOutlined,
  FormOutlined,
} from "@ant-design/icons";
import { BiBookReader } from "react-icons/bi";
import { Button } from "antd";

import { GrCheckmark, GrDown, GrEdit, GrTask } from "react-icons/gr";

import { Select, Tree, Pagination } from "antd";
import styles from "./style.module.css";

const { Option } = Select;

function TaskBankPage() {
  //const [checked, setChecked] = useState([]);
  //const [expanded, setExpanded] = useState([]);
  const [classId, setClassId] = useState(null);
  const [subjectId, setSubjectId] = useState(null);
  const [checkedTrees, setCheckedTrees] = useState([]);
  const [selectedTasks, setSelectedTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadTopicDatas());
    dispatch(loadClassDatas());
    dispatch(loadSubjectDatas());
    dispatch(loadTaskDatas());
  }, []);

  useEffect(() => {
    let filteredData = [];
    taskTableData
      .filter((t) => checkedTrees.includes(t.topic_id))
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
        } = t;
        return filteredData.push({
          checked: false,
          isExpentTask: false,
          isExpentAns: false,
          _id,
          questions,
          title,
          description,
          q_answer,
          ndx,
          topic_id,
          user_id,
          taskLevel_id,
        });
      });
    setFilteredTasks(filteredData);
    console.log("================>", filteredTasks);
  }, [checkedTrees]);

  const subjectTableData = useSelector((state) => state.subjectTable.data);
  const classTableData = useSelector((state) => state.classTable.data);
  const topicTableData = useSelector((state) => state.topicTable.topics);
  const taskTableData = useSelector((state) => state.tasks.tasks);

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
    <>
      <Row>
        <Col xs={8} sm={8} md={8} lg={8} xl={8}>
        <div className={styles.SelectFixed}>
            <div>
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

             
            </div>
          </div>




        </Col>
        <Col xs={8} sm={8} md={8} lg={8} xl={8}>
          
        <div className={styles.TaskFixedIcons}>
            <FormOutlined className={styles.TaskFixedIcons} />{" "}
            <FileAddOutlined className={styles.TaskFixedIcons} />
            <CopyOutlined className={styles.TaskFixedIcons} />
            <ScissorOutlined className={styles.TaskFixedIcons} />
            <PrinterOutlined className={styles.TaskFixedIcons} />
            <PaperClipOutlined className={styles.TaskFixedIcons} />
            <PictureOutlined className={styles.TaskFixedIcons} />
            <PlaySquareOutlined className={styles.TaskFixedIcons} />
            <SaveOutlined className={styles.TaskFixedIcons} />
            <UndoOutlined className={styles.TaskFixedIcons} />
            <RedoOutlined className={styles.TaskFixedIcons} />
          </div>
        </Col>
        <Col xs={6} sm={6} md={6} lg={6} xl={6}>
          <div>
            <Button type="primary" className={styles.button}>
              Даалгавар
            </Button>
            <Button className="btn-teal">
              Тест үүсгэх
            </Button>
         
          </div>
        </Col>
      </Row>
      <Row className={styles.taskbank}>
        <Col xs={5} sm={5} md={5} lg={5} xl={5}>
          <div className={styles.taskTree}>
            <Tree
              checkable
              onSelect={onSelect}
              onCheck={onCheck}
              treeData={topicNodes}
            />
          </div>
        </Col>
        <Col xs={17} sm={17} md={17} lg={17} xl={17}>
             
          
          <div className={styles.TaskBody}>
            <TasksComp
              tasks={filteredTasks}
              setSelectedTasks={setSelectedTasks}
            />
          </div>
        </Col>
        <Col xs={2} sm={2} md={2} lg={2} xl={2}>
          <div className={styles.TaskRightFixedIcons} >
            <FormOutlined className={styles.TaskFixedIcons} />
            <UndoOutlined className={styles.TaskFixedIcons} />
            <RedoOutlined className={styles.TaskFixedIcons} />
            <CopyOutlined className={styles.TaskFixedIcons} />
            <ScissorOutlined className={styles.TaskFixedIcons} />
            <PrinterOutlined className={styles.TaskFixedIcons} />
            <PaperClipOutlined className={styles.TaskFixedIcons} />
            <PictureOutlined className={styles.TaskFixedIcons} />
            <PlaySquareOutlined className={styles.TaskFixedIcons} />
            <SaveOutlined className={styles.TaskFixedIcons} />
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
          <div>
            <Pagination
              showQuickJumper
              defaultCurrent={1}
              defaultPageSize={2}
              total={filteredTasks.length}
              onChange={onChange}
            />
          </div>
        </Col>
      </Row>

      {/* <div className={styles.taskbank}>
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
        <label className="border-2">
          Нийт даалгавар {filteredTasks.length}
        </label>
        <label>Сонгогдсон даалгавар {selectedTasks.length} </label>

        <button>Даалгавар үүсгэх</button>
        <button>Тест үүсгэх</button>
        <button>Засах</button>
        <button>Хувилах</button>
      </div>
      <div className="flex flex-row" style={{ background: "red" }}>
        <div className="flex">
          <Tree
            checkable
            onSelect={onSelect}
            onCheck={onCheck}
            treeData={topicNodes}
          />
        </div>
        <div className="flex">
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
        <div className="flex" style={{ background: "#000" }}>
          <BiBookReader />
          <GrCheckmark />
          <GrDown /> <GrEdit /> <GrTask />
        </div>
      </div>
    </div>

    <Row>
      <Col xs={7} sm={7} md={7} lg={7} xl={7}>
        <div className="flex-5">
          <Tree
            checkable
            onSelect={onSelect}
            onCheck={onCheck}
            treeData={topicNodes}
          />

        </div>
      </Col>
      <Col xs={15} sm={15} md={15} lg={15} xl={15}>
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

        <TasksComp
            tasks={filteredTasks}
            setSelectedTasks={setSelectedTasks}
          />
      </Col>
      <Col xs={2} sm={2} md={2} lg={2} xl={2}>
        <div className="flex-2">
          <BiBookReader />
          <GrCheckmark />
          <GrDown /> <GrEdit /> <GrTask />
        </div>
      </Col>

      <div className="taskbank">
        <div className="flex flex-row">
          <div className="flex-auto">
            <Pagination
              showQuickJumper
              defaultCurrent={1}
              defaultPageSize={2}
              total={filteredTasks.length}
              onChange={onChange}
            />
          </div>
        </div>
      </div>
    </Row> */}
    </>
  );
}

export default TaskBankPage;
