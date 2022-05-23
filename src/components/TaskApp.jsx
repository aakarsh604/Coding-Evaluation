import React from "react";
import styles from "./taskApp.module.css";
import Taskheader from "./TaskHeader/TaskHeader"
import AddTask from "./AddTask/AddTask"
import Tasks from "./Tasks/Tasks"
import data from "../data/tasks.json"


const TaskApp = () => {
  // NOTE: do not delete `data-cy` key value pair

  const [query, setquery] = React.useState("");
  const [todo, settodo] = React.useState([...data]);

  const addquery = () => {
   if ( query ){
      if ( !(todo.includes(query))){
        let newquery = {
          id: Date.now(),
          text: query,
          done: false,
          count: 1,
        }
        settodo([...todo, newquery]);
        setquery("");
      }
   }
  }

  const deletehandler = (id) => {
    const updated = todo.filter((el)=> {
      return el.id !== id;
    })
    settodo(updated);
  }

  return (
    <div data-cy="task-app" className={styles.taskApp}>
      <Taskheader todo={todo}/>
      <AddTask query={query} setquery={setquery} addquery={addquery} />
      <Tasks todo={todo} settodo={settodo} deletehandler={deletehandler}/>
    </div>
  );
};

export default TaskApp;
