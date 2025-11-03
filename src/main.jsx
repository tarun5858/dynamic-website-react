import { createRoot } from 'react-dom/client'
import React from 'react';
import { BrowserRouter } from "react-router-dom";
// Global CSS files
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min'; // This is fine

// App components
import App from './App.jsx'
import AnalyticsTracker from './components/AnalyticsTracker.jsx';
import MuiRootProvider from './components/MuiRootProvider.jsx';

createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* MuiRootProvider MUST wrap the Router */}
        <MuiRootProvider> 
            <BrowserRouter>
                {/* AnalyticsTracker remains inside the Router (needs useLocation) */}
                <AnalyticsTracker />
                <App />
            </BrowserRouter>
        </MuiRootProvider>
    </React.StrictMode>
)