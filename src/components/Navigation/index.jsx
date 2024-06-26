import React, { useState, useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Nav, Ul, Span, Li, Line, LogoContainer, NavMobile } from "./styles";

const Navigation = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <Nav ref={navRef}>
      <LogoContainer>
        <NavLink to="/space-tourism" onClick={closeMenu}>
          <img src="/space-tourism/assets/shared/logo.svg" alt="logo" />
        </NavLink>
        <Line />
      </LogoContainer>
      <NavMobile onClick={toggleMenu} isActive={isOpen}>
        <img
          src={
            isOpen
              ? "/space-tourism/assets/shared/icon-close.svg"
              : "/space-tourism/assets/shared/icon-hamburger.svg"
          }
          alt={isOpen ? "Close" : "Open"}
        />
      </NavMobile>
      <Ul isOpen={isOpen}>
        <Li
          className={`nav_text ${
            location.pathname === "/space-tourism" ? "active" : ""
          }`}
        >
          <NavLink
            exact
            to="/space-tourism"
            activeClassName="active"
            onClick={closeMenu}
          >
            <Span>00</Span>Home
          </NavLink>
        </Li>
        <Li
          className={`nav_text ${
            location.pathname === "/space-tourism/destination" ? "active" : ""
          }`}
        >
          <NavLink
            to="/space-tourism/destination"
            activeClassName="active"
            onClick={closeMenu}
          >
            <Span>01</Span>Destination
          </NavLink>
        </Li>
        <Li
          className={`nav_text ${
            location.pathname === "/space-tourism/crew" ? "active" : ""
          }`}
        >
          <NavLink
            to="/space-tourism/crew"
            activeClassName="active"
            onClick={closeMenu}
          >
            <Span>02</Span>Crew
          </NavLink>
        </Li>
        <Li
          className={`nav_text ${
            location.pathname === "/space-tourism/technology" ? "active" : ""
          }`}
        >
          <NavLink
            to="/space-tourism/technology"
            activeClassName="active"
            onClick={closeMenu}
          >
            <Span>03</Span>Technology
          </NavLink>
        </Li>
      </Ul>
    </Nav>
  );
};

export default Navigation;
