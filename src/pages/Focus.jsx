import "./Focus.css";

export default function Focus({ focus, onSetFocus }) {
  return (
    <div className="focus-page">
      <div className="focus-header">
        <h1>💖 Today's Main Focus</h1>
        <p className="subtitle">What's the ONE thing you need to accomplish today?</p>
      </div>

      <div className="focus-form">
        <textarea
          value={focus}
          onChange={(e) => onSetFocus(e.target.value)}
          placeholder="Enter your main focus for today..."
          className="focus-textarea"
        />
        {focus && <div className="focus-preview">{focus}</div>}
      </div>

      <div className="focus-tips">
        <h2>� Focus Tips</h2>
        <ul>
          <li>Choose ONE primary goal</li>
          <li>Make it specific and measurable</li>
          <li>Break it into smaller tasks</li>
          <li>Track your progress throughout the day</li>
          <li>Celebrate when you achieve it!</li>
        </ul>
      </div>
    </div>
  );
}
