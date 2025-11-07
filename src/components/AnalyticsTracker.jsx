// import { useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
// const GA_MEASUREMENT_ID = 'G-J6QTGHD4CX';

// const AnalyticsTracker = () => {
//   const location = useLocation(); 

//   useEffect(() => {
//     if (typeof window.gtag === 'function') {
//       // Send a new page view event whenever the location.pathname changes.
//       // This is crucial for single-page applications (SPAs).
//       window.gtag('event', 'page_view', {
//         page_title: document.title, // You can set custom titles per page if needed
//         page_path: location.pathname + location.search,
//         send_to: GA_MEASUREMENT_ID
//       });  
      
//       console.log(`GA: Page view tracked: ${location.pathname}`);
//     } else {
//       console.warn('GA: window.gtag is not defined. Check index.html implementation.');
//     }
//   }, [location.pathname, location.search]); // Trigger whenever the URL path or search parameters change

//   // This component renders nothing; its sole purpose is side effects (tracking).
//   return null;
// };

// export default AnalyticsTracker;

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// NOTE: We no longer need GA_MEASUREMENT_ID here,
// as GTM handles where the data is sent.
// const GA_MEASUREMENT_ID = 'G-J6QTGHD4CX'; 

const AnalyticsTracker = () => {
  const location = useLocation();

  useEffect(() => {
    // Check if dataLayer is initialized by the GTM script
    if (typeof window.dataLayer !== 'undefined') {
      
      // 1. GTM requires a configuration or pageview event for SPAs.
      // We push a 'page_view' event to the dataLayer.
      // The GTM container (GTM-M97RB7PH) should have a trigger set up
      // to fire the Google Analytics tag whenever an event named 'page_view' is received.
      
      window.dataLayer.push({
        event: 'page_view',
        // Standard data layer variables:
        page_title: document.title, 
        page_path: location.pathname + location.search,
        page_location: window.location.href,
        
        // You can add custom dimensions or metrics here too:
        // user_id: currentUser?.id 
      });

      console.log(`GTM: Page view tracked via dataLayer: ${location.pathname}`);
    } else {
      console.warn('GTM: window.dataLayer is not defined. Check index.html implementation.');
    }
    
  // Trigger whenever the URL path or search parameters change
  }, [location.pathname, location.search]); 

  // This component renders nothing; its sole purpose is side effects (tracking).
  return null;
};

export default AnalyticsTracker;
