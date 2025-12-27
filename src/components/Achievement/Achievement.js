import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import AchievementCard from "./AchievementCard";
import { FaTrophy, FaNewspaper } from "react-icons/fa";
import { useTranslation } from "../../translations/useTranslation";

function Achievement() {
  const t = useTranslation();
  
  return (
    <section id="achievements">
      <Container fluid className="achievement-section">
        <Particle />
        <Container>
          <h1 className="project-heading">
            {t.achievements.my} <strong className="purple">{t.achievements.achievements} </strong>
          </h1>
          <p style={{ color: "white" }}>
            {t.achievements.description}
          </p>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={6} className="achievement-card">
              <AchievementCard
                icon={<FaTrophy />}
                title={t.achievements.coderace.title}
                organization={t.achievements.coderace.org}
                description={t.achievements.coderace.desc}
                date={t.achievements.coderace.date}
                type="award"
              />
            </Col>

            <Col md={6} className="achievement-card">
              <AchievementCard
                icon={<FaNewspaper />}
                title={t.achievements.research.title}
                organization={t.achievements.research.org}
                description={t.achievements.research.desc}
                date={t.achievements.research.date}
                type="publication"
                link="https://doi.org/10.9734/ajrcos/2025/v18i5650"
                viewDetailsText={t.achievements.research.viewDetails}
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Achievement;
