import Duty from "./Duty";
const style = {
  backgroundColor: "red",
  position: "relative",
  left: 145,
};
const Tasks = ({ tasks, deleteTask, toggleDone, deleteAllTasks }) => {
  return (
    <div>
      {tasks.map((task) => (
        <Duty duty={task} deleteTask={deleteTask} toggleDone={toggleDone} />
      ))}

      <button
        className="btn"
        style={style}
        onClick={deleteAllTasks}
      >
        DELETE ALL TASKS
      </button>
    </div>
  );
};

export default Tasks;
