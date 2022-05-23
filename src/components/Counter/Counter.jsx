import React from "react";
import styles from "./counter.module.css";

const Counter = ({el, settodo, todo}) => {
  // sample value to be replaced
  const [count, setcount] = React.useState(el.count);
  // NOTE: do not delete `data-cy` key value pair
  const increment = () => {
      settodo([...todo], el.count=count+1);
      setcount(el.count)
  }

  const decrement = () => {
      if ( el.count > 1 ){
        settodo([...todo], el.count=count-1);
        setcount(el.count)
      }
  }
  return (
    <div className={styles.counter}>
      <button data-cy="task-counter-increment-button" onClick={()=> {increment()}}>+</button>
      <span data-cy="task-counter-value">{count}</span>
      <button data-cy="task-counter-decrement-button"  onClick={()=> {decrement()}}>-</button>
    </div>
  );
};

export default Counter;
