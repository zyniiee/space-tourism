import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { crew } from "../../data";
import { MainContainer } from "../Destination/styles";
import {
  Background,
  Span,
  StyledTabs,
  StyledTabList,
  StyledTab,
  PageDetails,
  Image,
  Opacity50,
  StyledTabPanel,
  HeadingsCover,
} from "./styles";

const Crew = () => {
  const [activeCrew, setActiveCrew] = useState(crew[0]);
  const handleTabClick = (index) => {
    setActiveCrew(crew[index]);
  };
  return (
    <MainContainer>
      <Background />
      <h5>
        <Span>02</Span>Meet your crew
      </h5>
      <StyledTabs onSelect={handleTabClick}>
        {crew.map((crew, index) => (
          <StyledTabPanel key={index}>
            <PageDetails>
              <HeadingsCover>
                <h4>
                  <Opacity50>{crew.role}</Opacity50>
                </h4>
                <h3>{crew.name}</h3>
              </HeadingsCover>

              <p>{crew.bio}</p>
            </PageDetails>
            <Image src={crew.images.png} alt={crew.name} />
          </StyledTabPanel>
        ))}
        <StyledTabList>
          {crew.map((index) => (
            <StyledTab key={index}></StyledTab>
          ))}
        </StyledTabList>
      </StyledTabs>
    </MainContainer>
  );
};

export default Crew;
