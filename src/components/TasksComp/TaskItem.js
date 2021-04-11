import React, { useState } from "react";
import { Radio } from "antd";

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
  BiSortUp
} from "react-icons/bi";





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


  const onChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <div className="m-3" style={{ fontSize: "20px" }}>
       <div className="flex m-5"> {/*Энэ бол толгойн хэсэг */}
        <div onClick={() => setIsChoose(!isChoose)}>
          {isChoose ? <BiCheckboxChecked /> : <BiCheckbox />}
        </div>
        <div>
          <div>Question -1</div>
          <div>{task.title}</div>
        </div>
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
        </div>
      </div>

      {isQuestions && (
        <div className="p-10 border-2">
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
    </div>
  );
}

export default TaskItem;
