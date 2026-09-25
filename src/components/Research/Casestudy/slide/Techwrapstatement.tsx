import { useEffect, useRef, useState } from "react";
import "./TechWrapStatement.css";

const statement =
  "Every day, TechWrap helps businesses, startups, and developers turn ambitious ideas into powerful digital experiences through modern technology.";

const words = statement.split(" ");

function TechWrapStatement() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      {
        threshold: 0.35,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`techwrap-statement ${
        visible ? "is-visible" : ""
      }`}
    >
      <div className="statement-container">
        <p className="statement-text">
          {words.map((word, index) => (
            <span
              key={`${word}-${index}`}
              className="statement-word"
              style={
                {
                  "--delay": `${index * 35}ms`,
                } as React.CSSProperties
              }
            >
              {word}
            </span>
          ))}
        </p>

       

        
      </div>
    </section>
  );
}

export default TechWrapStatement;