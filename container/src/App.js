import React from "react";
import MicroFrontend from "./MicroFrontend";

import "./App.css";

const {
  REACT_APP_PLAYLIST_HOST: playlistHost,
  REACT_APP_PLAYER_HOST: playerHost,
  REACT_APP_LIBRARY_HOST: libraryHost,
} = process.env;

function Header() {
  return (
    <div className="banner">
      <p className="banner-title">Micro Front-end Music Player</p>
    </div>
  );
}

function Playlist() {
  return <MicroFrontend bundle={playlistHost} name="Playlist" />;
}

function Player() {
  return <MicroFrontend bundle={playerHost} name="Player" />;
}
function Library() {
  return <MicroFrontend bundle={libraryHost} name="Library" />;
}

function App() {
  return (
    <div>
      <Header />
      <Player />
      <Playlist />
      <Library />
    </div>
  );
}

export default App;
