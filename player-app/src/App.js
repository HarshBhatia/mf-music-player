import React from "react";
import "./App.css";

function App() {
  const [track, setTrack] = React.useState(null);
  const player = React.useRef(null);

  React.useEffect(() => {
    document.addEventListener(
      "loadTrack",
      function ({ detail: track }) {
        setTrack(track);
        player.current.play()
      },
      false
    );

    return () => {
      document.removeEventListener("loadTrack");
    };
  }, []);

  function playNext() {
    if (!track) return alert("Load a track first.");

    // triggers play next event
    const ev = new CustomEvent("playNextTrack", { detail: track?.id });
    document.dispatchEvent(ev);
  }

  function playPrevious() {
    if (!track) return alert("Load a track first.");

    // triggers play previous event
    const ev = new CustomEvent("playPreviousTrack", { detail: track?.id });
    document.dispatchEvent(ev);
  }

  return (
    <div>
      {/* <h1>Player</h1> */}

      {track ? (
        <div>
          <div className="playerContainer">
            {/* <div className="coverImageContainer"> */}
            <img src={track?.cover} className="cover" />
            {/* </div> */}
            <div className="player-controls">
              <div className="track-details">
                <h3 className="title-text">{track?.name}</h3>
                <p className="artist-text">{track?.singer}</p>
                <audio
                  ref={player}
                  autoplay
                  className="audio"
                  controls
                  src={track?.musicSrc}
                ></audio>
              </div>
              <div>
                <button
                  className="button previous-button"
                  onClick={playPrevious}
                >
                  &#8249; Previous
                </button>
                <button className="button next-button" onClick={playNext}>
                  Next &#8250;
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>No Track Loaded</p>
      )}
    </div>
  );
}

export default App;
