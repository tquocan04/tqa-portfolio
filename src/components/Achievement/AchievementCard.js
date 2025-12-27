import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BsLink45Deg } from "react-icons/bs";

function AchievementCard(props) {
  return (
    <Card className="achievement-card-view">
      <Card.Body style={{ 
        display: "flex", 
        flexDirection: "column",
        height: "100%"
      }}>
        <div className="achievement-icon" style={{ 
          fontSize: "3em", 
          color: props.type === "award" ? "#FFD700" : "#64dfdf",
          marginBottom: "20px",
          textAlign: "center"
        }}>
          {props.icon}
        </div>
        <Card.Title style={{ 
          fontWeight: "bold", 
          fontSize: "1.5em",
          color: "#5e60ce",
          marginBottom: "10px",
          minHeight: "3.6em",
          display: "-webkit-box",
          WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical",
          overflow: "hidden"
        }}>
          {props.title}
        </Card.Title>
        <Card.Subtitle style={{ 
          marginBottom: "15px",
          color: "#72efdd",
          fontSize: "1.1em",
          minHeight: "1.5em"
        }}>
          {props.organization}
        </Card.Subtitle>
        <Card.Text style={{ 
          textAlign: "justify",
          lineHeight: "1.6",
          flex: "1"
        }}>
          {props.description}
        </Card.Text>
        <div style={{ marginTop: "auto" }}>
          <div style={{ 
            marginTop: "20px",
            color: "#48bfe3",
            fontWeight: "bold",
            fontSize: "1.1em"
          }}>
            📅 {props.date}
          </div>
          {props.link && (
            <Button
              variant="primary"
              href={props.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ marginTop: "15px" }}
            >
              <BsLink45Deg /> {props.viewDetailsText || "View Details"}
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default AchievementCard;
