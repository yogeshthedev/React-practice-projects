import { nanoid } from "nanoid";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const LOCAL_STORAGE_KEY = "todos";

const TodoForm = () => {
  const [todos, setTodos] = useState([]);
  const { register, handleSubmit, reset } = useForm();

  // Load from localStorage on mount
  useEffect(() => {
    const storedTodos = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  // Save to localStorage when todos change
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  const submitHandler = (data) => {
    const newTask = {
      id: nanoid(),
      title: data.name,
      isCompleted: false,
    };
    setTodos([...todos, newTask]);
    reset();
  };

  const deleteHandler = (id) => {
    const updatedTodos = todos.filter((e) => e.id !== id);
    setTodos(updatedTodos);
  };

  const completeHandler = (id) => {
    const updatedTodos = todos.map((item) =>
      item.id === id ? { ...item, isCompleted: !item.isCompleted } : item
    );
    setTodos(updatedTodos);
  };

  return (
    <div className="w-full max-w-md bg-gray-900 shadow-lg rounded-2xl p-6">
      {/* Title */}
      <h1 className="text-2xl font-bold text-center mb-6 text-blue-400">
        📝 My Todo List
      </h1>

      {/* Form */}
      <form
        onSubmit={handleSubmit(submitHandler)}
        className="flex gap-2 mb-4"
      >
        <input
          type="text"
          {...register("name", { required: true })}
          placeholder="Enter task..."
          className="flex-1 px-3 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition">
          Add
        </button>
      </form>

      {/* Tasks */}
      <ul className="space-y-3">
        {todos.map((item) => (
          <li
            key={item.id}
            className="flex items-center justify-between bg-gray-800 px-4 py-2 rounded-lg shadow-sm"
          >
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                onChange={() => completeHandler(item.id)}
                checked={item.isCompleted}
                className="h-4 w-4 text-blue-500 focus:ring-blue-500 border-gray-600 rounded"
              />
              <p
                className={`${
                  item.isCompleted ? "line-through text-gray-500" : "text-white"
                }`}
              >
                {item.title}
              </p>
            </div>
            <button
              onClick={() => deleteHandler(item.id)}
              className="px-2 py-1 text-xs rounded bg-red-600 hover:bg-red-700 transition"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoForm;
