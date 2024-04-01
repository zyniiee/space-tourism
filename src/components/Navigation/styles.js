import styled from "styled-components";

export const Nav = styled.nav`
  padding-top: 2rem;
  padding-left: 2rem;
  width: 100%;
  display: grid;
  align-items: center;
  grid-template-columns: 0.5fr 1fr;
  position: fixed;
  z-index: 3;
  @media (min-width: 768px) and (max-width: 1024px) {
    padding-top: 0;
  }
  @media (max-width: 768px) {
    align-items: flex-start;
  }
`;
export const NavMobile = styled.div`
  display: none;
  position: fixed;
  right: 2rem;
  top: 3rem;
  z-index: 2;

  @media (max-width: 768px) {
    display: flex;
  }
`;
export const Ul = styled.ul`
  display: flex;
  gap: 3rem;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(10px);
  padding-left: 6rem;
  @supports not (backdrop-filter: blur(1px)) {
    background-color: rgba(255, 255, 255, 0.5); /* Fallback background color */
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    gap: 3rem;
    padding-left: 3rem;
  }
  @media (max-width: 768px) {
    display: ${(props) => (props.isOpen ? "flex" : "none")};
    padding: 3rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.5rem;
  }
`;

export const Span = styled.span`
  font-family: "BarlowCondensedBold";
  letter-spacing: 2.7px;
  padding-right: 0.75rem;
  @media (min-width: 768px) and (max-width: 1024px) {
    display: none;
  }
  @media (max-width: 768px) {
    display: inline;
  }
`;
export const Li = styled.li`
  padding: 2rem 0;
  transition: border-bottom 0.3s ease-in-out;
  &.active {
    border-bottom: 3px solid var(--white);
  }
  @media (max-width: 768px) {
    padding: 0.5rem 0;
  }
  &:hover {
    border-bottom: 3px solid rgba(255, 255, 255, 0.5);
  }
`;
export const Line = styled.div`
  height: 1px;
  background-color: rgba(255, 255, 255, 0.25);
  width: 80%;
  position: absolute;
  left: 6rem;
  z-index: 1;
  @media (min-width: 768px) and (max-width: 1024px) {
    display: none;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;
