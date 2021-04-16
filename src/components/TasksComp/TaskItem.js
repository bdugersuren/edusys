import React, { useState } from "react";
import { Radio } from "antd";
import { Checkbox } from "antd";
import { Row, Col, Divider } from "antd";
import styles from "./style.module.css";



import {
  CgMaximize,
  CgMinimize,
  CgChevronDown,
  CgChevronUp,
} from "react-icons/cg";

import {
  BiCheckboxChecked,
  BiCheckbox,
  BiArrowFromTop,
  BiSortUp,
} from "react-icons/bi";


const radioStyle = {
  display: "block",
  height: "50px",
  lineHeight: "50px",
};

function TaskItem({ task, setSelectedTasks }) {
  const [isAnswer, setIsAnswer] = useState(true);
  const [isQuestions, setIsQuestions] = useState(false);
  const [isChoose, setIsChoose] = useState(false);
  const [value, setValue] = useState(null);

  function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
    setValue(e.target.value);
  }

  return (
    <Row>
      <Col xs={21} sm={21} md={21} lg={21} xl={21}>




        <div className={styles.TaskQuestionHeader}  >
          <Checkbox onChange={onChange}></Checkbox>
          
          <div className={styles.TaskQuestionHeaderTitle}>{task.title}</div>      
          
        </div>
      
        </Col>

        
      <Col xs={3} sm={3} md={3} lg={3} xl={3}>
        <div className={styles.TaskQuestionHeader}>
        <div>
            <BiSortUp className={styles.TaskListIcons} />
          </div>
          <div>
            <BiArrowFromTop className={styles.TaskListIcons}/>
          </div>
          <div onClick={() => setIsAnswer(!isAnswer)}>
            {isAnswer ? <CgMinimize className={styles.TaskListIcons}/> : <CgMaximize className={styles.TaskListIcons}/>}
          </div>
          <div onClick={() => setIsQuestions(!isQuestions)}>
            {isQuestions ? (
              <CgChevronUp className={styles.TaskListIcons} />
            ) : (
              <CgChevronDown className={styles.TaskListIcons} />
            )}
          </div>





{/* 

          
          <div>
            <BiSortUp />
          </div>
          <div>
            <BiArrowFromTop />
          </div>
          <div onClick={() => setIsAnswer(!isAnswer)}>
            {isAnswer ? <CgMinimize /> : <CgMaximize />}
          </div>
          <div onClick={() => setIsQuestions(!isQuestions)}>
            {isQuestions ? (
              <CgChevronUp style={{ color: "red" }} />
            ) : (
              <CgChevronDown />
            )}
          </div> */}
        </div>

        
      </Col>






        {isQuestions && (
          <div >
            <div className="">{task.questions}</div>

            {isAnswer && (
              <Radio.Group onChange={onChange} value={value}>
                {task.q_answer.length > 0 &&
                  task.q_answer.map((ans) => (
                    <Radio key={ans._id} style={radioStyle} value={ans._id}>
                      {ans.answer1}
                    </Radio>
                  ))}
              </Radio.Group>
            )}
          </div>
        )}
      
    </Row>
  );
}

export default TaskItem;
