import React from "react";
import { Link } from "react-router-dom";
import { Nav, Ul, Span, Li, Line, LogoContainer } from "./styles";
const Navigation = () => {
  return (
    <Nav>
      <LogoContainer>
        <Link to="/">
          <img src="/assets/shared/logo.svg" alt="logo" />
        </Link>
        <Line></Line>
      </LogoContainer>
      <Ul>
        <Li className="nav_text">
          <Link to="/">
            <Span>00</Span>Home
          </Link>
        </Li>
        <Li className="nav_text">
          <Link to="/destination">
            <Span>01</Span>Destination
          </Link>
        </Li>
        <Li className="nav_text">
          <Link to="/crew">
            <Span>02</Span>Crew
          </Link>
        </Li>
        <Li className="nav_text">
          <Link to="/technology">
            <Span>03</Span>Technology
          </Link>
        </Li>
      </Ul>
    </Nav>
  );
};

export default Navigation;
