import React, { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Whatsup.css";

type Message = {
  id: number;
  sender: "bot" | "user";
  text: string;
};

type Option = {
  label: string;
  value: string;
};

type LeadStep =
  | "name"
  | "email"
  | "company"
  | "service"
  | "requirements";

const WhatsAppButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [showTyping, setShowTyping] = useState(false);

  const [leadStep, setLeadStep] =
    useState<LeadStep | null>(null);

  const [showMainOptions, setShowMainOptions] =
    useState(false);

  const [leadData, setLeadData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    requirements: "",
  });

  const messagesEndRef =
    useRef<HTMLDivElement>(null);

  /* =========================================================
     INITIAL GREETING
  ========================================================= */

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setShowTyping(true);

      const timer = setTimeout(() => {
        setShowTyping(false);

        setMessages([
          {
            id: Date.now(),
            sender: "bot",
            text:
              "Hey there! 👋\n" +
              "I'm TechWrap's AI assistant.\n\n" +
              "I can help you explore Web Development, AI Products, DevOps & Cloud, Integrations, Pricing, and our technology solutions.\n\n" +
              "How can I help you today?",
          },
        ]);

        setShowMainOptions(true);
      }, 700);

      return () => clearTimeout(timer);
    }
  }, [isOpen, messages.length]);

  /* =========================================================
     AUTO SCROLL
  ========================================================= */

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, showTyping]);

  /* =========================================================
     ADD MESSAGE
  ========================================================= */

  const addMessage = (
    sender: "bot" | "user",
    text: string
  ) => {
    setMessages((prev) => [
      ...prev,
      {
        id: Date.now() + Math.random(),
        sender,
        text,
      },
    ]);
  };

  /* =========================================================
     BOT RESPONSE
  ========================================================= */

  const sendBotMessage = (text: string) => {
    setShowTyping(true);

    setTimeout(() => {
      setShowTyping(false);
      addMessage("bot", text);
    }, 600);
  };

  /* =========================================================
     NORMALIZE INPUT
  ========================================================= */

  const normalizeInput = (value: string) => {
    return value
      .toLowerCase()
      .trim()
      .replace(/[?!.,]/g, " ")
      .replace(/\s+/g, " ");
  };

  /* =========================================================
     MANUAL CHAT RESPONSE ENGINE
  ========================================================= */

  const getManualResponse = (
    rawInput: string
  ): string => {
    const input = normalizeInput(rawInput);

    /* -------------------------------------------------------
       GREETINGS
    ------------------------------------------------------- */

    if (
      /^(hi|hello|hey|hey there|hai|hii|hiii|good morning|good afternoon|good evening)$/.test(
        input
      )
    ) {
      setShowMainOptions(true);

      return (
        "Hi! 👋 Welcome to TechWrap.\n\n" +
        "I'm here to help you explore our technology solutions, services, and project options.\n\n" +
        "What would you like to know about?"
      );
    }

    /* -------------------------------------------------------
       THANK YOU
    ------------------------------------------------------- */

    if (
      input.includes("thank you") ||
      input === "thanks" ||
      input === "thankyou"
    ) {
      return (
        "You're very welcome! 😊\n\n" +
        "I'm always happy to help. You can ask me about Web Development, AI Products, DevOps & Cloud, Integrations, or Pricing."
      );
    }

    /* -------------------------------------------------------
       TECHWRAP
    ------------------------------------------------------- */

    if (
      input.includes("who are you") ||
      input.includes("what are you") ||
      input.includes("about techwrap") ||
      input.includes("what is techwrap") ||
      input.includes("tell me about techwrap")
    ) {
      return (
        "I'm TechWrap AI 🤖, the virtual assistant for TechWrap.\n\n" +
        "TechWrap helps businesses build, integrate, automate, and scale digital products.\n\n" +
        "Our main areas include:\n" +
        "• Web Development\n" +
        "• AI Products\n" +
        "• DevOps & Cloud\n" +
        "• Integrations\n" +
        "• Custom Digital Solutions"
      );
    }

    /* -------------------------------------------------------
       WEB DEVELOPMENT
    ------------------------------------------------------- */

    if (
      input.includes("web development") ||
      input.includes("web developer") ||
      input.includes("website") ||
      input.includes("web app") ||
      input.includes("web application") ||
      input.includes("frontend") ||
      input.includes("full stack") ||
      input.includes("fullstack") ||
      input.includes("ecommerce") ||
      input.includes("e commerce") ||
      input.includes("enterprise application")
    ) {
      return (
        "We build production-ready web applications using modern technologies. 🌐\n\n" +
        "Frontend:\n" +
        "• React\n" +
        "• TypeScript\n" +
        "• Bootstrap\n" +
        "• Modern responsive UI\n\n" +
        "Backend:\n" +
        "• Java / Spring Boot\n" +
        "• Node.js\n" +
        "• Python\n\n" +
        "Data & APIs:\n" +
        "• REST APIs\n" +
        "• PostgreSQL\n" +
        "• MongoDB\n\n" +
        "We can build:\n" +
        "• Business Websites\n" +
        "• Web Applications\n" +
        "• E-commerce Platforms\n" +
        "• Enterprise Applications\n" +
        "• Custom SaaS Products\n\n" +
        "What type of project are you planning?"
      );
    }

    /* -------------------------------------------------------
       REACT / TYPESCRIPT
    ------------------------------------------------------- */

    if (
      input.includes("react") ||
      input.includes("typescript") ||
      input.includes("bootstrap")
    ) {
      return (
        "TechWrap uses modern frontend technologies to create fast, responsive interfaces. ⚛️\n\n" +
        "Our frontend stack includes:\n\n" +
        "• React JS\n" +
        "• TypeScript\n" +
        "• Bootstrap\n\n" +
        "React is useful for building reusable UI components, interactive dashboards, SaaS platforms, portals, and modern business applications.\n\n" +
        "We can combine React with Java/Spring Boot, Node.js, or Python on the backend."
      );
    }

    /* -------------------------------------------------------
       JAVA
    ------------------------------------------------------- */

    if (
      input.includes("java") ||
      input.includes("spring boot")
    ) {
      return (
        "TechWrap can build full-stack applications using Java and Spring Boot. ☕\n\n" +
        "A typical stack can include:\n\n" +
        "Frontend:\n" +
        "• React\n" +
        "• TypeScript\n" +
        "• Bootstrap\n\n" +
        "Backend:\n" +
        "• Java\n" +
        "• Spring Boot\n" +
        "• REST APIs\n\n" +
        "Database:\n" +
        "• PostgreSQL\n" +
        "• MongoDB\n\n" +
        "This stack is well suited for scalable business and enterprise applications."
      );
    }

    /* -------------------------------------------------------
       NODE
    ------------------------------------------------------- */

    if (
      input.includes("node") ||
      input.includes("node js") ||
      input.includes("nodejs")
    ) {
      return (
        "Node.js can be used to build scalable backend services and APIs. 🟢\n\n" +
        "TechWrap can combine Node.js with:\n\n" +
        "• React\n" +
        "• TypeScript\n" +
        "• REST APIs\n" +
        "• PostgreSQL\n" +
        "• MongoDB\n\n" +
        "It is a strong option for real-time applications, SaaS platforms, API-driven products, and modern web applications."
      );
    }

    /* -------------------------------------------------------
       PYTHON
    ------------------------------------------------------- */

    if (
      input.includes("python") ||
      input.includes("django")
    ) {
      return (
        "TechWrap can use Python for backend services, automation, data-driven applications, and AI-powered solutions. 🐍\n\n" +
        "Python can work with:\n\n" +
        "• REST APIs\n" +
        "• AI/ML services\n" +
        "• Databases\n" +
        "• Automation workflows\n" +
        "• React frontends\n\n" +
        "It is particularly useful when your project combines web applications with AI or automation."
      );
    }

    /* -------------------------------------------------------
       AI PRODUCTS
    ------------------------------------------------------- */

    if (
      input.includes("ai") ||
      input.includes("artificial intelligence") ||
      input.includes("chatbot") ||
      input.includes("llm") ||
      input.includes("rag") ||
      input.includes("agent") ||
      input.includes("automation") ||
      input.includes("ai product")
    ) {
      return (
        "TechWrap can help you build intelligent digital products using modern AI technologies. 🤖\n\n" +
        "AI solutions include:\n\n" +
        "• AI SaaS Products\n" +
        "• AI Chatbots\n" +
        "• LLM Applications\n" +
        "• RAG Systems\n" +
        "• AI Agents\n" +
        "• Workflow Automation\n" +
        "• AI API Integrations\n\n" +
        "We can integrate AI capabilities into existing websites or build a complete AI-powered product from the ground up.\n\n" +
        "What kind of AI product are you planning?"
      );
    }

    /* -------------------------------------------------------
       DEVOPS & CLOUD
    ------------------------------------------------------- */

    if (
      input.includes("devops") ||
      input.includes("dev ops") ||
      input.includes("cloud") ||
      input.includes("deployment") ||
      input.includes("docker") ||
      input.includes("ci cd") ||
      input.includes("cicd") ||
      input.includes("hosting") ||
      input.includes("infrastructure")
    ) {
      return (
        "Our DevOps & Cloud solutions help teams deploy, scale, and monitor applications efficiently. ☁️\n\n" +
        "Technologies and practices include:\n\n" +
        "• Docker\n" +
        "• CI/CD\n" +
        "• Cloud Deployment\n" +
        "• Monitoring\n" +
        "• Infrastructure Automation\n" +
        "• Application Scaling\n\n" +
        "We can help move your application from development to production with a reliable deployment workflow.\n\n" +
        "Tell me whether you need deployment, cloud setup, CI/CD, or application scaling."
      );
    }

    /* -------------------------------------------------------
       INTEGRATIONS
    ------------------------------------------------------- */

    if (
      input.includes("integration") ||
      input.includes("integrate") ||
      input.includes("api") ||
      input.includes("payment") ||
      input.includes("third party") ||
      input.includes("authentication") ||
      input.includes("connect systems")
    ) {
      return (
        "TechWrap builds reliable API and system integrations. 🔗\n\n" +
        "We can work with:\n\n" +
        "• REST APIs\n" +
        "• Third-party APIs\n" +
        "• Payment Integrations\n" +
        "• Authentication\n" +
        "• Database Integrations\n" +
        "• AI APIs\n" +
        "• Business System Integrations\n\n" +
        "We can connect your frontend, backend, databases, third-party platforms, and AI services into one workflow.\n\n" +
        "What systems or APIs do you need to connect?"
      );
    }

    /* -------------------------------------------------------
       DATABASE
    ------------------------------------------------------- */

    if (
      input.includes("database") ||
      input.includes("postgres") ||
      input.includes("postgresql") ||
      input.includes("mongodb") ||
      input.includes("mongo")
    ) {
      return (
        "TechWrap can work with both relational and NoSQL databases. 🗄️\n\n" +
        "Our stack includes:\n\n" +
        "• PostgreSQL\n" +
        "• MongoDB\n\n" +
        "The database choice depends on your application architecture, data model, scalability requirements, and integration needs.\n\n" +
        "We can also connect databases with React, Spring Boot, Node.js, Python, REST APIs, and AI applications."
      );
    }

    /* -------------------------------------------------------
       PRICING
    ------------------------------------------------------- */

    if (
      input.includes("price") ||
      input.includes("pricing") ||
      input.includes("cost") ||
      input.includes("budget") ||
      input.includes("how much") ||
      input.includes("quotation") ||
      input.includes("quote")
    ) {
      return (
        "TechWrap project pricing depends on the scope, features, technology stack, integrations, complexity, and timeline. 💰\n\n" +
        "For example, the cost can vary depending on whether you need:\n\n" +
        "• A business website\n" +
        "• A custom web application\n" +
        "• An AI product\n" +
        "• An e-commerce platform\n" +
        "• Enterprise software\n" +
        "• Cloud and DevOps infrastructure\n\n" +
        "For an accurate estimate, I can connect you with the TechWrap team."
      );
    }

    /* -------------------------------------------------------
       CONTACT
    ------------------------------------------------------- */

    if (
      input.includes("contact") ||
      input.includes("talk to team") ||
      input.includes("speak to team") ||
      input.includes("human") ||
      input.includes("sales team") ||
      input.includes("developer")
    ) {
      startLeadCollection();

      return "";
    }

    /* -------------------------------------------------------
       HELP
    ------------------------------------------------------- */

    if (
      input === "help" ||
      input.includes("what can you do") ||
      input.includes("how can you help")
    ) {
      setShowMainOptions(true);

      return (
        "I can help you with:\n\n" +
        "🌐 Web Development\n" +
        "🤖 AI Products\n" +
        "☁️ DevOps & Cloud\n" +
        "🔗 Integrations\n" +
        "💰 Pricing\n" +
        "📞 Contact Team\n\n" +
        "You can type a question naturally, for example:\n\n" +
        "\"Tell me about web development\"\n" +
        "\"What AI solutions do you build?\"\n" +
        "\"Do you use React?\"\n" +
        "\"Tell me about DevOps\""
      );
    }

    /* -------------------------------------------------------
       UNKNOWN
    ------------------------------------------------------- */

    setShowMainOptions(true);

    return (
      "I can help with that. 😊\n\n" +
      "I currently specialize in TechWrap's:\n\n" +
      "🌐 Web Development\n" +
      "🤖 AI Products\n" +
      "☁️ DevOps & Cloud\n" +
      "🔗 Integrations\n" +
      "💰 Pricing\n\n" +
      "Try asking something like:\n" +
      "\"What technologies do you use?\"\n" +
      "\"Tell me about web development\"\n" +
      "\"How can you help with AI?\"\n" +
      "\"Do you provide cloud deployment?\""
    );
  };

  /* =========================================================
     SERVICE BUTTON HANDLER
  ========================================================= */

  const handleOption = (option: Option) => {
    setShowMainOptions(false);

    addMessage("user", option.label);

    switch (option.value) {
      case "web":
        sendBotMessage(
          "We build production-ready web applications using modern technologies. 🌐\n\n" +
          "Frontend:\n" +
          "• React\n" +
          "• TypeScript\n" +
          "• Bootstrap\n\n" +
          "Backend:\n" +
          "• Java / Spring Boot\n" +
          "• Node.js\n" +
          "• Python\n\n" +
          "Data & APIs:\n" +
          "• REST APIs\n" +
          "• PostgreSQL\n" +
          "• MongoDB\n\n" +
          "We can build business websites, web applications, e-commerce platforms, enterprise applications, and SaaS products.\n\n" +
          "Which type of project are you planning?"
        );
        break;

      case "web-projects":
        sendBotMessage(
          "Great choice! 🚀\n\n" +
          "We can build:\n\n" +
          "• Business Websites\n" +
          "• Web Applications\n" +
          "• E-commerce Platforms\n" +
          "• Enterprise Applications\n" +
          "• Custom SaaS Products\n\n" +
          "Our team can help you choose the right architecture and technology stack."
        );
        break;

      case "ai":
        sendBotMessage(
          "TechWrap can help you build intelligent products using modern AI technologies. 🤖\n\n" +
          "• AI SaaS Products\n" +
          "• AI Chatbots\n" +
          "• LLM Applications\n" +
          "• RAG Systems\n" +
          "• AI Agents\n" +
          "• Workflow Automation\n" +
          "• AI API Integrations\n\n" +
          "We can integrate AI into an existing application or build a complete AI-powered product."
        );
        break;

      case "devops":
        sendBotMessage(
          "Our DevOps & Cloud solutions help teams deploy, scale, and monitor applications efficiently. ☁️\n\n" +
          "Technologies include:\n\n" +
          "• Docker\n" +
          "• CI/CD\n" +
          "• Cloud Deployment\n" +
          "• Monitoring\n" +
          "• Infrastructure Automation\n" +
          "• Application Scaling\n\n" +
          "We can help take your application from development to production."
        );
        break;

      case "integrations":
        sendBotMessage(
          "TechWrap builds reliable API and system integrations. 🔗\n\n" +
          "We work with:\n\n" +
          "• REST APIs\n" +
          "• Third-party APIs\n" +
          "• Payment Integrations\n" +
          "• Authentication\n" +
          "• Database Integrations\n" +
          "• AI APIs\n" +
          "• Business System Integrations\n\n" +
          "Tell me what systems you need to connect."
        );
        break;

      case "pricing":
        sendBotMessage(
          "Our project pricing depends on the product scope, features, technology stack, integrations, complexity, and timeline. 💰\n\n" +
          "For an accurate estimate, I can connect you with the TechWrap team."
        );
        break;

      case "contact":
        startLeadCollection();
        break;

      default:
        break;
    }
  };

  /* =========================================================
     START LEAD COLLECTION
  ========================================================= */

  const startLeadCollection = () => {
    setShowMainOptions(false);
    setLeadStep("name");

    setLeadData({
      name: "",
      email: "",
      company: "",
      service: "",
      requirements: "",
    });

    sendBotMessage(
      "Absolutely! 👋\n\n" +
      "I'll collect a few details so our TechWrap team can understand your project better.\n\n" +
      "What's your name?"
    );
  };

  /* =========================================================
     SEND LEAD TO OWNER EMAIL
  ========================================================= */

  const sendLeadToEmail = async (
    submittedLeadData: typeof leadData
  ) => {
    setShowTyping(true);

    try {
      const serviceId =
        import.meta.env.VITE_EMAILJS_SERVICE_ID;

      const templateId =
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

      const publicKey =
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error(
          "EmailJS environment variables are missing."
        );
      }

      const templateParams = {
        subject:
          "New TechWrap Project Inquiry",

        name:
          submittedLeadData.name,

        email:
          submittedLeadData.email,

        company:
          submittedLeadData.company,

        service:
          submittedLeadData.service,

        requirements:
          submittedLeadData.requirements,

        reply_to:
          submittedLeadData.email,

        message:
          `New project inquiry received from TechWrap AI.\n\n` +
          `Name: ${submittedLeadData.name}\n` +
          `Email: ${submittedLeadData.email}\n` +
          `Company: ${submittedLeadData.company}\n` +
          `Service: ${submittedLeadData.service}\n\n` +
          `Project Requirements:\n${submittedLeadData.requirements}`,
      };

      await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );

      setShowTyping(false);

      addMessage(
        "bot",
        "Thank you. Your project details have been submitted successfully to the TechWrap team. ✅\n\n" +
        "Our team will review your requirements and get back to you shortly using the contact details you provided.\n\n" +
        "We appreciate your interest in TechWrap."
      );

    } catch (error) {

      console.error(
        "TechWrap AI email submission failed:",
        error
      );

      setShowTyping(false);

      /*
        Put the user back on the requirements step so
        they can try submitting the project details again.
      */
      setLeadStep("requirements");

      addMessage(
        "bot",
        "We couldn't submit your project details at this moment.\n\n" +
        "Please try submitting your requirements again. If the issue continues, you can contact the TechWrap team directly."
      );
    }
  };

  /* =========================================================
     LEAD COLLECTION
  ========================================================= */

  const handleLeadSubmit = async (
    value: string
  ) => {
    if (!value.trim()) return;

    const cleanValue = value.trim();

    /* -------------------------------------------------------
       LEAD COLLECTION MODE
    ------------------------------------------------------- */

    if (leadStep) {

      addMessage(
        "user",
        cleanValue
      );

      switch (leadStep) {

        case "name":

          setLeadData((prev) => ({
            ...prev,
            name: cleanValue,
          }));

          setLeadStep("email");

          sendBotMessage(
            "Thanks! 👍\n\nWhat's your email address?"
          );

          break;


        case "email":

          setLeadData((prev) => ({
            ...prev,
            email: cleanValue,
          }));

          setLeadStep("company");

          sendBotMessage(
            "Great. What is your company or organization name?"
          );

          break;


        case "company":

          setLeadData((prev) => ({
            ...prev,
            company: cleanValue,
          }));

          setLeadStep("service");

          sendBotMessage(
            "Which TechWrap service are you interested in?\n\n" +
            "Web Development, AI Products, DevOps & Cloud, or Integrations?"
          );

          break;


        case "service":

          setLeadData((prev) => ({
            ...prev,
            service: cleanValue,
          }));

          setLeadStep("requirements");

          sendBotMessage(
            "Almost done! 🚀\n\n" +
            "Tell us briefly about your project requirements."
          );

          break;


        case "requirements": {

          /*
            Create one complete object using the latest
            requirements value.
          */
          const submittedLeadData = {
            ...leadData,
            requirements: cleanValue,
          };

          setLeadData(
            submittedLeadData
          );

          /*
            Stop the lead collection state while EmailJS
            submission is being processed.
          */
          setLeadStep(null);

          setShowMainOptions(false);

          /*
            Send the complete lead directly to EmailJS.
          */
          await sendLeadToEmail(
            submittedLeadData
          );

          break;
        }


        default:
          break;
      }

      return;
    }

    /* -------------------------------------------------------
       NORMAL CHAT MODE
    ------------------------------------------------------- */

    addMessage(
      "user",
      cleanValue
    );

    const response =
      getManualResponse(cleanValue);

    if (response.trim()) {
      sendBotMessage(
        response
      );
    }
  };

  /* =========================================================
     RESET CHAT
  ========================================================= */

  const resetChat = () => {

    setMessages([]);

    setLeadStep(null);

    setShowMainOptions(false);

    setLeadData({
      name: "",
      email: "",
      company: "",
      service: "",
      requirements: "",
    });
  };

  /* =========================================================
     MAIN SERVICE OPTIONS
  ========================================================= */

  const serviceOptions: Option[] = [
    {
      label: "🌐 Web Development",
      value: "web",
    },
    {
      label: "🤖 AI Products",
      value: "ai",
    },
    {
      label: "☁️ DevOps & Cloud",
      value: "devops",
    },
    {
      label: "🔗 Integrations",
      value: "integrations",
    },
    {
      label: "💰 Pricing",
      value: "pricing",
    },
    {
      label: "📞 Contact Team",
      value: "contact",
    },
  ];

  /* =========================================================
     WEB PROJECT OPTIONS
  ========================================================= */

  const projectOptions: Option[] = [
    {
      label: "Website",
      value: "web-projects",
    },
    {
      label: "Web App",
      value: "web-projects",
    },
    {
      label: "E-commerce",
      value: "web-projects",
    },
    {
      label: "Enterprise App",
      value: "web-projects",
    },
  ];

  /* =========================================================
     WEB PROJECT OPTIONS VISIBILITY
  ========================================================= */

  const showProjectOptions =
    messages.length > 0 &&
    messages[
      messages.length - 1
    ]?.text.includes(
      "Which type of project are you planning?"
    );

  /* =========================================================
     RENDER
  ========================================================= */

  return (
    <>
      {/* =====================================================
          CHAT WINDOW
      ===================================================== */}

      {isOpen && (
        <div className="tw-whatsapp-chat">

          {/* HEADER */}

          <div className="tw-chat-header">

            <div className="tw-chat-profile">

              <div className="tw-chat-avatar">

                <span>
                  TW
                </span>

                <span className="tw-online-dot"></span>

              </div>

              <div>

                <h3>
                  TechWrap AI
                </h3>

                <span>
                  {showTyping
                    ? "typing..."
                    : "Online"}
                </span>

              </div>

            </div>


            <div className="tw-header-actions">

              <button
                className="tw-header-button"
                onClick={resetChat}
                aria-label="Reset chat"
                type="button"
              >
                ↻
              </button>

              <button
                className="tw-header-button"
                onClick={() =>
                  setIsOpen(false)
                }
                aria-label="Close chat"
                type="button"
              >
                ×
              </button>

            </div>

          </div>


          {/* CHAT BODY */}

          <div className="tw-chat-body">

            <div className="tw-chat-date">
              <span>
                Today
              </span>
            </div>


            {/* MESSAGES */}

            {messages.map((message) => (

              <div
                key={message.id}
                className={`tw-message-row ${
                  message.sender === "user"
                    ? "tw-user-row"
                    : "tw-bot-row"
                }`}
              >

                <div
                  className={`tw-message ${
                    message.sender === "user"
                      ? "tw-user-message"
                      : "tw-bot-message"
                  }`}
                >

                  {message.sender === "bot" && (
                    <div className="tw-bot-name">
                      TechWrap AI
                    </div>
                  )}

                  <div className="tw-message-text">

                    {message.text
                      .split("\n")
                      .map(
                        (
                          line,
                          index
                        ) => (

                          <React.Fragment
                            key={index}
                          >

                            {line}

                            {index !==
                              message.text
                                .split("\n")
                                .length -
                                1 && (
                              <br />
                            )}

                          </React.Fragment>

                        )
                      )}

                  </div>


                  <div className="tw-message-time">

                    {new Date().toLocaleTimeString(
                      [],
                      {
                        hour: "2-digit",
                        minute: "2-digit",
                      }
                    )}

                    {message.sender === "user" && (

                      <span className="tw-read">
                        ✓✓
                      </span>

                    )}

                  </div>

                </div>

              </div>

            ))}


            {/* TYPING */}

            {showTyping && (

              <div className="tw-message-row tw-bot-row">

                <div className="tw-message tw-bot-message tw-typing-message">

                  <span></span>
                  <span></span>
                  <span></span>

                </div>

              </div>

            )}


            {/* MAIN OPTIONS */}

            {showMainOptions &&
              !showTyping && (

                <div className="tw-options">

                  {serviceOptions.map(
                    (option) => (

                      <button
                        key={option.value}
                        onClick={() =>
                          handleOption(option)
                        }
                        type="button"
                      >
                        {option.label}
                      </button>

                    )
                  )}

                </div>

              )}


            {/* WEB PROJECT OPTIONS */}

            {showProjectOptions &&
              !showTyping && (

                <div className="tw-options">

                  {projectOptions.map(
                    (option) => (

                      <button
                        key={option.label}
                        onClick={() =>
                          handleOption(option)
                        }
                        type="button"
                      >
                        {option.label}
                      </button>

                    )
                  )}

                </div>

              )}


            {/* AUTO EMAIL SUBMISSION */}

            <div
              ref={messagesEndRef}
            ></div>

          </div>


          {/* INPUT */}

          <form
            className="tw-chat-input-area"
            onSubmit={(event) => {

              event.preventDefault();

              const input =
                event.currentTarget.elements.namedItem(
                  "message"
                ) as HTMLInputElement;

              if (
                input.value.trim()
              ) {

                handleLeadSubmit(
                  input.value
                );

                input.value = "";
              }

            }}
          >

            <button
              type="button"
              className="tw-emoji-button"
              aria-label="Emoji"
            >
              ☺
            </button>


            <input
              name="message"
              type="text"
              autoComplete="off"
              placeholder={
                leadStep
                  ? "Type your answer..."
                  : "Ask TechWrap AI..."
              }
            />


            <button
              type="submit"
              className="tw-send-button"
              aria-label="Send message"
            >
              ➤
            </button>

          </form>

        </div>
      )}


      {/* =====================================================
          FLOATING WHATSAPP BUTTON
      ===================================================== */}

      <button
        className={`whatsapp-button ${
          isOpen
            ? "whatsapp-button-open"
            : ""
        }`}
        onClick={() =>
          setIsOpen(
            (prev) => !prev
          )
        }
        aria-label="Open TechWrap WhatsApp AI"
        type="button"
      >

        <span className="whatsapp-tooltip">
          Chat with TechWrap
        </span>


        <span className="whatsapp-icon">

          <svg
            viewBox="0 0 32 32"
            aria-hidden="true"
          >

            <path
              d="M19.11 17.23c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.14-.42-2.17-1.34-.8-.71-1.34-1.59-1.5-1.86-.16-.27-.02-.42.12-.56.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47h-.52c-.18 0-.47.07-.72.34-.25.27-.94.92-.94 2.25s.97 2.61 1.11 2.79c.14.18 1.91 2.92 4.63 4.09.65.21 1.24.18 1.71.11.52-.08 1.6-.65 1.82-1.28.23-.63.23-1.17.16-1.28-.07-.11-.25-.18-.52-.32Z"
            />

            <path
              d="M16.02 3.2c-7.07 0-12.8 5.73-12.8 12.8 0 2.26.59 4.38 1.63 6.22L3.1 28.8l6.76-1.72a12.73 12.73 0 0 0 6.16 1.58h.01c7.06 0 12.8-5.73 12.8-12.8S23.08 3.2 16.02 3.2Zm0 23.27h-.01a10.6 10.6 0 0 1-5.4-1.48l-.39-.23-4.01 1.02 1.07-3.91-.25-.4a10.6 10.6 0 1 1 9 5Z"
            />

          </svg>

        </span>


        <span className="whatsapp-pulse"></span>

      </button>

    </>
  );
};

export default WhatsAppButton;