// import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
// import ReactGA from "react-ga4";
const LargeCtaRoutes = ({ text, to, style, onClick }) => {

  //   const handleCtaRoutes = () => {
  //   // 1. Send the data to Google Analytics
  //   ReactGA.event({
  //     category: "User Interaction", // Broad category
  //     action: "Clicked CtaRoutes",    // Specific action
  //     label: "Homepage Hero",       // Where it happened (optional)
  //     value: 1                      // Value associated with event (optional)
  //   });

  //   // 2. Perform actual logic (redirect, submit, etc.)
  //   console.log("User Clicked CtaRoutes");
  // };

  const navigate = useNavigate();

    const handleNavigationAndTracking = (event) => {
        // 1. Call the tracking function provided by the parent
        if (onClick) {
            onClick(event); // The parent component passes the trackButtonClick function here
        }
        
        // 2. Prevent the default Link/Anchor behavior (stopping the immediate redirect)
        event.preventDefault(); 
        
        // 3. Wait a very short moment for GTM to process the dataLayer push
        //    A 50ms delay is usually sufficient for synchronous dataLayer calls.
        setTimeout(() => {
            // 4. Manually trigger the navigation after tracking is done
            navigate(to);
        }, 50); // Delay execution by 50 milliseconds

        // Note: For simple synchronous dataLayer push, the preventDefault + setTimeout combo is reliable.
    };

  return (
    <Link
      className="large-cta theme-btn btn-radius animated"
      data-animation-in="fadeInRight"
      data-delay-in="0.9"
      to={to}
      style={style}
      onClick={handleNavigationAndTracking}
    >
      {text}
    </Link>
  );
};
export default LargeCtaRoutes;
