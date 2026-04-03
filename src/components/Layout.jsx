import Navigation from "./Navigation";
import "./Layout.css";

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Navigation />
      <main className="main-content">
        <div className="container">
          {children}
        </div>
      </main>
      <footer className="footer">
        <p>&copy; 2026 Productivity Goblin HQ. Keep grinding! 🧠</p>
      </footer>
    </div>
  );
}
