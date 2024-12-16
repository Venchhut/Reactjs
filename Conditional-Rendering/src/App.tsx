const App = () => {
  const tasks = [
    { id: 1, name: "Buy groceries", completed: true },
    { id: 2, name: "Clean the house", completed: false },
    { id: 3, name: "Finish project", completed: true },
    { id: 4, name: "Prepare dinner", completed: false },
  ];
  return (
    <div>
      <h1>All Tasks</h1>
      <Items tasks={tasks} />
    </div>
  );
};

export default App;

export const Items = ({
  tasks,
}: {
  tasks: { name: string; completed: boolean }[];
}) => {
  return (
    <ul>
      {tasks.map((task) =>
        task.completed ? (
          <li>{task.name}</li>
        ) : (
          <li style={{ color: "red" }}>{task.name}</li>
        )
      )}
    </ul>
  );
};
