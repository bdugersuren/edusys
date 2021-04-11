import React from "react";
import TaskItem from "./TaskItem";

function TasksComp({tasks, setSelectedTasks}) {

const  SelectedTaskValue=()=>{
  setSelectedTasks(["123","456"]);
  console.log("8888888888888888888888888888");
}

  return (
    <div className="bg-gray-300">
      {tasks.map(t=>{
        return(          
          <TaskItem task={t} setSelectedTasks={SelectedTaskValue} />
        )
      })}
      

    </div>
  );
}

export default TasksComp;



{/* <TaskItem />
<TaskItem />
<TaskItem /> */}
