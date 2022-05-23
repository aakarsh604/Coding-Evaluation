import React from "react";
import styles from "./task.module.css"
import Counter from "../Counter/Counter"

const Task = ({el , deletehandler, settodo, todo}) => {
  // NOTE: do not delete `data-cy` key value pair

  const [check, setcheck] = React.useState(el.done);

  const checkhandler = (check ) => {
    settodo([...todo], el.done = !check)
    setcheck(!check)
  }

  return (
    <li data-cy="task" className={styles.task}>
      <div className={styles.div1}>
          <input type="checkbox" data-cy="task-checkbox" checked={check} onClick={() =>checkhandler(check )}/>
          <div data-cy="task-text" className={check? styles.strike : ""} >{el.text}</div>
      </div>
      <div className={styles.div2}>
          <Counter el={el} settodo={settodo} todo={todo}/>
          <button data-cy="task-remove-button" onClick={()=> deletehandler(el.id)}>X</button>
      </div>
    </li>
  );
};

export default Task;
