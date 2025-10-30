import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// NOTE: This component requires React Router DOM (useLocation) to be installed.

/**
 * Component to track dynamic page views in Google Analytics (GA4) for SPAs.
 * It uses the gtag function initialized in public/index.html.
 * * You MUST replace 'G-J6QTGHD4CX' with your actual Measurement ID if it changes.
 * * !!! CRITICAL FIX REMINDER !!!
 * This component MUST be rendered as a child of your Router component 
 * (e.g., <BrowserRouter>) in your App.jsx or main entry file.
 * * * Example Placement (Conceptual):
 * <BrowserRouter>
 * <AnalyticsTracker />  {/* <-- MUST be here! */
//  * <Routes>
//  * ... routes ...
//  * </Routes>
//  * </BrowserRouter>
//  */
const GA_MEASUREMENT_ID = 'G-J6QTGHD4CX';

const AnalyticsTracker = () => {
  // 🛑 The error occurs here if this component is outside the <Router> 🛑
  const location = useLocation(); 

  useEffect(() => {
    // Check if the global gtag function exists (it should, as it's in index.html)
    if (typeof window.gtag === 'function') {
      // Send a new page view event whenever the location.pathname changes.
      // This is crucial for single-page applications (SPAs).
      window.gtag('event', 'page_view', {
        page_title: document.title, // You can set custom titles per page if needed
        page_path: location.pathname + location.search,
        send_to: GA_MEASUREMENT_ID
      });

      console.log(`GA: Page view tracked: ${location.pathname}`);
    } else {
      console.warn('GA: window.gtag is not defined. Check index.html implementation.');
    }
  }, [location.pathname, location.search]); // Trigger whenever the URL path or search parameters change

  // This component renders nothing; its sole purpose is side effects (tracking).
  return null;
};

export default AnalyticsTracker;
