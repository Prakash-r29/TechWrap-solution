import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { insights } from "./blogData";
import "./BlogDetails.css";

const BlogDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const article = insights.find((item: { id: number; }) => item.id === Number(id));

  if (!article) {
    return (
      <main className="tw-blog-not-found">
        <div>
          <span>TECHWRAP / ENGINEERING JOURNAL</span>
          <h1>Article not found</h1>
          <p>The engineering insight you requested is not available.</p>
          <button type="button" onClick={() => navigate(-1)}>
            ← Back to insights
          </button>
        </div>
      </main>
    );
  }

  const relatedArticles = insights
    .filter(
      (item: { id: any; category: any; technologies: any[]; }) =>
        item.id !== article.id &&
        (item.category === article.category ||
          item.technologies.some((tech: any) =>
            article.technologies.includes(tech)
          ))
    )
    .slice(0, 3);

  return (
    <main className="tw-blog-page">
      <div className="tw-blog-grid" />
      <div className="tw-blog-glow tw-blog-glow-one" />
      <div className="tw-blog-glow tw-blog-glow-two" />

      <div className="tw-blog-container">
        <button
          type="button"
          className="tw-blog-back"
          onClick={() => navigate(-1)}
        >
          <span>←</span>
          Back to engineering insights
        </button>

        <header className="tw-blog-hero">
          <div className="tw-blog-hero-copy">
            <div className="tw-blog-eyebrow">
              <span />
              TECHWRAP / {article.category.toUpperCase()}
            </div>

            <div className="tw-blog-number">{article.number}</div>

            <h1>{article.title}</h1>

            <p className="tw-blog-lead">{article.description}</p>

            <div className="tw-blog-meta">
              <span>{article.readTime}</span>
              <span>{article.date}</span>
              <span>{article.category}</span>
            </div>

            <div className="tw-blog-tags">
              {article.technologies.map((technology: string) => (
                <span key={technology}>{technology}</span>
              ))}
            </div>
          </div>

          <div className="tw-blog-hero-media">
            <img src={article.image} alt={article.imageAlt} />
            <div className="tw-blog-media-shine" />
            <span className="tw-blog-media-label">ENGINEERING NOTE</span>
          </div>
        </header>

        <div className="tw-blog-layout">
          <aside className="tw-blog-sidebar">
            <div className="tw-blog-sidebar-card">
              <span className="tw-blog-sidebar-label">IN THIS ARTICLE</span>

              <div className="tw-blog-toc">
                {article.content.map((section: { heading: boolean | React.Key | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined; }, index: number) => (
                  <a href={`#section-${index + 1}`} key={String(section.heading)}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    {String(section.heading)}
                  </a>
                ))}
              </div>

              <button
                type="button"
                className="tw-blog-sidebar-button"
                onClick={() => navigate("/")}
              >
                TechWrap home
                <span>↗</span>
              </button>
            </div>
          </aside>

          <article className="tw-blog-content">
            <div className="tw-blog-introduction">
              <span className="tw-blog-intro-label">THE IDEA</span>
              <p>{article.description}</p>
            </div>

            {article.content.map((section: {
                paragraphs: any; heading: boolean | React.Key | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined; 
}, index: number) => (
              <React.Fragment key={String(section.heading)}>
                <section
                  className="tw-blog-section-block"
                  id={`section-${index + 1}`}
                >
                  <div className="tw-blog-section-index">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div>
                    <h2>{String(section.heading)}</h2>

                    {section.paragraphs.map((paragraph: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined, paragraphIndex: number) => (
                      <p key={`${index}-${paragraphIndex}`}>{paragraph}</p>
                    ))}
                  </div>
                </section>

                {article.contentImages[index] && (
                  <figure className="tw-blog-inline-image">
                    <img
                      src={article.contentImages[index]}
                      alt={`${article.title} — engineering illustration`}
                      loading="lazy"
                    />
                  </figure>
                )}
              </React.Fragment>
            ))}

            <div className="tw-blog-takeaway">
              <span>TECHWRAP TAKEAWAY</span>
              <p>
                Build around the real product constraint, keep boundaries
                understandable, and choose technology that your team can
                operate confidently as the product grows.
              </p>
            </div>
          </article>
        </div>

        {relatedArticles.length > 0 && (
          <section className="tw-related-section">
            <div className="tw-related-heading">
              <span>KEEP EXPLORING</span>
              <h2>More engineering insights.</h2>
            </div>

            <div className="tw-related-grid">
              {relatedArticles.map((related: { id: React.Key | null | undefined; image: string | undefined; imageAlt: string | undefined; category: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }) => (
                <button
                  type="button"
                  className="tw-related-card"
                  key={related.id}
                  onClick={() => navigate(`/Blog/Article/${related.id}`)}
                >
                  <img src={related.image} alt={related.imageAlt} />
                  <div>
                    <span>{related.category}</span>
                    <h3>{related.title}</h3>
                    <b>
                      Read insight <i>↗</i>
                    </b>
                  </div>
                </button>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
};
export default BlogDetails;
