import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import { useTranslation } from "../../translations/useTranslation";
import Flowlite from "../../Assets/Projects/Flowlite-HomePage.png";
import arc from "../../Assets/Projects/home_arc.png";
import hoblemail from "../../Assets/Projects/hoblemail.png";
import sky from "../../Assets/Projects/homesky.png";

function Projects() {
  const t = useTranslation();
  
  return (
    <Container fluid className="project-section" id="projects">
      <Particle />
      <Container>
        {/* Academic & Research Projects */}
        <h2 className="project-heading" style={{ fontSize: "2em", paddingTop: "30px" }}>
          <strong className="purple">{t.projects.academic}</strong>
        </h2>
        <p style={{ color: "white", paddingBottom: "20px" }}>
          {t.projects.academicDesc}
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "30px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title={t.projects.nutritionApp.title}
              description={t.projects.nutritionApp.description}
              ghLink="https://github.com/tquocan04/nutritionapp-backend"
              demoLink="https://www.youtube.com/watch?v=H5-OwkxSjV8"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={arc}
              isBlog={false}
              title={t.projects.arcCoffee.title}
              description={t.projects.arcCoffee.description}
              ghLink="https://github.com/tquocan04/arccoffee-backend"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Flowlite}
              isBlog={false}
              title={t.projects.flowlite.title}
              description={t.projects.flowlite.description}
              ghLink="https://github.com/tquocan04/mini-management-project"
              demoLink="https://mini-management-project.vercel.app/"
            />
          </Col>
        </Row>

        {/* Client Projects */}
        <h2 className="project-heading" style={{ fontSize: "2em", paddingTop: "30px" }}>
          <strong className="purple">{t.projects.client}</strong>
        </h2>
        <p style={{ color: "white", paddingBottom: "20px" }}>
          {t.projects.clientDesc}
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "30px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sky}
              isBlog={false}
              title={t.projects.skyeEducation.title}
              description={t.projects.skyeEducation.description}
              demoLink="https://www.skyeeducation.com/"
              demoText="Website"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="E-Commerce Platform"
              description="Built a full-featured e-commerce platform for a retail client using ASP.NET Core and React.js. Implemented product catalog, shopping cart, payment integration, order management, and admin dashboard."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Business Management System"
              description="Developed a comprehensive business management system for a local company including inventory management, sales tracking, customer relationship management, and reporting features using .NET and SQL Server."
            />
          </Col> */}
        </Row>

        {/* SaaS Projects */}
        <h2 className="project-heading" style={{ fontSize: "2em", paddingTop: "30px" }}>
          <strong className="purple">{t.projects.saas}</strong>
        </h2>
        <p style={{ color: "white", paddingBottom: "20px" }}>
          {t.projects.saasDesc}
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hoblemail}
              isBlog={false}
              title={t.projects.hobleMail.title}
              description={t.projects.hobleMail.description}
              ghLink="https://github.com/HobleMail"
              demoLink="https://hoblemail.vercel.app/"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Code Editor Platform"
              description="Online code and markdown editor built with React.js. Supports HTML, CSS, and JavaScript with instant preview. Includes markdown editor for README files with GFM support, custom HTML tags, toolbar, and auto-save using Local Storage."
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
