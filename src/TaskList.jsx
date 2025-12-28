function TaskList({ tasks, onComplete }) {
  return (
    <div>
      <h2>Tasks</h2>
      <ul>
        {tasks.map((task, index) => (
          <li>
            {" "}
            key={index}
            {task.name}
            <button onClick={() => onComplete(task.points)}>
              Complete (+{task.points})
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
