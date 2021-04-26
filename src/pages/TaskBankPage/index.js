import React, { useEffect, useState } from "react";
import TasksComp from "../../components/TasksComp";

//#region ------------- Redux library -------------------------------
import { useSelector, useDispatch } from "react-redux";

import { loadClassDatas } from "../../redux/classTable/actionCreator";
import { loadSubjectDatas } from "../../redux/subjectTable/actionCreator";
import { loadTopicDatas } from "../../redux/topicTable/actionCreator";
import { loadTaskLevelDatas } from "../../redux/taskLevel/actionCreator";
import {
  loadTaskDatas,
  changeSelSubjectId,
  changeSelClassId,
  changeTopicIds,
  changeCurrentPage,
  delTask,  
} from "../../redux/taskTable/actionCreator";

//#endregion 

//#region  ------------- Icons ---------------------------------------
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
  SaveOutlined,
  UndoOutlined,
  RedoOutlined,
  FormOutlined,
  DeleteOutlined,
  FolderOpenOutlined,
} from "@ant-design/icons";
//#endregion

//#region  ant-ийн сангууд
import {
  Select,
  Tree,
  Pagination,
  Tooltip,
  Statistic,
  Card,
  Row,
  Col,
  Badge,
  Button,
  Empty,
  
} from "antd";
import styles from "./style.module.css";

//#endregion

//Тухайн хуудасны эхлэл-------------------------------------------------------------------------------------------------
const TaskBankPage = () => {
  const dispatch = useDispatch();
  const { Option } = Select;

  //#region  --------------- useStates ----------------------------------------
  const [checkedTasks, setCheckedTasks] = useState([]);
  //const [topicNodes, setTopicNodes] = useState([]);
  //#endregion

  //#region  --------------- Redux states ----------------------------------------
  const selSubjId = useSelector((state) => state.tasks.selectedSubjId);
  const selClssId = useSelector((state) => state.tasks.selectedClassId);
  const subjectTableData = useSelector((state) => state.subjectTable.list);
  const classTableData = useSelector((state) => state.classTable.list);

  const topicTableData = useSelector((state) => state.topicTable.list);  
  const checkedTopicIds = useSelector((state) => state.tasks.checkedTopicIds);

  const taskTableData = useSelector((state) => state.tasks.list);
  const filteredTasksIds = useSelector((state) => state.tasks.filteredTasks);
  const taskLevelDatas = useSelector((state) => state.taskLevel.list);

  const currentPage = useSelector((state) => state.tasks.currentPage);
  const pagesize = useSelector((state) => state.tasks.pageSize);

  const userId = useSelector((state) => state.tasks.userId);


  //#endregion

  //#region   --------------- Effects --------------------------
  useEffect(() => {
    dispatch(loadClassDatas());
    dispatch(loadSubjectDatas());
    dispatch(loadTaskDatas());
    dispatch(loadTopicDatas());
    dispatch(loadTaskLevelDatas());
    setCheckedTasks(taskTableData.filter((t) => checkedTopicIds.includes(t.topic_id)));
  }, []);

  useEffect(() => {
    dispatch(loadTopicDatas());
  }, [selSubjId, selClssId]);

  useEffect(() => {
    //if(userId!==null) setCheckedTasks(taskTableData.filter((t) => checkedTopicIds.includes(t.topic_id) &&t.user_id===userId));
    //else setCheckedTasks(taskTableData.filter((t) => checkedTopicIds.includes(t.topic_id)));
    //console.log(checkedTasks);
  }, [checkedTopicIds]);

    useEffect(() => {
    //if(userId!==null) setCheckedTasks(taskTableData.filter((t) => checkedTopicIds.includes(t.topic_id) &&t.user_id===userId));
    //else setCheckedTasks(taskTableData.filter((t) => checkedTopicIds.includes(t.topic_id)));
    //console.log(checkedTasks);
  }, [filteredTasksIds,userId]);
  //#endregion

  //#region ----------------- Үзэгдлүүд ----------------------------------
  const OnChangeDeleteTask = (value) => {
    dispatch(delTask(filteredTasksIds[0]));
  };

  const OnChangeClass = (value) => {
    dispatch(changeSelClassId(value));
  };

  const OnChangeSubject = (value) => {
    dispatch(changeSelSubjectId(value));
  };

  function onChange(value) {
    dispatch(changeCurrentPage(value));
  }

  const onSelectTopicTree = (selectedKeys, info) => {
    //console.log("selected", selectedKeys, info);
  };

  const onCheckedTopicIds = (checkedKeys, info) => {
    dispatch(changeTopicIds(checkedKeys));
  };

  //#endregion

  const topicNodes = [];
  topicTableData &&
    topicTableData
      .filter(
        (c) => c.class_id._id === selClssId && c.subject_id._id === selSubjId
      )
      .map((td) => {
        const { key, title, children } = td;
        return topicNodes.push({
          key,
          title,
          children,
        });
      });

  //setTopicNodes(tmp);

  return (
    <>
      <Row>
        <Col xs={7} sm={7} md={7} lg={7} xl={7}></Col>
        <Col xs={11} sm={11} md={11} lg={11} xl={11}>
          <div className={styles.TaskFixedIcons}>
          <Tooltip
                  color="#FF0000"
                  placement="bottom"
                  title="Засах"
                  className="hover: text-5xl hover:bg-gray-200 w-auto"
                >
                  <FormOutlined className={styles.TaskFixedIcons} />
           </Tooltip>

           <Tooltip
                  color="#FF0000"
                  placement="bottom"
                  title="Хуулах"
                  className="hover: text-5xl hover:bg-gray-200 w-auto"
                >
                  <CopyOutlined className={styles.TaskFixedIcons} />
           </Tooltip>
           <Tooltip
                  color="#FF0000"
                  placement="bottom"
                  title="Харах"
                  className="hover: text-5xl hover:bg-gray-200 w-auto"
                >
                  <EyeOutlined className={styles.TaskFixedIcons} />
           </Tooltip>
           <Tooltip
                  color="#FF0000"
                  placement="bottom"
                  title="Устгах"
                  className="hover: text-5xl hover:bg-gray-200 w-auto"
                >
                  <DeleteOutlined className={styles.TaskFixedIcons} />
           </Tooltip>
           <Tooltip
                  color="#FF0000"
                  placement="bottom"
                  title="Хадгалах"
                  className="hover: text-5xl hover:bg-gray-200 w-auto"
                >
                  <SaveOutlined className={styles.TaskFixedIcons} />
           </Tooltip>
             
            {/* <ArrowLeftOutlined className={styles.TaskFixedIcons} />
            <ArrowRightOutlined className={styles.TaskFixedIcons} />
            <FormOutlined className={styles.TaskFixedIcons} /> */}
           
           
          </div>
        </Col>
        {/* <Col xs={6} sm={6} md={6} lg={6} xl={6}>
          <div>
            <Button className={styles.button}>Даалгавар үүсгэх</Button>
            <Button className={styles.button}>Тест үүсгэх</Button>
          </div>
        </Col> */}
      </Row>

      <Row>
        <Col xs={5} sm={5} md={5} lg={5} xl={5}>
          <div className={styles.SelectFixed} className="flex">
            <div>
              <div>Хичээл</div>
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
                <Option key={item.key} value={item.key}>
                  {item.title}
                </Option>
              ))}
            </Select>
            
            </div>
            &nbsp;
            <div>
              <div>Анги</div>
            <Select
              showSearch
              defaultValue={selClssId}
              style={{ width: 140 }}
              placeholder="Анги сонгох"
              onChange={OnChangeClass}
            >
              {classTableData.map((item) => (
                <Option key={item.key} value={item.key}>
                  {item.title}
                </Option>
              ))}
            </Select>
            </div>
            
          </div>
        </Col>
        <Col xs={19} sm={19} md={19} lg={19} xl={19}>
          <div className="flex">
            <Card style={{ width: "200px", padding: "0px", margin: "0px" }}>
              <Statistic
                title="Нийт даалгавраас"
                value={`${filteredTasksIds.length} / ${
                  taskTableData.filter((t) =>
                    checkedTopicIds.includes(t.topic_id)
                  ).length
                }`}
                prefix={<FolderOpenOutlined />}
              />
            </Card>

            <Card style={{ width: "200px", padding: "0px", margin: "0px" }}>
              <Statistic
                title="Олон сонголттой"
                value={`${checkedTasks.filter((t) =>filteredTasksIds.includes(t._id)&& t.taskType_id._id==="606efc71b5f4f304b423daba" ).length} / ${
                  checkedTasks.filter((t) =>t.taskType_id._id==="606efc71b5f4f304b423daba" ).length
                }`}
                prefix={<FolderOpenOutlined />}
              />
            </Card>
            <Card style={{ width: "200px", padding: "0px", margin: "0px" }}>
              <Statistic
                title="Бусад"
                value={`${checkedTasks.filter((t) =>filteredTasksIds.includes(t._id)&& t.taskType_id._id!=="606efc71b5f4f304b423daba" ).length} / ${checkedTasks.filter((t) =>t.taskType_id._id!=="606efc71b5f4f304b423daba" ).length}`}
                prefix={<FolderOpenOutlined />}
              />
            </Card>
            {
              taskLevelDatas.map(tld=>
                <Card style={{ width: "200px", padding: "0px", margin: "0px" }}>
                  <Statistic
                    title={tld.name}
                    value={`${checkedTasks.filter((t) =>filteredTasksIds.includes(t._id)&& t.taskLevel_id._id===tld._id).length} / ${checkedTasks.filter((t) =>t.taskLevel_id._id===tld._id ).length}`}
                    prefix={<FolderOpenOutlined />}
                  />
                </Card>)
            }           
            <Card style={{ width: "200px", padding: "0px", margin: "0px" }}>
              <Statistic
                title="Оноо"
                value={`${checkedTasks.filter((t) =>filteredTasksIds.includes(t._id)).reduce((a,b)=>a=a+b.score, 0)} `}
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
            {topicNodes.length!==0?<Tree
              checkable
              checkedKeys={checkedTopicIds}
              onSelect={onSelectTopicTree}
              onCheck={onCheckedTopicIds}
              treeData={topicNodes}
            />:<Empty />}
            
          </div>
        </Col>
        <Col xs={17} sm={18} md={18} lg={18} xl={18}>
          <div className={styles.TaskBody}>
            <TasksComp />
          </div>
        </Col>
        <Col xs={1} sm={1} md={1} lg={1} xl={1}>
          <div className={styles.TaskRightFixedIcons}>
            
            {filteredTasksIds.length === 1 && (
              <><Tooltip
                  color="#FF0000"
                  placement="left"
                  title="Засах"
                  className="hover: text-5xl hover:bg-gray-200 w-auto"
                >
                  <FormOutlined className={styles.TaskFixedIcons} />
                </Tooltip>

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
                  title="Хуулах"
                  className="hover: text-5xl hover:bg-gray-200 w-auto"
                >
                  <CopyOutlined className={styles.TaskFixedIcons} />
                </Tooltip>
              </>
            )}

            {filteredTasksIds.length === 1 && (
              <Tooltip
                color="#FF0000"
                placement="left"
                title="Устгах"
                className="hover: text-5xl hover:bg-gray-200  w-auto"
              >
                <Badge count={filteredTasksIds.length}>
                  <Button onClick={OnChangeDeleteTask}>
                    <DeleteOutlined
                      style={{ color: "red" }}
                      className={styles.TaskFixedIcons}
                    />
                  </Button>
                </Badge>
              </Tooltip>
            )}

            <Tooltip
              color="#01a3a4"
              placement="left"
              title="Тест үүсгэх"
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
              total={checkedTasks.length}
              //{filteredTasks.length}
              onChange={onChange}
            />
          </div>
        </Col>
      </Row>
    </>
  );
};

export default TaskBankPage;
