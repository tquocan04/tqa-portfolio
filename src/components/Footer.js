import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row style={{ paddingTop: "30px", paddingBottom: "20px" }}>
        <Col md={12} className="footer-body" style={{ textAlign: "center" }}>
          <h3 style={{ color: "white", fontSize: "1.5em", marginBottom: "15px" }}>
            Find Me On
          </h3>
          <p style={{ color: "white" }}>
            Feel free to <span className="purple">connect </span>with me
          </p>
          <ul className="footer-icons" style={{ marginTop: "20px", marginBottom: "30px" }}>
            <li className="social-icons">
              <a
                href="https://github.com/tquocan04"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
                className="icon-colour home-social-icons"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://x.com/tquocan04"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
                className="icon-colour home-social-icons"
              >
                <AiOutlineTwitter />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/quoc-an-tran-8936132a5/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
                className="icon-colour home-social-icons"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/tqan_20/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
                className="icon-colour home-social-icons"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
      <Row>
        {/* <Col md="4" className="footer-copywright">
          <h3>Developed by Tran Quoc An</h3>
        </Col> */}
        <Col md="" className="footer-copywright">
          <h3>Copyright © {year} Tran Quoc An</h3>
        </Col>
        {/* <Col md="4" className="footer-body">
          <h3>Modified by Tran Quoc An</h3>
        </Col> */}
      </Row>
    </Container>
  );
}

export default Footer;
