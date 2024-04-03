import styled from "styled-components";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";

export const Background = styled.div`
  z-index: -1;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url("/space-tourism/assets/crew/background-crew-desktop.jpg")
    no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  @media (min-width: 768px) and (max-width: 1024px) {
    background: url("/space-tourism/assets/crew/background-crew-tablet.jpg")
      no-repeat;
    background-size: cover;
    background-position: center;
  }
  @media (max-width: 768px) {
    background: url("/space-tourism/assets/crew/background-crew-mobile.jpg")
      no-repeat;
    background-size: cover;
    background-position: center;
  }
`;

export const Span = styled.span`
  font-weight: bold;
  opacity: 25%;
  margin-right: 1.5rem;
  @media (max-width: 768px) {
    margin-right: 1rem;
  }
`;

export const StyledTabs = styled(Tabs)`
  @media (min-width: 768px) and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media (max-width: 768px) {
    display: flex;
    flex-flow: column-reverse;
    align-items: center;
  }
`;

export const StyledTabList = styled(TabList)`
  display: flex;
  list-style-type: none;
  padding: 0;
  margin: 0;
`;
export const StyledTab = styled(Tab)`
  margin-top: 4rem;
  width: 0.8rem;
  height: 0.8rem;
  background-color: rgba(255, 255, 255, 0.17);
  border-radius: 50%;
  margin-right: 1.5rem;
  transition: background-color 0.3s ease-in-out;

  cursor: pointer;
  &.react-tabs__tab--selected {
    background-color: rgba(255, 255, 255, 1);
  }
  @media (max-width: 768px) {
    margin-bottom: 3rem;
    margin-top: 0;
  }
  &:hover {
    background-color: rgba(255, 255, 255, 0.5);
  }
`;
export const StyledTabPanel = styled(TabPanel)`
  @media (min-width: 768px) and (max-width: 1024px) {
    display: flex;
    justify-content: center;
  }
  @media (max-width: 768px) {
    display: flex;
    flex-flow: column-reverse;
    justify-content: center;
    align-items: center;
  }
`;
export const Opacity50 = styled.div`
  opacity: 50%;
`;
export const Image = styled.img`
  width: 30%;
  position: fixed;
  bottom: 0;
  right: 8rem;
  @media (min-width: 768px) and (max-width: 1024px) {
    width: 35%;
    left: 50%;
    transform: translate(-50%, 0%);
  }
  @media (max-width: 768px) {
    width: 45%;
    position: initial;
    border-bottom: 1px solid #383b4b;
  }
`;
export const PageDetails = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  @media (min-width: 768px) and (max-width: 1024px) {
    width: 70%;
    margin-top: 3rem;
  }
  @media (max-width: 768px) {
    width: 100%;
    margin-top: 3rem;
  }
`;
export const HeadingsCover = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
