import React, { FormEvent, useState } from "react";
import emailjs from "@emailjs/browser";
import "./jobapp.css";

/* =========================================================
   EMAILJS CONFIG
========================================================= */

const SERVICE_ID = "service_zao95tn";
const TEMPLATE_ID = "template_bjulmsc";
const PUBLIC_KEY = "FjzOcCcbNBQjmmS8O";

/* =========================================================
   CLOUDINARY CONFIG
========================================================= */

const CLOUDINARY_CLOUD_NAME = "yg5msneo";
const CLOUDINARY_UPLOAD_PRESET = "techwrap_resume";

const CLOUDINARY_UPLOAD_URL = `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/auto/upload`;

/* =========================================================
   CONSTANTS
========================================================= */

const MAX_RESUME_SIZE = 5 * 1024 * 1024;

const ALLOWED_RESUME_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

/* =========================================================
   INITIAL FORM
========================================================= */

const initialFormData = {
  first_name: "",
  last_name: "",
  email: "",
  contact: "",
  graduation_year: "",
  gender: "",
  experience: "",
  current_employer: "",
  current_ctc: "",
  expected_ctc: "",
  notice_period: "",
  skill_set: "",
  source: "",
  current_location: "",
  preferred_location: "",
};

/* =========================================================
   COMPONENT
========================================================= */

const JobApplication: React.FC = () => {
  const [formData, setFormData] = useState(initialFormData);

  const [resume, setResume] = useState<File | null>(null);

  const [resumeUrl, setResumeUrl] = useState("");

  const [isUploadingResume, setIsUploadingResume] =
    useState(false);

  const [isSubmitting, setIsSubmitting] =
    useState(false);

  const [showSuccess, setShowSuccess] =
    useState(false);

  /* =========================================================
     HANDLE INPUT
  ========================================================= */

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  /* =========================================================
     CLOUDINARY UPLOAD
  ========================================================= */

  const uploadResumeToCloudinary = async (
    file: File
  ): Promise<string> => {
    const uploadData = new FormData();

    uploadData.append("file", file);

    uploadData.append(
      "upload_preset",
      CLOUDINARY_UPLOAD_PRESET
    );

    const response = await fetch(
      CLOUDINARY_UPLOAD_URL,
      {
        method: "POST",
        body: uploadData,
      }
    );

    if (!response.ok) {
      throw new Error(
        "Cloudinary resume upload failed."
      );
    }

    const data = await response.json();

    if (!data.secure_url) {
      throw new Error(
        "Cloudinary did not return a resume URL."
      );
    }

    return data.secure_url;
  };

  /* =========================================================
     RESUME CHANGE
  ========================================================= */

  const handleResumeChange = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];

    if (!file) {
      setResume(null);
      setResumeUrl("");
      return;
    }

    /* FILE TYPE */

    if (!ALLOWED_RESUME_TYPES.includes(file.type)) {
      alert(
        "Invalid resume format.\n\nPlease upload only PDF, DOC or DOCX files."
      );

      e.target.value = "";

      setResume(null);
      setResumeUrl("");

      return;
    }

    /* FILE SIZE */

    if (file.size > MAX_RESUME_SIZE) {
      alert(
        "Resume size is too large.\n\nMaximum allowed size is 5 MB."
      );

      e.target.value = "";

      setResume(null);
      setResumeUrl("");

      return;
    }

    setResume(file);
    setResumeUrl("");

    try {
      setIsUploadingResume(true);

      const uploadedUrl =
        await uploadResumeToCloudinary(file);

      setResumeUrl(uploadedUrl);

    } catch (error) {
      console.error(
        "Cloudinary upload error:",
        error
      );

      alert(
        "Resume upload failed. Please try again."
      );

      setResume(null);
      setResumeUrl("");

      e.target.value = "";

    } finally {
      setIsUploadingResume(false);
    }
  };

  /* =========================================================
     RESET FORM
  ========================================================= */

  const resetForm = () => {
    setFormData(initialFormData);

    setResume(null);

    setResumeUrl("");

    const fileInput = document.getElementById(
      "resume"
    ) as HTMLInputElement | null;

    if (fileInput) {
      fileInput.value = "";
    }
  };

  /* =========================================================
     SUBMIT
  ========================================================= */

  const handleSubmit = async (
    e: FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    /* RESUME REQUIRED */

    if (!resume) {
      alert(
        "Please upload your resume before submitting."
      );
      return;
    }

    /* UPLOAD CHECK */

    if (isUploadingResume) {
      alert(
        "Your resume is still uploading. Please wait a moment."
      );
      return;
    }

    /* URL CHECK */

    if (!resumeUrl) {
      alert(
        "Resume upload was not completed. Please upload the resume again."
      );
      return;
    }

    setIsSubmitting(true);

    try {
      /* =====================================================
         EMAILJS DATA
      ===================================================== */

      const templateParams = {
        first_name: formData.first_name,
        last_name: formData.last_name,
        email: formData.email,
        contact: formData.contact,
        graduation_year:
          formData.graduation_year,
        gender: formData.gender,
        experience: formData.experience,
        current_employer:
          formData.current_employer,
        current_ctc:
          formData.current_ctc,
        expected_ctc:
          formData.expected_ctc,
        notice_period:
          formData.notice_period,
        skill_set:
          formData.skill_set,
        source:
          formData.source,
        current_location:
          formData.current_location,
        preferred_location:
          formData.preferred_location,
        resume_url: resumeUrl,
        resume_name: resume.name,
        resume_size: `${(
          resume.size /
          1024 /
          1024
        ).toFixed(2)} MB`,
        submitted_at:
          new Date().toLocaleString("en-IN"),
      };

      /* =====================================================
         SEND EMAIL
      ===================================================== */

      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        templateParams,
        {
          publicKey: PUBLIC_KEY,
        }
      );

      /* =====================================================
         SHOW SUCCESS POPUP
      ===================================================== */

      setShowSuccess(true);

      /*
       Do NOT reset the form before opening
       the popup because the popup uses formData.
      */

    } catch (error) {
      console.error(
        "EmailJS / Cloudinary Error:",
        error
      );

      alert(
        "We couldn't submit your application right now. Please try again."
      );

    } finally {
      setIsSubmitting(false);
    }
  };

  /* =========================================================
     CLOSE SUCCESS POPUP
  ========================================================= */

  const closeSuccessPopup = () => {
    setShowSuccess(false);
    resetForm();
  };

  /* =========================================================
     PROFESSIONAL AREA
  ========================================================= */

  const profession =
    formData.skill_set ||
    "Technology Professional";

  /* =========================================================
     JSX
  ========================================================= */

  return (
    <main className="job-page">

      {/* ===================================================
          BACKGROUND
      =================================================== */}

      <div className="job-bg-grid"></div>

      <div className="job-bg-glow job-glow-one"></div>

      <div className="job-bg-glow job-glow-two"></div>

      {/* ===================================================
          MAIN
      =================================================== */}

      <section className="job-application-section">

        {/* HEADER */}

        <div className="job-header">

          <div className="job-eyebrow">

            <span className="job-eyebrow-dot"></span>

            TECHWRAP CAREERS

          </div>

          <h1>
            Build What's Next.
            <span>
              Grow With TechWrap.
            </span>
          </h1>

          <p>
            Join a team building modern digital
            products with React, TypeScript, Java,
            Spring Boot, Python, AI, Cloud and DevOps.
          </p>

          

        </div>

        {/* =================================================
            FORM WRAPPER
        ================================================= */}

        <div className="job-form-wrapper">

          <div className="job-form-top">

            <div>


              <div>

                <h2>
                  Personal Details
                </h2>

                <p>
                  Tell us about yourself and your
                  professional journey.
                </p>

              </div>

            </div>

            <span className="required-note">
              * Required
            </span>

          </div>

          {/* =================================================
              FORM
          ================================================= */}

          <form
            className="job-form"
            onSubmit={handleSubmit}
          >

            {/* FIRST NAME */}

            <div className="form-group">

              <label htmlFor="first_name">
                First Name <span>*</span>
              </label>

              <input
                id="first_name"
                name="first_name"
                type="text"
                placeholder="Enter your first name"
                value={formData.first_name}
                onChange={handleChange}
                required
              />

            </div>

            {/* LAST NAME */}

            <div className="form-group">

              <label htmlFor="last_name">
                Last Name <span>*</span>
              </label>

              <input
                id="last_name"
                name="last_name"
                type="text"
                placeholder="Enter your last name"
                value={formData.last_name}
                onChange={handleChange}
                required
              />

            </div>

            {/* EMAIL */}

            <div className="form-group">

              <label htmlFor="email">
                Email <span>*</span>
              </label>

              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />

            </div>

            {/* CONTACT */}

            <div className="form-group">

              <label htmlFor="contact">
                Contact <span>*</span>
              </label>

              <div className="phone-input">

                <span>+91</span>

                <input
                  id="contact"
                  name="contact"
                  type="tel"
                  placeholder="9876543210"
                  pattern="[0-9]{10}"
                  maxLength={10}
                  value={formData.contact}
                  onChange={handleChange}
                  required
                />

              </div>

            </div>

            {/* GRADUATION */}

            <div className="form-group">

              <label htmlFor="graduation_year">
                Year of Graduation <span>*</span>
              </label>

              <select
                id="graduation_year"
                name="graduation_year"
                value={formData.graduation_year}
                onChange={handleChange}
                required
              >

                <option value="">
                  Select graduation year
                </option>

                {Array.from(
                  { length: 12 },
                  (_, i) => {
                    const year = 2026 - i;

                    return (
                      <option
                        key={year}
                        value={year}
                      >
                        {year}
                      </option>
                    );
                  }
                )}

              </select>

            </div>

            {/* GENDER */}

            <div className="form-group">

              <label htmlFor="gender">
                Gender <span>*</span>
              </label>

              <select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
              >

                <option value="">
                  Select gender
                </option>

                <option value="Male">
                  Male
                </option>

                <option value="Female">
                  Female
                </option>

                <option value="Prefer not to say">
                  Prefer not to say
                </option>

              </select>

            </div>

            {/* EXPERIENCE */}

            <div className="form-group">

              <label htmlFor="experience">
                Experience In Years <span>*</span>
              </label>

              <select
                id="experience"
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                required
              >

                <option value="">
                  Select experience
                </option>

                <option value="Fresher">
                  Fresher
                </option>

                <option value="0-1">
                  0 - 1 Years
                </option>

                <option value="1-2">
                  1 - 2 Years
                </option>

                <option value="2-3">
                  2 - 3 Years
                </option>

                <option value="3-5">
                  3 - 5 Years
                </option>

                <option value="5+">
                  5+ Years
                </option>

              </select>

            </div>

            {/* EMPLOYER */}

            <div className="form-group full-width">

              <label htmlFor="current_employer">
                Current Employer <span>*</span>
              </label>

              <input
                id="current_employer"
                name="current_employer"
                type="text"
                placeholder="Enter your current company"
                value={formData.current_employer}
                onChange={handleChange}
                required
              />

            </div>

            {/* CURRENT CTC */}

            <div className="form-group">

              <label htmlFor="current_ctc">
                Current CTC (In Lakhs Per Annum)
                <span>*</span>
              </label>

              <select
                id="current_ctc"
                name="current_ctc"
                value={formData.current_ctc}
                onChange={handleChange}
                required
              >

                <option value="">
                  Select current CTC
                </option>

                <option value="Nill">
                  Nill
                </option>

                <option value="Below 3 LPA">
                  Below 3 LPA
                </option>

                <option value="3 - 5 LPA">
                  3 - 5 LPA
                </option>

                <option value="5 - 8 LPA">
                  5 - 8 LPA
                </option>

                <option value="8 - 12 LPA">
                  8 - 12 LPA
                </option>

                <option value="12 - 20 LPA">
                  12 - 20 LPA
                </option>

                <option value="20+ LPA">
                  20+ LPA
                </option>

              </select>

            </div>

            {/* EXPECTED CTC */}

            <div className="form-group">

              <label htmlFor="expected_ctc">
                Expected CTC (In Lakhs Per Annum)
                <span>*</span>
              </label>

              <select
                id="expected_ctc"
                name="expected_ctc"
                value={formData.expected_ctc}
                onChange={handleChange}
                required
              >

                <option value="">
                  Select expected CTC
                </option>

                <option value="Nill">
                  Nill
                </option>

                <option value="3 - 5 LPA">
                  3 - 5 LPA
                </option>

                <option value="5 - 8 LPA">
                  5 - 8 LPA
                </option>

                <option value="8 - 12 LPA">
                  8 - 12 LPA
                </option>

                <option value="12 - 20 LPA">
                  12 - 20 LPA
                </option>

                <option value="20+ LPA">
                  20+ LPA
                </option>

              </select>

            </div>

            {/* NOTICE */}

            <div className="form-group">

              <label htmlFor="notice_period">
                Notice Period <span>*</span>
              </label>

              <select
                id="notice_period"
                name="notice_period"
                value={formData.notice_period}
                onChange={handleChange}
                required
              >

                <option value="">
                  Select notice period
                </option>

                <option value="Immediate">
                  Immediate
                </option>

                <option value="15 Days">
                  15 Days
                </option>

                <option value="30 Days">
                  30 Days
                </option>

                <option value="60 Days">
                  60 Days
                </option>

                <option value="90 Days">
                  90 Days
                </option>

              </select>

            </div>

            {/* SKILLS */}

            <div className="form-group">

              <label htmlFor="skill_set">
                Skill Set <span>*</span>
              </label>

              <select
                id="skill_set"
                name="skill_set"
                value={formData.skill_set}
                onChange={handleChange}
                required
              >

                <option value="">
                  Select primary skill
                </option>

                <option value="React / TypeScript">
                  React / TypeScript
                </option>

                <option value="Java / Spring Boot">
                  Java / Spring Boot
                </option>

                <option value="Node.js / Express">
                  Node.js / Express
                </option>

                <option value="Python / Django">
                  Python / Django
                </option>

                <option value="Python / FastAPI">
                  Python / FastAPI
                </option>

                <option value="Full Stack Development">
                  Full Stack Development
                </option>

                <option value="AI / Machine Learning">
                  AI / Machine Learning
                </option>

                <option value="Cloud / DevOps">
                  Cloud / DevOps
                </option>

                <option value="Database / API">
                  Database / API
                </option>

                <option value="UI / UX">
                  UI / UX
                </option>

              </select>

            </div>

            {/* SOURCE */}

            <div className="form-group">

              <label htmlFor="source">
                How did you come across this vacancy?
                <span>*</span>
              </label>

              <select
                id="source"
                name="source"
                value={formData.source}
                onChange={handleChange}
                required
              >

                <option value="">
                  Select an option
                </option>

                <option value="LinkedIn">
                  LinkedIn
                </option>

                <option value="Indeed">
                  Indeed
                </option>

                <option value="Naukri">
                  Naukri
                </option>

                <option value="TechWrap Website">
                  TechWrap Website
                </option>

                <option value="Employee Referral">
                  Employee Referral
                </option>

                <option value="Social Media">
                  Social Media
                </option>

                <option value="Other">
                  Other
                </option>

              </select>

            </div>

            {/* CURRENT LOCATION */}

            <div className="form-group">

              <label htmlFor="current_location">
                Current Location <span>*</span>
              </label>

              <input
                id="current_location"
                name="current_location"
                type="text"
                placeholder="e.g. Chennai"
                value={formData.current_location}
                onChange={handleChange}
                required
              />

            </div>

            {/* PREFERRED LOCATION */}

            <div className="form-group">

              <label htmlFor="preferred_location">
                Preferred Location <span>*</span>
              </label>

              <input
                id="preferred_location"
                name="preferred_location"
                type="text"
                placeholder="e.g. Chennai / Remote"
                value={formData.preferred_location}
                onChange={handleChange}
                required
              />

            </div>

            {/* =================================================
                RESUME
            ================================================= */}

            <div className="resume-section full-width">

              <div className="resume-heading">

                <div className="resume-icon">
                  ↑
                </div>

                <div>

                  <h3>
                    Upload Your Resume
                  </h3>

                  <p>
                    PDF, DOC or DOCX · Maximum 5 MB
                  </p>

                </div>

              </div>

              <label
                htmlFor="resume"
                className={`resume-upload ${
                  isUploadingResume
                    ? "uploading"
                    : ""
                }`}
              >

                <input
                  id="resume"
                  name="resume"
                  type="file"
                  accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                  onChange={handleResumeChange}
                  disabled={
                    isUploadingResume ||
                    isSubmitting
                  }
                  required={!resume}
                />

                <div className="upload-content">

                  <div className="upload-cloud">

                    {isUploadingResume
                      ? "..."
                      : "↑"}

                  </div>

                  <strong>

                    {isUploadingResume
                      ? "Uploading resume..."
                      : resume
                      ? resume.name
                      : "Choose your resume"}

                  </strong>

                  <span>

                    {isUploadingResume
                      ? "Uploading securely to Cloudinary..."
                      : resume
                      ? `${(
                          resume.size /
                          1024 /
                          1024
                        ).toFixed(2)} MB • Resume uploaded`
                      : "Click to browse or drag your file here"}

                  </span>

                </div>

              </label>

              {resumeUrl &&
                !isUploadingResume && (

                  <div className="resume-upload-success">

                    <span>✓</span>

                    <div>

                      <strong>
                        Resume uploaded successfully
                      </strong>

                      <small>
                        Your resume is securely stored
                        and will be shared with the
                        TechWrap recruitment team.
                      </small>

                    </div>

                    <a
                      href={resumeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View
                    </a>

                  </div>

                )}

            </div>

            {/* =================================================
                ACTIONS
            ================================================= */}

            <div className="form-actions full-width">

              <button
                type="button"
                className="reset-btn"
                onClick={resetForm}
                disabled={isSubmitting}
              >
                Reset
              </button>

              <button
                type="submit"
                className="submit-btn"
                disabled={
                  isSubmitting ||
                  isUploadingResume
                }
              >

                {isSubmitting ? (
                  <>
                    <span className="submit-spinner"></span>
                    Sending Application...
                  </>
                ) : isUploadingResume ? (
                  <>
                    <span className="submit-spinner"></span>
                    Uploading Resume...
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

            {/* SECURITY */}

            <div className="secure-note full-width">

              <span>✓</span>

              Your application details and resume
              are securely sent to the TechWrap
              recruitment team.

            </div>

          </form>

        </div>

      </section>

      {/* =====================================================
          SUBMITTING POPUP
      ===================================================== */}

      {isSubmitting && (

        <div className="submitting-overlay">

          <div className="submitting-modal">

            <div className="submitting-loader">

              <span></span>
              <span></span>
              <span></span>

            </div>

            <div className="submitting-content">

              <div className="submitting-badge">
                TECHWRAP CAREERS
              </div>

              <h2>
                Submitting Your Application
              </h2>

              <p>
                We're securely sending your details
                and resume to the recruitment team.
              </p>

              <div className="submitting-status">

                <div>
                  <span className="status-dot active">
                    ✓
                  </span>

                  Application details
                </div>

                <div>
                  <span className="status-dot active">
                    ✓
                  </span>

                  Resume uploaded
                </div>

                <div>
                  <span className="status-dot loading">
                  </span>

                  Sending to TechWrap
                </div>

              </div>

            </div>

          </div>

        </div>

      )}

      {/* =====================================================
          SUCCESS POPUP
      ===================================================== */}

      {showSuccess && (

        <div
          className="success-overlay"
          onClick={closeSuccessPopup}
        >

          <div
            className="success-modal"
            onClick={(e) =>
              e.stopPropagation()
            }
          >

            {/* CLOSE */}

            <button
              className="success-modal-close"
              onClick={closeSuccessPopup}
              aria-label="Close"
            >
              ×
            </button>

            {/* SUCCESS VISUAL */}

            <div className="success-visual">

              <div className="success-orbit orbit-one"></div>

              <div className="success-orbit orbit-two"></div>

              <div className="success-check-container">

                <svg
                  className="success-check"
                  viewBox="0 0 52 52"
                >

                  <circle
                    className="success-check-circle"
                    cx="26"
                    cy="26"
                    r="24"
                  />

                  <path
                    className="success-check-path"
                    d="M15 27 L22 34 L38 18"
                  />

                </svg>

              </div>

              <span className="success-particle particle-one"></span>

              <span className="success-particle particle-two"></span>

              <span className="success-particle particle-three"></span>

              <span className="success-particle particle-four"></span>

              <span className="success-particle particle-five"></span>

            </div>

            {/* CONTENT */}

            <div className="success-content">

              <div className="success-label">

                <span></span>

                APPLICATION RECEIVED

              </div>

              <h2>
                You're officially
                <strong>
                  in the pipeline.
                </strong>
              </h2>

              <p className="success-description">

                Thanks{" "}

                <strong>
                  {formData.first_name}{" "}
                  {formData.last_name}
                </strong>

                . Your application has been
                successfully submitted to the
                TechWrap recruitment team.

              </p>

              {/* =================================================
                  APPLICANT SUMMARY
              ================================================= */}

              <div className="applicant-summary">

                <div className="summary-header">

                  <div className="summary-avatar">
                    {formData.first_name
                      ?.charAt(0)
                      .toUpperCase()}
                  </div>

                  <div>

                    <span>
                      APPLICANT
                    </span>

                    <strong>
                      {formData.first_name}{" "}
                      {formData.last_name}
                    </strong>

                  </div>

                </div>

                <div className="summary-grid">

                  <div className="summary-item">

                    <span>
                      EMAIL
                    </span>

                    <strong>
                      {formData.email}
                    </strong>

                  </div>

                  <div className="summary-item">

                    <span>
                      CONTACT
                    </span>

                    <strong>
                      +91 {formData.contact}
                    </strong>

                  </div>

                  <div className="summary-item">

                    <span>
                      EXPERIENCE
                    </span>

                    <strong>
                      {formData.experience}
                    </strong>

                  </div>

                  <div className="summary-item">

                    <span>
                      LOCATION
                    </span>

                    <strong>
                      {formData.current_location}
                    </strong>

                  </div>

                </div>

              </div>

              {/* =================================================
                  PROFESSIONAL AREA
              ================================================= */}

              <div className="profession-box">

                <div className="profession-icon">
                  &lt;/&gt;
                </div>

                <div className="profession-details">

                  <span>
                    PROFESSIONAL AREA
                  </span>

                  <strong>
                    {profession}
                  </strong>

                </div>

                <div className="profession-check">
                  ✓
                </div>

              </div>

              {/* =================================================
                  SUBMISSION STATUS
              ================================================= */}

              <div className="success-status">

                <div className="status-item">

                  <div className="status-icon">
                    ✓
                  </div>

                  <div>

                    <strong>
                      Resume uploaded
                    </strong>

                    <span>
                      Successfully stored
                    </span>

                  </div>

                </div>

                <div className="status-line"></div>

                <div className="status-item">

                  <div className="status-icon">
                    ✓
                  </div>

                  <div>

                    <strong>
                      Application sent
                    </strong>

                    <span>
                      Recruitment team notified
                    </span>

                  </div>

                </div>

              </div>

              {/* =================================================
                  EXTRA INFORMATION
              ================================================= */}

              <div className="success-details">

                <div>

                  <span>
                    NOTICE PERIOD
                  </span>

                  <strong>
                    {formData.notice_period}
                  </strong>

                </div>

                <div>

                  <span>
                    PREFERRED LOCATION
                  </span>

                  <strong>
                    {formData.preferred_location}
                  </strong>

                </div>

                <div>

                  <span>
                    GRADUATION
                  </span>

                  <strong>
                    {formData.graduation_year}
                  </strong>

                </div>

                <div>

                  <span>
                    RESUME
                  </span>

                  <strong>
                    {resume?.name}
                  </strong>

                </div>

              </div>

              {/* MESSAGE */}

              <div className="success-message">

                <span className="message-icon">
                  ✦
                </span>

                <span>
                  Our recruitment team will review
                  your profile and contact you if your
                  experience matches an opportunity.
                </span>

              </div>

              {/* BUTTON */}

              <button
                className="success-close"
                onClick={closeSuccessPopup}
              >

                <span>
                  Continue
                </span>

                <span className="success-button-arrow">
                  →
                </span>

              </button>

            </div>

          </div>

        </div>

      )}

    </main>
  );
};

export default JobApplication;