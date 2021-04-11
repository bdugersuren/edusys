import React from 'react'
import PaginationComp from "../../components/PaginationComp";
import TasksComp from "../../components/TasksComp";
import { useSelector, useDispatch } from "react-redux";

function QuizPage() {
    const subjectTableData = useSelector((state) => state.subjectTable.data);
    const classTableData = useSelector((state) => state.classTable.data);
    return (
        <div className="taskbank">
      <div className="taskbank_header">
      <div>Хичээл: </div>
        <select>
            {subjectTableData.map((item) => (
                <option value={item.id}>{item.name}</option>
            
            ))}
            
        </select>
        <div>Анги: </div>
        <select>
            {classTableData.map((item) => (
                <option value={item.id}>{item.name}</option>
            
            ))}
            
        </select>
        <button className="button1">
          <div className="side1">Сонгогдсон даалгавар</div>
          <div className="side2">120</div>
        </button>
        <button className="button2">
          <div className="side1">Сонгогдсон даалгавар</div>
          <div className="side2">12</div>
        </button>
      </div>
      <div className="taskbank_body">
        <div className="taskbank_leftside">
          <ul>
            <li>
              <p>lorem1</p>
              <ul>
                <li>lorem2</li>
                <li>lorem2</li>
                <li>lorem2</li>
                <li>lorem2</li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="taskbank_content">
          <TasksComp />
          <PaginationComp />
        </div>
        <div className="taskbank_rightside">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
        </div>
      </div>
    </div>
    )
}

export default QuizPage;
