import "./Dashboard.css";

export default function Dashboard({ todos, schedule, focus, brainDump }) {
  const completedCount = todos.filter(t => t.done).length;
  const totalCount = todos.length;
  const completionRate = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;
  const scheduledCount = schedule ? schedule.length : 0;

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Welcome Back! �</h1>
        <p className="subtitle">Here's your productivity overview</p>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon">💗</div>
          <div className="stat-content">
            <h3>Total Tasks</h3>
            <p className="stat-value">{totalCount}</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">💖</div>
          <div className="stat-content">
            <h3>Completed</h3>
            <p className="stat-value">{completedCount}</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">📊</div>
          <div className="stat-content">
            <h3>Progress</h3>
            <p className="stat-value">{completionRate}%</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">📅</div>
          <div className="stat-content">
            <h3>Scheduled</h3>
            <p className="stat-value">{scheduledCount}</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">�</div>
          <div className="stat-content">
            <h3>Focus</h3>
            <p className="stat-value">{focus ? "Set" : "Not set"}</p>
          </div>
        </div>
      </div>

      <div className="dashboard-sections">
        <div className="dashboard-section">
          <h2>💖 Today's Focus</h2>
          <div className="focus-display">
            {focus ? (
              <p className="focus-text">{focus}</p>
            ) : (
              <p className="focus-empty">No focus set yet. Visit the Focus page to set your priority!</p>
            )}
          </div>
        </div>

        <div className="dashboard-section">
          <h2>� Brain Dump Preview</h2>
          <div className="braindump-display">
            {brainDump ? (
              <p className="braindump-text">{brainDump.substring(0, 200)}...</p>
            ) : (
              <p className="braindump-empty">No notes yet. Visit Brain Dump to add notes!</p>
            )}
          </div>
        </div>

        <div className="dashboard-section">
          <h2>📅 Upcoming Schedule</h2>
          {schedule && schedule.length > 0 ? (
            <ul className="task-preview">
              {schedule
                .filter(item => !item.done)
                .sort((a, b) => new Date(a.datetime) - new Date(b.datetime))
                .slice(0, 5)
                .map((item, i) => (
                  <li key={i} className={item.done ? "done" : ""}>
                    <span className="task-checkbox">{item.done ? "✓" : "○"}</span>
                    <span className="task-text">
                      {item.text} <span className="small">({new Date(item.datetime).toLocaleDateString()})</span>
                    </span>
                  </li>
                ))}
            </ul>
          ) : (
            <p className="empty-state">No scheduled items yet. Visit Schedule to add one!</p>
          )}
        </div>

        <div className="dashboard-section full-width">
          <h2>� Recent Tasks</h2>
          {todos.length > 0 ? (
            <ul className="task-preview">
              {todos.slice(-5).reverse().map((todo, i) => (
                <li key={i} className={todo.done ? "done" : ""}>
                  <span className="task-checkbox">{todo.done ? "✓" : "○"}</span>
                  <span className="task-text">{todo.text}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="empty-state">No tasks yet. Go to the Tasks page to get started!</p>
          )}
        </div>
      </div>
    </div>
  );
}
