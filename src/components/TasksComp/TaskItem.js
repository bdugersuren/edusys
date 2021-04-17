import React, { useState } from "react";
import { Radio } from "antd";
import { Checkbox } from "antd";
import { Row, Col, Divider } from "antd";
import styles from "./style.module.css";
import { ReactSVG } from 'react-svg'
import level1 from '../../assets/img/svg/level1.svg';
import level2 from '../../assets/img/svg/level2.svg';
import level3 from '../../assets/img/svg/level3.svg';
import level4 from '../../assets/img/svg/level4.svg';
import file from '../../assets/img/svg/file.svg';
import compare from '../../assets/img/svg/compare.svg';
import list from '../../assets/img/svg/list.svg';
import task from '../../assets/img/svg/task.svg';
import text from '../../assets/img/svg/text.svg';
import trueFalse from '../../assets/img/svg/true&false.svg';



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
    <div>
      <Row>
        <Col xs={21} sm={21} md={21} lg={21} xl={21}>
          <div className={styles.TaskQuestionHeader}>
            <Checkbox onChange={onChange}></Checkbox>

            <div className={styles.TaskQuestionHeaderTitle}>{task.title}</div>
          </div>
        </Col>

        <Col xs={3} sm={3} md={3} lg={3} xl={3}>
          <div style={{display: 'flex', height: '3.25rem', background:'none'}}>
            <div style={{width:'20%'}}>
                <ReactSVG src={level1}  />            
            </div>
            <div style={{width:'20%'}}>
              <ReactSVG src={list}  />  
              
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
      </Row>
      <Row>
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
          {isQuestions && (
            <div>
              <div className={styles.TaskQuestionsList} style={{borderBottom: '1px solid #ddd', paddingBottom: '1rem' }}>
                {task.questions} 
                {/* Монголчууд түүхийн явцдаа уйгуржин, дөрвөлжин бичиг, латин, кирилл зэрэг бичгүүдийг хэрэглэж ирсэн билээ. Энэ нь соёлын ямар шинжид хамаарах вэ? */}
              Эх сурвалж. Луков - Данненбергийн иргэдийн санаачилсан ухуулах хуудас. Германд атомын аж үйлдвэрийн байгууламжийн эсрэг, ерөөс нутгаа хэт барилгажуулахын эсрэг шууд хүч хэрэглэхгүй суулт хийх, хэвтэж хаалт болох зэргээр эсэргүүцэл гардаг. Энэ бүхэн нь бүх хүний амьдралын төлөө учир цагдаагийн оролцоо хэрэггүй... Парламентын олонхи ч энэ хариуцлагыг бидэнд олгоогүй юм. Бидний энэ арга хэмжээ бол үндсэн хуулиар олгогдсон эсэргүүцэх эрхээ л ашиглаж байгаа хэрэг мөн. Дээрх эх сурвалж нь улс төрийн системийн аль бүрэлдэхүүн хэсгийн тухай өгүүлж байна вэ?
              </div>

              <div className={styles.TaskAnswerList}>
                {isAnswer && (
                  <Radio.Group onChange={onChange} value={value}>
                    {task.q_answer.length > 0 &&
                      task.q_answer.map((ans) => (
                        <Radio
                          className={styles.TaskAnswerRadio}
                          key={ans._id}
                          value={ans._id}
                        >
                          {ans.answer1}
                        </Radio>
                      ))}
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
    </div>
  );
}

export default TaskItem;
