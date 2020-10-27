import React from "react";
import MicroFrontend from "./MicroFrontend";

import "./App.css";

const {
  REACT_APP_PLAYLIST_HOST: playlistHost,
  REACT_APP_PLAYER_HOST: playerHost,
} = process.env;

function Header() {
  return (
    <div className="banner">
      <p className="banner-title">Micro Front-end Music Player</p>
    </div>
  );
}

function Playlist() {
  return <MicroFrontend host={playlistHost} name="Playlist" />;
}

function Player() {
  return <MicroFrontend host={playerHost} name="Player" />;
}

function App() {
  return (
    <div>
      <Header />
      <Player />
      <Playlist />
    </div>
  );
}

export default App;
