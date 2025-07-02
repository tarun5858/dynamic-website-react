import React from "react";
import "../App.css";

const LargeBlueCta = ({text}) =>{
    return(
        
        <button 
        className="large-cta theme-btn-navbar btn-radius animated"
                  data-animation-in="fadeInRight"
                  data-delay-in="0.9"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal">
            {text}
        </button>
        
    )
}
export default LargeBlueCta;