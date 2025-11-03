// import React, { useState } from 'react';

// import axios from 'axios';
// import { useNavigate } from 'react-router-dom'; 
// // NOTE: Please ensure 'whtspImage' is correctly imported or defined in your actual project scope.
// import { whtspImage } from "./Imagepath";
// const GetInTouch = () => {
//     // 1. Initialize State for Form Inputs
//     const navigate = useNavigate();

//     const [formData, setFormData] = useState({
//         name: '', 
//         contact: '', // Maps to Email/Phone Number
//         location: '', 
//         message: '', 
//     });
//     const [isSubmitting, setIsSubmitting] = useState(false);

//     // Function to handle input changes
//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData(prevData => ({
//             ...prevData,
//             [name]: value
//         }));
//     };

//     // 2. Implement the Centralized Submission Logic
//     const handleSubmit = async (e) => {
//         e.preventDefault(); 
        
//         // Basic required validation
//         if (!formData.name || !formData.contact || !formData.message) {
//             console.error("Validation Error: Please fill out all required fields.");
//             // In a production app, show a visible error message to the user.
//             return;
//         }

//         setIsSubmitting(true);

//         try {
//             // **CRITICAL PAYLOAD MAPPING**
//             // Since this form is different from the modal, we map the fields explicitly.
//             const payload = {
//                 // Use the name field for the person's name
//                 name: formData.name,
                
//                 // Since this input is combined (Email/Phone), we'll send it as a generic contact field.
//                 // NOTE: If your backend requires separate 'email' and 'phone' fields, 
//                 // this submission WILL fail. You must adjust this logic or the form design.
//                 contact: formData.contact, 

//                 // Map other fields
//                 preferredLocation: formData.location, // Renamed for clarity on the backend
//                 description: formData.message, // Renamed to match the description field

//                 // Static field for lead tracking
//                 lead_source: "Contact Us Section",
//             };
            
//             console.log("Attempting submission with payload:", payload);

//             // 3. API Call
//             const response = await axios.post(
//                 "https://prehome-website-backend-service.onrender.com/submit-waitlist", 
//                 payload
//             );

//             console.log("Server response success:", response.data);

//             // **4. SUCCESSFUL REDIRECT** (Only runs if the line above succeeds)
//             // This starts the flow: Contact Form -> Thank You Page -> Homepage (after 5s)
//              navigate('/thank-you'); 

//         } catch (error) {
//             // 5. ENHANCED ERROR LOGGING (Crucial for debugging MongoDB failure)
//             console.error("Error submitting form and capturing lead:");
            
//             if (error.response) {
//                 // The request was made and the server responded with a status code
//                 // that falls out of the range of 2xx (e.g., 400, 500)
//                 console.error("Server Error Details (Data not saved):", error.response.data);
//                 console.error("Status:", error.response.status);
//             } else if (error.request) {
//                 // The request was made but no response was received (network or CORS issue)
//                 console.error("Network/CORS Error: No response received from server.");
//             } else {
//                 // Something happened in setting up the request that triggered an Error
//                 console.error("Request Setup Error:", error.message);
//             }
            
//             // Re-enable the submit button on failure
//             setIsSubmitting(false); 
//         }
//     };
//     // const handleSubmit = async (e) => {
//     //     e.preventDefault(); 
        
//     //     if (!formData.name || !formData.contact || !formData.message) {
//     //         console.error("Validation Error: Please fill out all required fields.");
//     //         return;
//     //     }

//     //     setIsSubmitting(true);

//     //     try {
//     //         const payload = {
//     //             name: formData.name,
//     //             contact: formData.contact, 
//     //             preferredLocation: formData.location, 
//     //             description: formData.message, 
//     //             lead_source: "Contact Us Section",
//     //         };
            
//     //         console.log("Attempting submission with payload:", payload);

//     //         // API Call
//     //         await axios.post(
//     //             "https://prehome-website-backend-service.onrender.com/submit-waitlist", 
//     //             payload
//     //         );

//     //         console.log("Server response success: Leads saved. Attempting redirect.");

//     //         // ** 2. CRITICAL FIX: Use the useNavigate hook for navigation **
//     //         // This is the most reliable way to navigate within a React application.
//     //         navigate('/thank-you'); 

//     //     } catch (error) {
//     //         console.error("Error submitting form. API call succeeded but something went wrong in post-processing or error handling:", error);
            
//     //         // Log full error details for debugging
//     //         if (error.response) {
//     //             console.error("Server Response Error:", error.response.data, error.response.status);
//     //         } else if (error.request) {
//     //             console.error("Network Error: Request made, no response.", error.request);
//     //         } else {
//     //             console.error("Local Request Error:", error.message);
//     //         }
            
//     //     } finally {
//     //         // Ensure the button is enabled again, regardless of success or failure (if redirect fails)
//     //         setIsSubmitting(false); 
//     //     }
//     // };

//     return (
//         <section className="speak-to-expert headertop-border ">
//             <div className="container container-lg">
//                 <div className="row"> 
//                     {/* Left Side: Contact Info */}
//                     <div className="col-md-4 col-sm-6 col-12">
//                         <div className="section-title getin-text" style={{display: "flex",flexDirection: "column",justifyContent: "start",alignItems: "self-start"}}>
//                             <h2>Get in Touch</h2>
//                             <p className="mb-4">Let's understand each other better !! </p>
//                             <p className="mb-2"><i className="fa fa-envelope-open pe-2" aria-hidden="true"></i> contact@prehome.in</p>
//                             <p className="mb-2"><i className="fa fa-phone pe-2" aria-hidden="true"></i> +91 88006 58299</p>
//                             <p className="mb-4"><i className="fa fa-map-marker pe-2" aria-hidden="true"></i> Coming Soon Near You</p>
//                             <p className="mb-2 whatsApp-link">
//                                 <img className="pe-2" src={whtspImage} alt="WhatsApp Icon"/> 
//                                 <a href="https://api.whatsapp.com/send/?phone=918800658299&text&app_absent=0" target="_blank" rel="noopener noreferrer">
//                                     Click here to chat with us on WhatsApp
//                                 </a>
//                             </p>
//                         </div>
//                     </div>
                    
//                     {/* Right Side: Contact Form - Attached onSubmit={handleSubmit} */}
//                     <div className="col-md-8 col-sm-6 col-12 contact-form">
//                         <form id="contact-form" className="row" onSubmit={handleSubmit}>

//                             <input type="hidden" name="oid" value="00DC40000026yrZ"/>
//                             <input type="hidden" id="company" name="company" value="Default company"/>
//                             <input type="hidden" name="lead_source" value="Contact Us"/>
//                             <input type="hidden" name="retURL" value="/thank-you"/>
                            
//                             <div className="col-md-6 col-12">
//                                 <div className="single-personal-info">
//                                     <label htmlFor="fname3">Name</label>
//                                     <input 
//                                         type="text" 
//                                         name="name" // Mapped to formData.name
//                                         id="fname3" 
//                                         className="border-only" 
//                                         required
//                                         value={formData.name}
//                                         onChange={handleChange}
//                                     /> 
//                                 </div>
//                             </div> 
//                             <div className="col-md-6 col-12">
//                                 <div className="single-personal-info">
//                                     <label htmlFor="email3">Email/Phone Number</label>
//                                     <input 
//                                         type="text" 
//                                         name="contact" // Mapped to formData.contact
//                                         id="email3" 
//                                         className="border-only" 
//                                         required
//                                         value={formData.contact}
//                                         onChange={handleChange}
//                                     />
//                                 </div>
//                             </div>
//                             <div className="col-md-12 col-12">
//                                 <div className="single-personal-info">
//                                     <label htmlFor="location3">My Preferred Home Location</label>
//                                     <input 
//                                         type="text" 
//                                         name="location" // Mapped to formData.location
//                                         id="location3" 
//                                         className="border-only" 
//                                         placeholder="ex. Golf Course road"
//                                         value={formData.location}
//                                         onChange={handleChange}
//                                     />
//                                 </div>
//                             </div>
//                             <div className="col-md-12 col-12">
//                                 <div className="single-personal-info">
//                                     <label htmlFor="message3">Message</label>
//                                     <textarea 
//                                         id="message3" 
//                                         name="message" // Mapped to formData.message
//                                         className="border-only" 
//                                         required
//                                         value={formData.message}
//                                         onChange={handleChange}
//                                     ></textarea>
//                                 </div>
//                             </div> 
                            
//                             <div className="col-md-12 col-12">
//                                 <button 
//                                     type="submit" 
//                                     className="submit-btn"
//                                     disabled={isSubmitting} // Disabled while submitting
//                                 >
//                                     {isSubmitting ? 'Sending...' : 'Go !'}
//                                 </button>
//                             </div> 
//                         </form>
//                     </div> 
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default GetInTouch;

import React, { useState, useCallback } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 

import { whtspImage } from "./Imagepath";

const GetInTouchForm = () => {
    // CRITICAL: Hook for internal navigation in React Router
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '', 
        contact: '', 
        location: '', 
        message: '', 
    });
    
    const [company] = useState('Default company');
    const [leadSource] = useState('Get in Touch'); 
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = useCallback((e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault(); 
        
        // Simple validation
        if (!formData.name || !formData.contact || !formData.message) {
            alert("Please fill out your Name, Contact, and Message.");
            return;
        }

        setIsSubmitting(true);

        try {
            // Payload matches the data structure in your original JS script
            const payload = {
                name: formData.name,
                contact: formData.contact,
                location: formData.location, 
                message: formData.message, 
                // Including static fields in case the schema requires them
                company: company,
                lead_source: leadSource, 
            };
            
            console.log("Submitting payload to /submit-form:", payload);

            // API Call: Using the specific /submit-form endpoint
            const response = await axios.post(
                "https://prehome-website-backend-service.onrender.com/submit-form", 
                payload
            );
            
            // Check if response status is successful (e.g., 200, 201)
            if (response.status >= 200 && response.status < 300) {
                console.log("API Success Response Received. Redirecting internally to /thank-you...");
                // CRITICAL FIX: Use useNavigate for internal routing
                navigate('/thank-you'); 
            } else {
                // Handle non-2xx status codes returned by the server
                 console.error("Server returned non-success status:", response.status, response.data);
                 alert(response.data.message || "Submission failed with a server error.");
            }

        } catch (error) {
            // CRITICAL: Logging for the 500 error
            console.error("--- Submission Failed. Check Render Logs for Backend Stack Trace ---");
            
            if (error.response) {
                // Server responded with an error status (500)
                console.error("Server Error (Status:", error.response.status, ") Details:", error.response.data);
            } else {
                // Network or other local error
                console.error("Network Error:", error.message);
            }
            
            alert("Sorry, we couldn't submit your form due to a server error. Please check the console for details.");
            
        } finally {
            setIsSubmitting(false); 
        }
    };

    return (
        <section className="speak-to-expert headertop-border">
            <div className="container container-lg">
                <div className="row"> 
                    {/* Left Side: Contact Info */}
                    <div className="col-md-4 col-sm-6 col-12">
                        <div className="section-title getin-text" style={{display: "flex",flexDirection: "column",justifyContent: "start",alignItems: "self-start"}}>
                            <h2>Get in Touch</h2>
                            <p className="mb-4">Let's understand each other better !! </p>
                            <p className="mb-2"><i className="fa fa-envelope-open pe-2" aria-hidden="true"></i> contact@prehome.in</p>
                            <p className="mb-2"><i className="fa fa-phone pe-2" aria-hidden="true"></i> +91 88006 58299</p>
                            <p className="mb-4"><i className="fa fa-map-marker pe-2" aria-hidden="true"></i> Coming Soon Near You</p>
                            <p className="mb-2 whatsApp-link">
                                <img className="pe-2" src={whtspImage} alt="WhatsApp Icon"/> 
                                <a href="https://api.whatsapp.com/send/?phone=918800658299&text&app_absent=0" target="_blank" rel="noopener noreferrer">
                                    Click here to chat with us on WhatsApp
                                </a>
                            </p>
                        </div>
                    </div>
                    
                    {/* Right Side: Contact Form - Attached onSubmit={handleSubmit} */}
                    <div className="col-md-8 col-sm-6 col-12 contact-form">
                        <form id="contact-form" className="row" onSubmit={handleSubmit}>

                            <input type="hidden" name="oid" value="00DC40000026yrZ"/>
                            <input type="hidden" id="company" name="company" value={company}/>
                            <input type="hidden" name="lead_source" value={leadSource}/>
                            {/* The old retURL is not needed as navigation is done via React */}
                            
                            <div className="col-md-6 col-12">
                                <div className="single-personal-info">
                                    <label htmlFor="fname3">Name</label>
                                    <input 
                                        type="text" 
                                        name="name" 
                                        id="fname3" 
                                        className="border-only" 
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div> 
                            <div className="col-md-6 col-12">
                                <div className="single-personal-info">
                                    <label htmlFor="email3">Email/Phone Number</label>
                                    <input 
                                        type="text" 
                                        name="contact" 
                                        id="email3" 
                                        className="border-only" 
                                        required
                                        value={formData.contact}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className="col-md-12 col-12">
                                <div className="single-personal-info">
                                    <label htmlFor="location3">My Preferred Home Location</label>
                                    <input 
                                        type="text" 
                                        name="location" 
                                        id="location3" 
                                        className="border-only" 
                                        placeholder="ex. Golf Course road"
                                        value={formData.location}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className="col-md-12 col-12">
                                <div className="single-personal-info">
                                    <label htmlFor="message3">Message</label>
                                    <textarea 
                                        id="message3" 
                                        name="message" 
                                        className="border-only" 
                                        required
                                        value={formData.message}
                                        onChange={handleChange}
                                    ></textarea>
                                </div>
                            </div> 
                            
                            <div className="col-md-12 col-12">
                                <button 
                                    type="submit" 
                                    className="submit-btn"
                                    disabled={isSubmitting} 
                                >
                                    {isSubmitting ? 'Sending...' : 'Go !'}
                                </button>
                            </div> 
                        </form>
                    </div> 
                </div>
            </div>
        </section>
    );
};

export default GetInTouchForm;