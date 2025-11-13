import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
const LargeCtaRoutes = ({ text, to, style }) => {
  return (
    <Link
      className="large-cta theme-btn btn-radius animated"
      data-animation-in="fadeInRight"
      data-delay-in="0.9"
      to={to}
      style={style}
    >
      {text}
    </Link>
  );
};
export default LargeCtaRoutes;
