import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Education from "./Education";
import Experience from "./Experience";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import { useTranslation } from "../../translations/useTranslation";

function About() {
  const t = useTranslation();
  return (
    <section id="about">
      <Particle />
      <Container fluid className="about-section">
        <Container>
          <Row style={{ justifyContent: "center", padding: "10px" }}>
            <Col
              md={7}
              style={{
                justifyContent: "center",
                paddingTop: "30px",
                paddingBottom: "50px",
              }}
            >
              <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                {t.about.knowWho} <strong className="purple">{t.about.im}</strong>
              </h1>
              <Aboutcard />
            </Col>
            <Col
              md={5}
              style={{ paddingTop: "120px", paddingBottom: "50px" }}
              className="about-img"
            >
              <img src={laptopImg} alt="about" className="img-fluid" />
            </Col>
          </Row>
          <h1 className="project-heading">
            {t.about.professionalSkillset} <strong className="purple">{t.about.skillset}</strong>
          </h1>

          <Techstack />

          <h1 className="project-heading">
            <strong className="purple">{t.about.tools}</strong> {t.about.iUse}
          </h1>
          <Toolstack />

          <Education />
          
          <Experience />
        </Container>
      </Container>
    </section>
  );
}

export default About;
