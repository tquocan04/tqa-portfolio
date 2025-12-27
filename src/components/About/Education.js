import React from "react";
import { Row, Col } from "react-bootstrap";
import { useTranslation } from "../../translations/useTranslation";
import "./Education.css";
import hcmueLogo from "../../Assets/Logos/hcmue.svg";

function Education() {
  const t = useTranslation();

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        <strong className="purple">{t.education?.title || "Education"}</strong>
      </h1>
      
      <Col md={10}>
        <div className="education-card">
          <div className="education-card-body">
            <div className="education-logo">
              <img src={hcmueLogo} alt="HCMUE" className="university-logo-img" />
            </div>
            <div className="education-content">
              <h3 className="education-university">
                {t.education?.university || "Ho Chi Minh City University of Education"}
              </h3>
              <h4 className="education-degree">
                {t.education?.degree || "Bachelor of Science in Information Technology"}
              </h4>
              <p className="education-duration">
                {t.education?.duration || "September 2021 - April 2025"}
              </p>
              <div className="education-description">
                <p>{t.education?.desc1 || "GPA: 3.5/4.0"}</p>
                <ul>
                  <li>{t.education?.achievement1 || "Specialized in Software Engineering and Web Development"}</li>
                  <li>{t.education?.achievement2 || "Completed thesis on AI-driven nutritional estimation using deep learning"}</li>
                  <li>{t.education?.achievement3 || "Active participant in coding competitions and hackathons"}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  );
}

export default Education;
