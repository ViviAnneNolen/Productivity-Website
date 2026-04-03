import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import Tasks from "./pages/Tasks";
import Focus from "./pages/Focus";
import BrainDump from "./pages/BrainDump";
import Schedule from "./pages/Schedule";
import Motivation from "./pages/Motivation";
import Music from "./pages/Music";
import "./App.css";

function App() {
  const [todos, setTodos] = useState(() => {
    try {
      const saved = JSON.parse(localStorage.getItem("goblinDashboard"));
      return saved?.todos || [];
    } catch (error) {
      console.error("Error loading initial todos:", error);
      return [];
    }
  });
  const [schedule, setSchedule] = useState(() => {
    try {
      const saved = JSON.parse(localStorage.getItem("goblinDashboard"));
      return saved?.schedule || [];
    } catch (error) {
      console.error("Error loading initial schedule:", error);
      return [];
    }
  });
  const [focus, setFocus] = useState(() => {
    try {
      const saved = JSON.parse(localStorage.getItem("goblinDashboard"));
      return saved?.focus || "";
    } catch (error) {
      console.error("Error loading initial focus:", error);
      return "";
    }
  });
  const [brainDump, setBrainDump] = useState(() => {
    try {
      const saved = JSON.parse(localStorage.getItem("goblinDashboard"));
      return saved?.brainDump || "";
    } catch (error) {
      console.error("Error loading initial brainDump:", error);
      return "";
    }
  });

  // Save data
  useEffect(() => {
    const dataToSave = { todos, schedule, focus, brainDump };
    console.log("Saving data:", dataToSave);
    localStorage.setItem(
      "goblinDashboard",
      JSON.stringify(dataToSave)
    );
  }, [todos, schedule, focus, brainDump]);

  function addTodo(text) {
    if (!text.trim()) return;
    setTodos([...todos, { text, done: false, createdAt: new Date().toISOString() }]);
  }

  // scheduling helpers
  function addSchedule(text, datetime) {
    if (!text.trim() || !datetime) return;
    setSchedule([
      ...schedule,
      { text, datetime, done: false, createdAt: new Date().toISOString() },
    ]);
  }

  function toggleSchedule(index) {
    const updated = [...schedule];
    updated[index].done = !updated[index].done;
    setSchedule(updated);
  }

  function deleteSchedule(index) {
    setSchedule(schedule.filter((_, i) => i !== index));
  }

  function toggleTodo(index) {
    const updated = [...todos];
    updated[index].done = !updated[index].done;
    setTodos(updated);
  }

  function deleteTodo(index) {
    setTodos(todos.filter((_, i) => i !== index));
  }

  return (
    <Router>
      <Layout>
        <Routes>
          <Route 
            path="/" 
            element={<Dashboard todos={todos} schedule={schedule} focus={focus} brainDump={brainDump} />} 
          />
          <Route 
            path="/tasks" 
            element={
              <Tasks 
                todos={todos} 
                onAddTodo={addTodo} 
                onToggleTodo={toggleTodo}
                onDeleteTodo={deleteTodo}
              />
            } 
          />
          <Route 
            path="/focus" 
            element={<Focus focus={focus} onSetFocus={setFocus} />} 
          />
          <Route 
            path="/brain-dump" 
            element={<BrainDump brainDump={brainDump} onSetBrainDump={setBrainDump} />} 
          />
          <Route
            path="/schedule"
            element={
              <Schedule
                schedule={schedule}
                onAddSchedule={addSchedule}
                onToggleSchedule={toggleSchedule}
                onDeleteSchedule={deleteSchedule}
              />
            }
          />
          <Route path="/motivation" element={<Motivation />} />
          <Route path="/music" element={<Music />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
