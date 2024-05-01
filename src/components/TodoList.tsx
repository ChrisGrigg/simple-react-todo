import { useState } from "react";
import TodoItem, { Item } from "./TodoItem";
import { useLocalStorage } from "../hooks/useLocalStorage";

function TodoList() {
  const [tasks, setTasks] = useLocalStorage("tasks", []);
  const [text, setText] = useState("");

  function addTask(text: string) {
    const newTask: Item = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setText("");
  }

  function deleteTask(id: number) {
    setTasks(tasks.filter((task: Item) => task.id !== id));
  }

  function toggleCompleted(id: number) {
    setTasks(
      tasks.map((task: Item) => {
        if (task.id === id) {
          return { ...task, completed: !task.completed };
        } else {
          return task;
        }
      })
    );
  }

  return (
    <div className="todo-list flex flex-col py-6 w-1/3">
      <div className="flex items-center border-b border-teal-500 py-2 mb-6">
        <input
          className="appearance-none bg-transparent border-none w-full text-gray-600 mr-3 py-1 px-2 leading-tight focus:outline-none"
          type="text"
          placeholder="Add Todo"
          aria-label="Todo name"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
          type="button"
          onClick={() => addTask(text)}
        >
          Add Todo
        </button>
      </div>
      {tasks.map((task: Item) => (
        <TodoItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          toggleCompleted={toggleCompleted}
        />
      ))}
    </div>
  );
}
export default TodoList;
