import React, { useState, useEffect } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { technology } from "../../data";
import { MainContainer, Span } from "../Destination/styles";
import {
  Background,
  StyledTabList,
  StyledTab,
  StyledTabs,
  StyledTabPanel,
  Image,
  DetailsCover,
} from "./styles";
import { HeadingsCover, PageDetails } from "../Crew/styles";

const Technology = () => {
  const [activeTech, setActiveTech] = useState(technology[0]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleTabClick = (index) => {
    setActiveTech(technology[index]);
  };

  return (
    <MainContainer>
      <Background />
      <h5>
        <Span>03</Span>Space launch 101
      </h5>
      <StyledTabs onSelect={handleTabClick}>
        <div>
          <StyledTabList>
            {technology.map((tech, index) => (
              <StyledTab key={index}>{index + 1}</StyledTab>
            ))}
          </StyledTabList>
        </div>
        {technology.map((tech, index) => (
          <StyledTabPanel key={index}>
            <PageDetails>
              <HeadingsCover>
                <p className="nav_text">the terminology</p>
                <h3>{tech.name}</h3>
              </HeadingsCover>
              <p>{tech.description}</p>
            </PageDetails>
            <Image
              src={
                windowWidth > 1024
                  ? tech.images.portrait
                  : tech.images.landscape
              }
              alt={tech.name}
            />
          </StyledTabPanel>
        ))}
      </StyledTabs>
    </MainContainer>
  );
};

export default Technology;
