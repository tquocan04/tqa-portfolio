import React from "react";
import { Col, Row } from "react-bootstrap";
import vsCode from "../../Assets/TechIcons/vscode.svg";
import visualStudio from "../../Assets/TechIcons/VisualStudio.svg";
import vim from "../../Assets/TechIcons/Vim.svg";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <img src={visualStudio} alt="Visual Studio" className="tech-icon-images" />
        <div className="tech-icons-text">Visual Studio</div>
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons ">
        <img src={chrome} alt="Chrome" className="tech-icon-images" />
        <div className="tech-icons-text">Google Chrome</div>
      </Col> */}
      <Col xs={4} md={2} className="tech-icons ">
        <img src={vsCode} alt="vsCode" className="tech-icon-images" />
        <div className="tech-icons-text">Visual Studio Code</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons ">
        <img src={vim} alt="Vim" className="tech-icon-images" />
        <div className="tech-icons-text">Vim (Neovim)</div>
      </Col>
    </Row>
  );
}

export default Toolstack;
