export interface Item {
  id: number;
  text: string;
  completed: boolean;
}

function TodoItem({
  task,
  deleteTask,
  toggleCompleted,
}: {
  task: Item;
  deleteTask: (id: number) => void;
  toggleCompleted: (id: number) => void;
}) {
  return (
    <div className="todo-item flex justify-between mb-2 border py-1 px-2 items-center">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleCompleted(task.id)}
      />
      <p className={task.completed ? "line-through" : ""}>{task.text}</p>
      <button
        className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => deleteTask(task.id)}
      >
        X
      </button>
    </div>
  );
}

export default TodoItem;
