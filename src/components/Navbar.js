import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/logo.png";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import { FaTrophy } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations/translations";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const { language, setLanguage } = useLanguage();
  
  const t = translations[language];

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  // Smooth scroll to section
  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    updateExpanded(false);
    
    // Update URL without hash
    window.history.pushState({}, '', '/');
  };

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" onClick={(e) => scrollToSection(e, 'home')} className="d-flex">
          <span className="logo-text">TQA</span>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link href="/" onClick={(e) => scrollToSection(e, 'home')}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> {t.nav.home}
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                href="/"
                onClick={(e) => scrollToSection(e, 'about')}
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} /> {t.nav.about}
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                href="/"
                onClick={(e) => scrollToSection(e, 'projects')}
              >
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px" }}
                />{" "}
                {t.nav.projects}
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                href="/"
                onClick={(e) => scrollToSection(e, 'achievements')}
              >
                <FaTrophy style={{ marginBottom: "2px" }} /> {t.nav.achievements}
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                href="/"
                onClick={(e) => scrollToSection(e, 'resume')}
              >
                <CgFileDocument style={{ marginBottom: "2px" }} /> {t.nav.resume}
              </Nav.Link>
            </Nav.Item>

            {/* <Nav.Item>
              <Nav.Link
                href="https://soumyajitblogs.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <ImBlog style={{ marginBottom: "2px" }} /> Blogs
              </Nav.Link>
            </Nav.Item> */}

            <Nav.Item className="language-switcher">
              <div style={{ 
                display: "flex", 
                gap: "8px", 
                alignItems: "center",
                padding: "0.5rem 1rem",
                justifyContent: "center"
              }}>
                <button
                  onClick={() => setLanguage('vi')}
                  style={{
                    background: "none",
                    border: language === 'vi' ? "2px solid #5e60ce" : "2px solid transparent",
                    borderRadius: "4px",
                    cursor: "pointer",
                    padding: "4px 8px",
                    fontSize: "1.1em",
                    transition: "all 0.3s ease",
                    transform: language === 'vi' ? "scale(1.05)" : "scale(1)",
                    lineHeight: "1",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                  title="Tiếng Việt"
                  aria-label="Switch to Vietnamese"
                >
                  🇻🇳
                </button>
                <button
                  onClick={() => setLanguage('en')}
                  style={{
                    background: "none",
                    border: language === 'en' ? "2px solid #5e60ce" : "2px solid transparent",
                    borderRadius: "4px",
                    cursor: "pointer",
                    padding: "4px 8px",
                    fontSize: "1.1em",
                    transition: "all 0.3s ease",
                    transform: language === 'en' ? "scale(1.05)" : "scale(1)",
                    lineHeight: "1",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                  title="English"
                  aria-label="Switch to English"
                >
                  🇬🇧
                </button>
              </div>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
