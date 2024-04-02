import styled from "styled-components";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 4rem;
  padding: 15rem 8rem 5rem 8rem;
  box-sizing: border-box;
  @media (min-width: 768px) and (max-width: 1024px) {
    padding: 12rem 2rem;
    width: 100%;
    height: 100%;
    gap: 2rem;
  }
  @media (max-width: 768px) {
    padding: 8rem 2rem;
    align-items: center;
    gap: 2rem;
  }
`;
export const DetailsContainer = styled.div`
  max-width: 1440px;
  width: 100%;
  margin-top: 2rem;
  display: grid;
  grid-template-columns: 0.75fr 1fr;
  gap: 8rem;
  align-items: start;
  @media (min-width: 768px) and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 3rem;
    align-items: center;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    display: flex;
    gap: 3rem;
    margin-top: 2rem;
    align-items: center;
  }
`;
export const MobileHidden = styled.div`
  display: block;
  @media (min-width: 768px) and (max-width: 1024px) {
    display: none;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
export const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  @media (min-width: 768px) and (max-width: 1024px) {
    width: 50%;
  }
  @media (max-width: 768px) {
    width: 70%;
  }
`;
export const TextsContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 2rem;
  @media (min-width: 768px) and (max-width: 1024px) {
    align-items: center;
    width: 60%;
  }
  @media (max-width: 768px) {
    align-items: center;
    width: 80%;
  }
`;
export const InfoContaier = styled.div`
  display: flex;
  gap: 4rem;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
  }
`;
export const InfoText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
export const Background = styled.div`
  z-index: -1;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url("./assets/destination/background-destination-desktop.jpg")
    no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  @media (min-width: 768px) and (max-width: 1024px) {
    background: url("./assets/destination/background-destination-tablet.jpg")
      no-repeat;
    background-size: cover;
    background-position: center;
  }
  @media (max-width: 768px) {
    background: url("./assets/destination/background-destination-mobile.jpg")
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

export const Line = styled.div`
  background-color: var(--darkGrey);
  width: 100%;
  height: 1px;
`;

export const StyledTabs = styled(Tabs)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const StyledTabList = styled(TabList)`
  display: flex;
  list-style-type: none;
  padding: 0;
  margin: 0;
`;
export const StyledTab = styled(Tab)`
  color: var(--blue);
  font-size: 16px;
  letter-spacing: 2.7px;
  text-transform: uppercase;
  padding-bottom: 0.5rem;
  margin-right: 2rem;
  outline: none;
  cursor: pointer;
  &.react-tabs__tab--selected {
    color: var(--white);
    border-bottom: 3px solid var(--white);
  }
  &:hover {
    border-bottom: 3px solid rgba(255, 255, 255, 0.5);
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    margin: 0 1rem;
  }
  @media (max-width: 768px) {
    text-align: center;
    margin: 0 1rem;
    font-size: 14px;
    letter-spacing: 2.36px;
  }
`;
