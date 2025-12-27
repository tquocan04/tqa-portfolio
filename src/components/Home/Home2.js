import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar02.jpg";
// import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { useTranslation } from "../../translations/useTranslation";

function Home2() {
  const t = useTranslation();
  
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              {t.home.letMeIntroduce} <span className="purple"> {t.home.introduce} </span> {t.home.myself}
            </h1>
            <p className="home-about-body">
              {t.home.introduction}

              <br />
              <br />
              {t.home.coreStrengths}

              <i>
                <b className="purple">
                  {" "}
                  {t.home.csharpDotnet}{" "}
                </b>
              </i>
             
              {t.home.alongWith}
              
              <i>
                <b className="purple">
                  {" "}
                  {t.home.reactNext}{" "}
                </b>
              </i>

              {t.home.focus}
              
              <br />
              <br />

              {t.home.curious}
            
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img 
                src={myImg} 
                className="img-fluid" 
                alt="avatar" 
                style={{ borderRadius: "50%", boxShadow: "0 4px 20px rgba(94, 96, 206, 0.4)" }}
              />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
