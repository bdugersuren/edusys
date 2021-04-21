import React, { useEffect, useState } from "react";
import TasksComp from "../../components/TasksComp";
import { useSelector, useDispatch } from "react-redux";

import { loadClassDatas } from "../../redux/classTable/actionCreator";
import { loadSubjectDatas } from "../../redux/subjectTable/actionCreator";
import { loadTopicDatas } from "../../redux/topicTable/actionCreator";
import { loadTaskDatas, addFullTaskData } from "../../redux/taskTable/actionCreator";
import { filterTaskDatas } from "../../redux/taskTable/actionCreator";

import  CKEditor,  {CKEditorContext } from '@ckeditor/ckeditor5-react'
//import InlineEditor from '@ckeditor/ckeditor5-editor-inline';
//import CKFinder from '@ckeditor/ckeditor5-ckfinder/src/ckfinder';
import  MathEditor  from 'ckeditor5-build-classic-mathtype'
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import MathJax from 'react-mathjax3'


import {
  BiBookReader,
} from "react-icons/bi";

import { GrCheckmark, GrDown, GrEdit, GrTask } from "react-icons/gr";

import { Select, Tree, Pagination, notification } from "antd";

const { Option } = Select;

const html = '$\\sum\\limits_{i = 0}^n {i^2 } = \\frac{n(n + 1)(2n + 1)}{6}$<br>Have a good day!';

const ascii = 'U = 1/(R_(si) + sum_(i=1)^n(s_n/lambda_n) + R_(se))'
const content = `This can be dynamic text (e.g. user-entered) text with ascii math embedded in $$ symbols like $$${ascii}$$`



const openNotification = () => {
  notification.open({
    message: 'Даалгавар амжилттай хадгалагдлаа',
    description:
      'Тухайн даалгавар амжилттай хадгалагдлаа танд баяр хүргэе.',
    icon: <GrCheckmark style={{ color: '#108ee9' }} />,
  });
};

function CreateTaskPage() {

  //const [checked, setChecked] = useState([]);
  //const [expanded, setExpanded] = useState([]);
  const [classId, setClassId] = useState(null);
  const [subjectId, setSubjectId] = useState(null);
  const [checkedTrees, setCheckedTrees] = useState([]);
  const [selectedTasks, setSelectedTasks] = useState([]);
  const [editor, setEditor] = useState(null);
  //const [filteredTasks, setFilteredTasks] = useState([]);
  const [task, setTask] = useState({
    questions:"",
    taskType_id:'606efc7cb5f4f304b423dabb',
    user_id: "5fd77142b3c8ca42a0d2a579",
    topic_id: "606da27de20d6052e0b776f9",
    taskLevel_id: "606efacfb5f4f304b423dab4",
    ndx: "",
    title: "Энгийг бутархайн хуваарь нь ижил үед",
    description: "Энгийн бутархайг хуваарь нь ялгаатай бол ижил болгох ёстой",
    createdDate: "2021-04-13T08:12:53.837Z",
    answers:[
    {
      answer1:"",
      score:0
    },
    {
      answer1:"",
      score:0
    }
  ]
  });
  const handleTaskChange=(data)=>{
    setTask({...task,
      questions:data       
    })
  }

const handleAddClick=()=>{
  setTask({...task,
          answers: [...task.answers, {answer1:"",score:0}]  
    })
}

const handleRemoveClick=(index)=>{
  //console.log(" ===========> Remove index ",index, "  <=========");
  //const list = [...answers];
  //list.splice(index, 1);
  //setAnswers(list);
  const lst=task.answers.filter((a,i)=>index!==i);
  setTask({...task,
              answers:lst});
  console.log(lst);

}
const handleInputChange=(data, index)=>{
  const list = [...task.answers];
  list[index]['answer1'] = data;
  setTask({...task,
    answers:list});
//console.log("**************> ",answers); 
}



const handleSaveTask=()=>{

  dispatch(addFullTaskData(task));
  openNotification();
}

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadTopicDatas());
    dispatch(loadClassDatas());
    dispatch(loadSubjectDatas());
    dispatch(loadTaskDatas());
  }, []);

  useEffect(() => {
    // let filteredData=[];
    // taskTableData
    //   .filter((t) => checkedTrees.includes(t.topic_id))
    //   .map((t) => {
    //       const { _id, questions, q_answer, title, description, ndx , topic_id, user_id, taskLevel_id} = t;
    //       return filteredData.push({
    //         checked:false,
    //         isExpentTask:false,
    //         isExpentAns:false,
    //         _id,
    //         questions,
    //         title,
    //         description,
    //         q_answer,
    //         ndx,
    //         topic_id,
    //         user_id,
    //         taskLevel_id
    //       });
    //   });
      //setFilteredTasks(filteredData);
      //console.log("================>",filteredTasks);
     // dispatch(filterTaskDatas(checkedTrees));
  }, [checkedTrees]);


  const subjectTableData = useSelector((state) => state.subjectTable.list);
  const classTableData = useSelector((state) => state.classTable.list);
  const topicTableData = useSelector((state) => state.topicTable.list);
  const taskTableData = useSelector((state) => state.tasks.list);
  const filteredTasks = useSelector((state) => state.tasks.filteredTasks);
  const selSubjId = useSelector((state) => state.tasks.selectedSubjId);
  const selClssId = useSelector((state) => state.tasks.selectedClassId);

  
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
    <div className="taskbank">
      <div className="flex">
        <label>Хичээл </label>
        <Select
          showSearch
          style={{ width: 200 }}
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

        <label>Анги</label>

        <Select
          showSearch
          style={{ width: 200 }}
          placeholder="Хичээл сонгох"
          onChange={OnChangeClass}
        >
          {classTableData.map((item) => (
            <Option key={item._id} value={item._id}>
              {item.name}
            </Option>
          ))}
        </Select>
        <label className="border-2 ">
          Нийт даалгавар {filteredTasks.length}
        </label>
        <label>Сонгогдсон даалгавар {selectedTasks.length} </label>

        <button onClick={handleSaveTask}>Даалгавар үүсгэх</button>
        <button>Тест үүсгэх</button>
        <button>Засах</button>
        <button>Хувилах</button>

      </div>
      <div className="flex flex-row">
        <div className="flex-5">
          <Tree
            checkable
            onSelect={onSelect}
            onCheck={onCheck}
            treeData={topicNodes}
          />
        </div>
        <div className="flex-auto">
        <div>Асуулт оруулах талбар</div>
        <CKEditor
                        data={task.questions}
                        editor={ MathEditor }
                        onInit={ editor => {
                            console.log( 'Editor is ready to use!', editor );
                        } }
                        onChange={ ( event, editor ) => {
                            const data = editor.getData();
                            setEditor(data);
                            console.log( { event, editor, data } );
                            handleTaskChange(data); 
                        } }
                        // onBlur={ ( event, editor ) => {
                        //     console.log( 'Blur.', editor );
                        // } }
                        // onFocus={ ( event, editor ) => {
                        //     console.log( 'Focus.', editor );
                        // } }
                         />

{
  task.answers.map((x,i)=>{
    return(
    <div key={i}>
      <div>
        <div>Хариулт-{i}</div>
        <div> { task.answers.length!==1&&<button onClick={() => handleRemoveClick(i)}>Remore</button> }</div>
      </div>
            <CKEditor
                        data={x.answer1}
                        editor={ MathEditor }
                        // onInit={ editor => {
                        //     console.log( 'Editor is ready to use!', editor );
                        // } }
                        onChange={ ( event, editor ) => {
                            const data = editor.getData();
                            // setEditor(data);
                            // console.log( { event, editor, data });
                            handleInputChange(data, i); 
                        } } />
    </div>)
  })
}

<div className="text-center"> {task.answers.length<=10&&<button onClick={handleAddClick}>Нэмэх</button>} </div>

        </div>
        
        <div className="flex-2">
          <BiBookReader />
          <GrCheckmark />
          <GrDown /> <GrEdit /> <GrTask />
        </div>
        
      </div>
      <div>
          
     
    <div>
      <div>Json files</div>
    {JSON.stringify(task)}
    </div>
     
     <div>{ ReactHtmlParser(content) }</div>;
          
     { ReactHtmlParser(content) }
         </div>

         <MathJax.Context
            input='tex'
            onLoad={ () => console.log("Loaded MathJax script!") }
            onError={ (MathJax, error) => {
                console.warn(error);
                console.log("Encountered a MathJax error, re-attempting a typeset!");
                MathJax.Hub.Queue(
                  MathJax.Hub.Typeset()
                );
            } }
            script="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.0/MathJax.js"
            options={ {
                messageStyle: 'none',
                extensions: ['tex2jax.js'],
                jax: ['input/TeX', 'output/HTML-CSS'],
                tex2jax: {
                    inlineMath: [['$', '$'], ['\\(', '\\)']],
                    displayMath: [['$$', '$$'], ['\\[', '\\]']],
                    processEscapes: true,
                },
                TeX: {
                    extensions: ['AMSmath.js', 'AMSsymbols.js', 'noErrors.js', 'noUndefined.js']
                }
            } }
        >
            <MathJax.Html html={ html } />
        </MathJax.Context>
    </div>
  );
}


export default CreateTaskPage
