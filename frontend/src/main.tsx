/**
 * Frontend Entry Point
 * 
 * This file:
 * 1. Renders React app to the DOM
 * 2. Sets up global styles
 * 3. Initializes client-side services (API, state management)
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Get the root element from index.html
const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Root element not found in index.html');
}

// Create React root and render App component
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
