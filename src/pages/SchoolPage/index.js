import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadClassDatas } from "../../redux/classTable/actionCreator";
import { loadSubjectDatas } from "../../redux/subjectTable/actionCreator";
import { loadTopicDatas } from "../../redux/topicTable/actionCreator";
import { loadTaskLevelDatas } from "../../redux/taskLevel/actionCreator";
import Highlighter from 'react-highlight-words';


import {
  loadTaskDatas,
  addFullTaskData,
} from "../../redux/taskTable/actionCreator";

//#region  --------------------  Icons ----------------------------------
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
  Space,
  Table, Menu,Dropdown
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
  SearchOutlined,
  DownOutlined 
} from "@ant-design/icons";
import { BiX, BiQuestionMark, BiSave } from "react-icons/bi";
import { AiOutlineEye } from "react-icons/ai";

//#endregion

const menu = (
  <Menu>
    <Menu.Item>Action 1</Menu.Item>
    <Menu.Item>Action 2</Menu.Item>
  </Menu>
);

function SchoolPage() {

 const [rowSelection, setRowSelection] = useState([]); 

 const expandedRowRender = () => {
  const columns = [
    { title: 'Date', dataIndex: 'date', key: 'date' },
    { title: 'Name', dataIndex: 'name', key: 'name' },
    {
      title: 'Status',
      key: 'state',
      render: () => (
        <span>
          <Badge status="success" />
          Finished
        </span>
      ),
    },
    { title: 'Upgrade Status', dataIndex: 'upgradeNum', key: 'upgradeNum' },
    {
      title: 'Action',
      dataIndex: 'operation',
      key: 'operation',
      render: () => (
        <Space size="middle">
          <a>Pause</a>
          <a>Stop</a>
          <Dropdown overlay={menu}>
            <a>
              More <DownOutlined />
            </a>
          </Dropdown>
        </Space>
      ),
    },
  ];

  const data = [];
  for (let i = 0; i < 3; ++i) {
    data.push({
      key: i,
      date: '2014-12-24 23:12:00',
      name: 'This is production name',
      upgradeNum: 'Upgraded: 56',
    });
  }
  return <Table columns={columns} dataSource={data} pagination={false} />;
};


  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      filters: [
        {
          text: 'Joe',
          value: 'Joe',
        },
        {
          text: 'Jim',
          value: 'Jim',
        },
        {
          text: 'Submenu',
          value: 'Submenu',
          children: [
            {
              text: 'Green',
              value: 'Green',
            },
            {
              text: 'Black',
              value: 'Black',
            },
          ],
        },
      ],
      // specify the condition of filtering result
      // here is that finding the name started with `value`
      onFilter: (value, record) => record.name.indexOf(value) === 0,
      sorter: (a, b) => a.name.length - b.name.length,
      sortDirections: ['descend'],
    },
    {
      title: 'Age',
      dataIndex: 'age',
      defaultSortOrder: 'descend',
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: 'Address',
      dataIndex: 'address',
      filters: [
        {
          text: 'London',
          value: 'London',
        },
        {
          text: 'New York',
          value: 'New York',
        },
      ],
      filterMultiple: false,
      onFilter: (value, record) => record.address.indexOf(value) === 0,
      sorter: (a, b) => a.address.length - b.address.length,
      sortDirections: ['descend', 'ascend'],
    },
  ];
  
  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    },
    {
      key: '4',
      name: 'Jim Red',
      age: 32,
      address: 'London No. 2 Lake Park',
    },
  ];

function onChange(pagination, filters, sorter, extra) {
    console.log('params', pagination, filters, sorter, extra);
  }
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
                //onClick={handleModalShow}
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
                //onClick={handleSaveTask}
                icon={<SaveOutlined />}
              />
            </Tooltip>           
            </div>
            </Col>
            <Col xs={6} sm={6} md={6} lg={6} xl={6}>
              <div>

              </div>
            </Col>
          </Row>

          <Row>
            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            <Table 
                rowSelection={rowSelection} 
                columns={columns} 
                dataSource={data} 
                expandable={{expandedRowRender}}
                onChange={onChange} />
            </Col>
          </Row>
    </>
  );
}

export default SchoolPage;




/**
 

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







           
           
            </div>
            </Col>
            <Col xs={6} sm={6} md={6} lg={6} xl={6}>
              <div>

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
                      
                    </Radio>
                  ))}
                  </Space>
              </Radio.Group>
    
            </div>
    
          </Modal>
    
    



 */   