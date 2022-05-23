import React from "react";
import styles from "./addTask.module.css";

const AddTask = ({query, setquery, addquery}) => {
  // NOTE: do not delete `data-cy` key value pair

  return (
    <div className={styles.todoForm}>
      <input data-cy="add-task-input" className={styles.inputbox} type="text" placeholder="Add task..." onChange={(e) => setquery(e.target.value)} value={query}/>
      <button data-cy="add-task-button" className={styles.inputbtn} onClick={()=> {addquery()}}>+</button>
    </div>
  );
};

export default AddTask;
