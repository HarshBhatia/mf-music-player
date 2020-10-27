import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

window.renderPlaylist = (containerId) => {
  ReactDOM.render(<App />, document.getElementById(containerId));
  serviceWorker.unregister();
};

window.unmountPlaylist = (containerId) => {
  ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
};

if (!document.getElementById("Playlist-container")) {
  ReactDOM.render(<App />, document.getElementById("root"));
  serviceWorker.unregister();
}
