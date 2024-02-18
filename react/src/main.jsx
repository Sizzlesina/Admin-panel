import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import '/fonts/IRANSans/IRANSansWeb_Light.woff';
import { HeadersProvider } from './contexts/HeadersContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HeadersProvider>
      <App />
    </HeadersProvider>
  </React.StrictMode>,
);
