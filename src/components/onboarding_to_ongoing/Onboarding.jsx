import React from "react";
import "./Onboarding.css";

const processSteps = [
  {
    period: "DAY 0",
    number: "01",
    title: "Submit a brief",
    description:
      "Role, stack, seniority, timezone preference, and any team context you want us to match on. It takes 15 minutes. We scale quickly questions on the same call.",
  },
  {
    period: "48 HOURS",
    number: "02",
    title: "Receive shortlist",
    description:
      "Two to three engineers profiles within 48 hours: experience summary, stack depth, a delivery outcome from a comparable engagement, and availability date. You review, shortlist, and interview whenever you want.",
  },
  {
    period: "DAY 3–4",
    number: "03",
    title: "Interview and select",
    description:
      "Standard technical interview, your format, your questions. No intermediaries on the call. If none of the first round fit, we re-shortlist at no additional cost.",
  },
  {
    period: "WEEK 1",
    number: "04",
    title: "Structured onboarding week",
    description:
      "Day 1: repository and environment access, codebase walkthrough. Day 2–3: architecture context with your team. Day 4–5: first PR submitted.",
  },
  {
    period: "ONGOING",
    number: "05",
    title: "Ongoing cadence",
    description:
      "Daily standups, async updates via your preferred channel (Slack, Teams, Linear). 90-day checkpoint with your PM to align on engineer–core tech signal alignment, capacity utilisation, and any adjustments before they become issues.",
  },
  {
    period: "<2 WEEKS, GUARANTEED",
    number: "06",
    title: "Replacement guarantee",
    description:
      "If an engineer leaves, underperforms, or doesn't fit the team, you can find a replacement within 2 weeks at no cost. We operate on the same day. No ticket queues.",
  },
];

const Onboarding = () => {
  return (
    <section className="how-section">

      {/* =====================================================
          PROCESS SECTION
      ===================================================== */}
      <div className="how-process">

        <div className="container">

          {/* TOP INTRO */}
          <div className="row align-items-center how-intro-row">

            <div className="col-lg-7">

              <div className="how-title-box">

                <span className="how-mini-label">
                  ONBOARDING TO ONGOING
                </span>

                <h2>
                  From brief to contributing
                  <br />
                  engineer in five working days
                </h2>

              </div>

            </div>

            <div className="col-lg-5">

              <p className="how-intro-text">
                The process is designed around one constraint:
                your team's continuity. Engineers join your
                workflows – not the other way around.
              </p>

            </div>

          </div>


          {/* =================================================
              PROCESS GRID
          ================================================= */}
          <div className="row how-process-grid">

            {processSteps.map((step, index) => (
              <div
                className="col-md-6 col-lg-4"
                key={step.number}
              >

                <div className="how-step">

                  {/* TOP META */}
                  <div className="how-step-meta">

                    <span className="how-step-period">
                      {step.period}
                    </span>

                  </div>


                  {/* NUMBER + LINE */}
                  <div className="how-step-number-row">

                    <span className="how-step-number">
                      {step.number}
                    </span>

                    <span className="how-step-line"></span>

                  </div>


                  {/* CONTENT */}
                  <div className="how-step-content">

                    <h3>
                      {step.title}
                    </h3>

                    <p>
                      {step.description}
                    </p>

                  </div>

                </div>

              </div>
            ))}

          </div>

        </div>

      </div>


      {/* =====================================================
          CTA SECTION
      ===================================================== */}
      <section className="how-cta">

        {/* Decorative background */}
        <div className="how-cta-circle how-cta-circle-one"></div>
        <div className="how-cta-circle how-cta-circle-two"></div>

        <div className="container position-relative">

          <div className="row align-items-center">

            {/* LEFT CTA */}
            <div className="col-lg-7">

              <div className="how-cta-content">

                <h2>
                  Scale Your Team, Not Your Hiring.
                </h2>

                <p>
                  675+ in-house engineers across Java, Python,
                  React, Node.js, Data Engineering.
                </p>

                <div className="how-cta-buttons">

                  <a
                    href="#talk"
                    className="how-cta-primary"
                  >
                    Talk to Us
                    <span>→</span>
                  </a>

                  <a
                    href="#call"
                    className="how-cta-secondary"
                  >
                    Book a Call
                    <span>→</span>
                  </a>

                </div>

              </div>

            </div>


            {/* RIGHT STATS */}
            <div className="col-lg-5">

              <div className="how-stats">

                <div className="how-stat-card">

                  <strong>
                    2,500+
                  </strong>

                  <span>
                    Projects delivered
                    <br />
                    across 30+ years
                  </span>

                </div>


                <div className="how-stat-card">

                  <strong>
                    94%
                  </strong>

                  <span>
                    Projects delivered
                    <br />
                    on time
                  </span>

                </div>


                <div className="how-rating-card">

                  <div className="how-rating-icons">
                    <span>◈</span>
                    <span>◈</span>
                  </div>

                  <div>

                    <strong>
                      4.8/5★
                    </strong>

                    <small>
                      Client Rating on Clutch
                    </small>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

    </section>
  );
};

export default Onboarding;