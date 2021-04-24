import React, { useEffect, useState } from "react";
import TasksComp from "../../components/TasksComp";
import { useSelector, useDispatch } from "react-redux";

import { loadClassDatas } from "../../redux/classTable/actionCreator";
import { loadSubjectDatas } from "../../redux/subjectTable/actionCreator";
import { loadTopicDatas } from "../../redux/topicTable/actionCreator";
import {
  loadTaskDatas,
  changeSelSubjectId,
  changeSelClassId,
  changeTopicIds,
  changeCurrentPage
} from "../../redux/taskTable/actionCreator";
import { Row, Col, Badge, Button } from "antd";

import {
  ArrowLeftOutlined,
  ArrowRightOutlined,
  CheckCircleOutlined,
  EyeOutlined,
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




import { Select, Tree, Pagination, Tooltip,Statistic,Card } from "antd";
import styles from "./style.module.css";
import IconComp from "../../components/IconComp";

const { Option } = Select;

const children = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

function handleChange(value) {
  //console.log(`selected ${value}`);
}

//Тухайн хуудасны эхлэл-------------------------------------------------------------------------------------------------
const TaskBankPage=()=> {
  const dispatch = useDispatch();
  const { Option } = Select;



  //const [checked, setChecked] = useState([]);
  //const [expanded, setExpanded] = useState([]);
  const [classId, setClassId] = useState(null);
  const [subjectId, setSubjectId] = useState(null);
  const [checkedTrees, setCheckedTrees] = useState([]);
  const [selectedTasks, setSelectedTasks] = useState([]);

  const subjectTableData = useSelector((state) => state.subjectTable.list);
  const classTableData = useSelector((state) => state.classTable.list);
  const topicTableData = useSelector((state) => state.topicTable.list);
  const taskTableData = useSelector((state) => state.tasks.list);
  const selSubjId = useSelector((state) => state.tasks.selectedSubjId);
  const selClssId = useSelector((state) => state.tasks.selectedClassId);
  const checkedTopicIds = useSelector((state) => state.tasks.checkedTopicIds);
  const filteredTasksIds = useSelector((state) => state.tasks.filteredTasks);
  const currentPage = useSelector((state) => state.tasks.currentPage);
  const pagesize = useSelector((state) => state.tasks.pageSize);

  useEffect(() => {
    dispatch(loadClassDatas());
    dispatch(loadSubjectDatas());
    dispatch(loadTaskDatas());
    //setSubjectId(selSubjId);
  }, []);

  useEffect(() => {
    dispatch(loadTopicDatas());
  }, [selSubjId, selClssId]);
  




  const OnChangeClass = (value) => {
    setClassId(value);
    dispatch(changeSelClassId(value));
  };

  const OnChangeSubject = (value) => {
    //changeSelSubjectId
    dispatch(changeSelSubjectId(value));
    //setSubjectId(selSubjId);
    //console.log("================Select value===============> ", value);
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
      .filter((c) => c.class_id._id === selClssId)
      .filter((s) => s.subject_id._id === selSubjId)
      .map((td) => {
        const { key, title, children } = td;
        return topicNodes.push({
          key,
          title,
          children,
        });
      });
  //console.log(topicNodes, "<----------------------");

  function onChange(value) {
    //console.log(`selected---------------------> ${value} \n`);
    dispatch(changeCurrentPage(value));
    
  }

  const onSelect = (selectedKeys, info) => {
    //console.log("selected", selectedKeys, info);
  };

  const onCheckedTopicIds = (checkedKeys, info) => {
    dispatch(changeTopicIds(checkedKeys));
    setCheckedTrees(checkedKeys);
    //console.log("onCheck", checkedKeys, info, checkedTrees);
  };

  const cnt= taskTableData.filter((t) => checkedTopicIds.includes(t.topic_id)).length;

  return (
    <>
      <Row>
        <Col xs={7} sm={7} md={7} lg={7} xl={7}>
          
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
        <div className={styles.SelectFixed}>
          <div>Анги</div>
            <Select
              showSearch
              defaultValue={selSubjId}
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
              defaultValue={selClssId}
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
        <Col xs={19} sm={19} md={19} lg={19} xl={19}>
          <div className="flex">
          <Card style={{width:'200px',padding:'0px',margin:'0px'}}>
            <Statistic 
                  title="Нийт даалгавраас" 
                  value={`${filteredTasksIds.length} / ${taskTableData.filter((t) => checkedTopicIds.includes(t.topic_id)).length}`}  
                  prefix={<FolderOpenOutlined />}
                  />
          </Card>

          <Card style={{width:'200px',padding:'0px',margin:'0px'}}>
            <Statistic 
                  title="Нэг сонголттой" 
                  value={`${filteredTasksIds.length} / ${taskTableData.filter((t) => checkedTopicIds.includes(t.topic_id)).length}`}  
                  prefix={<FolderOpenOutlined />}
                  />
          </Card>
          <Card style={{width:'200px',padding:'0px',margin:'0px'}}>
            <Statistic 
                  title="Бусад" 
                  value={`${filteredTasksIds.length} / ${cnt}`}  
                  prefix={<FolderOpenOutlined />}
                  />
          </Card>
          <Card style={{width:'200px',padding:'0px',margin:'0px'}}>
            <Statistic 
                  title="Хүнд түвшин" 
                  value={`${filteredTasksIds.length} / ${cnt}`}  
                  prefix={<FolderOpenOutlined />}
                  />
          </Card>
          <Card style={{width:'200px',padding:'0px',margin:'0px'}}>
            <Statistic 
                  title="Дундаж түвшин" 
                  value={`${filteredTasksIds.length} / ${cnt}`}  
                  prefix={<FolderOpenOutlined />}
                  />
          </Card>
          <Card style={{width:'200px',padding:'0px',margin:'0px'}}>
            <Statistic 
                  title="Хөнгөн түвшин" 
                  value={`${filteredTasksIds.length} / ${cnt}`}  
                  prefix={<FolderOpenOutlined />}
                  />
          </Card>



 </div>
        </Col>
        <Col xs={0} sm={0} md={0} lg={0} xl={0}></Col>
      </Row>

      <Row className={styles.taskbank}>
        <Col xs={5} sm={5} md={5} lg={5} xl={5}>
          <div className={styles.taskTree}>
            <Tree
              checkable
              checkedKeys={checkedTopicIds}
              onSelect={onSelect}
              onCheck={onCheckedTopicIds}
              treeData={topicNodes}
            />
          </div>
        </Col>
        <Col xs={17} sm={18} md={18} lg={18} xl={18}>
          <div className={styles.TaskBody}>
            <TasksComp />
          </div>
        </Col>
        <Col xs={1} sm={1} md={1} lg={1} xl={1}>
          <div className={styles.TaskRightFixedIcons}>
            <FormOutlined className={styles.TaskFixedIcons} />
            <UndoOutlined className={styles.TaskFixedIcons} />
            <RedoOutlined className={styles.TaskFixedIcons} />

            <ScissorOutlined className={styles.TaskFixedIcons} />
            <PrinterOutlined className={styles.TaskFixedIcons} />
            <PaperClipOutlined className={styles.TaskFixedIcons} />
            <PictureOutlined className={styles.TaskFixedIcons} />
            <PlaySquareOutlined className={styles.TaskFixedIcons} />
            {filteredTasksIds.length === 1 && (
              <>
                <Tooltip
                  color="#FF0000"
                  placement="left"
                  title="Харах"
                  className="hover: text-5xl hover:bg-gray-200 w-auto"
                >
                  <EyeOutlined className={styles.TaskFixedIcons} />
                </Tooltip>

                <Tooltip
                  color="#FF0000"
                  placement="left"
                  title="Харах"
                  className="hover: text-5xl hover:bg-gray-200 w-auto"
                >
                  <CopyOutlined className={styles.TaskFixedIcons} />
                </Tooltip>
              </>
            )}

            {filteredTasksIds.length > 0 && (
              <Tooltip
                color="#FF0000"
                placement="left"
                title="Устгах"
                className="hover: text-5xl hover:bg-gray-200  w-auto"
              >
                <Badge count={filteredTasksIds.length}>
                  <DeleteOutlined
                    style={{ color: "red" }}
                    className={styles.TaskFixedIcons}
                  />
                </Badge>
              </Tooltip>
            )}

            <Tooltip
              color="#01a3a4"
              placement="left"
              title="Хадгалах"
              className="hover: text-5xl hover:bg-gray-200 h-8 w-8 m-2"
            >
              <SaveOutlined
                style={{ color: "green" }}
                className={styles.TaskFixedIcons}
              />
            </Tooltip>
          </div>
        </Col>
      </Row>

      <Row>
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
          <div className={styles.TaskBankPagination}>
            <Pagination
              showQuickJumper
              defaultCurrent={currentPage}
              defaultPageSize={pagesize}
              total={cnt}
              //{filteredTasks.length}
              onChange={onChange}
            />
          </div>
        </Col>
      </Row>
    </>
  );
}

export default TaskBankPage;
