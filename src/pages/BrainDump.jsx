import "./BrainDump.css";

export default function BrainDump({ brainDump, onSetBrainDump }) {
  const wordCount = brainDump.trim().split(/\s+/).filter(w => w).length;
  const charCount = brainDump.length;

  return (
    <div className="braindump-page">
      <div className="braindump-header">
        <h1>� Brain Dump</h1>
        <p className="subtitle">Free-form notes • Ideas • Stream of consciousness</p>
      </div>

      <div className="braindump-container">
        <div className="braindump-textarea-wrapper">
          <textarea
            value={brainDump}
            onChange={(e) => onSetBrainDump(e.target.value)}
            placeholder="Dump your thoughts, ideas, and random notes here. No structure required!"
            className="braindump-textarea"
          />
        </div>

        <div className="braindump-stats">
          <div className="stat">
            <span className="stat-label">Words</span>
            <span className="stat-number">{wordCount}</span>
          </div>
          <div className="stat">
            <span className="stat-label">Characters</span>
            <span className="stat-number">{charCount}</span>
          </div>
        </div>
      </div>

      <div className="braindump-tips">
        <h2>💕 How to use Brain Dump</h2>
        <ul>
          <li>Write without judgment or structure</li>
          <li>Capture random thoughts and ideas</li>
          <li>Organize later or let it be creative chaos</li>
          <li>Perfect for capturing inspiration</li>
          <li>Your notes auto-save automatically</li>
        </ul>
      </div>
    </div>
  );
}
