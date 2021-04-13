// import React from "react";
// import styles from "./style.module.css";
// import { useSelector, useDispatch } from "react-redux";
// import { Row, Col } from "antd";
// import { loadClassDatas } from "../../redux/classTable/actionCreator";
// import { loadSubjectDatas } from "../../redux/subjectTable/actionCreator";
// import { loadTopicDatas } from "../../redux/topicTable/actionCreator";
// import { loadTaskDatas } from "../../redux/taskTable/actionCreator";

// import { BiBookReader } from "react-icons/bi";

// import { GrCheckmark, GrDown, GrEdit, GrTask } from "react-icons/gr";

// import { Select, Tree, Pagination } from "antd";

// const { Option } = Select;

// function TaskBankPage() {
//   //const [checked, setChecked] = useState([]);
//   //const [expanded, setExpanded] = useState([]);
//   const [classId, setClassId] = useState(null);
//   const [subjectId, setSubjectId] = useState(null);
//   const [checkedTrees, setCheckedTrees] = useState([]);
//   const [selectedTasks, setSelectedTasks] = useState([]);
//   const [filteredTasks, setFilteredTasks] = useState([]);

//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(loadTopicDatas());
//     dispatch(loadClassDatas());
//     dispatch(loadSubjectDatas());
//     dispatch(loadTaskDatas());
//   }, []);

//   useEffect(() => {
//     let filteredData = [];
//     taskTableData
//       .filter((t) => checkedTrees.includes(t.topic_id))
//       .map((t) => {
//         const {
//           _id,
//           questions,
//           q_answer,
//           title,
//           description,
//           ndx,
//           topic_id,
//           user_id,
//           taskLevel_id,
//         } = t;
//         return filteredData.push({
//           checked: false,
//           isExpentTask: false,
//           isExpentAns: false,
//           _id,
//           questions,
//           title,
//           description,
//           q_answer,
//           ndx,
//           topic_id,
//           user_id,
//           taskLevel_id,
//         });
//       });
//     setFilteredTasks(filteredData);
//     console.log("================>", filteredTasks);
//   }, [checkedTrees]);

//   const subjectTableData = useSelector((state) => state.subjectTable.data);
//   const classTableData = useSelector((state) => state.classTable.data);
//   const topicTableData = useSelector((state) => state.topicTable.topics);
//   const taskTableData = useSelector((state) => state.tasks.tasks);

//   const OnChangeClass = (value) => {
//     setClassId(value);
//   };

//   const OnChangeSubject = (value) => {
//     setSubjectId(value);
//   };

//   const classOptions = [];

//   classTableData.map((c) => {
//     const { _id, name } = c;
//     return classOptions.push({
//       value: _id,
//       label: name,
//     });
//   });

//   const subjOptions = [];

//   subjectTableData.map((c) => {
//     const { _id, name } = c;
//     return subjOptions.push({
//       value: _id,
//       label: name,
//     });
//   });

//   let topicNodes = [];

//   topicTableData &&
//     topicTableData
//       .filter((c) => c.class_id._id === classId)
//       .filter((s) => s.subject_id._id === subjectId)
//       .map((td) => {
//         const { _id, name } = td;
//         return topicNodes.push({
//           key: _id,
//           title: name,
//         });
//       });

//   function onChange(value) {
//     console.log(`selected ${value}`);
//   }

//   const onSelect = (selectedKeys, info) => {
//     console.log("selected", selectedKeys, info);
//   };

//   const onCheck = (checkedKeys, info) => {
//     setCheckedTrees(checkedKeys);
//     console.log("onCheck", checkedKeys, info, checkedTrees);
//   };





// function SysFixedTop() {
//   return (
//     <div>
//       <Row>
//         <Col xs={2} sm={4} md={6} lg={8} xl={10}>
//           <label>Хичээл </label>
//           <Select
//             showSearch
//             style={{ width: 200 }}
//             placeholder="Хичээл сонгох"
//             //optionFilterProp="children"
//             onChange={OnChangeSubject}
//             //onFocus={onFocus}
//             //onBlur={onBlur}
//             //onSearch={onSearch}
//           >
//             {subjectTableData.map((item) => (
//               <Option key={item._id} value={item._id}>
//                 {item.name}
//               </Option>
//             ))}
//           </Select>

//           <label>Анги</label>

//           <Select
//             showSearch
//             style={{ width: 200 }}
//             placeholder="Хичээл сонгох"
//             onChange={OnChangeClass}
//           >
//             {classTableData.map((item) => (
//               <Option key={item._id} value={item._id}>
//                 {item.name}
//               </Option>
//             ))}
//           </Select>
//         </Col>
//         <Col xs={20} sm={16} md={12} lg={8} xl={4}>
//           Col
//         </Col>
//         <Col xs={2} sm={4} md={6} lg={8} xl={10}>
//           Col
//         </Col>y
//       </Row>
//     </div>
//   );
// }

// export default SysFixedTop;
