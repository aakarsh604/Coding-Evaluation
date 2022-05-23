import React from "react";
import styles from "./tasks.module.css";
import Task from "../Task/Task"

const Tasks = ({todo, deletehandler, settodo}) => {
  // NOTE: do not delete `data-cy` key value pair
  return (
    <>
      <ul data-cy="tasks" className={styles.tasks}>
        {/* Task List */}
        {todo.map((el) => (
          <Task el={el} deletehandler={deletehandler} settodo={settodo} todo={todo}/>
        ))}
      </ul>
      <div data-cy="tasks-empty" className={styles.empty}>
        {/* Show when No Tasks are present */}
      </div>
    </>
  );
};

export default Tasks;
