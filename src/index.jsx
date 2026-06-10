import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import App from './App';

window.debugLog('React and ReactDOM imported');
const rootElement = document.getElementById('root');
window.debugLog('Root element: ' + (rootElement ? 'found' : 'NOT FOUND'));

if (rootElement) {
  window.debugLog('Creating React root...');
  const root = ReactDOM.createRoot(rootElement);
  window.debugLog('React root created, rendering app...');
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
  window.debugLog('App rendered');
} else {
  window.debugLog('ERROR: Root element not found!');
}
