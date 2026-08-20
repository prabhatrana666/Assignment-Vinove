import React from "react";
import './Footer.css';
import newyork from "../../assets/vinove-images/newyork.png";
import london from "../../assets/vinove-images/newyork.png";
import uae from "../../assets/vinove-images/newyork.png";
import india from "../../assets/vinove-images/india.png";

const offices = [
  {
    flag: newyork,
    city: "New York, USA",
    address: (
      <>
        5900 Balcones Drive, STE100,
        <br />
        Austin, TX 78731
      </>
    ),
  },
  {
    flag: london,
    city: "London, UK",
    address: (
      <>
        167–169 Great Portland Street, 5th
        <br />
        Floor, London W1W 5PF
      </>
    ),
  },
  {
    flag: uae,
    city: "Dubai, UAE",
    address: (
      <>
        541, 8W, Level 5, Dubai Airport
        <br />
        Free Zone
      </>
    ),
  },
  {
    flag: india,
    city: "Noida, India",
    address: (
      <>
        11th Floor, Max Square, Noida–
        <br />
        Greater Noida Expy, Sector 129
      </>
    ),
  },
];

const footerColumns = [
  {
    title: "Company",
    links: [
      "About",
      "In Media",
      "Case Studies",
      "Our Blog",
      "Clients & testimonials",
    ],
  },
  {
    title: "Our Expertise",
    links: [
      "Software Product Engineering",
      "Application Development",
      "Staff Augmentation",
      "Cloud Services",
      "AI & ML",
    ],
  },
  {
    title: "Hire Developers",
    links: [
      "Hire AI Engineers",
      "Hire Backend Developers",
      "Hire Frontend Developers",
      "Hire Blockchain Developers",
      "Hire Mobile App Developers",
    ],
  },
  {
    title: "Solutions",
    links: [
      "Offshore Development Center",
      "Offshore Software Development",
      "Nearshore Software Development",
    ],
  },
  {
    title: "Clients We Serve",
    links: [
      "For Startups",
      "For Enterprises",
    ],
  },
];

const socialLinks = [
  {
    icon: "bi-facebook",
    label: "Facebook",
  },
  {
    icon: "bi-twitter-x",
    label: "Twitter",
  },
  {
    icon: "bi-linkedin",
    label: "LinkedIn",
  },
  {
    icon: "bi-instagram",
    label: "Instagram",
  },
  {
    icon: "bi-youtube",
    label: "YouTube",
  },
];

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container-fluid footer-container">

        {/* ================= OFFICES ================= */}
        <div className="row g-3 footer-offices">
          {offices.map((office, index) => (
            <div
              className="col-12 col-sm-6 col-lg-3"
              key={index}
            >
              <div className="office-card">
                <div className="office-title">
                  <span className="office-flag">
                    
                    <img src={office.flag} alt="flags" />
                  </span>

                  <span>{office.city}</span>
                </div>

                <div className="office-address">
                  {office.address}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ================= FOOTER LINKS ================= */}
        <div className="row footer-links">

          {footerColumns.map((column, index) => (
            <div
              className={
                index === 4
                  ? "col-6 col-sm-6 col-lg-2"
                  : "col-6 col-sm-6 col-lg-2"
              }
              key={index}
            >
              <div className="footer-column">
                <h5>{column.title}</h5>

                <ul className="footer-menu">
                  {column.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a href="#!">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>

                {/* Social icons under Solutions */}
                {column.title === "Solutions" && (
                  <div className="footer-social-wrapper">
                    <span className="follow-text">
                      Follow Us
                    </span>

                    <div className="footer-social">
                      {socialLinks.map((social, socialIndex) => (
                        <a
                          href="#!"
                          className="social-icon"
                          aria-label={social.label}
                          key={socialIndex}
                        >
                          <i className={`bi ${social.icon}`}></i>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}

        </div>
      </div>

      {/* ================= COPYRIGHT ================= */}
      <div className="footer-copyright">
        <div className="container-fluid">
          <p>
            Copyright © 2004 – 2026 ValueCoders, All Rights Reserved. A Vinove Company.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;