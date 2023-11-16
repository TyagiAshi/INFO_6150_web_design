import React from "react";
import LoginPage from "../../Pages/LoginPage/LoginPage";
import { Container, Row } from "react-bootstrap";
import "./MainScreen.css";

const MainScreen = (props) => {
  return (
    <div className="mainback">
      <Container>
        <Row>
          <div className="page">
            <h1 className="heading">{props.title}</h1>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default MainScreen;
