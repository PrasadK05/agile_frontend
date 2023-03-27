import React from "react";
import { useSelector } from "react-redux";
import SubTasks from "./SubTasks";
import TaskHead from "./TaskHead";

export default function Task() {
  const { task } = useSelector((stroe) => stroe.task);  
  return (
    <>
      <TaskHead title={task.title} />
      {task &&
        task.tasks.map((el, i) => {
          return (
            <SubTasks
              key={el.task_id}
              assets={el.assets}
              task_title={el.task_title}
              task_description={el.task_description}
            />
          );
        })}
    </>
  );
}
