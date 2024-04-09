import React from "react";
import { Link } from "react-router-dom";
import {
  HomeContainer,
  Background,
  Details,
  TextsCover,
  Button,
  ButtonHoverElement,
} from "./styles";

const Home = () => {
  return (
    <>
      <HomeContainer>
        <Background />
        <Details>
          <TextsCover>
            <h5 className="text--blue">So, you want to travel to</h5>
            <h1>Space</h1>
            <p>
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </TextsCover>

          <Button as={Link} to="/space-tourism/destination">
            Explore
            <ButtonHoverElement />
          </Button>
        </Details>
      </HomeContainer>
    </>
  );
};

export default Home;
