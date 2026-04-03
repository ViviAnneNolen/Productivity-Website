import { Link, useLocation } from "react-router-dom";
import "./Navigation.css";

export default function Navigation() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-brand">
          🧠 Goblin HQ
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link 
              to="/" 
              className={`nav-link ${isActive("/") ? "active" : ""}`}
            >
              🏠 Home
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/tasks" 
              className={`nav-link ${isActive("/tasks") ? "active" : ""}`}
            >
              💗 Tasks
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/focus" 
              className={`nav-link ${isActive("/focus") ? "active" : ""}`}
            >
              💖 Focus
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/brain-dump" 
              className={`nav-link ${isActive("/brain-dump") ? "active" : ""}`}
            >
              💞 Brain Dump
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/schedule"
              className={`nav-link ${isActive("/schedule") ? "active" : ""}`}
            >
              📅 Schedule
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/motivation"
              className={`nav-link ${isActive("/motivation") ? "active" : ""}`}
            >
              💡 Motivation
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/music"
              className={`nav-link ${isActive("/music") ? "active" : ""}`}
            >
              🎵 Music
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
