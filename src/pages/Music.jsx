import { useState } from "react";
import "./Music.css";

export default function Music() {
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Your Pandora playlist songs - you'll need to provide direct audio URLs
  const songs = [
    { id: 1, title: "Song from Pandora Playlist", artist: "Artist Name", url: "https://example.com/song1.mp3" },
    // Add more songs here with direct URLs
  ];

  const playSong = (song) => {
    setCurrentSong(song);
    setIsPlaying(true);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="music-page">
      <h1>🎵 Music Playlist</h1>

      <div className="pandora-notice">
        <h3>🎶 Your Pandora Playlist</h3>
        <p>Your playlist: <a href="https://www.pandora.com/playlist/PL:177793231382120171:146151485757985016" target="_blank" rel="noopener noreferrer">Open in Pandora</a></p>
        <p><strong>Note:</strong> To play music directly in this app, you'll need to provide direct audio file URLs or upload MP3 files. Pandora doesn't allow direct embedding.</p>
      </div>

      <div className="playlist">
        <h2>Direct Audio Files</h2>
        <p>Add your songs below by providing direct links to MP3 files or uploading them to the project.</p>

        <div className="song-list">
          {songs.map((song) => (
            <div
              key={song.id}
              className={`song-item ${currentSong?.id === song.id ? 'active' : ''}`}
              onClick={() => playSong(song)}
            >
              <div className="song-info">
                <h3>{song.title}</h3>
                <p>{song.artist}</p>
              </div>
              <button className="play-btn">
                {currentSong?.id === song.id && isPlaying ? '⏸️' : '▶️'}
              </button>
            </div>
          ))}
        </div>
      </div>

      {currentSong && (
        <div className="player">
          <div className="now-playing">
            <h3>Now Playing</h3>
            <p>{currentSong.title} - {currentSong.artist}</p>
          </div>
          <div className="controls">
            <button onClick={togglePlay} className="play-pause-btn">
              {isPlaying ? '⏸️' : '▶️'}
            </button>
          </div>
          <audio
            src={currentSong.url}
            autoPlay={isPlaying}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            controls
            style={{ display: 'none' }}
          />
        </div>
      )}
    </div>
  );
}