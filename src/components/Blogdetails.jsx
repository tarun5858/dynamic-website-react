import { useParams, Link } from "react-router-dom";
import { useEffect, useState, useMemo } from "react";
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

function Blogdetails() {
  const { id } = useParams();

  const [blog, setBlog] = useState(null);
  const [isSticky, setIsSticky] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let active = true;
    (async () => {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_API_BASE_URL}/api/blogs/${id}`
        );
        if (!res.ok) throw new Error("Failed to fetch blog");

        const data = await res.json();

        // Assuming your API response for a single blog might be wrapped
        const blogObject = data.data // If the blog is wrapped in a 'data' key
          ? data.data
          : data; // Otherwise, assume the response object is the blog

        if (active) {
          // Add a check to see if the object looks like a blog (e.g., has a title)
          if (blogObject && blogObject.title) {
            setBlog(blogObject);
          } else {
            throw new Error("Invalid blog data received.");
          }
        }
      } catch (e) {
        console.error("Error fetching blog details:", e); // Log the error for debugging
        if (active) setError(e.message);
      } finally {
        if (active) setLoading(false);
      }
    })();
    return () => {
      active = false;
    };
  }, [id]);

  // Sticky sidebar
  useEffect(() => {
    const onScroll = () => setIsSticky(window.scrollY > 200);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const placements = useMemo(
    () => (Array.isArray(blog?.imagePositions) ? blog.imagePositions : []),
    [blog]
  );

  const getImgSrcFromRef = (ref) => {
    if (!ref) return null;
    if (ref.imageUrl) return ref.imageUrl;
    if (ref.imageKey && imageSrc[ref.imageKey]) return imageSrc[ref.imageKey];
    return null;
  };

  const renderInjectedImage = (ref, keySuffix = "") => {
    const src = getImgSrcFromRef(ref);
    if (!src) return null;
    return (
      <img
        key={`img-${keySuffix}`}
        src={src}
        alt=""
        className="img-fluid my-3"
        style={{ display: "block", width: "100%" }}
      />
    );
  };

  // For simple fields like "subtitle", "paragraph1", "outcome", "lesson", "conclusion1/2"
  const renderSimpleFieldWithImages = (
    fieldKey,
    content,
    headingLabel = null
  ) => {
    if (!content) return null;

    // Collect placements for this field
    const these = placements.filter((p) => p.section === fieldKey);
    const before = these.filter((p) => (p.position || "after") === "before");
    const after = these.filter((p) => (p.position || "after") === "after");

    return (
      <div key={fieldKey}>
        {/* Optional heading label (e.g., "Introduction:", "Conclusion:") */}
        {headingLabel && (
          <h4>
            <b>{headingLabel}</b>
          </h4>
        )}

        {/* Before images */}
        {before.map((p, i) =>
          renderInjectedImage(p, `${fieldKey}-before-${i}`)
        )}

        {/* Body */}
        <p>{content}</p>

        {/* After images */}
        {after.map((p, i) => renderInjectedImage(p, `${fieldKey}-after-${i}`))}
      </div>
    );
  };

  if (loading) return <p>Loading blog...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!blog) return <p>No blog found.</p>;

  const heroImageUrl = imageSrc[blog.imageKey] || blog.imageUrl;
  const detailImageUrl = imageSrc[blog.detailImageKey] || blog.detailImageUrl;

  // Top of page: keep your original hero image placement
  // Bottom detail image: keep your original placement IF no explicit placement targets detail image
  const detailImageHasExplicitPlacement = placements.some(
    (p) =>
      (p.imageKey && imageSrc[p.imageKey] === detailImageUrl) ||
      p.imageUrl === detailImageUrl
  );

  return (
    <div className="blog-detail">
      <div className="blogdetail-subhead">
        <div className="container">
          <h1 className="blog-head">{blog.heading}</h1>
          <div className="blog-date">
            <b>{blog.date} </b> {blog.readTime} min read
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row d-flex">
          <div className="blog-text col-sm-12 col-md-6 col-lg-8">
            {heroImageUrl && (
              <img
                src={heroImageUrl}
                alt={blog.title}
                className="blog-detail-image img-fluid"
              />
            )}

            {/* Subheading */}
            {blog.subheading ? (
              <h4>
                <b>{blog.subheading}</b>
              </h4>
            ) : null}

            {/* Introduction (with images via section: "introduction") */}
            {renderSimpleFieldWithImages(
              "introduction1",
              blog.introduction,
              "Introduction:"
            )}

            <br />
            {/* Subheading1 */}
            {blog.subheading1 ? (
              <h4>
                <b>{blog.subheading1}</b>
              </h4>
            ) : null}

            {/* Introduction (with images via section: "introduction") */}
            {renderSimpleFieldWithImages("introduction", blog.introduction1)}
            <br />

            {/* === Dynamic Subtitle + subttileHead blocks with image injection === */}
            {Object.keys(blog)
              .filter((k) => k.startsWith("subtitle")) // subtitle, subtitle1, subtitle2...
              .sort((a, b) => {
                const na = parseInt(a.replace("subtitle", "")) || 0;
                const nb = parseInt(b.replace("subtitle", "")) || 0;
                return na - nb;
              })
              .map((subtitleKey) => {
                const num = subtitleKey.replace("subtitle", "") || "";
                const subtitleVal = blog[subtitleKey];
                const subArrayKey = `subttileHead${num}`;
                const subArray = blog[subArrayKey];

                if (!subtitleVal && !Array.isArray(subArray)) return null;

                // Images around the subtitle heading itself
                const subImages = placements.filter(
                  (p) => p.section === subtitleKey
                );
                const subBefore = subImages.filter(
                  (p) => (p.position || "after") === "before"
                );
                const subAfter = subImages.filter(
                  (p) => (p.position || "after") === "after"
                );

                return (
                  <div key={subtitleKey}>
                    {subtitleVal && (
                      <>
                        {subBefore.map((p, i) =>
                          renderInjectedImage(p, `${subtitleKey}-before-${i}`)
                        )}
                        
                        {subAfter.map((p, i) =>
                          renderInjectedImage(p, `${subtitleKey}-after-${i}`)
                        )}

                        <h4>
                          <b>{subtitleVal}</b>
                        </h4>
                      </>
                    )}

                    {/* subttileHead array rendering with per-item/per-benefit image injection */}
                    {Array.isArray(subArray) &&
                      subArray.map((scheme, schemeIndex) => {
                        if (!scheme) return null;
                        const nameKey = `${subArrayKey}-name-${schemeIndex}`;
                        // const listKey = `${subArrayKey}-list-${schemeIndex}`;

                        // Name-level images (before/after the <h4> of this scheme)
                        const namePlacements = placements.filter(
                          (p) =>
                            p.section === subArrayKey &&
                            typeof p.schemeIndex === "number" &&
                            p.schemeIndex === schemeIndex &&
                            (p.benefitIndex === undefined ||
                              p.benefitIndex === null)
                        );
                        const nameBefore = namePlacements.filter(
                          (p) => (p.position || "after") === "before"
                        );
                        const nameAfter = namePlacements.filter(
                          (p) => (p.position || "after") === "after"
                        );

                        return (
                          <div key={schemeIndex} className="mx-3">
                            {(scheme.name || scheme.section) && (
                              <>
                                {nameBefore.map((p, i) =>
                                  renderInjectedImage(
                                    p,
                                    `${nameKey}-before-${i}`
                                  )
                                )}
                                <h4>
                                  {/* <b>{scheme.name || scheme.section}</b> */}
                                </h4>
                                {nameAfter.map((p, i) =>
                                  renderInjectedImage(
                                    p,
                                    `${nameKey}-after-${i}`
                                  )
                                )}
                              </>
                            )}

                            <ul className="blog-text-ul">
                              {/* Before Content */}
                              {scheme.beforeContent &&
                                scheme.beforeContent.trim() !== "" && (
                                  <p>{scheme.beforeContent}</p>
                                )}

                              {/* Name-Benefit pairs side by side */}
                              {Array.isArray(scheme.name) &&
                                Array.isArray(scheme.benefits) &&
                                scheme.name.map((n, i) => {
                                  const benefit = scheme.benefits[i] || "";
                                  if (!n.trim() && !benefit.trim()) return null;

                                  return (
                                    // <li
                                    //   key={i}
                                    //   style={{ marginBottom: "0.5rem" }}
                                    // >
                                    //   <strong>{n}</strong>: {benefit}
                                    // </li>
                                    <p
                                      key={i}
                                      style={{ marginBottom: "0.5rem" }}
                                    >
                                      <strong>{n}</strong> {benefit}
                                    </p>
                                  );
                                })}

                              {/* After Content */}
                              {scheme.afterContent &&
                                scheme.afterContent.trim() !== "" && (
                                  <p>{scheme.afterContent}</p>
                                )}
                            </ul>
                          </div>
                        );
                      })}
                  </div>
                );
              })}

            {/* Paragraphs (paragraph, paragraph1, paragraph2, ...) */}
            {Object.keys(blog)
              .filter((k) => k === "paragraph" || /^paragraph\d+$/.test(k))
              .sort((a, b) => {
                const na = parseInt(a.replace("paragraph", "")) || 0;
                const nb = parseInt(b.replace("paragraph", "")) || 0;
                return na - nb;
              })
              .map((pKey) => renderSimpleFieldWithImages(pKey, blog[pKey]))}

            {/* Detail image fallback (only if not explicitly placed elsewhere) */}
            {detailImageUrl && !detailImageHasExplicitPlacement && (
              <img src={detailImageUrl} alt="" className="img-fluid" />
            )}

            {/* Outcomes & Lessons (each image-placement eligible) */}
            {blog.outcome && (
              <ul>
                <li>
                  {placements
                    .filter(
                      (p) =>
                        p.section === "outcome" &&
                        (p.position || "after") === "before"
                    )
                    .map((p, i) =>
                      renderInjectedImage(p, `outcome-before-${i}`)
                    )}
                  <b>Outcome:</b> {blog.outcome}
                  {placements
                    .filter(
                      (p) =>
                        p.section === "outcome" &&
                        (p.position || "after") === "after"
                    )
                    .map((p, i) =>
                      renderInjectedImage(p, `outcome-after-${i}`)
                    )}
                </li>
              </ul>
            )}
            {blog.lesson && (
              <ul>
                <li>
                  {placements
                    .filter(
                      (p) =>
                        p.section === "lesson" &&
                        (p.position || "after") === "before"
                    )
                    .map((p, i) =>
                      renderInjectedImage(p, `lesson-before-${i}`)
                    )}
                  <b>Lesson:</b> {blog.lesson}
                  {placements
                    .filter(
                      (p) =>
                        p.section === "lesson" &&
                        (p.position || "after") === "after"
                    )
                    .map((p, i) => renderInjectedImage(p, `lesson-after-${i}`))}
                </li>
              </ul>
            )}
            {blog.outcome1 && (
              <ul>
                <li>
                  <b>Outcome:</b> {blog.outcome1}
                </li>
              </ul>
            )}
            {blog.lesson1 && (
              <ul>
                <li>
                  <b>Lesson:</b> {blog.lesson1}
                </li>
              </ul>
            )}
            {blog.outcome2 && (
              <ul>
                <li>
                  <b>Outcome:</b> {blog.outcome2}
                </li>
              </ul>
            )}
            {blog.lesson2 && (
              <ul>
                <li>
                  <b>Lesson:</b> {blog.lesson2}
                </li>
              </ul>
            )}

            {/* Conclusions (each image-placement eligible) */}
            {(blog.conclusion ||
              blog.conclusion1 ||
              blog.conclusion2 ||
              blog.conclusion3) && (
              <h4>
                <b>Conclusion:</b>
              </h4>
            )}
            {blog.conclusion &&
              renderSimpleFieldWithImages("conclusion", blog.conclusion)}
            {blog.conclusion1 &&
              renderSimpleFieldWithImages("conclusion1", blog.conclusion1)}
            {blog.conclusion2 &&
              renderSimpleFieldWithImages("conclusion2", blog.conclusion2)}
            {blog.conclusion3 &&
              renderSimpleFieldWithImages("conclusion3", blog.conclusion3)}

            

            {/* finalword (each image-placement eligible) */}
            {(blog.finalword ||
              blog.finalword1 ||
              blog.finalword2 ||
              blog.finalword3) && (
              <h4>
                <b>The Final Word:</b>
              </h4>
            )}
            {blog.finalword &&
              renderSimpleFieldWithImages("finalword", blog.finalword)}
            {blog.finalword1 &&
              renderSimpleFieldWithImages("finalword1", blog.finalword1)}
            {blog.finalword2 &&
              renderSimpleFieldWithImages("finalword2", blog.finalword2)}
            {blog.finalword3 &&
              renderSimpleFieldWithImages("finalword3", blog.finalword3)}


              {blog.nextSeries && (
              <p>
                <h4>Next in Our Series:</h4> {blog.nextSeries}
              </p>
            )}
          </div>

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
