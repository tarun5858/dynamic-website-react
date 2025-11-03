import { createRoot } from 'react-dom/client'
import React from 'react';
import { BrowserRouter } from "react-router-dom";

// 🛑 STEP 1: MUI/EMOTION PROVIDER IMPORTS (Must be first)
// These imports set up the caching mechanism that generates the necessary CSS rules.
import MuiRootProvider from './components/MuiRootProvider.jsx';

// 🛑 STEP 2: APPLICATION IMPORTS 
// The actual components and logic
import App from './App.jsx'
import AnalyticsTracker from './components/AnalyticsTracker.jsx';

// 🛑 STEP 3: GLOBAL STYLES (Loaded Last)
// These global imports must come last to ensure they don't break the 
// preceding style generation process of Emotion/MUI.
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


// The component structure (Provider outside the Router) is already correct.
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