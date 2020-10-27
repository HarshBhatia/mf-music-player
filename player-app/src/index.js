import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

window.renderPlayer = (containerId) => {
  ReactDOM.render(
    <App />,
    document.getElementById(containerId),
  );
  serviceWorker.unregister();
};

window.unmountPlayer = containerId => {
  ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
};

if (!document.getElementById('Player-container')) {
  ReactDOM.render(<App />, document.getElementById('root'));
  serviceWorker.unregister();
}