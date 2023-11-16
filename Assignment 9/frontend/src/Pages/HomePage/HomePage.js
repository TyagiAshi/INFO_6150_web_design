import React from "react";
import MainScreen from "../../Components/MainScreen/MainScreen";
import { Container } from "react-bootstrap";
import community from "../../Images/Community.png";

const HomePage = () => {
  return (
    <div>
      <MainScreen title="NU Moves Mission" />
      <Container>
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-5">
              <div class="features-box">
                <h3 class="mb-4">
                  NU MOVES - A Non-profit mission for Huskies on the move
                </h3>
                <p class="text-muted mb-4">
                  NU MOVES aims to alleviate the hassle Huskies face every year
                  while moving in and out of their accommodation. It provides a
                  safe and reliable platform for a close-knit community of
                  Northeastern Unioversity students to buy, sell & rent stuff
                  among themselves.{" "}
                </p>
                <div class="mt-4"></div>
              </div>
            </div>
            <div class="col-lg-6 offset-lg-1">
              <div class="text-center mt-5 mt-lg-0">
                <img
                  src={community}
                  alt="Features"
                  class="img-fluid"
                  id="community-img"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HomePage;
