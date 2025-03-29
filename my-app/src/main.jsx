import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';  // For React 18+
import App from './App.jsx';  // Import the App component
import './App.css';  // Import the styles

// Create and render the root element
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);

