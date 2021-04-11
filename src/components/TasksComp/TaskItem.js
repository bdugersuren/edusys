import React, { useState } from "react";
import { Radio, Input } from "antd";

import {
  CgMaximize,
  CgMinimize,
  CgChevronDown,
  CgChevronUp,
} from "react-icons/cg";

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
  BiBookHeart,
} from "react-icons/bi";
import AnswerComp from "../AnswerComp";

import {
  GrAddCircle,
  GrCheckmark,
  GrDown,
  GrEdit,
  GrTask,
} from "react-icons/gr";

const onChange = (e) => {
  console.log("radio checked", e.target.value);
  // this.setState({
  //   value: e.target.value,
  // });
};

const radioStyle = {
  display: "block",
  height: "30px",
  lineHeight: "30px",
};

function TaskItem({ task, setSelectedTasks }) {
  const [isAnswer, setIsAnswer] = useState(true);
  const [isQuestions, setIsQuestions] = useState(false);
  const [isChoose, setIsChoose] = useState(false);
  const [value, setValue] = useState(null);
  return (
    <div className="taskitem" style={{ fontSize: "20px" }}>
       <div className="flex"> {/*Энэ бол толгойн хэсэг */}
        <div onClick={() => setSelectedTasks()}>
          {isChoose ? <BiCheckboxChecked /> : <BiCheckbox />}
        </div>
        <div>
          <div>Question -1</div>
          <div>{task.title}</div>
        </div>
        <div>
          <GrAddCircle />
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
        </div>
      </div>

      {isQuestions && (
        <div className="task-body">
          <div className="taskitem-content">{task.questions}</div>

          {isAnswer && (
            <Radio.Group onChange={onChange} value={value}>
              {task.q_answer.length > 0 &&
                task.q_answer.map((ans) => (
                  <Radio style={radioStyle} value={ans._id}>
                    {ans.answer1}
                  </Radio>
                ))}
            </Radio.Group>
          )}
        </div>
      )}
    </div>
  );
}

export default TaskItem;
