import React, { useState } from "react";
import "./How.css";

const comparisonData = [
  {
    factor: "Team management",
    teamExtension: "You manage directly",
    deliveryPods: "ValueCoders manages pod",
    developmentCentres: "You manage, VC handles ops",
  },
  {
    factor: "Governance structure",
    teamExtension: "Your PM, your rituals",
    deliveryPods: "VC sprint governance + metrics",
    developmentCentres: "Your brand and standards",
  },
  {
    factor: "Billing model",
    teamExtension: "Per-engineer, monthly",
    deliveryPods: "Monthly pod rate",
    developmentCentres: "Cost-plus or managed",
  },
  {
    factor: "Ramp speed",
    teamExtension: "Per-engineer, monthly",
    deliveryPods: "1–2 week pod formation",
    developmentCentres: "4–6 week centre setup",
  },
  {
    factor: "Minimum commitment",
    teamExtension: "3 months",
    deliveryPods: "3 months",
    developmentCentres: "12 months",
  },
];

const accordionData = [
  {
    title: "Team Composition",
    content:
      "Individuals, pairs, or small groups of 3–5. Each engineer is matched to your stack – Java/Spring Boot, Python, React, Node.js, Data Engineering, QA Automation, or DevOps/Cloud. Start with one engineer or add a small group. Scale capacity as your roadmap grows.",
  },
  {
    title: "Governance",
    content:
      "Your existing development process remains intact. Engineers work inside your tools, repositories, communication channels, sprint ceremonies, and engineering workflows.",
  },
  {
    title: "Billing",
    content:
      "Simple and transparent monthly billing based on the engineers and engagement model you choose. There are no unnecessary layers between your team and the engineers.",
  },
  {
    title: "Ramp Speed",
    content:
      "Start with the capacity you need and expand when your roadmap requires it. Our process is designed to help you add engineering resources quickly without rebuilding your development organization.",
  },
];

const How = () => {
  const [activeAccordion, setActiveAccordion] = useState(0);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? -1 : index);
  };

  return (
    <section className="how-section">

      {/* =====================================================
          HOW IT WORKS
      ===================================================== */}
      <div className="how-process-section">

        <div className="container how_setionss">

          <div className="row align-items-start gy-5">

            {/* LEFT CONTENT */}
            <div className="col-lg-6">

              <div className="how-left-content">

                <span className="how-section-label">
                  HOW IT WORKS
                </span>

                <h2 className="how-main-title">
                  Individuals, pairs, or
                  <br className="d-none d-md-block" />
                  small groups – on your
                  <br className="d-none d-md-block" />
                  tools, your cadence
                </h2>

                <p className="how-description">
                  Your engineering process stays the same. The only thing
                  that changes is who joins your team. You manage delivery.
                  We handle employment, HR, and replacements while engineers
                  work inside your existing workflows.
                </p>

              </div>

            </div>


            {/* RIGHT ACCORDION */}
            <div className="col-lg-6">

              <div className="how-accordion">

                {accordionData.map((item, index) => {

                  const isActive = activeAccordion === index;

                  return (
                    <div
                      className={`how-accordion-item ${
                        isActive ? "how-accordion-active" : ""
                      }`}
                      key={item.title}
                    >

                      {/* ACCORDION HEADER */}
                      <button
                        type="button"
                        className="how-accordion-header"
                        onClick={() => toggleAccordion(index)}
                        aria-expanded={isActive}
                      >

                        <span className="acc-title" >{item.title}</span>

                        <span
                          className={`how-accordion-icon ${
                            isActive ? "how-icon-active" : ""
                          }`}
                        >
                          <svg
                            viewBox="0 0 24 24"
                            width="17"
                            height="17"
                            fill="none"
                          >
                            <path
                              d="M7 9L12 14L17 9"
                              stroke="currentColor"
                              strokeWidth="1.7"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>

                      </button>


                      {/* ACCORDION CONTENT */}
                      <div
                        className={`how-accordion-content ${
                          isActive ? "how-content-open" : ""
                        }`}
                      >

                        <p>{item.content}</p>

                      </div>

                    </div>
                  );
                })}

              </div>

            </div>

          </div>

        </div>


        {/* DECORATIVE SHAPES */}
        <div className="how-decoration how-decoration-one"></div>
        <div className="how-decoration how-decoration-two"></div>
        <div className="how-decoration how-decoration-three"></div>

      </div>


      {/* =====================================================
          COMPARISON SECTION
      ===================================================== */}
      <div className="how-comparison-section">

        <div className="container">

          {/* HEADING */}
          <div className="how-comparison-heading">

            <h2>
              Which Engagement Model Fits Your Situation?
            </h2>

            <p>
              Staff augmentation is not the right model for every buyer.
              Use this comparison to determine which engagement model best
              matches your delivery needs.
            </p>

          </div>


          {/* TABLE */}
          <div className="how-table-wrapper">

            <table className="how-comparison-table">

              <thead>
                <tr>

                  <th className="how-factor-column">
                    FACTOR
                  </th>

                  <th className="how-highlight-column">
                    TEAM EXTENSION
                  </th>

                  <th>
                    DELIVERY PODS
                  </th>

                  <th>
                    DEVELOPMENT CENTRES
                  </th>

                </tr>
              </thead>


              <tbody>

                {comparisonData.map((row, index) => (
                  <tr key={index}>

                    <td className="how-factor">
                      {row.factor}
                    </td>

                    <td className="how-highlight-cell">
                      {row.teamExtension}
                    </td>

                    <td>
                      {row.deliveryPods}
                    </td>

                    <td>
                      {row.developmentCentres}
                    </td>

                  </tr>
                ))}

              </tbody>

            </table>


            {/* PURPLE DOWN BUTTON */}
            <button
              className="how-table-scroll-button"
              type="button"
              aria-label="Continue"
            >
              <svg
                viewBox="0 0 24 24"
                width="17"
                height="17"
                fill="none"
              >
                <path
                  d="M7 9L12 14L17 9"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

          </div>

        </div>

      </div>

    </section>
  );
};

export default How;