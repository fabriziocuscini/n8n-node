import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'sanitize.css';
import 'sanitize.css/assets.css';
import 'sanitize.css/typography.css';
import './theme/index.css';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
