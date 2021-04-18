import React, { useEffect, useState } from "react";
import TasksComp from "../../components/TasksComp";
import { useSelector, useDispatch } from "react-redux";
import { Row, Col } from "antd";
import TaskComp from "./../../components/TasksComp";
import { loadClassDatas } from "../../redux/classTable/actionCreator";
import { loadSubjectDatas } from "../../redux/subjectTable/actionCreator";
import { loadTopicDatas } from "../../redux/topicTable/actionCreator";
import { loadTaskDatas } from "../../redux/taskTable/actionCreator";
import { Checkbox, Descriptions } from "antd";

import { ReactSVG } from "react-svg";
import task from "../../assets/img/svg/task.svg";
import text from "../../assets/img/svg/text.svg";

import TaskAddComp from "../../components/TaskAddComp";

import {
  ArrowLeftOutlined,
  ArrowRightOutlined,
  FileAddOutlined,
  CheckCircleOutlined,
  EyeOutlined,
  CopyOutlined,
  CloseOutlined,
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
  DeleteOutlined,
  CheckSquareOutlined,
  BarsOutlined,
  CompressOutlined,
  ExpandAltOutlined,
  MoreOutlined,
  FolderOpenOutlined,
  ColumnHeightOutlined,
  FullscreenOutlined,
  FullscreenExitOutlined,
} from "@ant-design/icons";
import { BiBookReader } from "react-icons/bi";
import { Button } from "antd";

import { GrCheckmark, GrDown, GrEdit, GrTask } from "react-icons/gr";

import { Select, Tree, Pagination } from "antd";
import styles from "./style.module.css";
import {
  BiScan,
  BiOutline,
  BiVerticalCenter,
  BiMoveVertical,
} from "react-icons/bi";

const { Option } = Select;

const children = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

function handleChange(value) {
  console.log(`selected ${value}`);
}

function TaskBankPage() {
  const { Option } = Select;

  const [isExpendAllTask, setIsExpendAllTask] = useState(false);
  const [isExpendAllAns, setIsExpendAllAns] = useState(false);

  const SelectedTaskValue = () => {
    setSelectedTasks(["123", "456"]);
    console.log("8888888888888888888888888888");
  };

  function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
  }

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
  //const filteredTasks = useSelector((state) => state.tasks.filteredTasks);

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
        <Col xs={7} sm={7} md={7} lg={7} xl={7}>
          <div className={styles.SelectFixed}>
            <Select
              showSearch
              style={{ width: 168 }}
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
            &nbsp;
            <Select
              showSearch
              style={{ width: 140 }}
              placeholder="Анги сонгох"
              onChange={OnChangeClass}
            >
              {classTableData.map((item) => (
                <Option key={item._id} value={item._id}>
                  {item.name}
                </Option>
              ))}
            </Select>
          </div>
        </Col>
        <Col xs={11} sm={11} md={11} lg={11} xl={11}>
          <div className={styles.TaskFixedIcons}>
            <ArrowLeftOutlined className={styles.TaskFixedIcons} />
            <ArrowRightOutlined className={styles.TaskFixedIcons} />
            <FormOutlined className={styles.TaskFixedIcons} />
            <CopyOutlined className={styles.TaskFixedIcons} />
            <DeleteOutlined className={styles.TaskFixedIcons} />
            <PaperClipOutlined className={styles.TaskFixedIcons} />
            <PrinterOutlined className={styles.TaskFixedIcons} />
            <CheckCircleOutlined className={styles.TaskFixedIcons} />
            <EyeOutlined className={styles.TaskFixedIcons} />
          </div>
        </Col>
        <Col xs={6} sm={6} md={6} lg={6} xl={6}>
          <div>
            <Button className={styles.button}>Даалгавар үүсгэх</Button>
            <Button className={styles.button}>Тест үүсгэх</Button>
          </div>
        </Col>
      </Row>

      <Row>
        <Col xs={5} sm={5} md={5} lg={5} xl={5}>
          <Select
            mode="multiple"
            allowClear
            style={{ width: "100%" }}
            placeholder="Бүлгээр сонгох"
            defaultValue={["a10", "c12"]}
            onChange={handleChange}
          >
            {children}
          </Select>
        </Col>
        <Col xs={19} sm={19} md={19} lg={19} xl={19}>
          <div className={styles.TaskSelectItem}>
            <Checkbox className={styles.TaskSelectItem} onChange={onChange}>
              Бүгдийг сонгох
            </Checkbox>

            <Checkbox className={styles.TaskSelectItem} onChange={onChange}>
              <ReactSVG src={task} style={{ width: "15px" }} />
            </Checkbox>
            <Checkbox className={styles.TaskSelectItem} onChange={onChange}>
              <ReactSVG src={text} style={{ width: "15px" }} />
            </Checkbox>
            <div className={styles.TaskInfoButton}>
              <Button className={styles.TaskInfoButton} key="3">
                Даалгавар: {filteredTasks.length}
              </Button>
              <Button className={styles.TaskInfoButton} key="2">
                Сонгогдсон: {selectedTasks.length}{" "}
              </Button>
              <Button className={styles.TaskInfoButton} key="1">
                Авах оноо: 40{" "}
              </Button>
              <Button className={styles.TaskInfoButton} key="4">
                Шалгалт авах огноо: 2021-04-22 16:40{" "}
              </Button>
            </div>
          </div>
        </Col>
        <Col xs={0} sm={0} md={0} lg={0} xl={0}></Col>
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
        <Col xs={17} sm={18} md={18} lg={18} xl={18}>
          <div>
            <TaskAddComp/>
          </div>
        </Col>
        <Col xs={1} sm={1} md={1} lg={1} xl={1}>
          <div className={styles.TaskRightFixedIcons}>
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
          <div className={styles.TaskBankPagination}>
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
    </>
  );
}

export default TaskBankPage;
