import React, { useState } from "react";
import "./Proof.css";

/* =========================================================
   CASE STUDIES
========================================================= */

const caseStudies = [
  {
    category: "SAAS / FINTECH",

    title:
      "Series B FinTech Added 4 Backend Engineers Without Slowing an Active Release Cycle",

    description:
      "Managing a designer, Shopify contractor, SEO consultant, and PPC agency separately was costing FreshGrow hours a week in coordination. 6 months after consolidating with PixelCrayons.",

    imageClass: "proof-project-image-one",

    stats: [
      {
        value: "4 engineers",
        label: "Added to active team",
      },
      {
        value: "6 days",
        label: "Time to first PR",
      },
      {
        value: "18 mo",
        label: "Engagement duration",
      },
    ],
  },

  {
    category: "ISV / HEALTHCARE",

    title:
      "Healthcare ISV Scaled QA Automation Capacity by 300% in Three Weeks Ahead of HIPAA Audit",

    description:
      "Orbid had hit their capacity ceiling. Turning away new clients wasn't sustainable, but taking on freelancers was producing inconsistent output.",

    imageClass: "proof-project-image-two",

    stats: [
      {
        value: "3×",
        label: "QA capacity increase",
      },
      {
        value: "21 days",
        label: "From brief to pod",
      },
      {
        value: "0",
        label: "Audit findings from augmented workflow",
      },
    ],
  },
];


/* =========================================================
   FAQ DATA
========================================================= */

const faqItems = [
  {
    question: "How quickly can engineers join our team?",

    answer:
      "We can typically share a vetted shortlist within 48 hours. Once you select the right engineer, onboarding can begin quickly based on your team's availability and requirements.",
  },

  {
    question: "Can we interview engineers before making a decision?",

    answer:
      "Yes. You can interview shortlisted engineers using your own technical interview process, questions, and evaluation criteria before making a final decision.",
  },

  {
    question: "How does billing work for Team Extension?",

    answer:
      "Billing is straightforward and based on the engineers you engage, with monthly invoicing and no long-term hiring commitments. You can scale your team up or down as your project requirements change, giving you flexibility without the administrative burden of permanent hiring.",
  },

  {
    question: "What happens if an engineer leaves or isn't the right fit?",

    answer:
      "If an engineer leaves or isn't the right fit, we work with you to identify and provide a suitable replacement according to the agreed replacement terms.",
  },

  {
    question: "Will engineers work within our existing tools and processes?",

    answer:
      "Yes. Engineers work inside your existing repositories, communication tools, project-management systems, development workflows, standups, and release processes.",
  },

  {
    question: "Is Team Extension the right engagement model for our team?",

    answer:
      "Team Extension works particularly well when you already have an engineering organization and need additional capacity without taking on the overhead of permanent hiring.",
  },
];


/* =========================================================
   ARROW ICON
========================================================= */

const ArrowIcon = () => (
  <svg
    width="10"
    height="10"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
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


/* =========================================================
   CHEVRON ICON
========================================================= */

const ChevronIcon = ({ active }) => (
  <svg
    className={`proof-chevron ${active ? "proof-chevron-active" : ""}`}
    width="22"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M7 9L12 14L17 9"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);


/* =========================================================
   PROOF COMPONENT
========================================================= */

const Proof = () => {
  const [activeFaq, setActiveFaq] = useState(2);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? -1 : index);
  };

  return (
    <section className="proof-section">


      {/* =====================================================
          CASE STUDIES
      ===================================================== */}

      <div className="proof-case-studies">

        <div className="container">


          {/* =========================
              SECTION HEADER
          ========================= */}

          <div className="row align-items-start proof-heading-row">

            <div className="col-lg-7">

              <div className="proof-title-wrapper">

                <span className="proof-section-label">
                  PROOF
                </span>

                <h2 className="proof-main-title">
                  Engineering teams extended,
                  <br className="d-none d-md-block" />
                  shipping on their roadmap
                </h2>

              </div>

            </div>


            <div className="col-lg-5">

              <p className="proof-heading-description">
                Two representative engagements. Each started
                as a Team Extension and continued beyond the
                initial three months.
              </p>

            </div>

          </div>


          {/* =========================
              CASE STUDY CARDS
          ========================= */}

          <div className="row g-3 proof-cards-row">

            {caseStudies.map((project, index) => (

              <div
                className="col-lg-6"
                key={project.title}
              >

                <article className="proof-project-card">


                  {/* PROJECT IMAGE */}

                  <div
                    className={`proof-project-image ${project.imageClass}`}
                  >

                    {/* Decorative browser/app mockup */}
                    <div className="proof-device proof-device-one">

                      <div className="proof-device-top">
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>

                      <div className="proof-device-content">

                        <div className="proof-device-line proof-line-large"></div>
                        <div className="proof-device-line"></div>

                        <div className="proof-device-box"></div>

                        <div className="proof-device-row">
                          <span></span>
                          <span></span>
                        </div>

                      </div>

                    </div>


                    <div className="proof-device proof-device-two">

                      <div className="proof-device-top">
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>

                      <div className="proof-device-content">

                        <div className="proof-device-line proof-line-large"></div>

                        <div className="proof-device-card"></div>

                        <div className="proof-device-row">
                          <span></span>
                          <span></span>
                        </div>

                      </div>

                    </div>

                  </div>


                  {/* PROJECT CONTENT */}

                  <div className="proof-project-content">

                    <span className="proof-project-category">
                      {project.category}
                    </span>

                    <h3 className="proof-project-title">
                      {project.title}
                    </h3>

                    <p className="proof-project-description">
                      {project.description}
                    </p>


                    {/* STATS */}

                    <div className="proof-project-stats">

                      {project.stats.map((stat) => (

                        <div
                          className="proof-project-stat"
                          key={stat.label}
                        >

                          <strong>
                            {stat.value}
                          </strong>

                          <span>
                            {stat.label}
                          </span>

                        </div>

                      ))}

                    </div>


                    {/* CASE STUDY LINK */}

                    <a
                      href="#case-study"
                      className="proof-case-link"
                    >
                      Read the case study

                      <ArrowIcon />

                    </a>

                  </div>

                </article>

              </div>

            ))}

          </div>

        </div>

      </div>


      {/* =====================================================
          FAQ
      ===================================================== */}

      <div className="proof-faq-section">

        <div className="container">

          <div className="row align-items-start">


            {/* =========================
                FAQ INTRO
            ========================= */}

            <div className="col-lg-5">

              <div className="proof-faq-intro">

                <h2>
                  Frequently Asked
                  <br />
                  <span className="question">Questions</span>
                </h2>

                <p>
                  Here is the list of some of the most common
                  questions we hear before any engagement. If
                  your query is not listed here, contact us and
                  we will get back to you within 24 hours.
                </p>

              </div>

            </div>


            {/* =========================
                FAQ ACCORDION
            ========================= */}

            <div className="col-lg-7">

              <div className="proof-faq-list">

                {faqItems.map((item, index) => {

                  const isActive = activeFaq === index;

                  return (

                    <div
                      className={`proof-faq-item ${
                        isActive ? "proof-faq-active" : ""
                      }`}
                      key={item.question}
                    >

                      <button
                        type="button"
                        className="proof-faq-question"
                        onClick={() => toggleFaq(index)}
                        aria-expanded={isActive}
                      >

                        <span>
                          {item.question}
                        </span>

                        <ChevronIcon active={isActive} />

                      </button>


                      <div
                        className={`proof-faq-answer ${
                          isActive ? "proof-faq-answer-open" : ""
                        }`}
                      >

                        <p>
                          {item.answer}
                        </p>

                      </div>

                    </div>

                  );

                })}

              </div>

            </div>

          </div>

        </div>


        {/* Decorative background shapes */}

        <div className="proof-faq-decoration proof-faq-decoration-one"></div>

        <div className="proof-faq-decoration proof-faq-decoration-two"></div>

      </div>

    </section>
  );
};

export default Proof;