import { createRoot,ReactDOM  } from 'react-dom/client'
import React from 'react';
import { BrowserRouter } from "react-router-dom";
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import AnalyticsTracker from './components/AnalyticsTracker.jsx';
import MuiRootProvider from './components/MuiRootProvider.jsx';

createRoot(document.getElementById('root')).render(
   <React.StrictMode>
    <BrowserRouter>
   <AnalyticsTracker />
   <MuiRootProvider>

        <App />
   </MuiRootProvider>
    </BrowserRouter>
  </React.StrictMode>
)
