import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import ReactGA from "react-ga4";
const LargeCtaRoutes = ({ text, to, style }) => {

    const handleCtaRoutes = () => {
    // 1. Send the data to Google Analytics
    ReactGA.event({
      category: "User Interaction", // Broad category
      action: "Clicked CtaRoutes",    // Specific action
      label: "Homepage Hero",       // Where it happened (optional)
      value: 1                      // Value associated with event (optional)
    });

    // 2. Perform actual logic (redirect, submit, etc.)
    console.log("User Clicked CtaRoutes");
  };


  return (
    <Link
      className="large-cta theme-btn btn-radius animated"
      data-animation-in="fadeInRight"
      data-delay-in="0.9"
      to={to}
      style={style}
      onClick={handleCtaRoutes}
    >
      {text}
    </Link>
  );
};
export default LargeCtaRoutes;
