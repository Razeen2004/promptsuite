import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

const faviconUrl = new URL('./images/favicon.png', import.meta.url).href;
const faviconLink = document.createElement('link');
faviconLink.rel = 'icon';
faviconLink.href = faviconUrl;
document.head.appendChild(faviconLink);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
