import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      {/* Show image if provided, otherwise show empty placeholder */}
      {props.imgPath ? (
        <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      ) : (
        <div style={{ 
          width: "100%", 
          height: "200px", 
          backgroundColor: "rgba(94, 96, 206, 0.1)",
          border: "2px dashed rgba(94, 96, 206, 0.3)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "rgba(255, 255, 255, 0.3)",
          fontSize: "1rem"
        }}>
          {/* Empty space for image */}
        </div>
      )}
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        
        {/* GitHub button - only show if ghLink is provided */}
        {props.ghLink && (
          <Button variant="primary" href={props.ghLink} target="_blank">
            <BsGithub /> &nbsp;
            {props.isBlog ? "Blog" : "GitHub"}
          </Button>
        )}
        {"\n"}
        {"\n"}

        {/* Demo link button */}
        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: props.ghLink ? "10px" : "0" }}
          >
            <CgWebsite /> &nbsp;
            {props.demoText || "Demo"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
