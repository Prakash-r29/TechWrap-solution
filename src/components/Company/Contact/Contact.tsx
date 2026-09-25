import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css"

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  organization: string;
  build: string;
  service: string;
  technology: string;
  message: string;
}

const initialFormData: FormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  organization: "",
  build: "",
  service: "",
  technology: "",
  message: "",
};

/* =========================================================
   TECHNOLOGY OPTIONS BASED ON SERVICE
========================================================= */

const technologyMap: Record<string, string[]> = {
  "Web Development": [
    "MERN Stack",
    "MEAN Stack",
    "Java Full Stack",
    "Python Full Stack",
    "Modern Stack",
    "Custom Stack",
  ],

  "Mobile Application": [
    "React Native",
    "Flutter",
    "Android",
    "iOS",
    "Cross Platform",
    "Custom Mobile Stack",
  ],

  "SaaS Development": [
    "MERN Stack",
    "MEAN Stack",
    "Java Full Stack",
    "Python Full Stack",
    "Next.js",
    "Custom SaaS Stack",
  ],

  "AI Products": [
    "React + Python",
    "Python + FastAPI",
    "OpenAI",
    "LLM",
    "RAG",
    "AI APIs",
    "Custom AI Stack",
  ],

  "AI Automation": [
    "Python",
    "OpenAI",
    "LLM",
    "AI Agents",
    "Automation APIs",
    "FastAPI",
    "Custom AI Automation Stack",
  ],

  "API / Integration": [
    "REST API",
    "GraphQL",
    "Node.js",
    "Spring Boot",
    "Python",
    "FastAPI",
    "Custom API Stack",
  ],

  "Cloud / DevOps": [
    "AWS",
    "Azure",
    "Docker",
    "Kubernetes",
    "CI/CD",
    "Cloud Native",
    "Custom Cloud Stack",
  ],

  "Enterprise Application": [
    "Java Full Stack",
    "Spring Boot",
    "React",
    "Angular",
    "Microservices",
    "PostgreSQL",
    "Custom Enterprise Stack",
  ],
};

const ContactForm: React.FC = () => {
  const [formData, setFormData] =
    useState<FormData>(initialFormData);

  const [isSubmitting, setIsSubmitting] =
    useState(false);

  const [showSuccess, setShowSuccess] =
    useState(false);

  const [error, setError] =
    useState("");

  const [submittedProject, setSubmittedProject] =
    useState({
      build: "",
      service: "",
      technology: "",
    });

  /* =========================================================
     NORMAL INPUT CHANGE
  ========================================================= */

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setError("");
  };

  /* =========================================================
     WHAT DO YOU WANT TO BUILD?
     
     Business / product focused.
     
     This does NOT control technology.
  ========================================================= */

  const handleBuildChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setFormData((previous) => ({
      ...previous,
      build: e.target.value,
    }));

    setError("");
  };

  /* =========================================================
     TECHNOLOGY / SERVICE
     
     This controls the technology dropdown.
  ========================================================= */

  const handleServiceChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedService = e.target.value;

    setFormData((previous) => ({
      ...previous,
      service: selectedService,
      technology: "",
    }));

    setError("");
  };

  /* =========================================================
     TECHNOLOGY
  ========================================================= */

  const handleTechnologyChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setFormData((previous) => ({
      ...previous,
      technology: e.target.value,
    }));

    setError("");
  };

  /* =========================================================
     SUBMIT
  ========================================================= */

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setError("");

    if (!formData.firstName.trim()) {
      setError("Please enter your first name.");
      return;
    }

    if (!formData.lastName.trim()) {
      setError("Please enter your last name.");
      return;
    }

    if (!formData.email.trim()) {
      setError("Please enter your email address.");
      return;
    }

    if (!formData.phone.trim()) {
      setError("Please enter your phone number.");
      return;
    }

    if (!formData.build) {
      setError("Please select what you want to build.");
      return;
    }

    if (!formData.service) {
      setError("Please select a technology or service.");
      return;
    }

    if (!formData.technology) {
      setError("Please select a technology.");
      return;
    }

    if (!formData.message.trim()) {
      setError("Please tell us about your project.");
      return;
    }

    setIsSubmitting(true);

    try {
      await emailjs.send(
        "service_zao95tn",
        "template_rjb1k3h",
        {
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          organization: formData.organization,

          build: formData.build,

          service: formData.service,

          technology: formData.technology,

          message: formData.message,
        },
        "FjzOcCcbNBQjmmS8O"
      );

      setSubmittedProject({
        build: formData.build,
        service: formData.service,
        technology: formData.technology,
      });

      setShowSuccess(true);

      setFormData(initialFormData);
    } catch (err) {
      console.error(err);

      setError(
        "Something went wrong while sending your request. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  /* =========================================================
     CLOSE SUCCESS
  ========================================================= */

  const closeSuccess = () => {
    setShowSuccess(false);
  };

  /* =========================================================
     CURRENT TECHNOLOGIES
  ========================================================= */

  const technologyOptions =
    technologyMap[formData.service] || [];

  return (
    <>
      <section className="contact-section">

        {/* Background particles */}

        <div className="contact-particle particle-one"></div>

        <div className="contact-particle particle-two"></div>

        <div className="contact-particle particle-three"></div>


        <div className="contact-container">

          {/* =================================================
              HERO
          ================================================= */}

          <div className="contact-header">

            <div className="contact-eyebrow">

              <span className="contact-eyebrow-dot"></span>

              START A PROJECT

            </div>


            <h1>
              Tell Us About
              <span>Your Project.</span>
            </h1>


            <p>
              Tell us what you want to build.
              Our engineering team will help you
              choose the right technology and
              development approach.
            </p>

          </div>


          {/* =================================================
              FORM
          ================================================= */}

          <form
            className="contact-form"
            onSubmit={handleSubmit}
          >

            {/* =================================================
                01 CONTACT DETAILS
            ================================================= */}

            <div className="form-section-number">
              CONTACT DETAILS
            </div>


            <div className="form-row">

              {/* First Name */}

              <div className="form-group">

                <label htmlFor="firstName">
                  First Name <span>*</span>
                </label>

                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  placeholder="Enter your first name"
                  value={formData.firstName}
                  onChange={handleChange}
                  autoComplete="given-name"
                  required
                />

              </div>


              {/* Last Name */}

              <div className="form-group">

                <label htmlFor="lastName">
                  Last Name <span>*</span>
                </label>

                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  placeholder="Enter your last name"
                  value={formData.lastName}
                  onChange={handleChange}
                  autoComplete="family-name"
                  required
                />

              </div>

            </div>


            <div className="form-row">

              {/* Email */}

              <div className="form-group">

                <label htmlFor="email">
                  Email ID <span>*</span>
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@company.com"
                  value={formData.email}
                  onChange={handleChange}
                  autoComplete="email"
                  required
                />

              </div>


              {/* Phone */}

              <div className="form-group">

                <label htmlFor="phone">
                  Phone Number <span>*</span>
                </label>

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={handleChange}
                  autoComplete="tel"
                  required
                />

              </div>

            </div>


            {/* Organization */}

            <div className="form-group">

              <label htmlFor="organization">
                Organization <span>*</span>
            
              </label>

              <input
                id="organization"
                name="organization"
                type="text"
                placeholder="Company or organization name"
                value={formData.organization}
                onChange={handleChange}
                autoComplete="organization"
                required
              />

            </div>


            {/* =================================================
                02 WHAT DO YOU WANT TO BUILD?
            ================================================= */}

            <div className="form-section-number">
              WHAT YOU WANT TO BUILD
            </div>


            <div className="form-group">

              <label htmlFor="build">
                What do you want to build?
                <span>*</span>
              </label>


              <div className="select-wrapper">

                <select
                  id="build"
                  name="build"
                  value={formData.build}
                  onChange={handleBuildChange}
                  required
                >

                  <option value="">
                    Select what you want to build
                  </option>

                  <option value="New Digital Product">
                    New Digital Product
                  </option>

                  <option value="SaaS Platform">
                    SaaS Platform
                  </option>

                  <option value="Customer Portal">
                    Customer Portal
                  </option>

                  <option value="E-Commerce Platform">
                    E-Commerce Platform
                  </option>

                  <option value="Business Dashboard">
                    Business Dashboard
                  </option>

                  <option value="AI-Powered Product">
                    AI-Powered Product
                  </option>

                  <option value="Automation Workflow">
                    Automation Workflow
                  </option>

                  <option value="Mobile App">
                    Mobile App
                  </option>

                  <option value="API / Integration Platform">
                    API / Integration Platform
                  </option>

                  <option value="Enterprise System">
                    Enterprise System
                  </option>

                  <option value="MVP / Proof of Concept">
                    MVP / Proof of Concept
                  </option>

                  <option value="Modernize Existing Application">
                    Modernize Existing Application
                  </option>

                  <option value="Other / Custom Project">
                    Other / Custom Project
                  </option>

                </select>


                <span className="select-arrow">
                  ↓
                </span>

              </div>


              <div className="field-description">

                <span className="description-dot"></span>

                Tell us about the product or business
                outcome you want to create.

              </div>

            </div>


            {/* =================================================
                03 TECHNOLOGY & SERVICE
            ================================================= */}

            <div className="form-section-number">
              TECHNOLOGY & SERVICE
            </div>


            {/* SERVICE */}

            <div className="form-group">

              <label htmlFor="service">
                Select a Technology / Service
                <span>*</span>
              </label>


              <div className="select-wrapper">

                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleServiceChange}
                  required
                >

                  <option value="">
                    Choose a technology or service
                  </option>

                  <option value="Web Development">
                    Web Development
                  </option>

                  <option value="Mobile Application">
                    Mobile Application
                  </option>

                  <option value="SaaS Development">
                    SaaS Development
                  </option>

                  <option value="AI Products">
                    AI Products
                  </option>

                  <option value="AI Automation">
                    AI Automation
                  </option>

                  <option value="API / Integration">
                    API / Integration
                  </option>

                  <option value="Cloud / DevOps">
                    Cloud / DevOps
                  </option>

                  <option value="Enterprise Application">
                    Enterprise Application
                  </option>

                </select>


                <span className="select-arrow">
                  ↓
                </span>

              </div>

            </div>


            {/* =================================================
                DYNAMIC TECHNOLOGY
            ================================================= */}

            <div
              className={`technology-field ${
                formData.service
                  ? "technology-visible"
                  : ""
              }`}
            >

              <div className="form-group">

                <label htmlFor="technology">
                  Select a Technology
                  <span>*</span>
                </label>


                <div className="select-wrapper">

                  <select
                    id="technology"
                    name="technology"
                    value={formData.technology}
                    onChange={handleTechnologyChange}
                    disabled={!formData.service}
                    required
                  >

                    <option value="">
                      Select a technology
                    </option>


                    {technologyOptions.map(
                      (technology) => (

                        <option
                          key={technology}
                          value={technology}
                        >
                          {technology}
                        </option>

                      )
                    )}

                  </select>


                  <span className="select-arrow">
                    ↓
                  </span>

                </div>


                <div className="technology-hint">

                  <span className="hint-dot"></span>

                  {formData.service
                    ? `Technology options for ${formData.service}.`
                    : "Select a service to see related technologies."}

                </div>

              </div>

            </div>


            {/* =================================================
                04 PROJECT DETAILS
            ================================================= */}

            <div className="form-section-number">
               PROJECT DETAILS
            </div>


            <div className="form-group">

              <label htmlFor="message">
                Tell us about your project
                <span>*</span>
              </label>


              <textarea
                id="message"
                name="message"
                placeholder="Tell us about your idea, requirements, features, timeline, goals or anything else that can help us understand your project..."
                value={formData.message}
                onChange={handleChange}
                required
              />


              <div className="message-footer">

                <span>
                  The more details you provide,
                  the better we can understand
                  your project.
                </span>

                <span>
                  Project Details
                </span>

              </div>

            </div>


            {/* ERROR */}

            {error && (

              <div className="form-error">

                <span>!</span>

                {error}

              </div>

            )}


            {/* SUBMIT */}

            <div className="submit-area">

              <div className="secure-message">

                <span className="secure-icon">
                  ✓
                </span>

                <span>
                  Your project information
                  is kept confidential.
                </span>

              </div>


              <button
                type="submit"
                className={`submit-button ${
                  isSubmitting
                    ? "sending"
                    : ""
                }`}
                disabled={isSubmitting}
              >

                {isSubmitting ? (
                  <>
                    <span className="button-loader"></span>
                    Sending...
                  </>
                ) : (
                  <>
                    Submit

                    <span className="submit-arrow">
                      
                    </span>
                  </>
                )}

              </button>

            </div>

          </form>

        </div>

      </section>


      {/* =================================================
          SUCCESS MODAL
      ================================================= */}

      {showSuccess && (

        <div className="success-overlay">

          <div className="success-modal">

            <div className="success-animation">

              <span className="success-ring"></span>

              <div className="success-check">
                ✓
              </div>

            </div>


            <div className="success-content">

              <span className="success-label">
                PROJECT REQUEST RECEIVED
              </span>


              <h2>
                Successfully Submitted!
              </h2>


              <p>
                Thanks for reaching out to TechWrap.
                Our team will review your project
                details and get back to you soon.
              </p>


              <div className="success-summary">

                <div>

                  <span>
                    Project
                  </span>

                  <strong>
                    {submittedProject.build}
                  </strong>

                </div>


                <div>

                  <span>
                    Service
                  </span>

                  <strong>
                    {submittedProject.service}
                  </strong>

                </div>


                <div>

                  <span>
                    Technology
                  </span>

                  <strong>
                    {submittedProject.technology}
                  </strong>

                </div>

              </div>


              <button
                className="success-button"
                type="button"
                onClick={closeSuccess}
              >

                Continue

                <span>
                  →
                </span>

              </button>

            </div>

          </div>

        </div>

      )}

    </>
  );
};

export default ContactForm;