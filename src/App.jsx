import React, { useState, useEffect } from "react";
import Todos from "./Todos";

function App() {
  const [todos, setTodos] = useState([]);
  const [content, updateContent] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(storedTodos);
  }, []);

  const saveToLocalStorage = (updatedTodos) => {
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  const handleInputChange = (e) => {
    updateContent(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (content.trim() !== "") {
      setIsLoading(true);
      const newTodo = {
        id: Date.now(),
        text: content,
        completed: false,
      };
      const updatedTodos = [...todos, newTodo];
      setTodos(updatedTodos);
      saveToLocalStorage(updatedTodos);
      updateContent("");
      setIsLoading(false);
    }
  };

  const updateTodo = (id, newText) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, text: newText } : todo
    );
    setTodos(updatedTodos);
    saveToLocalStorage(updatedTodos);
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
    saveToLocalStorage(updatedTodos);
  };

  const toggleComplete = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
    saveToLocalStorage(updatedTodos);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-4">Todo List</h1>
      <form onSubmit={handleSubmit} className="mb-6 flex">
        <input
          type="text"
          value={content}
          onChange={() => updateContent(e.target.value)}
          className="border border-gray-300 p-2 rounded mr-2 focus:outline-none focus:ring-1 focus:ring-blue-300"
          placeholder="Enter a todo item"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition-colors duration-300"
        >
          {isLoading ? "Adding..." : "Add Todo"}
        </button>
      </form>

      <Todos
        todos={todos}
        updateTodo={updateTodo}
        deleteTodo={deleteTodo}
        toggleComplete={toggleComplete}
      />
    </div>
  );
}

export default App;
