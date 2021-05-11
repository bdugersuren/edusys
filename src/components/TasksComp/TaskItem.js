import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeCheckedTasks} from "../../redux/taskTable/actionCreator";
import ReactHtmlParser from 'react-html-parser';
//import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import MathJax from 'react-mathjax-preview'

import { Row, Col,Modal, Progress, Checkbox, Radio ,Space } from "antd";
import styles from "./style.module.css";
//#region  ----------------- Icons --------------------------------

import {
  CgMaximize,
  CgMinimize,
  CgChevronDown,
  CgChevronUp,
} from "react-icons/cg";

import {
  EyeOutlined
} from "@ant-design/icons";
import IconComp from "../IconComp";
//#endregion


function TaskItem({ task }) {
  const dispatch = useDispatch();

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isAnswer, setIsAnswer] = useState(false);
  const [isQuestions, setIsQuestions] = useState(task.isExpendAllTask);
  const [value, setValue] = useState(null);

  const checkedTaskIds = useSelector((state) => state.tasks.checkedTaskIds);



  useEffect(() => {
    setIsAnswer(task.isExpentAns);
    setIsQuestions(task.isExpentTask);
  }, [task]);

  //#region  ------------------ Functions ----------------------------------
  function onChange(e) {
    //console.log(`checked = ${e.target.checked}    id=>  ${checkedTaskIds}`);
    //setValue(e.target.value);
    dispatch(changeCheckedTasks({id:task._id, isChecked:e.target.checked}));
  }

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
//#endregion


  return (
    <div>
      <Row>
        <Col xs={21} sm={21} md={21} lg={21} xl={21}>
          <div className={styles.TaskQuestionHeader}>
            <Checkbox onChange={onChange} checked={task.checked}></Checkbox>

            <div className={styles.TaskQuestionHeaderTitle}>{task.title}</div>
            
            <div className="flex-auto"></div>
            <div className={styles.TaskQuestionHeaderTitle}>({task.score} оноо)</div>
            <div className={styles.TaskQuestionHeaderTitle}>
              <EyeOutlined onClick={showModal}/> 
            </div>
            
            
          </div>
        </Col>

        <Col xs={3} sm={3} md={3} lg={3} xl={3}>
          <div style={{display: 'flex', height: '3.25rem', background:'none'}}>
            <div style={{width:'15%'}} className="p-1">
              <IconComp iconCode="openQuiz" color="green" size="15" />           
            </div>
            <div style={{width:'15%'}} className="p-1">
               <IconComp iconCode={task.taskType_id.code} />     
            </div>
            <div onClick={() => setIsAnswer(!isAnswer)}>
              {isAnswer ? (
                <CgMinimize className={styles.TaskListIcons} />
              ) : (
                <CgMaximize className={styles.TaskListIcons} />
              )}
            </div>
            <div onClick={() => setIsQuestions(!isQuestions)}>
              {isQuestions ? (
                <CgChevronUp className={styles.TaskListIcons} />
              ) : (
                <CgChevronDown className={styles.TaskListIcons} />
              )}
            </div>
            <Progress percent={50} steps={3} strokeColor="#52c41a"/>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
          {isQuestions && (
            <div>
              <div className={styles.TaskQuestionsList} style={{borderBottom: '1px solid #ddd', paddingBottom: '1rem' }}>
              {ReactHtmlParser( task.questions)}               
              </div>

              <div className={styles.TaskAnswerList}>
                {isAnswer && (
                  <Radio.Group 
                      //onChange={onChange} 
                      value={value}>
                       <Space direction="vertical">
                    {task.q_answer.length > 0 &&
                      task.q_answer.map((ans) => (
                        <Radio
                          className={styles.TaskAnswerRadio}
                          key={ans._id}
                          value={ans._id}
                          onChange={()=>setValue(value)}
                        >
                          <p>{ReactHtmlParser(ans.answer1)}</p>
                          
                        </Radio>
                      ))}
                      </Space>
                  </Radio.Group>
                )}
              </div>
            </div>
          )}
          <div style={{ background: "#f2f2f2", width: "100%", height: "0.5rem" }}>
            <br />
          </div>
        </Col>
      </Row>
    
      <Modal title="Даалгаврын харагдах байдал" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} width={1000}>
        
        {ReactHtmlParser( task.questions)}
        <hr />

        <div className={styles.TaskAnswerList}>
                
                  <Radio.Group onChange={onChange} value={value}>
                  <Space direction="vertical">
                    {task.q_answer.length > 0 &&
                      task.q_answer.map((ans) => (
                        <Radio
                          className={styles.TaskAnswerRadio}
                          key={ans._id}
                          value={ans._id}>
                          <MathJax math={ReactHtmlParser(ans.answer1)} />
                          {/* {ReactHtmlParser(ans.answer1)} */}
                        </Radio>
                      ))}
                      </Space>
                  </Radio.Group>
              
              </div>
            
      </Modal>
    
    </div>
  );
}

export default TaskItem;
