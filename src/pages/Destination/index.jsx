import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { destinations } from "../../data";
import {
  DestinationContainer,
  DetailsContainer,
  Background,
  Span,
  Line,
  Image,
  TextsContainer,
  InfoContaier,
  InfoText,
  StyledTabList,
  StyledTab,
  MobileHidden,
} from "./styles";
const Destination = () => {
  const [activeDestination, setActiveDestination] = useState(destinations[0]);
  const handleTabClick = (index) => {
    setActiveDestination(destinations[index]);
  };
  return (
    <DestinationContainer>
      <Background />
      <h5>
        <Span>01</Span>Pick your destination
      </h5>
      <Tabs onSelect={handleTabClick}>
        <DetailsContainer>
          <MobileHidden />
          <StyledTabList>
            {destinations.map((destination, index) => (
              <StyledTab key={index}>{destination.name}</StyledTab>
            ))}
          </StyledTabList>
        </DetailsContainer>

        {destinations.map((destinations, index) => (
          <TabPanel key={index}>
            <DetailsContainer>
              <Image src={destinations.images.png} alt={destinations.name} />
              <TextsContainer>
                <h2>{destinations.name}</h2>
                <p>{destinations.description}</p>

                <Line />
                <InfoContaier>
                  <InfoText>
                    <p className="subheading-2">Avg.distance</p>
                    <p className="subheading-1">{destinations.distance}</p>
                  </InfoText>
                  <InfoText>
                    <p className="subheading-2">est. travel time</p>
                    <p className="subheading-1">{destinations.travel}</p>
                  </InfoText>
                </InfoContaier>
              </TextsContainer>
            </DetailsContainer>
          </TabPanel>
        ))}
      </Tabs>
    </DestinationContainer>
  );
};

export default Destination;
