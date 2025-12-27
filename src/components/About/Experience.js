import React from "react";
import { Row, Col } from "react-bootstrap";
import { useTranslation } from "../../translations/useTranslation";
import "./Experience.css";

function Experience() {
  const t = useTranslation();

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px", paddingTop: "30px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        <strong className="purple">{t.experience?.title || "Experiences"}</strong>
      </h1>
      
      <Col md={10}>
        {/* HPT Internship */}
        <div className="experience-card">
          <div className="experience-card-body">
            <div className="experience-header">
              {/* <img src={hptLogo} alt="HPT" className="company-logo-img" /> */}
              <div>
                <h3 className="experience-role">
                  {t.experience?.hpt?.role || "Software Engineer Intern"}
                </h3>
                <h4 className="experience-company">
                  {t.experience?.hpt?.company || "HPT Vietnam Corporation"}
                </h4>
              </div>
              <div className="experience-duration">
                {t.experience?.hpt?.duration || "August 2024 - November 2024"}
              </div>
            </div>
            <div className="experience-description">
              <ul>
                <li>{t.experience?.hpt?.desc1 || "Participated in the development of 'SmartNOC Breakthrough Plan 2025-2030'"}</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Freelance */}
        <div className="experience-card">
          <div className="experience-card-body">
            <div className="experience-header">
              <div>
                <h3 className="experience-role">
                  {t.experience?.freelance?.role || "Freelance Developer"}
                </h3>
                <h4 className="experience-company">
                  {t.experience?.freelance?.company || "Self-Employed"}
                </h4>
              </div>
              <div className="experience-duration">
                {t.experience?.freelance?.duration || "January 2024 - July 2024"}
              </div>
            </div>
            <div className="experience-description">
              <ul>
                <li>{t.experience?.freelance?.desc1 || "Built custom web solutions for various clients using modern technologies"}</li>
                <li>{t.experience?.freelance?.desc2 || "Designed and developed responsive websites with React.js and Node.js"}</li>
                <li>{t.experience?.freelance?.desc3 || "Managed full project lifecycle from requirements gathering to deployment"}</li>
                <li>{t.experience?.freelance?.desc4 || "Communicated directly with clients to deliver solutions on time and within budget"}</li>
              </ul>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  );
}

export default Experience;
