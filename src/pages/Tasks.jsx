import { useState } from "react";
import "./Tasks.css";

export default function Tasks({ todos, onAddTodo, onToggleTodo, onDeleteTodo }) {
  const [input, setInput] = useState("");
  const [filterDone, setFilterDone] = useState("all");

  const handleAdd = (e) => {
    e.preventDefault();
    onAddTodo(input);
    setInput("");
  };

  const filteredTodos = todos.filter((todo) => {
    if (filterDone === "done") return todo.done;
    if (filterDone === "pending") return !todo.done;
    return true;
  });

  const completedCount = todos.filter(t => t.done).length;

  return (
    <div className="tasks-page">
      <div className="tasks-header">
        <h1>💗 Task Management</h1>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${todos.length > 0 ? (completedCount / todos.length) * 100 : 0}%` }}></div>
        </div>
        <p className="progress-text">{completedCount} of {todos.length} tasks completed</p>
      </div>

      <div className="add-task-form">
        <form onSubmit={handleAdd}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add a new task..."
            className="task-input"
          />
          <button type="submit" className="add-btn">Add Task</button>
        </form>
      </div>

      <div className="filter-buttons">
        <button 
          className={`filter-btn ${filterDone === "all" ? "active" : ""}`}
          onClick={() => setFilterDone("all")}
        >
          All ({todos.length})
        </button>
        <button 
          className={`filter-btn ${filterDone === "pending" ? "active" : ""}`}
          onClick={() => setFilterDone("pending")}
        >
          Pending ({todos.filter(t => !t.done).length})
        </button>
        <button 
          className={`filter-btn ${filterDone === "done" ? "active" : ""}`}
          onClick={() => setFilterDone("done")}
        >
          Done ({completedCount})
        </button>
      </div>

      <div className="tasks-list">
        {filteredTodos.length > 0 ? (
          <ul>
            {filteredTodos.map((todo, i) => {
              const actualIndex = todos.indexOf(todo);
              return (
                <li key={actualIndex} className={`task-item ${todo.done ? "done" : ""}`}>
                  <div className="task-content">
                    <button
                      className="checkbox-btn"
                      onClick={() => onToggleTodo(actualIndex)}
                      title={todo.done ? "Mark as pending" : "Mark as done"}
                    >
                      {todo.done ? "✓" : "○"}
                    </button>
                    <span className="task-text">{todo.text}</span>
                  </div>
                  <button
                    className="delete-btn"
                    onClick={() => onDeleteTodo(actualIndex)}
                    title="Delete task"
                  >
                    ✕
                  </button>
                </li>
              );
            })}
          </ul>
        ) : (
          <div className="empty-state">
            {todos.length === 0 ? (
              <p className="emoji">🎉</p>
            ) : (
              <p className="emoji">🔍</p>
            )}
            <p>{todos.length === 0 ? "No tasks yet! Add one to get started." : "No tasks match your filter."}</p>
          </div>
        )}
      </div>
    </div>
  );
}
