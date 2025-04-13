import React from "react";
import TodoItem from "./TodoItem";

const Todos = ({ todos, updateTodo, deleteTodo, toggleComplete }) => {
  return (
    <div className="w-full max-w-md">
      {todos.length === 0 ? (
        <p className="text-center text-gray-500">No todos yet.</p>
      ) : (
        <ul>
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onUpdateTodo={updateTodo}
              onDeleteTodo={deleteTodo}
              onToggleComplete={toggleComplete}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default Todos;
