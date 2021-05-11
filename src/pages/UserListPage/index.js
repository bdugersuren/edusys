import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadClassDatas } from "../../redux/classTable/actionCreator";
import { loadSubjectDatas } from "../../redux/subjectTable/actionCreator";
import { loadTopicDatas } from "../../redux/topicTable/actionCreator";
import { loadTaskLevelDatas } from "../../redux/taskLevel/actionCreator";
import {
  loadTaskDatas,
  addFullTaskData,
} from "../../redux/taskTable/actionCreator";
//import { filterTaskDatas } from "../../redux/taskTable/actionCreator";
import IconComp from "../../components/IconComp";

import CKEditor from "@ckeditor/ckeditor5-react";
//import InlineEditor from '@ckeditor/ckeditor5-editor-inline';
//import CKFinder from '@ckeditor/ckeditor5-ckfinder/src/ckfinder';
import MathEditor from "ckeditor5-build-classic-mathtype";
import ReactHtmlParser from "react-html-parser";
//import MathJax from "react-mathjax3";
//import ClassicEditor from "../../build/ckeditor";
import MathJax from 'react-mathjax-preview';

import { BiBookReader } from "react-icons/bi";

import { GrCheckmark, GrDown, GrEdit, GrTask } from "react-icons/gr";

import {
  Select,
  Tree,
  notification,
  Row,
  Col,
  Button,
  Card,
  Statistic,
  Radio,
  Tooltip,
  Badge,
  Input, Rate, InputNumber,
  Modal,
  Space
} from "antd";

import styles from "./style.module.css";
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
import { BiX, BiQuestionMark, BiSave } from "react-icons/bi";
import { AiOutlineEye } from "react-icons/ai";

const { Option } = Select;
const { TextArea } = Input;
const desc = ['Хялбар', 'Дундаж', 'Ахисан', 'Хүнд', 'Маш хүнд'];
const html =
  "$\\sum\\limits_{i = 0}^n {i^2 } = \\frac{n(n + 1)(2n + 1)}{6}$<br>Have a good day!";

const ascii = "U = 1/(R_(si) + sum_(i=1)^n(s_n/lambda_n) + R_(se))";
const content = `This can be dynamic text (e.g. user-entered) text with ascii math embedded in $$ symbols like $$${ascii}$$`;

const openNotification = () => {
  notification.open({
    message: "Даалгавар амжилттай хадгалагдлаа",
    description: "Тухайн даалгавар амжилттай хадгалагдлаа танд баяр хүргэе.",
    icon: <GrCheckmark style={{ color: "#108ee9" }} />,
  });
};

function TopicsPage() {
  //const [checked, setChecked] = useState([]);
  //const [expanded, setExpanded] = useState([]);
  const [classId, setClassId] = useState(null);
  const [subjectId, setSubjectId] = useState(null);
  const [checkedTrees, setCheckedTrees] = useState([]);
  const [selectedTasks, setSelectedTasks] = useState([]);
  const [editor, setEditor] = useState(null);
  const [lvl, setLvl] = useState(1);
  const [correctAnswer, setCorrectAnswer] = useState(1);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const onHandleCorrectAns = (e) => {
    setCorrectAnswer(e.target.value);
    console.log("======================          ${value}         =====================", e.target.value);
  }
  //const [filteredTasks, setFilteredTasks] = useState([]);
  const [task, setTask] = useState({
    title: "",
    questions: "",
    correctFeedback: "",
    incorrectFeedback: "",
    taskType_id: "606efc7cb5f4f304b423dabb",
    user_id: "5fd77142b3c8ca42a0d2a579",
    topic_id: "606da27de20d6052e0b776f9",
    taskLevel_id: "606efacfb5f4f304b423dab4",
    ndx: "",
    score: 0,
    title: "Энгийг бутархайн хуваарь нь ижил үед",
    description: "Энгийн бутархайг хуваарь нь ялгаатай бол ижил болгох ёстой",
    createdDate: "2021-04-13T08:12:53.837Z",
    answers: [
      {
        answer1: "",
        score: 0,
      },
      {
        answer1: "",
        score: 0,
      },
    ],
  });
  const handleRightClickTree = () => {
    console.log("--------------- Tight click ----------------");
  }
  const handleModalShow = () => {
    setIsModalVisible(true);
  }

  const handleModalOk = () => {
    setIsModalVisible(true);
  }
  const handleModalCancel = () => {
    setIsModalVisible(false);
  }
  const onChangeScore = (value) => {
    setTask({ ...task, score: value });
  }


  const onHandleAnsType = (e) => {
    setTask({ ...task, taskType_id: e.target.value });
  };


  const onSelectTopicId = (selectedKeysValue, info) => {
    setTask({ ...task, topic_id: selectedKeysValue[0] });
  };

  const handleChangeLvl = value => {
    setTask({ ...task, taskLevel_id: taskLevel[value - 1]._id });
    setLvl(value);
  };
  const onChangeTitle = (e) => {
    setTask({ ...task, title: e.target.value });
  }
  const onChangeCorrectFeedback = (e) => {
    setTask({ ...task, correctFeedback: e.target.value });
  }
  const onChangeIncorrectFeedback = (e) => {
    setTask({ ...task, incorrectFeedback: e.target.value });
  }

  const handleTaskChange = (data) => {
    setTask({ ...task, questions: data });
  };

  const handleAddClick = () => {
    setTask({ ...task, answers: [...task.answers, { answer1: "", score: 0 }] });
  };

  const handleRemoveClick = (index) => {
    //console.log(" ===========> Remove index ",index, "  <=========");
    //const list = [...answers];
    //list.splice(index, 1);
    //setAnswers(list);
    const lst = task.answers.filter((a, i) => index !== i);
    setTask({ ...task, answers: lst });
    console.log(lst);
  };
  const handleInputChange = (data, index) => {
    const list = [...task.answers];
    list[index]["answer1"] = data;
    setTask({ ...task, answers: list });
    //console.log("**************> ",answers);
  };

  const handleSaveTask = () => {
    dispatch(addFullTaskData(task));
    openNotification();
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadTopicDatas());
    dispatch(loadClassDatas());
    dispatch(loadSubjectDatas());
    dispatch(loadTaskDatas());
    dispatch(loadTaskLevelDatas());
  }, []);

  const subjectTableData = useSelector((state) => state.subjectTable.list);
  const classTableData = useSelector((state) => state.classTable.list);
  const topicTableData = useSelector((state) => state.topicTable.list);
  const taskTableData = useSelector((state) => state.tasks.list);
  const filteredTasks = useSelector((state) => state.tasks.filteredTasks);
  const selSubjId = useSelector((state) => state.tasks.selectedSubjId);
  const selClssId = useSelector((state) => state.tasks.selectedClassId);
  const taskLevel = useSelector((state) => state.taskLevel.list);


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
        <Col xs={7} sm={7} md={7} lg={7} xl={7}></Col>
        <Col xs={11} sm={11} md={11} lg={11} xl={11}>
          <div className={styles.TaskFixedIcons}>
            <Tooltip
              color="#FF0000"
              placement="bottom"
              title="Харах"
              className="hover: text-5xl hover:bg-gray-200 w-auto"
            >
              <Button
                onClick={handleModalShow}
                icon={<EyeOutlined />}
              />

            </Tooltip>



            <Tooltip
              color="#FF0000"
              placement="bottom"
              title="Цэвэрлэх"
              className="hover: text-5xl hover:bg-gray-200  w-auto"
            >
              <DeleteOutlined
                style={{ color: "red" }}
                className={styles.TaskFixedIcons}
              />
            </Tooltip>


            <Tooltip
              color="#01a3a4"
              placement="bottom"
              title="Хадгалах"
              className="hover: text-5xl hover:bg-gray-200 h-8 w-8 m-2"
            >
              <Button
                onClick={handleSaveTask}
                icon={<SaveOutlined />}
              />
            </Tooltip>










            {/* <ArrowLeftOutlined className={styles.TaskFixedIcons} />
            <ArrowRightOutlined className={styles.TaskFixedIcons} />
            <FormOutlined className={styles.TaskFixedIcons} />
            <CopyOutlined className={styles.TaskFixedIcons} />
            <DeleteOutlined className={styles.TaskFixedIcons} />
            <PaperClipOutlined className={styles.TaskFixedIcons} />
            <PrinterOutlined className={styles.TaskFixedIcons} />
            <CheckCircleOutlined className={styles.TaskFixedIcons} />
            <EyeOutlined className={styles.TaskFixedIcons} /> */}
          </div>
        </Col>
        <Col xs={6} sm={6} md={6} lg={6} xl={6}>
          <div>
            {/* <Button className={styles.button}>Даалгавар үүсгэх</Button>
            <Button className={styles.button}>Тест үүсгэх</Button> */}
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
            {/* <Card style={{width:'200px',padding:'0px',margin:'0px'}}>
            <Statistic 
                  title="Нийт даалгавраас" 
                  value={`3 / 34`}  
                  prefix={<FolderOpenOutlined />}
                  />
          </Card> */}
            <Radio.Group
              defaultValue="c"
              buttonStyle="solid"
              
            >
              <Radio.Button 
                value="606efc71b5f4f304b423daba" 
                onChange={onHandleAnsType}               
                >
                   <IconComp iconCode="openQuiz" color="#18FFff" size="24" />
                   Олон сонголттой
              </Radio.Button>
              <Radio.Button value="6084498c133c565c4d52e6f4" onChange={onHandleAnsType}>
                {" "}
                <IconComp iconCode="openQuiz" color="#18FFff" size="24" />{" "}
                Нээлттэй
              </Radio.Button>

              <Radio.Button value="d" disabled>
                <IconComp iconCode="openQuiz" color="#18FFff" size="24" />{" "}
                Харгалзуулах
              </Radio.Button>
              <Radio.Button value="e" disabled>
                <IconComp iconCode="openQuiz" color="#18FFff" size="24" /> Нөхөх
              </Radio.Button>
            </Radio.Group>

            <div className="flex-row border-1">
              <div>
                <Rate
                  tooltips={taskLevel.map(t => { return (t.name) })}
                  onChange={handleChangeLvl}
                  value={lvl}
                  count={taskLevel.length}
                />

              </div>
              <div>
                {taskLevel[lvl-1].name}
              </div>
            </div>



            <div className="flex-row">
              <div>
                <InputNumber min={0} max={100} defaultValue={1} onChange={onChangeScore} />
              </div>

              <div>
                <label>
                  Тестийн оноо
                </label>
              </div>


            </div>


          </div>
        </Col>
        <Col xs={0} sm={0} md={0} lg={0} xl={0}></Col>
      </Row>
      <Row>
        <Col xs={5} sm={5} md={5} lg={5} xl={5}>
          <div className={styles.taskTree}>
            <Tree
              //checkable
              //checkedKeys={checkedTopicIds}
              onSelect={onSelectTopicId}
              //onCheck={onCheckedTopicIds}
              treeData={topicNodes}
              onRightClick={handleRightClickTree}
            />
          </div>
        </Col>
        <Col xs={17} sm={18} md={18} lg={18} xl={18}>


          <Row>
            <Col className="w-full">
              <Input placeholder="Тухайн даалгаврын гарчиг" showCount maxLength={50} onChange={onChangeTitle} />

            </Col>
          </Row>

          <Row>
            <Col className="w-full">
              {/* ----------------- Асуултын div --------------------------- */}
              <div>
                <div className="text-center">Асуулт оруулах талбар</div>
                <CKEditor
                  data={task.questions}
                  editor={MathEditor}
                  onInit={(editor) => {
                    console.log("Editor is ready to use!", editor);
                  }}
                  onChange={(event, editor) => {
                    const data = editor.getData();
                    setEditor(data);
                    console.log({ event, editor, data });
                    handleTaskChange(data);
                  }}

                  config={
                    {
                      ckfinder: {
                        uploadUrl: 'http://localhost:8001/uploads/images'
                      }
                    }
                  }
                // onBlur={ ( event, editor ) => {
                //     console.log( 'Blur.', editor );
                // } }
                // onFocus={ ( event, editor ) => {
                //     console.log( 'Focus.', editor );
                // } }
                />
              </div>
              {/* ----------------- Хариулт div --------------------------- */}
              <div className="flex">
                <div>Зөв Хариулт</div> <BiQuestionMark />
              </div>
              <Radio.Group onChange={onChange} value={correctAnswer}>
                {task.answers.map((x, i) => (
                  <Radio value={i + 1} onChange={onHandleCorrectAns} >Хариулт - {i + 1}</Radio>
                ))}
              </Radio.Group>
              {task.answers.map((x, i) => {
                return (
                  <div key={i}>
                    <hr />
                    <div className="flex">
                      <div className="text-center flex-auto">Хариулт-{i}</div>
                      <div className=""></div>
                      <div
                        className="flex"
                        style={{ color: "red", backgroundColor: "gray" }}
                      >
                        {" "}
                        {task.answers.length !== 1 && (
                          <button onClick={() => handleRemoveClick(i)}>
                            <div>
                              <BiX />
                            </div>{" "}
                            <div>Remore</div>{" "}
                          </button>
                        )}
                      </div>
                    </div>
                    <CKEditor
                      data={x.answer1}
                      editor={MathEditor}
                      // onInit={ editor => {
                      //     console.log( 'Editor is ready to use!', editor );
                      // } }
                      onChange={(event, editor) => {
                        const data = editor.getData();
                        // setEditor(data);
                        // console.log( { event, editor, data });
                        handleInputChange(data, i);
                      }}

                      config={{
                        ckfinder: {
                          uploadUrl: 'http://localhost:8001/uploads/images'
                        }
                      }}

                    />
                  </div>
                );
              })}
              <div className="text-center">
                {" "}
                {task.answers.length <= 10 && (
                  <Button
                    type="primary"
                    shape="round"
                    icon={<BiSave />}
                    onClick={handleAddClick}
                  >
                    Хариулт нэмэх
                  </Button>
                )}{" "}
              </div>
            </Col>
          </Row>
          <Row>
            <Col className="w-full">
              <div>
                <div>Зөв хариултан өгөх тайлбар</div>
                <TextArea rows={4} onChange={onChangeCorrectFeedback} />
              </div>
              <div>
                <div>Буруу хариултан өгөх тайлбар</div>
                <TextArea rows={4} onChange={onChangeIncorrectFeedback} />
              </div>
            </Col>
          </Row>

          <Row>
            <Col className="w-96">
              {ReactHtmlParser(task.questions)}

            </Col>
          </Row>

          <Row>
            <Col className="w-96">
              <MathJax math={ReactHtmlParser(task.questions)} />
            </Col>
          </Row>


        </Col>
        <Col xs={1} sm={1} md={1} lg={1} xl={1}>
          <div className={styles.TaskRightFixedIcons}>
            {/* <FormOutlined className={styles.TaskFixedIcons} />
            <UndoOutlined className={styles.TaskFixedIcons} />
            <RedoOutlined className={styles.TaskFixedIcons} />

            <ScissorOutlined className={styles.TaskFixedIcons} />
            <PrinterOutlined className={styles.TaskFixedIcons} />
            <PaperClipOutlined className={styles.TaskFixedIcons} />
            <PictureOutlined className={styles.TaskFixedIcons} />
            <PlaySquareOutlined className={styles.TaskFixedIcons} /> */}
            {1 && (
              <>
                <Tooltip
                  color="#FF0000"
                  placement="left"
                  title="Харах"
                  className="hover: text-5xl hover:bg-gray-200 w-auto"
                >
                  <Button
                    onClick={handleModalShow}
                    icon={<EyeOutlined />}
                  />

                </Tooltip>

              </>
            )}

            {1 && (
              <Tooltip
                color="#FF0000"
                placement="left"
                title="Цэвэрлэх"
                className="hover: text-5xl hover:bg-gray-200  w-auto"
              >
                <DeleteOutlined
                  style={{ color: "red" }}
                  className={styles.TaskFixedIcons}
                />
              </Tooltip>
            )}

            <Tooltip
              color="#01a3a4"
              placement="left"
              title="Хадгалах"
              className="hover: text-5xl hover:bg-gray-200 h-8 w-8 m-2"
            >
              <Button
                onClick={handleSaveTask}
                icon={<SaveOutlined />}
              />
            </Tooltip>
          </div>
        </Col>
      </Row>


      <Modal title="Даалгаврын харагдах байдал"
        visible={isModalVisible}
        onOk={handleModalOk}
        onCancel={handleModalCancel}
        width={1000}
      >

        {ReactHtmlParser(task.questions)}
        <hr />

        <div >

          <Radio.Group
          //onChange={onChange} 
          //value={value}
          >
             <Space direction="vertical">
            {
              task.answers.map((ans, index) => (
                <Radio
                  className={styles.TaskAnswerRadio}
                  key={index}
                  value={index}>
                  {ReactHtmlParser(ans.answer1)}
                  {/* {ReactHtmlParser(ans.answer1)} */}
                </Radio>
              ))}
              </Space>
          </Radio.Group>

        </div>

      </Modal>


    </>
  );
}

export default TopicsPage;
