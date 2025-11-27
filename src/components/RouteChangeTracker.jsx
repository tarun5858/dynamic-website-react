import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4';

const RouteChangeTracker = () => {
  const location = useLocation();

  useEffect(() => {
    // This fires on every route change
    ReactGA.send({ 
      hitType: "pageview", 
      page: location.pathname + location.search,
      title: location.pathname // Optional: helps identify pages in GA
    });
  }, [location]);

  return null; // This component renders nothing visually
};

export default RouteChangeTracker;