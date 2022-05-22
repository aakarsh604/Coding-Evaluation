import React from "react";
import styles from "./task.module.css";

const Task = () => {
  // NOTE: do not delete `data-cy` key value pair
  return (
    <li data-cy="task" className={styles.task}>
      <input type="checkbox" data-cy="task-checkbox" />
      <div data-cy="task-text"></div>
      {/* Counter here */}
      <button data-cy="task-remove-button"></button>
    </li>
  );
};

export default Task;
