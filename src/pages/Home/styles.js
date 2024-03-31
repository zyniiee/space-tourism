import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  padding: 4rem;
  align-items: flex-end;
  box-sizing: border-box;
  @media (min-width: 768px) and (max-width: 1024px) {
    width: 100%;
    height: 100%;
  }
  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
    padding: 2rem;
  }
`;

export const Background = styled.div`
  z-index: -1;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url("/assets/home/background-home-desktop.jpg") no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed; /* Make the background fixed */
  @media (min-width: 768px) and (max-width: 1024px) {
    background: url("/assets/home/background-home-tablet.jpg") no-repeat;
    background-size: cover;
    background-position: center;
  }
  @media (max-width: 768px) {
    background: url("/assets/home/background-home-mobile.jpg") no-repeat;
    background-size: cover;
    background-position: center;
  }
`;

export const Details = styled.div`
  width: 100%;
  max-width: calc(100% - 4rem);
  display: grid;
  grid-template-columns: 0.5fr 1fr;
  @media (min-width: 768px) and (max-width: 1024px) {
    max-width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media (max-width: 768px) {
    max-width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const TextsCover = styled.div`
  @media (min-width: 768px) and (max-width: 1024px) {
    padding: 6rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media (max-width: 768px) {
    padding: 4rem 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Button = styled.div`
  font-family: "Bellefair";
  text-transform: uppercase;
  font-size: 32px;
  letter-spacing: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  background-color: var(--white);
  color: var(--darkBlue);
  width: 15rem;
  height: 15rem;
  align-self: flex-end;
  justify-self: flex-end;
  @media (min-width: 768px) and (max-width: 1024px) {
    align-self: center;
    justify-self: center;
  }
  @media (max-width: 768px) {
    align-self: center;
    justify-self: center;
    font-size: 20px;
    width: 10rem;
    height: 10rem;
  }
`;
