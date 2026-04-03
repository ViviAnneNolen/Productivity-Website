import { useState } from "react";
import "./Schedule.css";

export default function Schedule({ schedule, onAddSchedule, onToggleSchedule, onDeleteSchedule }) {
  const [text, setText] = useState("");
  const [datetime, setDatetime] = useState("");
  const [filterDone, setFilterDone] = useState("all");

  const handleAdd = (e) => {
    e.preventDefault();
    onAddSchedule(text, datetime);
    setText("");
    setDatetime("");
  };

  const filtered = schedule.filter((item) => {
    if (filterDone === "done") return item.done;
    if (filterDone === "pending") return !item.done;
    return true;
  });

  // ensure items are sorted by datetime ascending
  const sorted = [...filtered].sort((a, b) => new Date(a.datetime) - new Date(b.datetime));

  return (
    <div className="schedule-page">
      <div className="schedule-header">
        <h1>📅 Scheduled Tasks</h1>
      </div>

      <div className="add-schedule-form">
        <form onSubmit={handleAdd}>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Task description..."
            className="schedule-input"
          />
          <input
            type="datetime-local"
            value={datetime}
            onChange={(e) => setDatetime(e.target.value)}
            className="schedule-datetime"
          />
          <button type="submit" className="add-btn">Add</button>
        </form>
      </div>

      <div className="filter-buttons">
        <button
          className={`filter-btn ${filterDone === "all" ? "active" : ""}`}
          onClick={() => setFilterDone("all")}
        >
          All ({schedule.length})
        </button>
        <button
          className={`filter-btn ${filterDone === "pending" ? "active" : ""}`}
          onClick={() => setFilterDone("pending")}
        >
          Pending ({schedule.filter(i => !i.done).length})
        </button>
        <button
          className={`filter-btn ${filterDone === "done" ? "active" : ""}`}
          onClick={() => setFilterDone("done")}
        >
          Done ({schedule.filter(i => i.done).length})
        </button>
      </div>

      <div className="schedule-list">
        {sorted.length > 0 ? (
          <ul>
            {sorted.map((item, idx) => {
              const originalIndex = schedule.indexOf(item);
              return (
                <li key={originalIndex} className={`schedule-item ${item.done ? "done" : ""}`}>
                  <div className="schedule-content">
                    <button
                      className="checkbox-btn"
                      onClick={() => onToggleSchedule(originalIndex)}
                      title={item.done ? "Mark as pending" : "Mark as done"}
                    >
                      {item.done ? "✓" : "○"}
                    </button>
                    <span className="item-text">
                      {item.text}
                      <span className="item-datetime">{new Date(item.datetime).toLocaleString()}</span>
                    </span>
                  </div>
                  <button
                    className="delete-btn"
                    onClick={() => onDeleteSchedule(originalIndex)}
                    title="Delete"
                  >
                    ✕
                  </button>
                </li>
              );
            })}
          </ul>
        ) : (
          <div className="empty-state">
            {schedule.length === 0 ? <p className="emoji">📭</p> : <p className="emoji">🔍</p>}
            <p>{schedule.length === 0 ? "No scheduled tasks yet." : "No items match filter."}</p>
          </div>
        )}
      </div>
    </div>
  );
}
