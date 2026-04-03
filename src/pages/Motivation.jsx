import { useMemo } from "react";
import "./Motivation.css";

const quotes = [
  "The only way to do great work is to love what you do. — Steve Jobs",
  "Dream big and dare to fail. — Norman Vaughan",
  "Act as if what you do makes a difference. It does. — William James",
  "Believe you can and you're halfway there. — Theodore Roosevelt",
  "Start where you are. Use what you have. Do what you can. — Arthur Ashe",
  "Don't watch the clock; do what it does. Keep going. — Sam Levenson",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. — Winston Churchill",
  "You are never too old to set another goal or to dream a new dream. — C.S. Lewis",
  "The future belongs to those who believe in the beauty of their dreams. — Eleanor Roosevelt",
  "The secret of getting ahead is getting started. — Mark Twain",
];

export default function Motivation() {
  const quote = useMemo(() => {
    const i = Math.floor(Math.random() * quotes.length);
    return quotes[i];
  }, []);

  return (
    <div className="motivation-page">
      <div className="motivation-header">
        <h1>✨ Daily Motivation</h1>
        <p className="subtitle">Refresh for a new quote</p>
      </div>

      <div className="motivation-card">
        <p className="quote">“{quote}”</p>
      </div>

      <p className="motivation-tip">
        Want more? Refresh the page or press <strong>Ctrl+R</strong> (or <strong>Cmd+R</strong>).
      </p>
    </div>
  );
}
