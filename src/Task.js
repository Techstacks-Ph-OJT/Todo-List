import classes from "./Task.module.css";
import { useState } from "react";

export const Task = (props) => {
  const [isCompleted, setIsCompleted] = useState(false);

  const handleComplete = () => {
    setIsCompleted(true);
    props.completeTask(props.id);
  };

  return (
    <div
      className={classes.task}
      style={{ backgroundColor: props.completed ? "#00CC8E" : "white" }}
    >
      <h1>{props.taskName}</h1>
      <div>
        {!isCompleted && (
          <button className={classes.complete} onClick={handleComplete}>
            Complete
          </button>
        )}
        <button
          className={classes.delete}
          onClick={() => props.deleteTask(props.id)}
        >
          X
        </button>
      </div>
    </div>
  );
};
