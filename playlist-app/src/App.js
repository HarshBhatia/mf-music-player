import React from "react";
import trackList from "./tracks";

import "./App.css";

function App() {
  const [tracks, setTracks] = React.useState([]);
  const [activeTrackId, setActiveTrackId] = React.useState("");

  // load tracks
  React.useEffect(() => {
    // Can use a API to load tracks here.
    setTracks(trackList);
  }, []);

  // triggers a track load event on track change
  React.useEffect(() => {
    const detail = tracks.find((t) => t.id === activeTrackId);
    if (!detail) return;

    const loadEvent = new CustomEvent("loadTrack", { detail });
    document.dispatchEvent(loadEvent);
  }, [activeTrackId]);

  // setup next and previous listeners
  React.useEffect(() => {
    document.addEventListener("playNextTrack", playNext, false);
    document.addEventListener("playPreviousTrack", playPrevious, false);

    return () => {
      document.removeEventListener("playNextTrack", playNext);
      document.removeEventListener("playPreviousTrack", playPrevious);
    };
  }, [tracks, activeTrackId]);

  const playTrack = (t) => {
    setActiveTrackId(t.id);
  };

  const playNext = () => {
    const currIndex = tracks.findIndex((t) => t.id === activeTrackId);
    if (currIndex === -1) return;
    setActiveTrackId(tracks[(currIndex + 1) % tracks.length].id);
  };

  const playPrevious = () => {
    const currIndex = tracks.findIndex((t) => t.id === activeTrackId);
    if (currIndex === -1) return;
    setActiveTrackId(
      tracks[
        currIndex === 0 ? tracks.length - 1 : (currIndex - 1) % tracks.length
      ].id
    );
  };

  return (
    <div className="container">
      <h1>Playlist</h1>
      <ul className="trackList">
        {tracks.map((t, i) => (
          <li
            key={t.id}
            className={`trackItem ${activeTrackId === t.id ? "active" : ""}`}
            onClick={() => playTrack(t)}
          >
            {t.name} - {t.singer}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
