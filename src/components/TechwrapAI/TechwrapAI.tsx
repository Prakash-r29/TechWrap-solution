import React, {
  FormEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import "./TechwrapAI.css";

interface Message {
  id: number;
  role: "user" | "assistant";
  text: string;
}

const suggestedQuestions = [
  "What services does TechWrap provide?",
  "I need a website for my business",
  "Can TechWrap build AI products?",
  "What technologies do you work with?",
];

const initialMessage: Message = {
  id: 1,
  role: "assistant",
  text: "Hi! 👋 I'm TechWrap AI. I can help you explore our services, technologies, AI solutions, and development capabilities. What would you like to build?",
};

const TechWrapAI: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    initialMessage,
  ]);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  /* ============================================================
     KEEP CHAT SCROLL POSITION UPDATED
  ============================================================ */

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
  }, [messages, isTyping]);

  /* ============================================================
     FOCUS INPUT WHEN CHAT OPENS
  ============================================================ */

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const focusTimer = window.setTimeout(() => {
      inputRef.current?.focus();
    }, 300);

    return () => {
      window.clearTimeout(focusTimer);
    };
  }, [isOpen]);

  /* ============================================================
     MOBILE CHAT BEHAVIOR
     
     Prevents the background page from scrolling while the
     mobile chat panel is open.
  ============================================================ */

  useEffect(() => {
    if (!isOpen) {
      document.body.classList.remove("techwrap-ai-open");
      return;
    }

    const isMobile = window.matchMedia(
      "(max-width: 767px)"
    ).matches;

    if (isMobile) {
      document.body.classList.add("techwrap-ai-open");
    }

    return () => {
      document.body.classList.remove("techwrap-ai-open");
    };
  }, [isOpen]);

  /* ============================================================
     HANDLE MOBILE VIEWPORT / KEYBOARD
     
     Mobile browsers change viewport height when the keyboard
     appears. This keeps the chat panel inside the visible area.
  ============================================================ */

  useEffect(() => {
    if (!isOpen || !window.visualViewport) {
      return;
    }

    const updateViewportHeight = () => {
      const viewportHeight = window.visualViewport?.height;

      if (viewportHeight) {
        document.documentElement.style.setProperty(
          "--tw-ai-viewport-height",
          `${viewportHeight}px`
        );
      }
    };

    updateViewportHeight();

    window.visualViewport.addEventListener(
      "resize",
      updateViewportHeight
    );

    window.visualViewport.addEventListener(
      "scroll",
      updateViewportHeight
    );

    return () => {
      window.visualViewport?.removeEventListener(
        "resize",
        updateViewportHeight
      );

      window.visualViewport?.removeEventListener(
        "scroll",
        updateViewportHeight
      );

      document.documentElement.style.removeProperty(
        "--tw-ai-viewport-height"
      );
    };
  }, [isOpen]);

  /* ============================================================
     DEMO AI RESPONSE
  ============================================================ */

  const generateDemoResponse = (
    question: string
  ): string => {
    const query = question.toLowerCase();

    if (
      query.includes("service") ||
      query.includes("services") ||
      query.includes("what do you do")
    ) {
      return "TechWrap helps businesses build and scale digital products through web development, AI product development, API integrations, DevOps, cloud solutions, UI/UX implementation, and ongoing maintenance.";
    }

    if (
      query.includes("website") ||
      query.includes("web development") ||
      query.includes("web app")
    ) {
      return "Absolutely! TechWrap can build modern, responsive and production-ready web applications. Our frontend stack includes React, TypeScript, JavaScript, HTML, CSS and Bootstrap, with backend technologies such as Spring Boot, Node.js and Python.";
    }

    if (
      query.includes("ai") ||
      query.includes("artificial intelligence") ||
      query.includes("llm")
    ) {
      return "Yes. TechWrap can help build AI-powered products, integrate AI APIs and LLMs, automate workflows, and create intelligent application experiences.";
    }

    if (
      query.includes("technology") ||
      query.includes("tech stack") ||
      query.includes("stack")
    ) {
      return "Our technology capabilities include React, TypeScript, JavaScript, Bootstrap, Spring Boot, Node.js, Python, REST APIs, PostgreSQL, MongoDB, Docker, CI/CD, cloud platforms, AI APIs, LLMs and automation.";
    }

    if (
      query.includes("price") ||
      query.includes("pricing") ||
      query.includes("cost")
    ) {
      return "Project pricing depends on the scope, features, technology and timeline. For an accurate estimate, the best next step is to share your project requirements with the TechWrap team.";
    }

    if (
      query.includes("contact") ||
      query.includes("expert") ||
      query.includes("talk")
    ) {
      return "I'd be happy to help you get started. Tell me briefly about your project, the features you need, and your expected timeline. You can then connect with the TechWrap team for a detailed discussion.";
    }

    return "That's a great question! I can help you explore TechWrap's services, web development, AI products, technology stacks, integrations and project solutions. Tell me a little more about what you're looking to build.";
  };

  /* ============================================================
     AI RESPONSE FUNCTION
  ============================================================ */

  const getAIResponse = async (
    question: string
  ): Promise<string> => {
    await new Promise((resolve) =>
      setTimeout(resolve, 900)
    );

    return generateDemoResponse(question);
  };

  /* ============================================================
     SEND MESSAGE
  ============================================================ */

  const sendMessage = async (
    messageText?: string
  ) => {
    const question = (
      messageText ?? input
    ).trim();

    if (!question || isTyping) {
      return;
    }

    const userMessage: Message = {
      id: Date.now(),
      role: "user",
      text: question,
    };

    setMessages((previous) => [
      ...previous,
      userMessage,
    ]);

    setInput("");
    setIsTyping(true);

    try {
      const response =
        await getAIResponse(question);

      const assistantMessage: Message = {
        id: Date.now() + 1,
        role: "assistant",
        text: response,
      };

      setMessages((previous) => [
        ...previous,
        assistantMessage,
      ]);
    } catch {
      const errorMessage: Message = {
        id: Date.now() + 1,
        role: "assistant",
        text: "Sorry, I couldn't process that request right now. Please try again.",
      };

      setMessages((previous) => [
        ...previous,
        errorMessage,
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  /* ============================================================
     FORM SUBMIT
  ============================================================ */

  const handleSubmit = (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    sendMessage();
  };

  /* ============================================================
     SUGGESTION BUTTON
  ============================================================ */

  const handleSuggestion = (
    question: string
  ) => {
    sendMessage(question);
  };

  /* ============================================================
     CLEAR CHAT
  ============================================================ */

  const clearChat = () => {
    setMessages([initialMessage]);
  };

  /* ============================================================
     CLOSE CHAT
  ============================================================ */

  const closeChat = () => {
    setIsOpen(false);
    inputRef.current?.blur();
  };

  return (
    <div
      className={`techwrap-ai ${
        isOpen ? "techwrap-ai--open" : ""
      }`}
    >
      {/* ======================================================
          MOBILE BACKDROP
          
          Keeps the chat visually separated from the website
          when opened on smaller screens.
      ======================================================= */}

      {isOpen && (
        <button
          type="button"
          className="techwrap-ai__backdrop"
          onClick={closeChat}
          aria-label="Close TechWrap AI"
          tabIndex={-1}
        />
      )}

      {/* ======================================================
          CHAT WINDOW
      ======================================================= */}

      {isOpen && (
        <div
          className="techwrap-ai__window"
          role="dialog"
          aria-modal="true"
          aria-label="TechWrap AI Assistant"
        >
          {/* ==================================================
              HEADER
          =================================================== */}

          <div className="techwrap-ai__header">
            <div className="techwrap-ai__header-left">
              <div className="techwrap-ai__avatar">
                <span className="techwrap-ai__avatar-icon">
                  ✦
                </span>

                <span className="techwrap-ai__online-dot" />
              </div>

              <div className="techwrap-ai__header-info">
                <h3>TechWrap AI</h3>

                <span>
                  <i />
                  Online assistant
                </span>
              </div>
            </div>

            <div className="techwrap-ai__header-actions">
              {/* CLEAR CHAT */}
              <button
                type="button"
                className="techwrap-ai__clear"
                onClick={clearChat}
                aria-label="Clear chat"
                title="Clear chat"
              >
                ↻
              </button>

              {/* CLOSE CHAT */}
              <button
                type="button"
                className="techwrap-ai__close"
                onClick={closeChat}
                aria-label="Close TechWrap AI"
              >
                ×
              </button>
            </div>
          </div>

          {/* ==================================================
              CHAT CONTENT
          =================================================== */}

          <div className="techwrap-ai__body">
            <div className="techwrap-ai__messages">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`techwrap-ai__message-row ${
                    message.role === "user"
                      ? "techwrap-ai__message-row--user"
                      : "techwrap-ai__message-row--assistant"
                  }`}
                >
                  {message.role ===
                    "assistant" && (
                    <div className="techwrap-ai__small-avatar">
                      ✦
                    </div>
                  )}

                  <div
                    className={`techwrap-ai__message ${
                      message.role === "user"
                        ? "techwrap-ai__message--user"
                        : "techwrap-ai__message--assistant"
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}

              {/* ==================================================
                  TYPING INDICATOR
              =================================================== */}

              {isTyping && (
                <div className="techwrap-ai__message-row techwrap-ai__message-row--assistant">
                  <div className="techwrap-ai__small-avatar">
                    ✦
                  </div>

                  <div className="techwrap-ai__typing">
                    <span />
                    <span />
                    <span />
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* ==================================================
                SUGGESTIONS
            =================================================== */}

            {messages.length === 1 && (
              <div className="techwrap-ai__suggestions">
                <div className="techwrap-ai__suggestions-title">
                  Try asking
                </div>

                <div className="techwrap-ai__suggestions-list">
                  {suggestedQuestions.map(
                    (question) => (
                      <button
                        key={question}
                        type="button"
                        onClick={() =>
                          handleSuggestion(
                            question
                          )
                        }
                        disabled={isTyping}
                      >
                        {question}
                        <span>→</span>
                      </button>
                    )
                  )}
                </div>
              </div>
            )}
          </div>

          {/* ==================================================
              INPUT
          =================================================== */}

          <div className="techwrap-ai__footer">
            <form
              className="techwrap-ai__input-container"
              onSubmit={handleSubmit}
            >
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(event) =>
                  setInput(event.target.value)
                }
                placeholder="Ask TechWrap AI..."
                disabled={isTyping}
                aria-label="Ask TechWrap AI"
                autoComplete="off"
              />

              <button
                type="submit"
                disabled={
                  !input.trim() || isTyping
                }
                aria-label="Send message"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22 2L11 13"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  <path
                    d="M22 2L15 22L11 13L2 9L22 2Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </form>

            <div className="techwrap-ai__powered">
              <span>✦</span>
              Powered by TechWrap AI
            </div>
          </div>
        </div>
      )}

      {/* ======================================================
          FLOATING AI BUTTON
      ======================================================= */}

      {!isOpen && (
        <button
          type="button"
          className="techwrap-ai__launcher"
          onClick={() => setIsOpen(true)}
          aria-label="Open TechWrap AI"
        >
          <span className="techwrap-ai__launcher-glow" />

          <span className="techwrap-ai__launcher-icon">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 3C7.029 3 3 6.582 3 11C3 13.04 3.91 14.9 5.4 16.29C5.24 17.55 4.74 18.75 4 19.8C5.66 19.69 7.2 19.15 8.42 18.27C9.51 18.75 10.72 19 12 19C16.971 19 21 15.418 21 11C21 6.582 16.971 3 12 3Z"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              <circle
                cx="8"
                cy="11"
                r="1"
                fill="currentColor"
              />

              <circle
                cx="12"
                cy="11"
                r="1"
                fill="currentColor"
              />

              <circle
                cx="16"
                cy="11"
                r="1"
                fill="currentColor"
              />
            </svg>
          </span>

          <span className="techwrap-ai__launcher-text">
            <strong>Ask AI</strong>
            <small>TechWrap</small>
          </span>

          <span className="techwrap-ai__notification">
            1
          </span>
        </button>
      )}
    </div>
  );
};

export default TechWrapAI;