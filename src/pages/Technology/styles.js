import styled from "styled-components";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";

export const Background = styled.div`
  z-index: -1;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url("./assets/technology/background-technology-desktop.jpg")
    no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  @media (min-width: 768px) and (max-width: 1024px) {
    background: url("./assets/technology/background-technology-tablet.jpg")
      no-repeat;
    background-size: cover;
    background-position: center;
  }
  @media (max-width: 768px) {
    background: url("./assets/technology/background-technology-mobile.jpg")
      no-repeat;
    background-size: cover;
    background-position: center;
  }
`;

export const StyledTabs = styled(Tabs)`
  max-width: 1440px;
  display: flex;
  @media (min-width: 768px) and (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const StyledTabList = styled(TabList)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  @media (min-width: 768px) and (max-width: 1024px) {
    flex-direction: row;
  }
  @media (max-width: 768px) {
    flex-direction: row;
  }
`;

export const StyledTab = styled(Tab)`
  margin-right: 4rem;
  font-size: 32px;
  font-family: "Bellefair";
  letter-spacing: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  border: solid 1px rgba(255, 255, 255, 0.25);
  transition: border 0.3s ease-in-out;
  cursor: pointer;
  &.react-tabs__tab--selected {
    background-color: var(--white);
    color: var(--darkBlue);
  }
  &:hover {
    border: solid 1px rgba(255, 255, 255, 1);
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 24px;
    letter-spacing: 1.5px;
    width: 3rem;
    height: 3rem;
    margin-right: initial;
    margin-bottom: 2rem;
  }
  @media (max-width: 768px) {
    font-size: 16px;
    letter-spacing: 1px;
    margin-right: initial;
    margin-bottom: 2rem;
    width: 3rem;
    height: 3rem;
  }
`;

export const StyledTabPanel = styled(TabPanel)`
  display: flex;
  gap: 4rem;
  @media (min-width: 768px) and (max-width: 1024px) {
    align-items: center;
    flex-flow: column-reverse;
    gap: 2rem;
  }
  @media (max-width: 768px) {
    align-items: center;
    flex-flow: column-reverse;
    gap: 2rem;
  }
`;
export const Image = styled.img`
  top: 25%;
  width: 30%;
  position: absolute;
  right: 0;
  @media (min-width: 768px) and (max-width: 1024px) {
    position: initial;
    width: 100%;
  }
  @media (max-width: 768px) {
    position: initial;
    width: 100%;
  }
`;
