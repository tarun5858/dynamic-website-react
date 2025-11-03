import { createRoot } from 'react-dom/client'
import React from 'react';
import { BrowserRouter } from "react-router-dom";

// 🛑 STEP 1: MUI/EMOTION PROVIDER IMPORTS (Must be first)
import MuiRootProvider from './components/MuiRootProvider.jsx';

// 🛑 STEP 2: APPLICATION IMPORTS 
import App from './App.jsx'
import AnalyticsTracker from './components/AnalyticsTracker.jsx';

// 🛑 STEP 3: GLOBAL STYLES (LOAD LAST)
import './index.css'

// --------------------------------------------------------------------------
// 🔴 CRITICAL TEST: COMMENT OUT BOOTSTRAP CSS 
// This line often interferes with Material-UI's CSS-in-JS build process.
// We are leaving the JS bundle to ensure components function, but removing 
// the CSS to see if the responsive styles (MuiGrid-grid-md-6) return.
// --------------------------------------------------------------------------
// import 'bootstrap/dist/css/bootstrap.min.css'; 

import 'bootstrap/dist/js/bootstrap.bundle.min'; // Keep the JS bundle

createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* MuiRootProvider (Emotion Cache/Theme) must wrap everything */}
        <MuiRootProvider> 
            <BrowserRouter>
                <AnalyticsTracker />
                <App />
            </BrowserRouter>
        </MuiRootProvider>
    </React.StrictMode>
)
