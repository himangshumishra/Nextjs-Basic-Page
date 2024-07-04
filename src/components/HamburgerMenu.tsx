import React from "react";
import { GhostNavbar } from "react-hamburger-menus";
import "react-hamburger-menus/dist/style.css";

const HamburgerMenu = () => {
  return (
    <>
      <GhostNavbar>
        <ul>
          <li>ABOUT</li>
          <li>PROJECTS</li>
          <li>ELEMENTS</li>
          <li>CONTACT</li>
        </ul>
      </GhostNavbar>
    </>
  );
};

export default HamburgerMenu;