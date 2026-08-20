import React from "react";
import "./App.css";

import heroVisual from "./assets/vinove-images/bg-image.png";
import logo from "./assets/vinove-images/logo.png";
import trustedLogos from "./assets/vinove-images/Group.png";
import ion from "./assets/vinove-images/searh.png";

const companies = [
  "Yale University",
  "Dubai Police",
  "Panasonic",
  "Infosys",
  "KIA",
  "HITACHI",
  "Orange Business",
  "World Bank",
];

const tickerItems = [
  "10-DAY REPLACEMENT GUARANTEE",
  "PROFILES IN 48 HOURS",
  "94% ON-TIME DELIVERY",
  "2,500+ PROJECTS DELIVERED",
  "675+ ENGINEERS ACTIVE",
  "4.8* ON CLUTCH",
  "20+ YEARS IN SOFTWARE DEVELOPMENT",
];

function ArrowIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 12H18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M13 7L18 12L13 17"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="11"
        cy="11"
        r="6.5"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M16 16L21 21"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function StarRating() {
  return (
    <div className="vc-rating">
      <span className="vc-stars">★★★★★</span>
      <span>4.8/5 on Clutch · 200+ reviews</span>
    </div>
  );
}

function App() {
  return (
    <div className="vc-page">

      {/* =========================================================
          NAVBAR
      ========================================================= */}
      <nav className="navbar navbar-expand-lg vc-navbar" style={{ background: 'radial-gradient(circle at 73% 45%, rgba(34, 75, 170, 0.42) 0, rgba(34, 75, 170, 0.15) 24%, transparent 48%), #06184e' }}>
        <div className="container vc-navbar-container">

          <a className="navbar-brand vc-logo" href="#">
            <img src={logo} alt="logo" />
          </a>

          <button
            className="navbar-toggler vc-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#vcNavbar"
            aria-controls="vcNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse"
            id="vcNavbar"
          >
            <ul className="navbar-nav mx-auto vc-nav-links">

              <li className="nav-item">
                <a className="nav-link" href="#services">
                  Service
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#solutions">
                  Solutions
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#teams">
                  Hire & Teams
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#company">
                  Company
                </a>
              </li>

            </ul>

            <div className="vc-navbar-right">


              <div className="vc-search">
                <SearchIcon />
                <span>Search or describe what...</span>
                <img src={ion} alt="icon" style={{height:'2em'}}/>


              </div>


              <button className="vc-estimate-btn">
                Get an Estimate
                <span className="vc-btn-arrow">
                  <ArrowIcon />
                </span>
              </button>

            </div>
          </div>
        </div>
      </nav>


      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="vc-hero">

        <div className="vc-hero-circle vc-circle-one"></div>
        <div className="vc-hero-circle vc-circle-two"></div>

        <div className="container vc-hero-container">

          <div className="row align-items-center">

            {/* LEFT */}
            <div className="col-lg-6">

              <div className="vc-hero-content">

                <StarRating />

                <h1>
                  Vetted Engineers
                  <br />
                  in <span>Your Team</span>
                </h1>

                <p className="vc-hero-description">
                  Need more engineering capacity but don't want another
                  three-month hiring cycle? Get a vetted shortlist in 48
                  hours. Your roadmap, architecture, sprint planning, and
                  code reviews stay with your team while we handle hiring,
                  employment, replacements, and staffing.
                </p>

                <div className="vc-hero-buttons">

                  <a href="#contact" className="vc-primary-btn">
                    Talk to Us
                    <ArrowIcon />
                  </a>

                  <a href="#call" className="vc-secondary-btn">
                    Book a Call
                    <ArrowIcon />
                  </a>

                </div>

                <div className="vc-tech-badges">

                  <div className="vc-tech-badge">
                    <span className="vc-tech-ms">Microsoft</span>
                  </div>

                  <div className="vc-tech-badge">
                    <span className="vc-tech-aws">AWS</span>
                  </div>

                  <div className="vc-tech-badge">
                    <span className="vc-tech-google">Partner</span>
                    <strong>Google Cloud</strong>
                  </div>

                  <div className="vc-tech-badge vc-clutch-badge">
                    <span>Partner</span>
                    <strong>Clutch</strong>
                    <small>★★★★★</small>
                  </div>

                </div>

              </div>
            </div>


            {/* RIGHT */}
            <div className="col-lg-6">

              <div className="vc-hero-visual">

                <div className="vc-engineer-card">
                  <div className="vc-small-avatars">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>

                  <strong>675+</strong>

                  <p>
                    Employees
                    <br />
                    Contributing To
                    <br />
                    Our Growth
                  </p>
                </div>

                <img
                  src={heroVisual}
                  alt="Vetted engineer"
                  className="vc-engineer-image"
                />

                <div className="vc-quality-card">
                  <div className="vc-card-icon">✓</div>
                  <div>
                    <small>Code Quality</small>
                    <div className="vc-mini-stars">★★★★★</div>
                  </div>
                </div>

                <div className="vc-quality-card vc-quality-two">
                  <div className="vc-card-icon">⚙</div>
                  <div>
                    <small>Debuggability</small>
                    <div className="vc-mini-stars">★★★★★</div>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =========================================================
          MOVING TICKER
      ========================================================= */}
      <section className="vc-ticker">

        <div className="vc-ticker-track">

          {[...tickerItems, ...tickerItems].map((item, index) => (
            <React.Fragment key={index}>

              <span className="vc-ticker-item">
                {item}
              </span>

              <span className="vc-ticker-separator">
                •
              </span>

            </React.Fragment>
          ))}

        </div>

      </section>


      {/* =========================================================
          TRUSTED COMPANIES
      ========================================================= */}
      <section className="vc-trusted">

        <div className="container">

          <div className="vc-trusted-heading">
            Trusted by startups and Fortune{" "}
            <span>500+</span> companies
          </div>

          <div className="vc-company-logos">

            <img
              src={trustedLogos}
              alt="Trusted companies"
              className="vc-trusted-image"
            />

          </div>

        </div>

      </section>


      {/* =========================================================
          ENGAGEMENT SECTION
      ========================================================= */}
      <section className="vc-engagement">

        <div className="container">

          <div className="row align-items-center g-5">

            {/* LEFT */}
            <div className="col-lg-6">

              <div className="vc-engagement-content">

                <div className="vc-section-label">
                  THE ENGAGEMENT
                </div>

                <h2>
                  You need engineers who fit
                  <br className="d-none d-md-block" />
                  into your team, not another
                  <br className="d-none d-md-block" />
                  team to manage.
                </h2>

                <p>
                  Your engineers shouldn't have to adapt to someone else's
                  methods. Augmented engineers join your standups, work from
                  your feedback, commit to your repositories, and follow your
                  release process. They work like engineers you've hired, not
                  a separate vendor operating alongside you.
                </p>

              </div>

            </div>


            {/* RIGHT CARD */}
            <div className="col-lg-6">

              <div className="vc-engagement-card">

                <div className="vc-card-label">
                  WHAT IS STAFF AUGMENTATION?
                </div>

                <p>
                  Staff augmentation is an engagement model where
                  pre-vetted engineers join your existing team under your
                  management, processes, and tools. The vendor handles
                  employment, payroll, HR compliance, and replacement SLA.
                </p>

                <p>
                  Your sprint board doesn't change. Your release process
                  doesn't change. The only difference is additional
                  engineering capacity.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          SMALL CONTINUATION SECTION
      ========================================================= */}
      <section className="vc-bottom-space">
        <div className="vc-bottom-line"></div>
      </section>

    </div>
  );
}

export default App;