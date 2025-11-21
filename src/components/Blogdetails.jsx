import { useParams, Link } from "react-router-dom";
// import { useEffect, useState, useMemo } from "react";
import { useEffect, useState } from "react";
import React from "react";
import RelatedBlogCards from "./RelatedBlogCards";
import {
  blogImage1,
  blogImage2,
  blogImage3,
  blogImage4,
  blogImage5,
  blogImage6,
  blogImage7,
  blogDetailImage1,
  blogDetailImage2,
  blogDetailImage3,
  blogDetailImage4,
  blogDetailImage5,
  blogDetailImage7,
  blogImagestrategies,
  blogImagelongterm,
  blogImagedownpayments,
  blogImagerentbuy,
  blogImageMitigating,
  blogImageUnderCons,
  blogImageHiddenValue,
  blogImageAssessing,
  blogImageFinancial,
  blogImageFundamentals,
  blogImageFinancialaspects,
  blogImageHomeownership,
  blogImageTruecost,
  blogImageHiddencosts,
  blogImageBeyond,
  blogDetailBeyond,
  blogDetailNavigating,
  blogDetailNavigating2,
  blogDetailThePower,
  blogDetailUnderConstruction,
  blogDetailFinancialImplications,
  blogDetailMitigating,
  blogDetailTheFundamentals,
  blogDetailFinancialAspects,
  blogDetailBuildingWealth,
  blogDetailStrategies,
  blogDetailTheHidden,
  blogDetailAssessingPotential,
  blogDetailTheTrueCost,
  blogDetailHiddenCosts,
  blogDetailBeyondthe,
  blogImage20,
  blogImage21,
  blogImage22,
  blogDetail20,
  blogDetail21,
  blogDetail22,
  blogImage23,
  blogImage24,
  blogImage25,
  blogDetail23,
  blogDetail24,
  blogDetail25,
  blogDetail26,
  blogDetail27,
  blogDetail28,
  blogImage26,
blogImage27,
blogImage28
} from "../components/Imagepath";

const imageSrc = {
  blogImage1,
  blogImage2,
  blogImage3,
  blogImage4,
  blogImage5,
  blogImage6,
  blogImage7,
  blogDetailImage1,
  blogDetailImage2,
  blogDetailImage3,
  blogDetailImage4,
  blogDetailImage5,
  blogDetailImage7,
  blogImagestrategies,
  blogImagelongterm,
  blogImagedownpayments,
  blogImagerentbuy,
  blogImageMitigating,
  blogImageUnderCons,
  blogImageHiddenValue,
  blogImageAssessing,
  blogImageFinancial,
  blogImageFundamentals,
  blogImageFinancialaspects,
  blogImageHomeownership,
  blogImageTruecost,
  blogImageHiddencosts,
  blogImageBeyond,
  blogDetailBeyond,
  blogDetailNavigating,
  blogDetailNavigating2,
  blogDetailThePower,
  blogDetailUnderConstruction,
  blogDetailFinancialImplications,
  blogDetailMitigating,
  blogDetailTheFundamentals,
  blogDetailFinancialAspects,
  blogDetailBuildingWealth,
  blogDetailStrategies,
  blogDetailTheHidden,
  blogDetailAssessingPotential,
  blogDetailTheTrueCost,
  blogDetailHiddenCosts,
  blogDetailBeyondthe,
  blogImage20,
  blogImage21,
  blogImage22,
  blogDetail20,
  blogDetail21,
  blogDetail22,
  blogImage23,
  blogImage24,
  blogImage25,
  blogDetail23,
  blogDetail24,
  blogDetail25,
  blogDetail26,
  blogDetail27,
  blogDetail28,
  blogImage26,
blogImage27,
blogImage28
};

// --- Component to Render Individual Content Blocks (NEW) ---
const ContentBlockRenderer = ({ block }) => {
  const baseStyle = {margin:"15px 0 6px 0 " };
  const baseStyle2 = { marginLeft: '15px' };

  switch (block.type) {
    case 'heading':
      // Treat as a primary section title (like your old h1/h2)
      return <h2 style={{ ...baseStyle, marginTop: '25px' }}><b>{block.text}</b></h2>;
    case 'subheadingmain':
      // Treat as a subsection title (like your old subheading)
      return <h4 style={{ ...baseStyle, marginTop: '20px' }}><b>{block.text}</b></h4>;
    case 'subheading':
      // Treat as a subsection title (like your old subheading)
      return <h4 style={{...baseStyle2, marginTop: '20px' }}><b>{block.text}</b></h4>;
    case 'paragraph':
      // Standard paragraph text (like your old paragraph1, introduction, conclusion)
      // return <p style={baseStyle}>{block.text}</p>;
      return <p style={baseStyle} dangerouslySetInnerHTML={{ __html: block.text }}></p>;
    case 'list':
      // Simple unordered bullet list
      return (
        <ul style={{ ...baseStyle, marginLeft: '20px' ,listStyleType:"circle" }}>
          {block.listItems.map((item, i) => (
            <li key={i} style={{ marginBottom: '5px',listStyleType:"circle" }}>{item}</li>
          ))}
        </ul>
      );
    case 'image': { //  ADD OPENING CURLY BRACE HERE
      const src = imageSrc[block.imageKey]; // This is now safely scoped
      
      if (!src) return <p style={{color: 'red'}}>Image not found for key: {block.imageKey}</p>;
    
      return (
        <div className="blog-image-container" style={{ margin: '20px 0', textAlign: 'center' }}>
          <img 
            src={src}
            alt="Blog content image" 
            className="img-fluid my-3"
            style={{ display: "block", width: "100%", borderRadius: '8px' }}
          />
        </div>
      );
    }
    case 'list-item-pair':
      // Renders your custom Name/Benefit structure (like your old subttileHead)
      return (
        <div className="blog-item-pair-section" style={{ ...baseStyle, paddingLeft: '15px' }}>
          {/* {block.text && <p style={{ fontWeight: '', marginBottom: '10px' }}>{block.text}</p>} */}
          {block.text && (
                <p 
                    style={{ fontWeight: '', marginBottom: '10px' }}
                    dangerouslySetInnerHTML={{ __html: block.text }} // ⬅️ UPDATED
                />
            )}
          <ul style={{ margin: 0 }}>
            {block.itemPairs.map((pair, i) => (
              <React.Fragment key={i}>
                <li style={{listStyle:"circle"}}>
                <dt style={{ fontWeight: 'bold', marginTop: '10px', color: '#333' }}>{pair.name}</dt>
                <dd 
                                style={{ marginLeft: '10px', paddingBottom: '0px' }}
                                dangerouslySetInnerHTML={{ __html: pair.benefit }} // ⬅️ UPDATED
                            />
                </li>
                {/* <li style={{ listStyle: "circle", marginBottom: '5px' }}>
                            <div style={{ display: 'flex' }}>
                                
                                <dt style={{ 
                                    fontWeight: 'bold', 
                                    color: '#333',
                                    marginRight: '5px', // Adds a space before the colon/content
                                }}>
                                    {pair.name}
                                </dt>
                                
                                <dd 
                                    style={{ 
                                        marginLeft: '0', // Reset default dd margin
                                        paddingBottom: '0', 
                                        flex: 1, // Allows the text to take up the remaining space
                                    }}
                                    dangerouslySetInnerHTML={{ __html: pair.benefit }}
                                />
                                
                            </div>
                        </li> */}
              </React.Fragment>
            ))}
          </ul>
        </div>
      );
    default:
      return <p style={{ color: 'red' }}>[Error: Unknown Content Type: {block.type}]</p>;
  }
};
// --- End of Content Block Renderer ---


// function Blogdetails() {
//   const { id } = useParams();

//   const [blog, setBlog] = useState(null);
//   const [isSticky, setIsSticky] = useState(false);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     let active = true;
//     (async () => {
//       try {
//         const res = await fetch(
//           `${import.meta.env.VITE_API_BASE_URL}/api/blogs/${id}`
//         );
//         if (!res.ok) throw new Error("Failed to fetch blog");

//         const data = await res.json();

//         // Assuming your API response for a single blog might be wrapped
//         const blogObject = data.data // If the blog is wrapped in a 'data' key
//           ? data.data
//           : data; // Otherwise, assume the response object is the blog

//         if (active) {
//           // Add a check to see if the object looks like a blog (e.g., has a title)
//           if (blogObject && blogObject.title) {
//             setBlog(blogObject);
//           } else {
//             throw new Error("Invalid blog data received.");
//           }
//         }
//       } catch (e) {
//         console.error("Error fetching blog details:", e); // Log the error for debugging
//         if (active) setError(e.message);
//       } finally {
//         if (active) setLoading(false);
//       }
//     })();
//     return () => {
//       active = false;
//     };
//   }, [id]);

//   // Sticky sidebar
//   useEffect(() => {
//     const onScroll = () => setIsSticky(window.scrollY > 200);
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   const placements = useMemo(
//     () => (Array.isArray(blog?.imagePositions) ? blog.imagePositions : []),
//     [blog]
//   );

//   const getImgSrcFromRef = (ref) => {
//     if (!ref) return null;
//     if (ref.imageUrl) return ref.imageUrl;
//     if (ref.imageKey && imageSrc[ref.imageKey]) return imageSrc[ref.imageKey];
//     return null;
//   };

//   const renderInjectedImage = (ref, keySuffix = "") => {
//     const src = getImgSrcFromRef(ref);
//     if (!src) return null;
//     return (
//       <img
//         key={`img-${keySuffix}`}
//         src={src}
//         alt=""
//         className="img-fluid my-3"
//         style={{ display: "block", width: "100%" }}
//       />
//     );
//   };

//   // For simple fields like "subtitle", "paragraph1", "outcome", "lesson", "conclusion1/2"
//   // const renderSimpleFieldWithImages = (
//   //   fieldKey,
//   //   content,
//   //   headingLabel = null
//   // ) => {
//   //   if (!content) return null;

//   //   // Collect placements for this field
//   //   const these = placements.filter((p) => p.section === fieldKey);
//   //   const before = these.filter((p) => (p.position || "after") === "before");
//   //   const after = these.filter((p) => (p.position || "after") === "after");

//   //   return (
//   //     <div key={fieldKey}>
//   //       {/* Optional heading label (e.g., "Introduction:", "Conclusion:") */}
//   //       {headingLabel && (
//   //         <h4>
//   //           <b>{headingLabel}</b>
//   //         </h4>
//   //       )}

//   //       {/* Before images */}
//   //       {before.map((p, i) =>
//   //         renderInjectedImage(p, `${fieldKey}-before-${i}`)
//   //       )}

//   //       {/* Body */}
//   //       <p>{content}</p>

//   //       {/* After images */}
//   //       {after.map((p, i) => renderInjectedImage(p, `${fieldKey}-after-${i}`))}
//   //     </div>
//   //   );
//   // };
//   const renderSimpleFieldWithImages = (
//   fieldKey,
//   content,
//   headingLabel = null
// ) => {
//   if (!content) return null;

//   // Collect placements for this field
//   const these = placements.filter((p) => p.section === fieldKey);
//   const before = these.filter((p) => (p.position || "after") === "before");
//   const after = these.filter((p) => (p.position || "after") === "after");

//   return (
//     <div key={fieldKey} className="blog-text-block">
//       {/* Optional heading */}
//       {headingLabel && (
//         <h4>
//           <b>{headingLabel}</b>
//         </h4>
//       )}

//       {/* Before images */}
//       {before.map((p, i) =>
//         renderInjectedImage(p, `${fieldKey}-before-${i}`)
//       )}

//       {/* Body => now supports HTML like <a>, <br>, <strong>, etc. */}
//       <div dangerouslySetInnerHTML={{ __html: content }} />

//       {/* After images */}
//       {after.map((p, i) =>
//         renderInjectedImage(p, `${fieldKey}-after-${i}`)
//       )}
//     </div>
//   );
// };


//   if (loading) return <p>Loading blog...</p>;
//   if (error) return <p>Error: {error}</p>;
//   if (!blog) return <p>No blog found.</p>;

//   const heroImageUrl = imageSrc[blog.imageKey] || blog.imageUrl;
//   const detailImageUrl = imageSrc[blog.detailImageKey] || blog.detailImageUrl;

//   // Top of page: keep your original hero image placement
//   // Bottom detail image: keep your original placement IF no explicit placement targets detail image
//   const detailImageHasExplicitPlacement = placements.some(
//     (p) =>
//       (p.imageKey && imageSrc[p.imageKey] === detailImageUrl) ||
//       p.imageUrl === detailImageUrl
//   );



//   return (
//     <div className="blog-detail">
//       <div className="blogdetail-subhead">
//         <div className="container">
//           <h1 className="blog-head">{blog.heading}</h1>
//           <div className="blog-date">
//             <b>{blog.date} </b> {blog.readTime} min read
//           </div>
//         </div>
//       </div>

//       <div className="container">
//         <div className="row d-flex">
//           <div className="blog-text col-sm-12 col-md-6 col-lg-8">
//             {heroImageUrl && (
//               <img
//                 src={heroImageUrl}
//                 alt={blog.title}
//                 className="blog-detail-image img-fluid"
//               />
//             )}

//             {/* Subheading */}
//             {blog.subheading ? (
//               <h4>
//                 <b>{blog.subheading}</b>
//               </h4>
//             ) : null}

//             {/* Introduction (with images via section: "introduction") */}
//             {renderSimpleFieldWithImages(
//               "introduction1",
//               blog.introduction,
//               "Introduction:"
//             )}

//             <br />
//             {/* Subheading1 */}
//             {blog.subheading1 ? (
//               <h4>
//                 <b>{blog.subheading1}</b>
//               </h4>
//             ) : null}

//             {/* Introduction (with images via section: "introduction") */}
//             {renderSimpleFieldWithImages("introduction", blog.introduction1)}
//             <br />

//             {/* === Dynamic Subtitle + subttileHead blocks with image injection === */}
//             {Object.keys(blog)
//               .filter((k) => k.startsWith("subtitle")) // subtitle, subtitle1, subtitle2...
//               .sort((a, b) => {
//                 const na = parseInt(a.replace("subtitle", "")) || 0;
//                 const nb = parseInt(b.replace("subtitle", "")) || 0;
//                 return na - nb;
//               })
//               .map((subtitleKey) => {
//                 const num = subtitleKey.replace("subtitle", "") || "";
//                 const subtitleVal = blog[subtitleKey];
//                 const subArrayKey = `subttileHead${num}`;
//                 const subArray = blog[subArrayKey];

//                 if (!subtitleVal && !Array.isArray(subArray)) return null;

//                 // Images around the subtitle heading itself
//                 const subImages = placements.filter(
//                   (p) => p.section === subtitleKey
//                 );
//                 const subBefore = subImages.filter(
//                   (p) => (p.position || "after") === "before"
//                 );
//                 const subAfter = subImages.filter(
//                   (p) => (p.position || "after") === "after"
//                 );

//                 return (
//                   <div key={subtitleKey}>
//                     {subtitleVal && (
//                       <>
//                         {subBefore.map((p, i) =>
//                           renderInjectedImage(p, `${subtitleKey}-before-${i}`)
//                         )}
                        
//                         {subAfter.map((p, i) =>
//                           renderInjectedImage(p, `${subtitleKey}-after-${i}`)
//                         )}

//                         <h4>
//                           <b>{subtitleVal}</b>
//                         </h4>
//                       </>
//                     )}

//                     {/* subttileHead array rendering with per-item/per-benefit image injection */}
//                     {Array.isArray(subArray) &&
//                       subArray.map((scheme, schemeIndex) => {
//                         if (!scheme) return null;
//                         const nameKey = `${subArrayKey}-name-${schemeIndex}`;
//                         // const listKey = `${subArrayKey}-list-${schemeIndex}`;

//                         // Name-level images (before/after the <h4> of this scheme)
//                         const namePlacements = placements.filter(
//                           (p) =>
//                             p.section === subArrayKey &&
//                             typeof p.schemeIndex === "number" &&
//                             p.schemeIndex === schemeIndex &&
//                             (p.benefitIndex === undefined ||
//                               p.benefitIndex === null)
//                         );
//                         const nameBefore = namePlacements.filter(
//                           (p) => (p.position || "after") === "before"
//                         );
//                         const nameAfter = namePlacements.filter(
//                           (p) => (p.position || "after") === "after"
//                         );

//                         return (
//                           <div key={schemeIndex} className="mx-3">
//                             {(scheme.name || scheme.section) && (
//                               <>
//                                 {nameBefore.map((p, i) =>
//                                   renderInjectedImage(
//                                     p,
//                                     `${nameKey}-before-${i}`
//                                   )
//                                 )}
//                                 <h4>
//                                   {/* <b>{scheme.name || scheme.section}</b> */}
//                                 </h4>
//                                 {nameAfter.map((p, i) =>
//                                   renderInjectedImage(
//                                     p,
//                                     `${nameKey}-after-${i}`
//                                   )
//                                 )}
//                               </>
//                             )}

//                             <ul className="blog-text-ul">
//                               {/* Before Content */}
//                               {scheme.beforeContent &&
//                                 scheme.beforeContent.trim() !== "" && (
//                                   <p>{scheme.beforeContent}</p>
//                                 )}

//                               {/* Name-Benefit pairs side by side */}
//                               {Array.isArray(scheme.name) &&
//                                 Array.isArray(scheme.benefits) &&
//                                 scheme.name.map((n, i) => {
//                                   const benefit = scheme.benefits[i] || "";
//                                   if (!n.trim() && !benefit.trim()) return null;

//                                   return (
//                                     // <li
//                                     //   key={i}
//                                     //   style={{ marginBottom: "0.5rem" }}
//                                     // >
//                                     //   <strong>{n}</strong>: {benefit}
//                                     // </li>
//                                     <p
//                                       key={i}
//                                       style={{ marginBottom: "0.5rem" }}
//                                     >
//                                       <strong>{n}</strong> {benefit}
//                                     </p>
//                                   );
//                                 })}

//                               {/* After Content */}
//                               {scheme.afterContent &&
//                                 scheme.afterContent.trim() !== "" && (
//                                   <p>{scheme.afterContent}</p>
//                                 )}
//                             </ul>
//                           </div>
//                         );
//                       })}
//                   </div>
//                 );
//               })}

//             {/* Paragraphs (paragraph, paragraph1, paragraph2, ...) */}
//             {Object.keys(blog)
//               .filter((k) => k === "paragraph" || /^paragraph\d+$/.test(k))
//               .sort((a, b) => {
//                 const na = parseInt(a.replace("paragraph", "")) || 0;
//                 const nb = parseInt(b.replace("paragraph", "")) || 0;
//                 return na - nb;
//               })
//               .map((pKey) => renderSimpleFieldWithImages(pKey, blog[pKey]))}

//             {/* Detail image fallback (only if not explicitly placed elsewhere) */}
//             {detailImageUrl && !detailImageHasExplicitPlacement && (
//               <img src={detailImageUrl} alt="" className="img-fluid" />
//             )}

//             {/* Outcomes & Lessons (each image-placement eligible) */}
//             {blog.outcome && (
//               <ul>
//                 <li>
//                   {placements
//                     .filter(
//                       (p) =>
//                         p.section === "outcome" &&
//                         (p.position || "after") === "before"
//                     )
//                     .map((p, i) =>
//                       renderInjectedImage(p, `outcome-before-${i}`)
//                     )}
//                   <b>Outcome:</b> {blog.outcome}
//                   {placements
//                     .filter(
//                       (p) =>
//                         p.section === "outcome" &&
//                         (p.position || "after") === "after"
//                     )
//                     .map((p, i) =>
//                       renderInjectedImage(p, `outcome-after-${i}`)
//                     )}
//                 </li>
//               </ul>
//             )}
//             {blog.lesson && (
//               <ul>
//                 <li>
//                   {placements
//                     .filter(
//                       (p) =>
//                         p.section === "lesson" &&
//                         (p.position || "after") === "before"
//                     )
//                     .map((p, i) =>
//                       renderInjectedImage(p, `lesson-before-${i}`)
//                     )}
//                   <b>Lesson:</b> {blog.lesson}
//                   {placements
//                     .filter(
//                       (p) =>
//                         p.section === "lesson" &&
//                         (p.position || "after") === "after"
//                     )
//                     .map((p, i) => renderInjectedImage(p, `lesson-after-${i}`))}
//                 </li>
//               </ul>
//             )}
//             {blog.outcome1 && (
//               <ul>
//                 <li>
//                   <b>Outcome:</b> {blog.outcome1}
//                 </li>
//               </ul>
//             )}
//             {blog.lesson1 && (
//               <ul>
//                 <li>
//                   <b>Lesson:</b> {blog.lesson1}
//                 </li>
//               </ul>
//             )}
//             {blog.outcome2 && (
//               <ul>
//                 <li>
//                   <b>Outcome:</b> {blog.outcome2}
//                 </li>
//               </ul>
//             )}
//             {blog.lesson2 && (
//               <ul>
//                 <li>
//                   <b>Lesson:</b> {blog.lesson2}
//                 </li>
//               </ul>
//             )}

//             {/* Conclusions (each image-placement eligible) */}
//             {(blog.conclusion ||
//               blog.conclusion1 ||
//               blog.conclusion2 ||
//               blog.conclusion3) && (
//               <h4>
//                 <b>Conclusion:</b>
//               </h4>
//             )}
//             {blog.conclusion &&
//               renderSimpleFieldWithImages("conclusion", blog.conclusion)}
//             {blog.conclusion1 &&
//               renderSimpleFieldWithImages("conclusion1", blog.conclusion1)}
//             {blog.conclusion2 &&
//               renderSimpleFieldWithImages("conclusion2", blog.conclusion2)}
//             {blog.conclusion3 &&
//               renderSimpleFieldWithImages("conclusion3", blog.conclusion3)}

            

//             {/* finalword (each image-placement eligible) */}
//             {(blog.finalword ||
//               blog.finalword1 ||
//               blog.finalword2 ||
//               blog.finalword3) && (
//               <h4>
//                 <b>The Final Word:</b>
//               </h4>
//             )}
//             {blog.finalword &&
//               renderSimpleFieldWithImages("finalword", blog.finalword)}
//             {blog.finalword1 &&
            
//               renderSimpleFieldWithImages("finalword1", blog.finalword1)}
//             {blog.finalword2 &&
//               renderSimpleFieldWithImages("finalword2", blog.finalword2)}
//             {blog.finalword3 &&
//               renderSimpleFieldWithImages("finalword3", blog.finalword3)}


//               {blog.nextSeries && (
//               <p>
//                 <h4>Next in Our Series:</h4> {blog.nextSeries}
//               </p>
//             )}
//           </div>

//           {/* Sidebar */}
//           <div className="col-sm-12 col-md-6 col-lg-4 sticky-blogs">
//             <aside
//               id="sidebar"
//               className={`sidebar ${isSticky ? "sticky" : ""}`}
//             >
//               <h4>Related blogs</h4>
//               <RelatedBlogCards
//                 currentHeading={blog.heading}
//                 currentTags={blog.blogTags}
//                 currentId={blog._id}
//                 time={blog.readTime}
//                 currentBlog={blog}
//               />
//             </aside>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Blogdetails;

function Blogdetails() {
  const { id } = useParams();

  const [blog, setBlog] = useState(null);
  const [isSticky, setIsSticky] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // --- Image Handling Helpers (Preserved) ---
  // const getImgSrcFromRef = (ref) => {
  //   if (!ref) return null;
  //   if (ref.imageUrl) return ref.imageUrl;
  //   if (ref.imageKey && imageSrc[ref.imageKey]) return imageSrc[ref.imageKey];
  //   return null;
  // };

  // The new schema removes imagePositions, but we'll keep the function for now 
  // in case you reuse it for the main hero image or other fixed images.
  // const renderInjectedImage = (ref, keySuffix = "") => {
  //   const src = getImgSrcFromRef(ref);
  //   if (!src) return null;
  //   return (
  //     <img
  //       key={`img-${keySuffix}`}
  //       src={src}
  //       alt=""
  //       className="img-fluid my-3"
  //       style={{ display: "block", width: "100%" }}
  //     />
  //   );
  // };
  // ------------------------------------------

  // --- Data Fetching (Preserved) ---
  useEffect(() => {
    let active = true;
    (async () => {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_API_BASE_URL}/api/blogs/${id}`
        );
        if (!res.ok) throw new Error("Failed to fetch blog");

        const data = await res.json();
        const blogObject = data.data ? data.data : data;

        if (active) {
          if (blogObject && blogObject.title) {
            setBlog(blogObject);
          } else {
            throw new Error("Invalid blog data received.");
          }
        }
      } catch (e) {
        console.error("Error fetching blog details:", e);
        if (active) setError(e.message);
      } finally {
        if (active) setLoading(false);
      }
    })();
    return () => {
      active = false;
    };
  }, [id]);

  // Sticky sidebar logic (Preserved)
  useEffect(() => {
    const onScroll = () => setIsSticky(window.scrollY > 150);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  // ------------------------------------------



  if (loading) return <p>Loading blog...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!blog) return <p>No blog found.</p>;

const injectInfographic = () => {
    // 1. Essential Check: If no key or no content, return original blocks.

   
    if (!blog.infographicImageKey || blog.infographicImageKey.trim() === '' || !blog.contentBlocks || blog.contentBlocks.length === 0) {
        return blog.contentBlocks;
    }

    const blocks = [...blog.contentBlocks];
    const infographicBlock = { 
        type: 'image', 
        imageKey: blog.infographicImageKey 
    };
    
     console.log('--- INFOGRAPHIC DEBUG ---');
    console.log('Infographic Key:', blog.infographicImageKey);
    console.log('Position Selected:', blog.infographicPosition);
    

    let insertionIndex = -1;
    
// ⭐ FIX 1: Filter ONLY for the target block type ('subheadingmain')
    const subheadingMainBlocks = blocks.filter(b => b.type === 'subheadingmain');
    
    // ⭐ FIX 2: Define a separate array for 'heading' and 'subheadingmain' 
    // This is needed for the 'after-introduction' logic if you kept it.
    // const allRelevantHeadings = blocks.filter(b => b.type === 'heading' || b.type === 'subheadingmain');

    switch (blog.infographicPosition) {
        case 'before-subheadingmain-2': {
            // Find the 2nd 'subheadingmain' block (index [1] in the filtered array)
            const targetBlock = subheadingMainBlocks[1];
            if (targetBlock) {
                insertionIndex = blocks.indexOf(targetBlock);
            }
            break;
        }
        case 'before-subheadingmain-3': {
            // Find the 3rd 'subheadingmain' block (index [2] in the filtered array)
            const targetBlock = subheadingMainBlocks[2];
            if (targetBlock) {
                insertionIndex = blocks.indexOf(targetBlock);
            }
            break;
        }

        case 'before-subheadingmain-4': {
            // Find the 4th 'subheadingmain' block (index [3] in the filtered array)
            const targetBlock = subheadingMainBlocks[3]; 
            if (targetBlock) {
                insertionIndex = blocks.indexOf(targetBlock);
            }
            break;
        }

        case 'before-subheadingmain-5': {
            // Find the 5th 'subheadingmain' block (index [4] in the filtered array)
            const targetBlock = subheadingMainBlocks[4];
            if (targetBlock) {
                insertionIndex = blocks.indexOf(targetBlock);
            }
            break;
        }
        
        case 'before-conclusion':
            insertionIndex = blocks.length > 0 ? blocks.length - 1 : -1;
            break;
        default:
            insertionIndex = 1; // Default fallback
    }

    if (insertionIndex === -1 && blocks.length > 0) {
        insertionIndex = 1; // Fallback: Insert after the very first block
    }
    
    // Now perform the insertion only if we have a valid index
    if (insertionIndex !== -1) {
        // Ensure index is valid (0 to length)
        const safeIndex = Math.min(Math.max(0, insertionIndex), blocks.length);
        blocks.splice(safeIndex, 0, infographicBlock);
    }
   

    return blocks;
};

// Calculate final blocks only when 'blog' is ready
const finalBlocksToRender = injectInfographic();


  const heroImageUrl = imageSrc[blog.imageKey] || blog.imageUrl;

  return (
    <div className="blog-detail">
      
      {/* 1. Header Section (Preserving your structure) */}
      <div className="blogdetail-subhead">
        <div className="container">
          {/* Note: In the new schema, the main heading is likely `blog.title` or the first content block. 
                     I'll keep `blog.heading` for alignment with your old code, but it should be removed later. */}
          <h1 className="blog-head">{blog.title && blog.detailpagetitle}</h1> 
          {/* <div className="blog-date">
            <b>{blog.date} </b> {blog.readTime} min read
          </div> */}
          <div className="blog-date">
    <b>{blog.date.replace(' ', ', ') || ''} </b> {blog.readTime} min read
</div>
        </div>
      </div>

      <div className="container " >
        <div className="row d-flex">
          <div className="blog-text col-sm-12 col-md-6 col-lg-8 "style={{paddingRight:"5%",marginBottom:"3%"}}>
            
            {/* Hero Image (Preserved) */}
            {heroImageUrl && (
              <img
                src={heroImageUrl}
                alt={blog.title}
                className="blog-detail-image img-fluid"
                style={{ marginBottom: '20px', borderRadius: '10px' }}
              />
            )}

            {/* 🌟 2. THE DYNAMIC CONTENT BLOCK RENDERING 🌟 */}
            {/* {Array.isArray(blog.contentBlocks) && 
              blog.contentBlocks.map((block, index) => (
                <ContentBlockRenderer key={index} block={block} />
              ))
            } */}
            {/* {Array.isArray(finalBlocksToRender) && 
  finalBlocksToRender.map((block, index) => (
    <ContentBlockRenderer key={index} block={block} />
  ))
} */}
{Array.isArray(finalBlocksToRender) && 
      finalBlocksToRender.map((block, index) => (
        // Use a key that is unlikely to change, or use the index if blocks are static
        <ContentBlockRenderer key={`block-${index}-${block.type}`} block={block} />
      ))
    }
            {/* 🌟 END OF DYNAMIC BLOCK RENDERING 🌟 */}
            
            {/* 3. Legacy/Related Fields (Preserved for compatibility, but recommend moving them into contentBlocks) */}
            
            {blog.nextSeries && (
              <p>
                <h4>Next in Our Series:</h4> {blog.nextSeries}
              </p>
            )}

          </div>

          {/* 4. Sidebar (Preserved) */}
          {/* <div className="col-sm-12 col-md-6 col-lg-4 sticky-blogs">
            <aside
              id="sidebar"
              className={` sidebar ${isSticky ? "sticky" : ""}`}
            >
              <h4>Related blogs</h4>
              <RelatedBlogCards
                currentHeading={blog.heading}
                currentTags={blog.blogTags}
                currentId={blog._id}
                time={blog.readTime}
                currentBlog={blog}
              />
            </aside>
          </div> */}
          {/* Sidebar */}
           <div className="col-sm-12 col-md-6 col-lg-4 sticky-blogs">
     <aside
              id="sidebar"
              className={`sidebar ${isSticky ? "sticky" : ""}`}
            >
              <h4>Related blogs</h4>
              <RelatedBlogCards
                currentHeading={blog.heading}
                currentTags={blog.blogTags}
                currentId={blog._id}
                time={blog.readTime}
                currentBlog={blog}
              />
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blogdetails;