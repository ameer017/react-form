import React, { useState } from "react";

const TodoItem = ({ todo, onUpdateTodo, onDeleteTodo, onToggleComplete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    setEditText(todo.text);
    setIsEditing(false);
  };

  const handleSave = () => {
    if (editText.trim() !== "") {
      onUpdateTodo(todo.id, editText);
    }
    setIsEditing(false);
  };

  const handleDelete = () => {
    onDeleteTodo(todo.id);
  };

  return (
    <li className="bg-white p-4 mb-2 border border-gray-200 rounded shadow flex justify-between items-center">
      {isEditing ? (
        <div className="flex-1 mr-2">
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            className="border border-gray-300 p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      ) : (
        <>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => onToggleComplete(todo.id)}
            className="w-4 h-4"
          />
          <span className={todo.completed ? "line-through text-gray-400" : ""}>
            {todo.text}
          </span>
        </>
      )}
      <div className="flex space-x-2">
        {isEditing ? (
          <>
            <button
              onClick={handleSave}
              className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 transition-colors"
            >
              Save
            </button>
            <button
              onClick={handleCancel}
              className="bg-gray-500 text-white px-3 py-1 rounded hover:bg-gray-600 transition-colors"
            >
              Cancel
            </button>
          </>
        ) : (
          <>
            <button
              onClick={handleEdit}
              className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 transition-colors"
            >
              Edit
            </button>
            <button
              onClick={handleDelete}
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition-colors"
            >
              Delete
            </button>
          </>
        )}
      </div>
    </li>
  );
};

export default TodoItem;
