import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import React from "react";
import RelatedBlogCards from "./RelatedBlogCards";
import DownloadCta from "./DownloadCta";
import ChurnCalculator from "./ChurnCalculator";
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
  blogImage28,
  blogImage29,
  blogImage30,
  blogImage31,
  blogDetail29,
  blogDetail30,
  blogDetail31,
  blogDetail32,
  blogDetail33,
  blogDetail34,
  blogImage32,
  blogImage33,
  blogImage34,
  blogImage35,
  blogImage36,
  blogImage37,
  blogImage38,
  blogImage39,
  blogImage40,
  blogImage41,
  blogImage42,
  blogImage43,
  blogDetail35,
  blogDetail36,
  blogDetail37,
  blogDetail38,
  blogDetail39,
  blogDetail40,
  blogDetail41,
  blogDetail42,
  blogDetail43,
  blogImage44,
  blogImage45,
  blogImage46,
  
  blogDetail44,
  blogDetail45,
  blogDetail46,
  blogImage47,
  blogImage48,
  blogImage49,
  blogDetail47,
  blogDetail48,
  blogDetail49,
  // checkList34
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
  blogImage28,
  blogImage29,
  blogImage30,
  blogImage31,
  blogDetail29,
  blogDetail30,
  blogDetail31,
  blogDetail32,
  blogDetail33,
  blogDetail34,
  blogImage32,
  blogImage33,
  blogImage34,
  blogImage35,
  blogImage36,
  blogImage37,
  blogImage38,
  blogImage39,
  blogImage40,
  blogImage41,
  blogImage42,
  blogImage43,
  blogDetail35,
  blogDetail36,
  blogDetail37,
  blogDetail38,
  blogDetail39,
  blogDetail40,
  blogDetail41,
  blogDetail42,
  blogDetail43,
  blogImage44,
  blogImage45,
  blogImage46,
  blogDetail44,
  blogDetail45,
  blogDetail46,
  blogImage47,
  blogImage48,
  blogImage49,
  blogDetail47,
  blogDetail48,
  blogDetail49,
  // checkList34
};

// --- Component to Render Individual Content Blocks (NEW) ---
const ContentBlockRenderer = ({ block }) => {
  const baseStyle = { margin: "15px 0 6px 0 " };
  const baseStyle2 = { marginLeft: "0px" };
  const { id } = useParams();

  switch (block.type) {
    case "heading":
      // Treat as a primary section title (like your old h1/h2)
      return (
        <h2 style={{ ...baseStyle, marginTop: "25px" }}>
          <b>{block.text}</b>
        </h2>
      );
    case "subheadingmain":
      // Treat as a subsection title (like your old subheading)
      return <h4 style={{ ...baseStyle, marginTop: "20px" }}>{block.text}</h4>;
    case "table":
      return (
        <div className="table-responsive my-3">
          <table className="table table-bordered" style={{ border: "1px solid #dee2e6" }}>
            <thead>
              <tr>
                <th style={{ border: "1px solid #ef9c00" }}>Feature</th>
                <th style={{ border: "1px solid #ef9c00" }}>Joint holding (no specified split)</th>
                <th style={{ border: "1px solid #ef9c00" }}>Tenants in common (specified shares)</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ backgroundColor: "#f8f9fa" }}>
                <td style={{ border: "1px solid #ef9c00" }}><b>How ownership is recorded</b></td>
                <td style={{ border: "1px solid #ef9c00" }}>Names listed together, share presumed equal for practical purposes</td>
                <td style={{ border: "1px solid #ef9c00" }}>Each owner's exact percentage is stated on the deed</td>
              </tr>
              <tr>
                <td style={{ border: "1px solid #ef9c00" }}><b>What happens if a co-owner dies</b></td>
                <td style={{ border: "1px solid #ef9c00" }}>Their interest does not automatically transfer to the co-owner — it passes via their Will or succession law</td>
                <td style={{ border: "1px solid #ef9c00" }}>Their specific share passes via their Will or succession law to their legal heirs</td>
              </tr>
              <tr>
                <td style={{ border: "1px solid #ef9c00" }}><b>Best suited for</b></td>
                <td style={{ border: "1px solid #ef9c00" }}>Married couples — but only when paired with a matching Will</td>
                <td style={{ border: "1px solid #ef9c00" }}>Siblings, unmarried partners, business co-investors, unequal contributors</td>
              </tr>
              <tr>
                <td style={{ border: "1px solid #ef9c00" }}><b>Biggest risk if done wrong</b></td>
                <td style={{ border: "1px solid #ef9c00" }}>Assuming the deed alone guarantees the surviving spouse inherits everything, with no Will in place</td>
                <td style={{ border: "1px solid #ef9c00" }}>No risk inherent to the structure itself — the risk is not documenting the split clearly at purchase</td>
              </tr>
            </tbody>
          </table>
        </div>
      );
    case "subheading":
      // Treat as a subsection title (like your old subheading)
      return (
        <h4 style={{ ...baseStyle2, marginTop: "20px" }}>
          <b>{block.text}</b>
        </h4>
      );
    
    case "paragraph":
      // Standard paragraph text (like your old paragraph1, introduction, conclusion)

      return (
        <p
          style={baseStyle}
          dangerouslySetInnerHTML={{ __html: block.text }}
        ></p>
      );
    case "list":
  // Simple unordered bullet list
  return (
    <ul style={{ ...baseStyle, marginLeft: "20px", listStyleType: "circle" }}>
      {block.listItems.map((item, i) => (
        <li
          key={i}
          style={{ marginBottom: "5px", listStyleType: "circle" }}
          dangerouslySetInnerHTML={{ __html: item }}
        />
      ))}
    </ul>
  );
    case "image": {
      //  ADD OPENING CURLY BRACE HERE
      const src = imageSrc[block.imageKey]; // This is now safely scoped

      if (!src)
        return (
          <p style={{ color: "red" }}>
            Image not found for key: {block.imageKey}
          </p>
        );

      return (
        <div
          className="blog-image-container"
          style={{ margin: "20px 0", textAlign: "center" }}
        >
          <img
            src={src}
            alt="Blog content image"
            className="img-fluid my-3"
            style={{ display: "block", width: "100%", borderRadius: "8px" }}
          />
        </div>
      );
    }
    case "list-item-pair":
  return (
    <> 
      <div
        className="blog-item-pair-section"
        style={{ ...baseStyle, paddingLeft: "15px" }}
      >
        {block.text && (
          <p
            style={{ fontWeight: "", marginBottom: "10px" }}
            dangerouslySetInnerHTML={{ __html: block.text }}
          />
        )}
        <ul style={{ margin: 0 }}>
          {block.itemPairs.map((pair, i) => (
            <React.Fragment key={i}>
              <li style={{ listStyle: "circle" }}>
                <dt
                  style={{
                    fontWeight: "bold",
                    marginTop: "10px",
                    color: "#000",
                  }}
                  dangerouslySetInnerHTML={{ __html: pair.name }} 
                /> 
                <dd
                  style={{ marginLeft: "10px", paddingBottom: "0px" }}
                  dangerouslySetInnerHTML={{ __html: pair.benefit }}
                  className="details-list"
                />
             
              </li>
            </React.Fragment>
          ))}
        </ul>
      </div>


     
    </>
  );

    default:
      return (
        <p style={{ color: "red" }}>
          [Error: Unknown Content Type: {block.type}]
        </p>
      );
  }
};
// --- End of Content Block Renderer ---
function Blogdetails() {
  const { id } = useParams();

  const [blog, setBlog] = useState(null);
  const [isSticky, setIsSticky] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // --- Data Fetching (Preserved) ---
  useEffect(() => {
    let active = true;
    (async () => {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_API_BASE_URL}/api/blogs/${id}`,
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

  // Blogdetails.jsx (Inside Blogdetails component, after the initial checks)

  // const injectInfographic = () => {
  //   // Safety check: Ensure contentBlocks exists before continuing
  //   if (!blog.contentBlocks || blog.contentBlocks.length === 0) {
  //     return blog.contentBlocks || [];
  //   }

  //   let blocks = [...blog.contentBlocks];
  //   const insertions = [];

  //   // -------------------------------------------------------------------------
  //   // 1. COLLECT ALL INSERTIONS (Infographic 1 & 2)
  //   // -------------------------------------------------------------------------

  //   // Infographic 1
  //   if (blog.infographicImageKey && blog.infographicPosition) {
  //     insertions.push({
  //       key: blog.infographicImageKey,
  //       position: blog.infographicPosition,
  //     });
  //   }

  //   // Infographic 2
  //   if (blog.infographicImageKey2 && blog.infographicPosition2) {
  //     insertions.push({
  //       key: blog.infographicImageKey2,
  //       position: blog.infographicPosition2,
  //     });
  //   }

  //   // Dynamic Table Insertion (e.g. from backend flags or properties)
  //   // Supports custom position like 'after-subheadingmain-3' or 'before-subheadingmain-3'
  //   if (blog.tablePosition || blog.hasTableAfterSubtitle2) {
  //     const tablePos = blog.tablePosition || "after-subheadingmain-3";
  //     insertions.push({
  //       block: { type: "table" },
  //       position: tablePos,
  //       identifier: "TableBlock",
  //     });
  //   }

  //   if (insertions.length === 0) {
  //     return blocks; // Nothing to insert
  //   }

  //   // Prepare helper array for index calculation
  //   const subheadingMainBlocks = blocks.filter(
  //     (b) => b.type === "subheadingmain",
  //   );

  //   // -------------------------------------------------------------------------
  //   // 2. CALCULATE INDEX FOR EACH ITEM
  //   // -------------------------------------------------------------------------

  //   const indexedInsertions = insertions
  //     .map((insertion) => {
  //       const { position, key } = insertion;
  //       let insertionIndex = -1;

  //       // --- Dynamic Parsing for subheadingmain positions (e.g., 'before-subheadingmain-3') ---
  //       const subheadingMatch = position.match(/^before-subheadingmain-(\d+)$/);

  //       if (subheadingMatch) {
  //         const targetNumber = parseInt(subheadingMatch[1], 10);
  //         const targetIndex = targetNumber - 1;

  //         // Check if the target exists in the filtered array
  //         if (targetIndex >= 0 && targetIndex < subheadingMainBlocks.length) {
  //           const targetBlock = subheadingMainBlocks[targetIndex];
  //           insertionIndex = blocks.indexOf(targetBlock);
  //         } else {
  //           console.warn(
  //             `[Infographic Skip] Key: ${key}. Target subheadingmain-${targetNumber} not found in content (only ${subheadingMainBlocks.length} available).`,
  //           );
  //         }
  //       }
  //       // --- Handle other specific positions ---
  //       else {
  //         switch (position) {
  //           case "after-introduction": {
  //             const firstParagraphIndex = blocks.findIndex(
  //               (b) => b.type === "paragraph",
  //             );
  //             if (firstParagraphIndex !== -1) {
  //               insertionIndex = firstParagraphIndex + 1;
  //             }
  //             break;
  //           }
  //           case "before-conclusion":
  //             insertionIndex = blocks.length > 0 ? blocks.length - 1 : -1;
  //             break;
  //           case "bottom-of-blog":
  //             insertionIndex = blocks.length;
  //             break;
  //         }
  //       }

  //       return { key, index: insertionIndex };
  //     })
  //     .filter((item) => item.index !== -1); // Filter out items that failed to find a spot

  //   // -------------------------------------------------------------------------
  //   // 3. SORT & PERFORM INSERTION (Highest Index First)
  //   // -------------------------------------------------------------------------

  //   // Sort descending by index: ensures inserting at index 10 doesn't affect an item targeted for index 5.
  //   indexedInsertions.sort((a, b) => b.index - a.index);

  //   indexedInsertions.forEach(({ key, index }) => {
  //     const infographicBlock = { type: "image", imageKey: key };
  //     const safeIndex = Math.min(Math.max(0, index), blocks.length);

  //     blocks.splice(safeIndex, 0, infographicBlock);
  //     console.log(
  //       `[Infographic Success] Inserted ${key} at index ${safeIndex}.`,
  //     );
  //   });

  //   return blocks;
  // };

  const injectInfographic = () => {
  // Safety check: Ensure contentBlocks exists before continuing
  if (!blog.contentBlocks || blog.contentBlocks.length === 0) {
    return blog.contentBlocks || [];
  }

  let blocks = [...blog.contentBlocks];
  const insertions = [];

  // -------------------------------------------------------------------------
  // 1. COLLECT ALL INSERTIONS (Infographic 1, 2 & Table)
  // -------------------------------------------------------------------------

  // Infographic 1
  if (blog.infographicImageKey && blog.infographicPosition) {
    insertions.push({
      blockToInsert: { type: "image", imageKey: blog.infographicImageKey },
      position: blog.infographicPosition,
      identifier: blog.infographicImageKey,
    });
  }

  // Infographic 2
  if (blog.infographicImageKey2 && blog.infographicPosition2) {
    insertions.push({
      blockToInsert: { type: "image", imageKey: blog.infographicImageKey2 },
      position: blog.infographicPosition2,
      identifier: blog.infographicImageKey2,
    });
  }

  console.log("DEBUG - Blog Object:", blog);
  console.log("DEBUG - tablePosition:", blog.tablePosition);
  console.log("DEBUG - hasTableAfterSubtitle2:", blog.hasTableAfterSubtitle2);
  // Dynamic Table Insertion
  if (blog.tablePosition || blog.hasTableAfterSubtitle2 || id === "6aae863aacd0d0db15ef7012") {
    const tablePos = blog.tablePosition || "after-subheadingmain-5";
    insertions.push({
      blockToInsert: { type: "table" },
      position: tablePos,
      identifier: "TableBlock",
    });
  }

  if (insertions.length === 0) {
    return blocks; // Nothing to insert
  }

  // Prepare helper array for index calculation
  const subheadingMainBlocks = blocks.filter(
    (b) => b.type === "subheadingmain"
  );

  // -------------------------------------------------------------------------
  // 2. CALCULATE INDEX FOR EACH ITEM
  // -------------------------------------------------------------------------

  const indexedInsertions = insertions
    .map((insertion) => {
      const { position, blockToInsert, identifier } = insertion;
      let insertionIndex = -1;

      // --- Dynamic Parsing for subheadingmain (matches both 'before' and 'after') ---
      const subheadingMatch = position.match(/^(before|after)-subheadingmain-(\d+)$/);

      if (subheadingMatch) {
        const action = subheadingMatch[1]; // "before" or "after"
        const targetNumber = parseInt(subheadingMatch[2], 10);
        const targetIndex = targetNumber - 1;

        // Check if the target exists in the filtered array
        if (targetIndex >= 0 && targetIndex < subheadingMainBlocks.length) {
          const targetBlock = subheadingMainBlocks[targetIndex];
          const baseIndex = blocks.indexOf(targetBlock);

          // If 'after', place it right past the target block (+1)
          insertionIndex = action === "after" ? baseIndex + 1 : baseIndex;
        } else {
          console.warn(
            `[Insertion Skip] ID: ${identifier}. Target subheadingmain-${targetNumber} not found in content (only ${subheadingMainBlocks.length} available).`
          );
        }
      }
      // --- Handle other specific positions ---
      else {
        switch (position) {
          case "after-introduction": {
            const firstParagraphIndex = blocks.findIndex(
              (b) => b.type === "paragraph"
            );
            if (firstParagraphIndex !== -1) {
              insertionIndex = firstParagraphIndex + 1;
            }
            break;
          }
          case "before-conclusion":
            insertionIndex = blocks.length > 0 ? blocks.length - 1 : -1;
            break;
          case "bottom-of-blog":
            insertionIndex = blocks.length;
            break;
        }
      }

      return { blockToInsert, index: insertionIndex, identifier };
    })
    .filter((item) => item.index !== -1); // Filter out items that failed to find a spot

  // -------------------------------------------------------------------------
  // 3. SORT & PERFORM INSERTION (Highest Index First)
  // -------------------------------------------------------------------------

  // Sort descending by index so lower insertions maintain accurate positions
  indexedInsertions.sort((a, b) => b.index - a.index);

  indexedInsertions.forEach(({ blockToInsert, index, identifier }) => {
    const safeIndex = Math.min(Math.max(0, index), blocks.length);

    blocks.splice(safeIndex, 0, blockToInsert);
    console.log(
      `[Insertion Success] Inserted ${identifier} (${blockToInsert.type}) at index ${safeIndex}.`
    );
  });

  return blocks;
};
  const finalBlocksToRender = injectInfographic();

  const heroImageUrl = imageSrc[blog.imageKey] || blog.imageUrl;

  return (
    <div className="blog-detail">
      {/* 1. Header Section (Preserving your structure) */}
      <div className="blogdetail-subhead">
        <div className="container">
          {/* Note: In the new schema, the main heading is likely `blog.title` or the first content block. 
                     I'll keep `blog.heading` for alignment with your old code, but it should be removed later. */}
          <div className="col-lg-10">
            <h1 className="blog-head">{blog.title && blog.detailpagetitle}</h1>
            <div className="blog-date">
              <b>{blog.date.replace(" ", ", ") || ""} </b>{" "}
              <span style={{ marginLeft: "1%" }}>{blog.readTime} min read</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container ">
        <div className="row d-flex">
          <div
            className="blog-text col-sm-12 col-md-6 col-lg-8 "
            style={{ marginBottom: "3%" }}
          >
            {/* Hero Image (Preserved) */}
            {heroImageUrl && (
              <img
                src={heroImageUrl}
                alt={blog.title}
                className="blog-detail-image img-fluid"
                style={{ marginBottom: "20px", borderRadius: "10px" }}
              />
            )}

            {/*  2. THE DYNAMIC CONTENT BLOCK RENDERING  */}
 
            {Array.isArray(finalBlocksToRender) &&
              finalBlocksToRender.map((block, index) => (
                // Use a key that is unlikely to change, or use the index if blocks are static
                <ContentBlockRenderer
                  key={`block-${index}-${block.type}`}
                  block={block}
                  id={id}
                  index={index}
                  totalBlocks={ContentBlockRenderer.length}
                />
              ))}
              {id === "6a02dbba6f2f743060ff13e4" && <div>
 <br /> <p><b>To truly understand how churn destroys your yield, try adjusting the numbers in this calculator below.</b></p><br />
        {id === "6a02dbba6f2f743060ff13e4" && <ChurnCalculator />}
      </div>}

            {/*  END OF DYNAMIC BLOCK RENDERING */}

            {/* 3. Legacy/Related Fields (Preserved for compatibility, but recommend moving them into contentBlocks) */}

            {blog.nextSeries && (
              <p>
                <h4>Next in Our Series:</h4> {blog.nextSeries}
              </p>
            )}

            {id === "695e162dbc334f451a61e453" && <DownloadCta />}
          </div>

          {/* 4. Sidebar (Preserved) */}
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
