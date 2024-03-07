import { useState } from "react";
import hmbMenu from "../assets/hmb-menu.png";
import Button from "./Button";
import closeIcon from "../assets/close.png";

export default function NavMenu() {
  const [openSubMenu, setOpenSubMenu] = useState(false);
  function handleOpenSubMenu() {
    setOpenSubMenu((cs) => !cs);
  }
  return (
    <>
      <div className="nav-menu">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#about">About Me</a>
          </li>
          <li>
            <a href="#carousel">Technologies</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#footer">Contact</a>
          </li>
        </ul>
      </div>
      <Button onClick={handleOpenSubMenu} className={"hmb-menu"}>
        <img src={hmbMenu} alt="Hamburger menu" />
      </Button>
      {openSubMenu ? (
        <div className="sub-menu">
          <ul>
            <li>Home</li>
            <li>About Me</li>
            <li>Technologies</li>
            <li>Contact</li>
          </ul>
          <Button onClick={handleOpenSubMenu} className={"hmb-close hmb-menu"}>
            <img src={closeIcon} alt="close-icon" />
          </Button>
        </div>
      ) : null}
    </>
  );
}
