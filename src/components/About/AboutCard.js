import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { useTranslation } from "../../translations/useTranslation";

function AboutCard() {
  const t = useTranslation();
  
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            {t.about.intro} <span className="purple">{t.about.name}</span>{" "}
            {t.about.from} <span className="purple">{t.about.location}</span>.
            <br />
            {t.about.status}{" "}
            <span className="purple">{t.about.university}</span>,{" "}
            {t.about.major}{" "}
            <span className="purple">{t.about.majorName}</span>.
            <br />
            <br />
            {t.about.outsideCoding}
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> {t.about.activities.sports} ⚽
            </li>
            <li className="about-activity">
              <ImPointRight /> {t.about.activities.blogs} 📖
            </li>
            <li className="about-activity">
              <ImPointRight /> {t.about.activities.travel} 🌍
            </li>
          </ul>

          {/* <p style={{ color: "rgb(155 126 172)" }}>
            "{t.about.quote}"{" "}
          </p>
          <footer className="blockquote-footer">{t.about.author}</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
