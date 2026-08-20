import React, { useState } from "react";
import "./Extend.css";

const countries = [
  "India",
  "United States",
  "United Kingdom",
  "Canada",
  "Australia",
  "Germany",
  "United Arab Emirates",
  "Singapore",
];

const partnerCards = [
  {
    title: "Microsoft",
    subtitle: "Silver Partner",
    className: "microsoft",
  },
  {
    title: "aws",
    subtitle: "partner network",
    className: "aws",
  },
  {
    title: "Google Cloud",
    subtitle: "Partner",
    className: "google",
  },
  {
    title: "clutch",
    subtitle: "4.3 ★★★★★",
    className: "clutch",
  },
  {
    title: "CMMI",
    subtitle: "",
    className: "cmmi",
  },
  {
    title: "Deloitte.",
    subtitle: "Technology Fast 50",
    className: "deloitte",
  },
  {
    title: "ANDROID",
    subtitle: "enterprise recommended",
    className: "android",
  },
  {
    title: "INDIAN",
    subtitle: "IT 2012",
    className: "india",
  },
];

function Extend() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    country: "",
    requirements: "",
    file: null,
  });

  const [captcha, setCaptcha] = useState({
    first: 9,
    second: 7,
  });

  const [captchaAnswer, setCaptchaAnswer] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const refreshCaptcha = () => {
    const first = Math.floor(Math.random() * 9) + 1;
    const second = Math.floor(Math.random() * 9) + 1;

    setCaptcha({
      first,
      second,
    });

    setCaptchaAnswer("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const correctAnswer = captcha.first + captcha.second;

    if (Number(captchaAnswer) !== correctAnswer) {
      alert("Please enter the correct captcha answer.");
      return;
    }

    console.log("Form Data:", formData);

    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="consultation-page">

      {/* =====================================================
          HERO SECTION
      ===================================================== */}
      <section className="hero-section">

        <div className="hero-pattern hero-pattern-left"></div>
        <div className="hero-circle hero-circle-one"></div>
        <div className="hero-circle hero-circle-two"></div>

        <div className="container hero-container">
          <div className="hero-content">

            <h1 className="hero-title">
              Extend your team with engineers who ship
            </h1>

            <p className="hero-description">
              A Delivery Pod is operational in under two weeks. The first
              sprint metric report is at the first weekly demo.
            </p>

            <div className="hero-buttons">

              <button
                type="button"
                className="hero-btn hero-btn-primary"
                onClick={() => {
                  document
                    .getElementById("consultation-form")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Talk to Us
                <span className="arrow-icon">→</span>
              </button>

              <button
                type="button"
                className="hero-btn hero-btn-outline"
                onClick={() => {
                  document
                    .getElementById("consultation-form")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Book a Call
                <span className="arrow-icon">→</span>
              </button>

            </div>

            <p className="hero-note">
              30 minutes with a solution architect. No obligation.
            </p>

          </div>
        </div>
      </section>


      {/* =====================================================
          CONSULTATION SECTION
      ===================================================== */}
      <section
        className="consultation-section"
        id="consultation-form"
      >

        <div className="container-fluid consultation-container">

          <div className="row g-0">

            {/* =================================================
                LEFT INFORMATION PANEL
            ================================================= */}
            <div className="col-lg-4 consultation-left">

              <div className="left-inner">

                {/* Contact Links */}
                <div className="contact-links">

                  <a
                    href="tel:+919999999999"
                    className="contact-link"
                  >
                    <span className="contact-icon">⌕</span>
                    <span>Book A Call</span>
                  </a>

                  <span className="contact-separator">|</span>

                  <a
                    href="https://wa.me/919999999999"
                    target="_blank"
                    rel="noreferrer"
                    className="contact-link whatsapp-link"
                  >
                    <span className="whatsapp-icon">◉</span>
                    <span>WhatsApp</span>
                  </a>

                  <span className="contact-separator">|</span>

                  <a
                    href="mailto:hello@example.com"
                    className="contact-link"
                  >
                    <span className="contact-icon">✉</span>
                    <span>Email us</span>
                  </a>

                </div>


                {/* Company Highlight */}
                <div className="company-highlight">
                  Startups &amp; Fortune 500+ companies
                </div>


                {/* Statistics */}
                <div className="stats-wrapper">

                  <div className="stat-item">

                    <div className="stat-icon">
                      ♜
                    </div>

                    <div>
                      <div className="stat-number">
                        21+ years of experience
                      </div>

                      <div className="stat-description">
                        We can handle projects
                      </div>
                    </div>

                  </div>


                  <div className="stat-item">

                    <div className="stat-icon">
                      ♙
                    </div>

                    <div>
                      <div className="stat-number">
                        2500+ satisfied customers
                      </div>

                      <div className="stat-description">
                        Startups to Fortune 500.
                      </div>
                    </div>

                  </div>


                  <div className="stat-item">

                    <div className="stat-icon">
                      ♧
                    </div>

                    <div>
                      <div className="stat-number">
                        675+ in-house team
                      </div>

                      <div className="stat-description">
                        Ensure your digital success.
                      </div>
                    </div>

                  </div>

                </div>


                {/* Partner / Certification Cards */}
                <div className="partner-grid">

                  {partnerCards.map((partner, index) => (
                    <div
                      className={`partner-card ${partner.className}`}
                      key={index}
                    >
                      <div className="partner-title">
                        {partner.title}
                      </div>

                      {partner.subtitle && (
                        <div className="partner-subtitle">
                          {partner.subtitle}
                        </div>
                      )}
                    </div>
                  ))}

                </div>

              </div>
            </div>


            {/* =================================================
                RIGHT FORM PANEL
            ================================================= */}
            <div className="col-lg-8 consultation-right">

              <div className="form-wrapper">

                <div className="form-header">

                  <h2>
                    Book Free Consultation
                  </h2>

                  <p>
                    Guaranteed response within 8 business hours.
                  </p>

                </div>


                <form onSubmit={handleSubmit}>

                  {/* First Row */}
                  <div className="row g-3">

                    {/* Full Name */}
                    <div className="col-md-6">
                      <div className="floating-field">

                        <label htmlFor="fullName">
                          Full Name
                        </label>

                        <input
                          type="text"
                          id="fullName"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          placeholder="Enter Your Name"
                          required
                        />

                      </div>
                    </div>


                    {/* Email */}
                    <div className="col-md-6">
                      <div className="floating-field">

                        <label htmlFor="email">
                          Email
                        </label>

                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Enter Your Email"
                          required
                        />

                      </div>
                    </div>


                    {/* Phone */}
                    <div className="col-md-6">
                      <div className="floating-field phone-field">

                        <label htmlFor="phone">
                          Phone No.
                        </label>

                        <div className="phone-input-wrapper">

                          <div className="country-code">
                            <span className="india-flag">
                              🇮🇳
                            </span>

                            <span>
                              +91
                            </span>

                            <span className="dropdown-arrow">
                              ▼
                            </span>
                          </div>

                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="(Optional)"
                          />

                        </div>

                      </div>
                    </div>


                    {/* Country */}
                    <div className="col-md-6">
                      <div className="floating-field">

                        <label htmlFor="country">
                          Select Country
                        </label>

                        <select
                          id="country"
                          name="country"
                          value={formData.country}
                          onChange={handleChange}
                          required
                        >
                          <option value="">
                            Select your Country
                          </option>

                          {countries.map((country) => (
                            <option
                              value={country}
                              key={country}
                            >
                              {country}
                            </option>
                          ))}
                        </select>

                        <span className="select-arrow">
                         ⌄
                        </span>

                      </div>
                    </div>


                    {/* Requirements */}
                    <div className="col-12">

                      <div className="requirements-field">

                        <label htmlFor="requirements">
                          Your Requirements
                        </label>

                        <textarea
                          id="requirements"
                          name="requirements"
                          value={formData.requirements}
                          onChange={handleChange}
                          rows="5"
                        ></textarea>


                        {/* File Upload */}
                        <div className="file-upload">

                          <label
                            htmlFor="fileUpload"
                            className="file-label"
                          >
                            Browse | Drop Files Here
                          </label>

                          <input
                            type="file"
                            id="fileUpload"
                            name="file"
                            onChange={handleChange}
                            hidden
                          />

                        </div>

                      </div>

                    </div>

                  </div>


                  {/* Bottom Form Row */}
                  <div className="form-bottom">

                    {/* Captcha */}
                    <div className="captcha-wrapper">

                      <div className="captcha-box">

                        <span>
                          {captcha.first}
                        </span>

                        <span className="captcha-operator">
                          +
                        </span>

                        <span>
                          {captcha.second}
                        </span>

                        <button
                          type="button"
                          className="refresh-captcha"
                          onClick={refreshCaptcha}
                          title="Refresh captcha"
                        >
                          ↻
                        </button>

                      </div>

                      <span className="equals">
                        =
                      </span>

                      <input
                        type="number"
                        className="captcha-answer"
                        value={captchaAnswer}
                        onChange={(e) =>
                          setCaptchaAnswer(e.target.value)
                        }
                        placeholder="??"
                        required
                      />

                    </div>


                    {/* Submit */}
                    <button
                      type="submit"
                      className="submit-btn"
                    >
                      Enquire Now
                      <span>
                        →
                      </span>
                    </button>

                  </div>


                  {/* Success Message */}
                  {submitted && (
                    <div className="success-message">
                      Thank you! Your enquiry has been submitted successfully.
                    </div>
                  )}

                </form>

              </div>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Extend;